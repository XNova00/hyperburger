import { Box, Paper, Typography } from "@mui/material";

export const BannerSeparator = () => {
  return (
    <Box
      sx={{
        "& > :not(style)": {
          backgroundColor: "white",
          width: "100vw",
          height: "60px",
        },
      }}
    >
      <Paper
        sx={{
          display: "inline-flex",
          alignItems: "center",
        }}
      >
        {[...Array(9)].map((_, index) => (
          <Typography
            key={index}
            variant="body4"
            sx={{
              marginRight: "auto",
              color: "#010101",
            }}
          >
            TAKE A BITE
          </Typography>
        ))}
      </Paper>
    </Box>
  );
};
