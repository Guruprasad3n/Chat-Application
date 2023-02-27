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
  useSafeLayoutEffect,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

function Login() {
  const [show, setShow] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const [loading, setLoading] = useState(false)
  const toast = useToast();
  const navigate = useNavigate()
  const handleClick = () => {
    setShow(!show);
  };

  // const postDetails = (avatars) => {};

  const handleLogin = async () => {
setLoading(true);
if(!email || !password){
  toast({
    title: "Please Fill The Login Credintials",
    status: "warning",
    duration: 4000,
    isClosable: true,
    position: "bottom-left",
  });
  setLoading(false)
  return
}


// console.log(email, password)
try{
const config ={
  headers:{
    "Content-Type":"application/json"
  },

}
const {data} = await axios.post(`http://localhost:8000/api/user/login`,{
  email:email, password:password
}, config)
toast({
  title: "Login Successful",
  status: "success",
  duration: 4000,
  isClosable: true,
  position: "bottom-left",
});
localStorage.setItem("userInfo", JSON.stringify(data))
setLoading(false);
navigate("/chat")
return
}catch(e){
  toast({
    title: "Error Occured",
    description:e.response.data.message,
    status: "error",
    duration: 4000,
    isClosable: true,
    position: "bottom-left",
  });
  setLoading(false);
}



  };

  return (
    <VStack>
      <FormControl id="email" isRequired>
        <FormLabel>Email Address</FormLabel>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder={"Email"}
        />
      </FormControl>

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

      <Button
        onClick={handleLogin}
        colorScheme="yellow"
        display={"block"}
        m="auto"
        mt={"10px"}
        w="100%"
      >
        Login
      </Button>
      <Button
        onClick={() => {
          setEmail("guest@gmail.com");
          setPassword("12345");
        }}
        variant={"solid"}
        colorScheme="red"
        display={"block"}
        m="auto"
        mt={"10px"}
        w="70%"
        isLoading={loading}
      >
        Guest Login
      </Button>
    </VStack>
  );
}
export default Login;
