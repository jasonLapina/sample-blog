import { Box, VStack } from "@chakra-ui/react";
import "./App.css";
import MainTop from "./components/MainTop";
import MostPlayed from "./components/MostPlayed";
import Crypto from "./components/Crypto";
import Header from "./components/UI/Header";
import FAQs from "./components/FAQs";

function App() {
  return (
    <>
      <Header />
      <Box mb='80px' maxW='1200px' mx='auto' p='12px'>
        <VStack align='normal' gap='70px'>
          <MainTop />
          <MostPlayed />
          <Crypto />
          <FAQs />
        </VStack>
      </Box>
    </>
  );
}

export default App;
