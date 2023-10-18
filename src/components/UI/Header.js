import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  HStack,
  useMediaQuery,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  InputGroup,
  Input,
  InputRightElement,
} from "@chakra-ui/react";
function Header() {
  const [isMD] = useMediaQuery("(min-width: 768px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
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
        <Box
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          fontSize='20px'
          fontWeight='semibold'
          lineHeight='30px'
          cursor='pointer'
        >
          LOGO
        </Box>
        {isMD && (
          <Box fontSize='16px' lineHeight='24px'>
            <Button
              variant='unstyled'
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Home
            </Button>
            <SearchIcon ml='16px' />
          </Box>
        )}
        {!isMD && (
          <Box fontSize='24px' lineHeight='24px'>
            <HamburgerIcon cursor='pointer' onClick={onOpen} />
            <Drawer isOpen={isOpen} onClose={onClose} placement='right'>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>
                  <Button
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      onClose();
                    }}
                    variant='unstyled'
                    fontSize='16px'
                    lineHeight='24px'
                  >
                    Home
                  </Button>
                  <InputGroup mt='24px'>
                    <Input type='tel' placeholder='Search' />
                    <InputRightElement children={<SearchIcon />} />
                  </InputGroup>
                </DrawerHeader>
              </DrawerContent>
            </Drawer>
          </Box>
        )}
      </HStack>
    </Box>
  );
}

export default Header;
