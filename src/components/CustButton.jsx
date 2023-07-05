import { Button } from "@mui/material";
import { ArrowRight } from "./CustIconSvg";

export const HeroButton = ({ variant, children, color }) => {
  return (
    <Button
      variant={variant}
      color={color}
      endIcon={<ArrowRight />}
      sx={{
        padding: "12px 24px",
        borderRadius: "30px",
      }}
    >
      {children}
    </Button>
  );
};

export const CarouselTextButton = ({ variant, children, color }) => {
  return (
    <Button variant={variant} color={color}>
      {children}
    </Button>
  );
};

export const CarouselArrowButton = ({ variant, children, color }) => {
  return (
    <Button variant={variant} color={color}>
      {children}
    </Button>
  );
};
