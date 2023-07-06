import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import { CarouselTextButton } from "./CustButton";
// import { CarouselTextButton } from "./CustButton";

export const BestSection = () => {
  return (
    <>
      <Paper
        sx={{
          backgroundColor: "#010101",
          margin: "120px 0",
        }}
      >
        <Container maxWidth="lg">
          <Box>
            <Typography
              variant="body3"
              sx={{
                marginBottom: "30px",
              }}
            >
              Happiness in your hands
            </Typography>
            <Typography variant="h2">Happiness in your hands</Typography>
          </Box>

          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="827px"
                image="/images/Best Hamburger.png"
                alt="Best Burger"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <CarouselTextButton
                variant="button"
                size="medium"
                color="primary"
              >
                Learn More
              </CarouselTextButton>
            </CardActions>
          </Card>
        </Container>
      </Paper>
    </>
  );
};
