import {
  Box,
  HStack,
  Icon,
  VStack,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useMediaQuery,
} from "@chakra-ui/react";
import NewsHeading from "./UI/NewsHeading";
import { useQuery } from "react-query";
import axios from "axios";
import { HiChatBubbleBottomCenterText } from "react-icons/hi2";

function FAQs() {
  const [isMD] = useMediaQuery("(min-width: 768px)");
  const fetchFaqs = async () => {
    const res = await axios.get(
      "https://demo.uats.site/api/uat-articles?pagination[pageSize]=7"
    );
    return res.data.data;
  };
  const { data, isLoading } = useQuery(["news", "faqs"], fetchFaqs);
  if (isLoading) return <div />;

  return (
    <Box>
      <NewsHeading />
      <VStack mt='40px' gap='20px' alignItems='normal'>
        {isMD &&
          data.map((item) => (
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
        {!isMD &&
          data.map((item) => (
            <Accordion allowToggle key={item.id}>
              <AccordionItem borderTop='none' borderBottom='solid 2px #d1d1d1'>
                <h2>
                  <AccordionButton fontWeight='bold'>
                    <Box as='span' flex='1' textAlign='left'>
                      {item.title}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>{item.summary}</AccordionPanel>
              </AccordionItem>
            </Accordion>
          ))}
      </VStack>
    </Box>
  );
}

export default FAQs;
