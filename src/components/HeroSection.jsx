import { Box, Container, Paper, Typography } from "@mui/material";
import { HeroButton } from "./CustButton";

const HeroSection = () => {
  return (
    <Box
      sx={{
        "& > :not(style)": {
          backgroundImage: 'url("/images/Burger Img with Opacity.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "60vh",
        },
      }}
    >
      <Paper
        sx={{
          padding: "120px 0",
          borderRadius: 0,
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              marginBottom: "30px",
            }}
          >
            <Typography variant="h3" color="error">
              MIND BLOWING BITES!
            </Typography>
            <Typography variant="h1" color="secondary">
              HYPEBURGER
            </Typography>
            <Typography variant="body4" color="secondary">
              By shifting from animal to plant-based meat, we can positively
              affect growing global issues such as contraints on
              <br />
              natural resources and animal welfare. After all, the positive
              choice we make every day - no matter how small - can
              <br />
              have a great impact on our world.
            </Typography>
          </Box>
          <HeroButton variant="contained" color="secondary">
            Find Location
          </HeroButton>
        </Container>
      </Paper>
    </Box>
  );
};

export default HeroSection;
