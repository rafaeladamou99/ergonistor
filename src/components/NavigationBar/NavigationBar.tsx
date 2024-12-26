import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Routes } from "../Router/Routes";
import Colors from "../../ColorsModule/Colors.module.scss";
import "./NavigationBar.scss";
import { ContentProp } from "../../types/types";

const pages = [
  Routes.Home,
  Routes.Services,
  Routes.Projects,
  Routes.About,
  Routes.FAQs,
  Routes.Contact,
];

const NavigationBar = ({ logo }: { logo?: string }) => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const navigateTo = useCallback(
    (path: string) => () => {
      navigate(path);
      handleCloseNavMenu();
    },
    [navigate],
  );

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "white" }}
      className="app-bar"
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-around" }}
        >
          <div
            className="menu-items logo"
            onClick={navigateTo(Routes.Home.path)}
          >
            {logo ? (
              <img src={logo} className="w-full h-20 max-md:hidden" />
            ) : (
              <>
                <AdbIcon
                  sx={{
                    display: { xs: "none", md: "flex" },
                    mr: 1,
                    color: Colors.primary,
                    cursor: "pointer",
                  }}
                />
                <Typography
                  variant="h6"
                  noWrap
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontFamily: "Roboto",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: Colors.primary,
                    textDecoration: "none",
                  }}
                >
                  ERGONISTOR
                </Typography>
              </>
            )}
          </div>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: Colors.primary }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={navigateTo(page.path)}
                  className="menu-items"
                >
                  <Typography
                    textAlign="center"
                    sx={{
                      color: Colors.secondary,
                      fontFamily: "Roboto",
                    }}
                  >
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {logo ? (
            <img src={logo} className="w-full h-12 md:hidden" />
          ) : (
            <>
              <AdbIcon
                sx={{
                  display: { xs: "flex", md: "none" },
                  mr: 1,
                  color: Colors.primary,
                  cursor: "pointer",
                }}
              />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "Roboto",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: Colors.primary,
                  textDecoration: "none",
                }}
                onClick={navigateTo(Routes.Home.path)}
              >
                ERGONISTOR
              </Typography>
            </>
          )}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "space-around",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={navigateTo(page.path)}
                sx={{
                  my: 2,
                  color: Colors.secondary,
                  display: "block",
                  fontSize: "24px",
                  fontFamily: "Roboto",
                }}
                className="menu-items"
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavigationBar;
