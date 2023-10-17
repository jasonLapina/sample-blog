import { Heading } from "@chakra-ui/react";
function NewsHeading({ children }) {
  return (
    <Heading
      mb='20px'
      fontSize='24px'
      lineHeight='36px'
      borderBottom='3px solid black'
      paddingBottom='15px'
    >
      News {children}
    </Heading>
  );
}

export default NewsHeading;
