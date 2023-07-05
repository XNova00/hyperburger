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
      <Paper>
        {[...Array(5)].map((_, index) => (
          <Typography
            key={index}
            variant="body4"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              color: "red",
            }}
          >
            TAKE A BITE
          </Typography>
        ))}
      </Paper>
    </Box>
  );
};
