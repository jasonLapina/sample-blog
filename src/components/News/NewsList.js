import { Grid } from "@chakra-ui/react";
import NewsItem from "./NewsItem";
function NewsList(props) {
  const { news } = props;
  return (
    <Grid gap='30px' {...props}>
      {news.map((item, i) => (
        <NewsItem data={item} key={item.id} />
      ))}
    </Grid>
  );
}

export default NewsList;
