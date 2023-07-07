import {
  Box,
  Container,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import { burgerPrice } from "../utils/Data";

export const FeaturedSection = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url("/images/BestBurgerBG.png")',
        backgroundSize: "cover",
        width: "100%",
        borderTop: "4px dashed #fff",
        borderBottom: "4px dashed #fff",
        padding: "120px 0",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          marginBottom: "30px",
        }}
      >
        <Typography variant="body2" color="secondary">
          Made with Love
        </Typography>
        <Typography variant="h2" color="secondary">
          Featured Burgers
        </Typography>
      </Container>
      {/* Big */}
      <Container
        maxWidth="lg"
        sx={{
          width: "100%",
          marginTop: "30px",
        }}
      >
        <Box
          sx={{
            overflowY: "scroll",
          }}
        >
          <ImageList cols={3} gap={20}>
            {burgerPrice
              .filter((item) => item.isBig == true)
              .map((item) => (
                <ImageListItem key={item.images}>
                  <img
                    src={`${item.images}`}
                    srcSet={`${item.images}`}
                    alt={item.title}
                    loading="lazy"
                    style={{
                      borderRadius: "30px",
                    }}
                  />
                </ImageListItem>
              ))}
          </ImageList>
        </Box>
      </Container>
      {/* Small */}
      <Container
        maxWidth="lg"
        sx={{
          width: "100%",
          marginTop: "30px",
        }}
      >
        <Box
          sx={{
            overflowY: "scroll",
          }}
        >
          <ImageList cols={3} gap={20}>
            {burgerPrice
              .filter((item) => item.isBig == false)
              .map((item) => (
                <ImageListItem key={item.images}>
                  <img
                    src={`${item.images}`}
                    srcSet={`${item.images}`}
                    alt={item.title}
                    loading="lazy"
                    style={{
                      borderRadius: "30px",
                    }}
                  />
                </ImageListItem>
              ))}
          </ImageList>
        </Box>
      </Container>
    </Box>
  );
};
