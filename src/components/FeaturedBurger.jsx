import {
  Box,
  Container,
  ImageList,
  ImageListItem,
  Paper,
  Typography,
} from "@mui/material";
import { burgerPrice } from "../utils/Data";

export const FeaturedBurger = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url("/images/BestBurgerBG.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
        borderTop: "4px dashed #fff",
        borderBottom: "4px dashed #fff",
        padding: "120px 0",
      }}
    >
      <Container
        maxWidth="xl"
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
        maxWidth="xl"
        sx={{
          display: "flex",
          gap: "30px",
          width: "100%",
        }}
      >
        <Box sx={{ overflowY: "scroll" }}>
          <ImageList cols={2} gap={20}>
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
        maxWidth="xl"
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
