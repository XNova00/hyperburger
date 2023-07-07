import { Button, Divider } from "@mui/material";
import { ArrowRight } from "./CustIconSvg";
import { KeyboardArrowRight } from "@mui/icons-material";

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
    <Button variant={variant} color={color} endIcon={<KeyboardArrowRight />}>
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
