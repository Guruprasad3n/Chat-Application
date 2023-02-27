import {
  Button,
  BeatLoader,
  FormControl,
  FormLabel,
  Input,
  VStack,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useToast,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import axios from 'axios'
import {useNavigate} from "react-router-dom"
// BsEyeFill
// BsEyeSlashFill
function Signup() {
  const [show, setShow] = useState(false);
  const [conShow, setConShow] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassowrd] = useState("");
  const [avatar, setAvatar] = useState("");
  const [phone, setPhone] = useState("");
  // for Image uploading to loading false
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate()

  const handleClick = () => {
    setShow(!show);
  };
  const handleConClick = () => {
    setConShow(!conShow);
  };

  const postDetails = (avatar) => {
    setLoading(true);
    if (avatar == undefined) {
      toast({
        title: "Please Select an Image.",
        description: "We've created your account for you.",
        status: "warning",
        duration: 4000,
        isClosable: true,
      });
      return;
    }
    // https://api.cloudinary.com/v1_1/dreyat4ae
    if (avatar.type === "image/jpeg" || avatar.type === "image/png") {
      const data = new FormData();
      data.append("file", avatar);
      data.append("upload_preset", "Guru'S-Chat");
      data.append("cloud_name", "dreyat4ae");
      fetch(`https://api.cloudinary.com/v1_1/dreyat4ae/image/upload`, {
        method: "POST",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setAvatar(data.url.toString());
          console.log(data.url.toString());
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      toast({
        title: "Please Select an Image.",
        description: "We've created your account for you.",
        status: "warning",
        duration: 4000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  const handleSignup =async () => {
setLoading(true);
if(!name || !email || !password || !confirmPassword || !phone){
  toast({
    title: "Please Fill All The Details.",
    description: "If You Not Fill The Details You Can Not Go Forward.",
    status: "warning",
    duration: 4000,
    isClosable: true,
    position: "bottom-left",
  });
  setLoading(false);
  return
}
if(password !== confirmPassword){
  toast({
    title: "Password Dose Not Match.",
    description: "Confirm Password Same as Password.",
    status: "warning",
    duration: 4000,
    isClosable: true,
    position: "bottom-left",
  });
  return
}
try{
const config ={
  headers:{
    "Content-Type":"application/json"
  },
}
const {data} = await axios.post(`http://localhost:8000/api/user/`,{
  name:name, email:email, password:password, pic:avatar, phone:phone
}, config)
toast({
  title: "Registration Successful",
  status: "success",
  duration: 4000,
  isClosable: true,
  position: "bottom-left",
});
localStorage.setItem("UserInfo", JSON.stringify(data))
setLoading(false)
navigate("/chat")
}catch(e){
  toast({
    title: "Error Occured",
    description: e.response.data.message,
    status: "error",
    duration: 4000,
    isClosable: true,
    position: "bottom-left",
  });
  setLoading(false)
}



  };

  return (
    <div>
      <VStack>
        <FormControl id="name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder={"Name"}
          />
        </FormControl>

        <FormControl id="email" isRequired>
          <FormLabel>Email Address</FormLabel>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder={"Email"}
          />
        </FormControl>

       <Flex gap={"2"}>
       <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={show ? "text" : "password"}
              placeholder={"Password"}
            />
            <InputRightElement w={"4.5rem"}>
              <Button onClick={handleClick} h={"1.75rem"} size={"sm"}>
                {show ? <BsEyeSlashFill /> : <BsEyeFill />}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <FormControl id="confirm-password" isRequired>
          <FormLabel>Confirm Password</FormLabel>
          <InputGroup>
            <Input
              value={confirmPassword}
              onChange={(e) => setConfirmPassowrd(e.target.value)}
              type={conShow ? "text" : "password"}
              placeholder={"Confirm Password"}
            />

            <InputRightElement w={"4.5rem"}>
              <Button onClick={handleConClick} h={"1.75rem"} size={"sm"}>
                {conShow ? <BsEyeSlashFill /> : <BsEyeFill />}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
       </Flex>

        <FormControl id="phone" isRequired>
          <FormLabel>Phone</FormLabel>
          <Input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
            placeholder="Phone number"
          />
        </FormControl>

        <FormControl id="pic">
          <FormLabel>Image</FormLabel>
          <Input
            display={"flex"}
            alignItems={"center"}
            onChange={(e) => postDetails(e.target.files[0])}
            type="file"
            accept="image/"
          />
        </FormControl>

        <Button
          onClick={handleSignup}
          colorScheme="yellow"
          display={"block"}
          m="auto"
          mt={"10px"}
          w="50%"
          isLoading={loading}
        >
          Signup
        </Button>
      </VStack>
    </div>
  );
}
export default Signup;
