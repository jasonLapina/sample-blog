import { Box } from "@chakra-ui/react";
import "./App.css";
import Hero from "./components/Hero";

function App() {
  return (
    <Box maxW='1200px' mx='auto' py='80px'>
      <Hero />
    </Box>
  );
}

export default App;
