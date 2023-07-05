import { Box, Paper } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        "& > :not(style)": {
          backgroundImage: 'url("/images/Footer Bg.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
          height: "82vh",
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

export default Footer;
