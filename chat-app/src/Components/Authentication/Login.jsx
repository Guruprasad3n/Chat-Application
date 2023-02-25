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

function Login() {
  const [show, setShow] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    setShow(!show);
  };

  const postDetails = (avatars) => {};

  const handleSignup = () => {};

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

      <Button
        onClick={handleSignup}
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
      >
        Guest Login
      </Button>
    </VStack>
  );
}
export default Login;
