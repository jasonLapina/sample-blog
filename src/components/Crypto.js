import {
  Box,
  Button,
  Center,
  Grid,
  HStack,
  Image,
  Skeleton,
  Text,
  VStack,
} from "@chakra-ui/react";
import NewsHeading from "./UI/NewsHeading";
function Crypto() {
  const sideNewsArr = Array.from({ length: 12 });

  const mainNews = [
    {
      logo: "/microgaming.png",
    },
    {
      logo: "/netent.png",
    },
    {
      logo: "/playtech.png",
    },
  ];

  return (
    <Grid gridTemplateColumns={{ base: "1fr", md: "6.6fr 3.4fr" }} gap='40px'>
      <Box>
        <NewsHeading>
          <Text
            mt='10px'
            pb='15px'
            fontSize='16px'
            lineHeight='24px'
            color='#626262'
            // w='680px'
          >
            Competition is fierce in the online slots industry, with many big
            developers vying for players’ attention. Learn more about the top
            software providers below.
          </Text>
        </NewsHeading>
        <HStack
          flexDir={{ base: "column", md: "row" }}
          justify='center'
          gap='40px'
          alignItems='start'
        >
          {mainNews.map((item) => (
            <Box key={item.logo}>
              <Image mx='auto' aspectRatio='1/1' h='240px' src={item.logo} />
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
                iste rerum. Natus suscipit blanditiis numquam similique ducimus
                corporis quibusdam possimus eos. Dolores, iste vitae optio
                cupiditate distinctio natus doloribus. Dicta.
              </Text>
              <Center>
                <Button
                  borderRadius='5px'
                  p='15px'
                  bgColor='#CA2020'
                  color='white'
                  mt='10px'
                  w='100%'
                  _hover={{
                    opacity: 0.8,
                  }}
                >
                  Read More
                </Button>
              </Center>
            </Box>
          ))}
        </HStack>
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
