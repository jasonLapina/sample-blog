import { Grid } from "@chakra-ui/react";
import NewsItem from "./NewsItem";
function NewsList(props) {
  const { news, minItemW } = props;
  return (
    <Grid
      gap='30px'
      gridTemplateColumns={`repeat(auto-fit,minmax(${minItemW}px, 1fr))`}
      {...props}
    >
      {news.map((item) => (
        <NewsItem data={item} key={item.title} />
      ))}
    </Grid>
  );
}

export default NewsList;
