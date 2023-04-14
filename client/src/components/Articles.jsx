import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getNews } from "../Service/api";
import { Card, CardContent, Grid, styled } from "@mui/material";

// css for component
const Image = styled("img")({
  height: 268,
  width: "89%",
  objectFit: "cover",
  borderRadius: 5,
});

const Component = styled(Card)`
  margin-bottom: 20px;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
`;

const Container = styled(CardContent)`
  padding: 8px;
  padding-bottom: 4px !important;
`;

const Text = styled(Typography)`
font-weight: 300;
font-size: 22px;
color: $44444d;
line-height: 27px;
`
const RightContainer = styled(Grid)(({theme}) => ({
  margin: "5px 0 0 -25px",
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.between('sm', 'lg')]: {
    padding: "0 5px"
  },
  [theme.breakpoints.down("sm")]: {
    margin: "5px 0"
  }
}))
   

const Author = styled(Typography)`
     color: #808290;
     font-size: 12px;
     line-height: 22px;
`
const Description = styled(Typography)`
  line-height: 22px;
  color: #44444d;
  margin-top: 5px;
  font-weight: 300;
`

const Publisher = styled(Typography)`
  font-size: 12px;
  margin-top: auto;
  margin-bottom: 10px;
`

// component
const Articles = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    dailyNews();
  }, []);

  const dailyNews = async () => {
    let response = await getNews();
    setNews(response.data);
  };

  return (
    <Box>
      {news.map((currNews) => {
        return (
          <Component key={currNews._id}>
            <Container>
              <Grid container>
                <Grid lg={5} sm={5} xs={12} item>
                  <Image src={currNews.url} alt="img" />
                </Grid>

                <RightContainer lg={7} md={7} sm={7} xs={12} item>
                  <Text>{currNews.title}</Text>
                  <Author>
                  <b>Short</b> by {currNews.author} / {new Date(currNews.timestamp).toDateString()}
                  </Author>
                  <Description>{currNews.description}</Description>
                  <Publisher>read more at &nbsp; 
                     <a style={{textDecoration: "none", color: "#000"}} href={currNews.link} target="_blank" rel="noreferrer"><b>{currNews.publisher}</b></a>
                  </Publisher>
                </RightContainer>
              </Grid>
            </Container>
          </Component>
        );
      })}
    </Box>
  );
};

export default Articles;
