import { Box, Grid, Skeleton, Text, VStack } from "@chakra-ui/react";
import NewsHeading from "./UI/NewsHeading";
function Crypto() {
  const sideNewsArr = Array.from({ length: 12 });

  return (
    <Grid gridTemplateColumns='6.6fr 3.4fr' gap='40px'>
      <Box>
        <NewsHeading>
          <Text
            mt='10px'
            pb='15px'
            fontSize='16px'
            lineHeight='24px'
            color='#626262'
            w='680px'
          >
            Competition is fierce in the online slots industry, with many big
            developers vying for players’ attention. Learn more about the top
            software providers below.
          </Text>
        </NewsHeading>
      </Box>
      <Box>
        <NewsHeading />
        <VStack maxH='720px' overflowY='scroll'>
          {sideNewsArr.map((_, i) => (
            <Grid
              columnGap='20px'
              gridTemplateColumns='3fr 7fr'
              key={i}
              borderBottom='solid 1px gray'
              pb='10px'
              pt='20px'
            >
              <Box
                cursor='pointer'
                w='103px'
                h='56px'
                borderRadius='10px'
                bgColor='gray.300'
              />
              <Box>
                <Text color='#777777' fontSize='10px'>
                  June 01, 2023
                </Text>
                <Text
                  cursor='pointer'
                  fontWeight='600'
                  textDecor='underline'
                  fontSize='12px'
                >
                  Big Bass Splash Megaway
                </Text>
                <Text color='#777777' fontSize='10px'>
                  Game Provider
                </Text>
              </Box>
            </Grid>
          ))}
        </VStack>
      </Box>
    </Grid>
  );
}

export default Crypto;
