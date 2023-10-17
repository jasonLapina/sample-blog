import { Box, Grid, VStack, Text } from "@chakra-ui/react";
import { useInfiniteQuery } from "react-query";
import axios from "axios";
import NewsItem from "./News/NewsItem";
import NewsHeading from "./UI/NewsHeading";
import NewsList from "./News/NewsList";
function MainTop() {
  const initURL =
    "https://demo.uats.site/api/uat-articles?populate[0]=thumbnail&pagination[pageSize]=12";
  const fetchURL = async (url) => {
    const res = await axios.get(url);
    return res.data;
  };

  const { data, isLoading, hasNextPage, fetchNextPage } = useInfiniteQuery(
    ["news", "mainTop"],
    ({ pageParam = initURL }) =>
      fetchURL(pageParam, {
        getNextPageParam: (lastPage) => {
          const nextPage = lastPage.meta.pagination.page;
          return `https://demo.uats.site/api/uat-articles?populate[0]=thumbnail&pagination[pageSize]=12&pagination[page]=${nextPage}`;
        },
      })
  );

  if (isLoading) return <div />;

  const news = data?.pages.flatMap((arr) => arr.data);
  return (
    <Grid gridTemplateColumns='6.5fr 3.5fr' columnGap='40px'>
      <Box>
        <NewsHeading />
        <NewsList news={news} minItemW='230' />
      </Box>
      <Box>
        <NewsHeading />
        <VStack>
          {news.reverse().map((item) => (
            <Text key={item.slug}>{item.summary}</Text>
          ))}
        </VStack>
      </Box>
    </Grid>
  );
}

export default MainTop;
