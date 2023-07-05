import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

export default function Navbar() {
  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "primary",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: "0 100px 15px 100px",
          }}
        >
          <Box>
            <img
              src="/images/HyperBurger Logo.png"
              alt="Logo"
              style={{
                width: "116px",
                height: "63px",
              }}
            />
          </Box>
          {/* <Box>
            <List sx={{ display: "flex" }}>
              {navItems.map((item) => (
                <ListItem key={item} disablePadding>
                  <ListItemButton
                    sx={{
                      textAlign: "center",
                      "&:hover": {
                        textDecoration: "none",
                        cursor: "pointer",
                        color: "#FF014F",
                      },
                    }}
                  >
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
