import { Paper, Typography } from "@mui/material";
import { text } from "../utils/Data";

export const BannerSeparator = () => {
  return (
    <Paper
      sx={{
        display: "inline-flex",
        alignItems: "center",
        width: "100%",
        height: "60px",
        borderRadius: 0,
      }}
    >
      {text.map((text, index) => (
        <Typography
          key={index}
          variant="body4"
          sx={{
            color: text.color,
            marginRight: "auto",
            whiteSpace: "nowrap",
            overflow: "hidden",
            animation: "marquee 5s linear infinite",
          }}
        >
          {text.content}
        </Typography>
      ))}

      {/* {[...Array(9)].map((_, index) => (
          <Typography
            key={index}
            variant="body4"
            sx={{
              marginRight: "auto",
              color: "black",
            }}
          >
            TAKE A BITE
          </Typography>
        ))} */}
    </Paper>
  );
};
