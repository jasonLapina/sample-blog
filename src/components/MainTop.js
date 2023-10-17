import { Box, Grid, VStack } from "@chakra-ui/react";
function MainTop() {
  return (
    <Box>
      <Grid gridTemplateColumns='6fr 4fr'>
        <Grid>{/* ARRAY OF NEWS AGAIN */}</Grid>
        <VStack>{/* LIST OF NEWS */}</VStack>
      </Grid>
    </Box>
  );
}

export default MainTop;
