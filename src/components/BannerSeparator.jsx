import { Paper, Typography } from "@mui/material";
import { text } from "../utils/Data";
import Marquee from "react-fast-marquee";

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
      <Marquee autoFill="true">
        {text.map((text, index) => (
          <Typography
            key={index}
            variant="body4"
            sx={{
              margin: "0 30px",
              color: text.color,
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          >
            {text.content}
          </Typography>
        ))}
      </Marquee>
    </Paper>
  );
};
