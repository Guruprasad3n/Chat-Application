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
} from "@chakra-ui/react";
import { useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
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

  const handleClick = () => {
    setShow(!show);
  };
  const handleConClick = () => {
    setConShow(!conShow);
  };

  const postDetails = (avatars) => {};

  const handleSignup = () => {};

  return (
    <div>
      <VStack>
        <FormControl id="name" isRequired>
          <FormLabel isRequired>Name</FormLabel>
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

        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={show ? "text" : "password"}
              rightIcon={<BsEyeSlashFill />}
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
              rightIcon={<BsEyeSlashFill />}
              placeholder={"Confirm Password"}
            />

            <InputRightElement w={"4.5rem"}>
              <Button onClick={handleConClick} h={"1.75rem"} size={"sm"}>
                {conShow ? <BsEyeSlashFill /> : <BsEyeFill />}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <FormControl  id="phone" isRequired>
          <FormLabel>Phone</FormLabel>
          <Input type="tel" placeholder="Phone number" />
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
        >
          Signup
        </Button>
      </VStack>
    </div>
  );
}
export default Signup;
