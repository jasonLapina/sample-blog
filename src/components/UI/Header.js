import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import { Box, HStack, useMediaQuery } from "@chakra-ui/react";
function Header() {
  const [isMD] = useMediaQuery("(min-width: 768px)");
  return (
    <Box
      pos='sticky'
      top='0'
      backdropFilter='auto'
      backdropBlur='8px'
      py='16px'
      w='100%'
      borderBottom='solid 2px #d1d1d1'
      zIndex={99}
      mb='20px'
    >
      <HStack
        maxW='1200px'
        mx='auto'
        justifyContent='space-between'
        fontWeight='600'
        px='16px'
        borderRadius='0 0 10px 10px'
      >
        <Box fontSize='20px' fontWeight='semibold' lineHeight='30px'>
          LOGO
        </Box>
        {isMD && (
          <Box fontSize='16px' lineHeight='24px'>
            Home <SearchIcon ml='16px' />
          </Box>
        )}
        {!isMD && (
          <Box fontSize='24px' lineHeight='24px'>
            <HamburgerIcon />
          </Box>
        )}
      </HStack>
    </Box>
  );
}

export default Header;
