import {
  Box,
  Grid,
  VStack,
  Button,
  Center,
  useMediaQuery,
} from "@chakra-ui/react";
import { useInfiniteQuery } from "react-query";
import axios from "axios";

import NewsHeading from "./UI/NewsHeading";
import NewsList from "./News/NewsList";
import NewsText from "./News/NewsText";
import { useEffect, useState } from "react";

function MostPlayed() {
  const [isMD] = useMediaQuery("(min-width: 768px)");
  const [pageSize, setPageSize] = useState(12);

  useEffect(() => {
    if (!isMD) setPageSize(3);
    else setPageSize(12);
  }, [isMD]);

  const initURL = `https://demo.uats.site/api/uat-articles?populate[0]=thumbnail&pagination[pageSize]=${pageSize}&pagination[page]=1`;
  const fetchURL = async (url) => {
    const res = await axios.get(url);
    return res.data;
  };

  const { data, isLoading, hasNextPage, fetchNextPage } = useInfiniteQuery(
    ["news", "mostPlayed"],
    ({ pageParam = initURL }) => fetchURL(pageParam),
    {
      getNextPageParam: (lastPage) => {
        const nextPage = lastPage.meta.pagination.page + 1;
        if (
          lastPage.meta.pagination.page * lastPage.meta.pagination.pageSize >
          lastPage.meta.pagination.total
        )
          return null;
        else
          return `https://demo.uats.site/api/uat-articles?pagination[pageSize]=${pageSize}&pagination[page]=${nextPage}&populate[0]=thumbnail`;
      },
    }
  );

  if (isLoading) return <div />;
  const news = data.pages.flatMap((arr) => arr.data).reverse();

  return (
    <Grid
      gridTemplateColumns={{ base: "1fr", md: "6.6fr 3.4fr" }}
      columnGap='40px'
    >
      <Box>
        <NewsHeading />
        <NewsList
          news={news}
          gridTemplateColumns={{
            base: "",
            md: "repeat(auto-fit,minmax(225px, 1fr))",
          }}
        />
        {hasNextPage && (
          <Center mt='15px'>
            <Button
              variant='unstyled'
              fontWeight='600'
              color='#CA2020'
              onClick={() => fetchNextPage()}
            >
              Load more news
            </Button>
          </Center>
        )}
      </Box>
      <Box>
        <NewsHeading />
        <VStack gap='20px'>
          {news
            .reverse()
            .slice(0, 6)
            .map((item) => (
              <NewsText item={item} key={item.id} />
            ))}
        </VStack>
      </Box>
    </Grid>
  );
}

export default MostPlayed;
