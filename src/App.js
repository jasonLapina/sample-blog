import { Box, VStack } from "@chakra-ui/react";
import "./App.css";
import MainTop from "./components/MainTop";
import MostPlayed from "./components/MostPlayed";

function App() {
  return (
    <Box maxW='1200px' mx='auto' py='80px'>
      <VStack align='normal' gap='70px'>
        <MainTop />
        <MostPlayed />
      </VStack>
    </Box>
  );
}

export default App;
