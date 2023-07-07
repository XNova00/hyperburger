import { Box, Divider, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        "& > :not(style)": {
          backgroundImage: 'url("/images/Footer Bg.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          padding: "120px 0",
        },
      }}
    >
      <Box>
        <Typography
          variant="h2"
          color="secondary"
          sx={{
            textAlign: "center",
          }}
        >
          HYPEBURGER
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
