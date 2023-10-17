import { SearchIcon } from "@chakra-ui/icons";
import { Box, HStack } from "@chakra-ui/react";
function Header() {
  return (
    <HStack
      pos='sticky'
      top='0'
      // bgColor='blackAlpha.200'
      backdropFilter='auto'
      backdropBlur='8px'
      h='68.55px'
      w='100%'
      maxW='1200px'
      mx='auto'
      zIndex={99}
      justifyContent='space-between'
      fontWeight='600'
      px='16px'
      borderRadius='0 0 10px 10px'
    >
      <Box fontSize='20px' fontWeight='600' lineHeight='30px'>
        LOGO
      </Box>
      <Box fontSize='16px' lineHeight='24px'>
        Home <SearchIcon ml='16px' />
      </Box>
    </HStack>
  );
}

export default Header;
