import { Box, HStack, Icon, Text } from "@chakra-ui/react";
import { HiChatBubbleBottomCenterText } from "react-icons/hi2";

function NewsText({ item }) {
  const { title, summary } = item;

  return (
    <Box borderBottom='solid 2px gray' pb='10px'>
      <HStack cursor='pointer'>
        <Icon as={HiChatBubbleBottomCenterText} />
        <Text fontWeight='600' textDecor='underline'>
          {title}
        </Text>
      </HStack>
      <Text color='gray'>{summary}</Text>
    </Box>
  );
}

export default NewsText;
