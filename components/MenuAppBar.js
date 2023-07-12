import * as React from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import StackedBarChartIcon from "@mui/icons-material/StackedBarChart";
import BarChartIcon from "@mui/icons-material/BarChart";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import SettingsIcon from "@mui/icons-material/Settings";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import Collapse from "@mui/material/Collapse";
import { Divider, Stack } from "@mui/material";

export default function MenuAppBar() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [adminOpen, setAdminOpen] = React.useState(false);
  const [analyseOpen, setAnalyseOpen] = React.useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    setOpen(!open);
  };
  const handleAdminClick = (e) => {
    e.stopPropagation();
    setAdminOpen(!adminOpen);
  };

  const handleAnalyseClick = (e) => {
    e.stopPropagation();
    setAnalyseOpen(!analyseOpen);
  };

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }} >
        <AppBar position="fixed" >
          <Toolbar sx={{
            width: "100%",
            maxWidth: 1440,
            mx: "auto",
          }}>
            <Typography
              variant="h5"
              component="div"
              align="left"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              江阴市社情民意分析研判平台
            </Typography>

            {auth && (
              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <SettingsIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>账户信息</MenuItem>
                  <MenuItem onClick={handleClose}>退出</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      <Toolbar />
      {/* hacks to not hide content behind MenuAppBar */}
    </>
  );
}
