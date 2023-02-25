import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
function Authentication() {
  const colors = useColorModeValue(
    ["red.50", "teal.50", "blue.50"],
    ["red.900", "teal.900", "blue.900"]
  );
  const [tabIndex, setTabIndex] = useState(0);
  const bg = colors[tabIndex];

  return (
    <Container
      maxWidth={"xl"}
      centerContent
      display={"flex"}
      justifyContent="center"
      alignItems={"center"}
    >
      <Container>
        <Box
          bgColor={"orange"}
          color="white"
          display="flex"
          justifyContent={"center"}
          py="1"
          px="3"
          w={"100%"}
          borderRadius="md"
          borderWidth={"1px"}
        >
          <Text fontSize={"3xl"}>Guru's Chat App</Text>
        </Box>
        <Box
          w={"100%"}
          borderRadius="md"
          fontSize={"3xl"}
          borderWidth={"1px"}
          padding="4"
          mt={"1em"}
        >
          <Tabs
            variant="enclosed"
            onChange={(index) => setTabIndex(index)}
            bg={bg}
            p="4"
            borderRadius={"md"}
          >
            <TabList mb="1em">
              <Tab w={"50%"} fontWeight="bold">
                Login
              </Tab>
              <Tab w={"50%"} fontWeight="bold">
                Signup
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Login />
              </TabPanel>
              <TabPanel>
                <Signup />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </Container>
  );
}
export default Authentication;
