import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import { HeroButton } from "./CustButton";
import { BannerSeparator } from "./BannerSeparator";

export const CTASection = () => {
  return (
    <>
      <Box
        sx={{
          margin: "120px 0",
        }}
      >
        <Container maxWidth="lg">
          <Card
            sx={{
              display: "flex",
              backgroundImage: 'url("/images/CTA Bg.png")',
              borderRadius: "30px",
              border: "1px solid white",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignContent: "center",
                justifyContent: "space-around",
                flex: 1,
                gap: "30px",
              }}
            >
              <Box>
                <Typography variant="h2" color="secondary">
                  Taste the Hype
                </Typography>
                <Typography variant="body5" color="secondary">
                  Come visit us at your local HYPEBURGER location
                </Typography>
              </Box>
              <Box>
                <HeroButton variant="contained" color="secondary">
                  Find Location
                </HeroButton>
              </Box>
            </CardContent>
            <CardMedia
              component="img"
              src="/images/CTAImage.png"
              alt="Image"
              sx={{ width: 484 }}
            />
          </Card>
        </Container>
      </Box>
      <Box>
        <BannerSeparator />
      </Box>
    </>

    // <Box>
    //   <Container maxWidth="lg">
    //     <Card sx={{ display: "flex" }}>
    //       <Box sx={{ display: "flex", flexDirection: "column" }}>
    //         <CardContent sx={{ flex: "1 0 auto", gap: "30px" }}>
    //           <Typography variant="h2">Taste the Hype</Typography>
    //           <Typography variant="body5">
    //             Come visit us at your local HYPEBURGER location
    //           </Typography>
    //           <HeroButton variant="contained" color="secondary">
    //             Find Location
    //           </HeroButton>
    //         </CardContent>
    //       </Box>
    //       <CardMedia
    //         component="img"
    //         sx={{ width: 484 }}
    //         image="/images/CTAImage.png"
    //         alt="Happy People"
    //       />
    //     </Card>
    //   </Container>
    // </Box>

    // <Box
    //   sx={{
    //     margin: "120px 0",
    //   }}
    // >
    //   <Container maxWidth="lg">
    //     <Box
    //       sx={{
    //         backgroundImage: 'url("/images/CTA Bg.png")',
    //         display: "flex",
    //         borderRadius: "30px",
    //         border: "1px solid white",
    //       }}
    //     >
    //       <Box
    //         sx={{
    //           display: "flex",
    //           flexDirection: "column",
    //           justifyContent: "center",
    //         }}
    //       >
    //         <Typography variant="h2" color="secondary">
    //           Taste the Hype
    //         </Typography>
    //         <Typography variant="body5" color="secondary">
    //           Come visit us at your local HYPEBURGER location
    //         </Typography>
    //         <HeroButton variant="contained" color="secondary">
    //           Find Location
    //         </HeroButton>
    //       </Box>
    //       <Box>
    //         <img
    //           src="/images/CTAImage.png"
    //           alt=""
    //           style={{
    //             height: "100%",
    //             overflow: "hidden",
    //           }}
    //         />
    //       </Box>
    //     </Box>
    //   </Container>
    // </Box>
  );
};
