import { Box, Skeleton, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function NewsItem(props) {
  const { data } = props;
  const [loadSkeleton, setLoadSkeleton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadSkeleton(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box {...props} cursor='pointer'>
      <Box overflow='hidden' pos='relative' borderRadius='10px' mb='10px'>
        <Skeleton isLoaded={loadSkeleton}>
          <Image src={data.thumbnail.url} />
          <Text
            pos='absolute'
            borderRadius='0 10px 0 0'
            py='5px'
            px='15px'
            bgColor='#CA2020'
            color='#F2F2F2'
            bottom='0'
            left='-8px'
            fontWeight='600'
          >
            {data.title.includes("Game") ? "Games" : "Crypto Currency"}
          </Text>
        </Skeleton>
      </Box>
      <Skeleton isLoaded={loadSkeleton}>
        <Text fontWeight='600'>{data.title}</Text>
      </Skeleton>
    </Box>
  );
}

export default NewsItem;
