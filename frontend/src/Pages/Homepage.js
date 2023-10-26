import React, { useEffect } from "react";
import {
  Text,
  Box,
  Container,
  Center,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const Homepage = () => {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);
  return (
    <Container maxW="xl" centerContent>
      <Box
       display="flex"
        justifyContent="center"
        p={3}
        // bg="white"
        w="100%"
        m="40px 0 15px 0"
        // borderRadius="1rem"
        // borderWidth="1px"
        background="transparent"
      >
        <Text fontSize="5xl" fontFamily="Concert One" color="black">
          <Center>Crayon-Convo</Center>
          <Center><Text fontSize="sm">The perfect chat webApp</Text></Center>
        </Text>
      </Box>
      <Box color="black" w="100%" p={4} borderRadius="3xl" borderWidth="1px" bgOpacity="5%" background="white">
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab color="black" fontSize="1.4rem">Login</Tab>
            <Tab color="black" fontSize="1.4rem">Sign Up</Tab>
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
  );
};

export default Homepage;
