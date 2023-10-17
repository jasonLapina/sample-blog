import { Box, Grid, Image, Skeleton, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import NewsItem from "./News/NewsItem";
function Hero() {
  const getNews = async () => {
    const res = await axios.get(
      "https://demo.uats.site/api/uat-articles?pagination[pageSize]=6&populate=*"
    );
    return res.data.data;
  };

  const { data, isLoading } = useQuery("news", getNews);
  if (isLoading) return <div />;

  return (
    <Box>
      <Grid
        justifyContent='center'
        justifyItems='center'
        gridTemplateColumns='repeat(auto-fit,minmax(390px,1fr))'
        columnGap='10px'
        rowGap='20px'
      >
        {data.map((item) => (
          <NewsItem data={item} />
        ))}
      </Grid>
    </Box>
  );
}

export default Hero;
