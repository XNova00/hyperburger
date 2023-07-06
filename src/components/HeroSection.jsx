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
          height: "80vh",
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
              marginBottom: "50px",
            }}
          >
            <Typography variant="h3">MIND BLOWING BITES!</Typography>
            <Typography variant="h1">HYPEBURGER</Typography>
            <Typography variant="body4">
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
