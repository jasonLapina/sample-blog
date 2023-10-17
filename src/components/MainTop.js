import { Box, Grid } from "@chakra-ui/react";
import axios from "axios";
import { useQuery } from "react-query";

import NewsItem from "./News/NewsItem";
import NewsList from "./News/NewsList";

function MainTop() {
  const getNews = async () => {
    const res = await axios.get(
      "https://demo.uats.site/api/uat-articles?pagination[pageSize]=6&populate=*"
    );
    return res.data.data;
  };

  const { data, isLoading } = useQuery(["news", "MainTop"], getNews);
  if (isLoading) return <div />;

  return (
    <Box>
      <NewsList news={data} minItemW='350' />
    </Box>
  );
}

export default MainTop;
