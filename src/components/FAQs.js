import { Box, HStack, Icon, VStack, Text } from "@chakra-ui/react";
import NewsHeading from "./UI/NewsHeading";
import { useQuery } from "react-query";
import axios from "axios";
import { HiChatBubbleBottomCenterText } from "react-icons/hi2";

function FAQs() {
  const fetchFaqs = async () => {
    const res = await axios.get(
      "https://demo.uats.site/api/uat-articles?pagination[pageSize]=7"
    );
    return res.data.data;
  };
  const { data, isLoading } = useQuery(["news", "faqs"], fetchFaqs);
  if (isLoading) return <div />;
  console.log(data);
  return (
    <Box>
      <NewsHeading />
      <VStack mt='40px' gap='20px' alignItems='normal'>
        {data.map((item) => (
          <Box borderBottom='1px solid #D1D1D1' key={item.id} pb='15px'>
            <HStack mb='4px'>
              <Icon as={HiChatBubbleBottomCenterText} />
              <Text fontSize='18px' fontWeight='600'>
                {item.title}
              </Text>
            </HStack>
            <Text color='gray' fontSize='16px'>
              {item.summary}
            </Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
}

export default FAQs;
