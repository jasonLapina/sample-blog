import { Box, HStack, Icon, Text } from "@chakra-ui/react";
import { HiChatBubbleBottomCenterText } from "react-icons/hi2";

function NewsText({ item }) {
  const { title, summary } = item;

  const cutSummary = summary.slice(0, 90);

  return (
    <Box borderBottom='solid 2px #D1D1D1' pb='10px'>
      <HStack cursor='pointer'>
        <Icon as={HiChatBubbleBottomCenterText} />
        <Text fontWeight='600' textDecor='underline'>
          {title}
        </Text>
      </HStack>
      <Text color='gray'>
        {summary.length < 90 ? summary : `${cutSummary} ...`}
      </Text>
    </Box>
  );
}

export default NewsText;
