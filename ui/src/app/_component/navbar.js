"use client"
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
import DarkModeToggleBtn from "./darkmode/DarkModeToggleBtn";

const drawerWidth = 200;
const navItems = [
  { text: "Home", path: "/" },
  { text: "About", path: "/about" },
  { text: "Work", path: "/work" },
  { text: "Blog", path: "/blogs" },
  { text: "Form", path: "/form" }
  
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center"}}className="bg-light-Bg text-light-Text dark:bg-dark-bg dark:text-light-Bg">
      <Typography variant="h6" sx={{ my: 2 }}>
        Tashfeen khan
      </Typography>
      <Divider />
      <List  >
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding >
            <ListItemButton sx={{ textAlign: "center" }} >
              <Link href={item.path} passHref>
                <ListItemText primary={item.text} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <div className=" flex justify-start">
<DarkModeToggleBtn/>
      </div>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" className="bg-light-Bg text-light-Text dark:bg-dark-bg dark:text-light-Bg" >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }}}  className=" text-light-Text  dark:text-light-Bg"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
        Tashfeen khan 
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block',sm:"flex" } }}>
            {navItems.map((item) => (
              <Link key={item.text} href={item.path} passHref>
                <Button  className=" text-light-Text  dark:text-light-Bg">
                  {item.text}
                </Button>
              </Link>
            ))}
            <div className="flex items-center w-fit">
<DarkModeToggleBtn/>
            </div>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        
      </nav>
      <Box component="main" >
        <Toolbar />
      </Box>
    </Box>
  );
}
