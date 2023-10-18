import { Box, useMediaQuery } from "@chakra-ui/react";
import axios from "axios";
import { useQuery } from "react-query";

import NewsList from "./News/NewsList";

function MainTop() {
  const [isMD] = useMediaQuery("(min-width: 768px)");

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
      <NewsList
        news={isMD ? data : data.slice(0, 3)}
        gridTemplateColumns='repeat(auto-fit,minmax(350px, 1fr))'
      />
    </Box>
  );
}

export default MainTop;
