import { Box, Paper } from "@mui/material";

const CustHeroSection = () => {
  return (
    <Box
      sx={{
        "& > :not(style)": {
          backgroundImage: 'url("/images/Burger Img with Opacity.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
          height: "100vh",
        },
      }}
    >
      <Paper
        sx={{
          borderRadius: 0,
        }}
      ></Paper>
    </Box>
  );
};

export default CustHeroSection;
