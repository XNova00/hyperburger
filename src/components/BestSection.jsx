import {
  Box,
  // Card,
  // CardActionArea,
  // CardActions,
  // CardContent,
  // CardMedia,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import { CarouselTextButton } from "./CustButton";
import { ArrowLeftCarou, ArrowRightCarou } from "./CustIconSvg";

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
              color="secondary"
              sx={{
                marginBottom: "30px",
              }}
            >
              Happiness in your hands
            </Typography>
            <Typography
              variant="h2"
              color="secondary"
              sx={{ marginBottom: "30px" }}
            >
              FEEL THE HYPE
            </Typography>
          </Box>

          <Paper
            sx={{
              display: "flex",
              alignItems: "flex-end",
              backgroundImage: 'url("/images/Best Hamburger.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "876px",
              padding: "120px 0",
              borderRadius: "30px",
            }}
          >
            <Container maxWidth="xl">
              <Typography variant="h3" component="div" color="secondary">
                ABUNDANT NUTRITION
              </Typography>
              <Typography variant="body2" color="secondary">
                Each bite serves you with the healthiest local ingredients.
              </Typography>
              <CarouselTextButton variant="text" color="secondary">
                Learn More
              </CarouselTextButton>
            </Container>
          </Paper>

          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              gap: "20px",
              marginTop: "30px",
            }}
          >
            <ArrowLeftCarou />
            <ArrowRightCarou />
          </Box>
          {/* <Card>
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
          </Card> */}
        </Container>
      </Paper>
    </>
  );
};
