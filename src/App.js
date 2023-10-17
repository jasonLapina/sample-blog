import { Box, VStack } from "@chakra-ui/react";
import "./App.css";
import MainTop from "./components/MainTop";
import MostPlayed from "./components/MostPlayed";
import Crypto from "./components/Crypto";
import Header from "./components/UI/Header";

function App() {
  return (
    <>
      <Header />
      <Box maxW='1200px' mx='auto' py='80px'>
        <VStack align='normal' gap='70px'>
          <MainTop />
          <MostPlayed />
          <Crypto />
        </VStack>
      </Box>
    </>
  );
}

export default App;
