import * as React from "react";
import Head from "next/head";
import Script from "next/script";

import styles from "../styles/Home.module.css";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MenuAppBar from "../components/MenuAppBar";

import { Stack, Container, Typography, Tab, Tabs, TextField, Button } from '@mui/material';

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import Navigation from "../components/Navigation";


const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  height: 70,
  // color: "#133FFA",
  // backgroundColor: "#133FFA",
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          {children}
        </Box>
      )}
    </div>
  );
}


export default function Home() {

  const [selectedIndex, setSelectedIndex] = React.useState(0);


  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };


  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const docs = [
    { uri: "/dist/test.pdf" },
  ];
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MenuAppBar />

      <Container fixed maxWidth="1440px">
        <Stack direction="row" spacing={2}>
          <Navigation />
          <Grid container spacing={1} maxWidth="1200px"> {/* hacking */}
            <Grid item xs={12}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                  <Tab label="专题自动化报告" />
                  <Tab label="预警提示单" />
                  <Tab label="部门专报" />
                </Tabs>
              </Box>
            </Grid>

            <Grid item xs={12}>

                <Stack sx={{mt: 1}} direction="row" spacing={1} alignItems={"center"}>
                  <Typography variant="body2">报告编号</Typography>
                  <TextField style={{marginRight: "1.5rem"}} size="small" placeholder="请输入报告编号" disabled></TextField>
                <Typography variant="body2">报告标题</Typography>
                <TextField style={{marginRight: "1.5rem"}} size="small" placeholder="请输入报告标题" disabled></TextField>
                <Typography variant="body2">相关部门</Typography>
                <TextField size="small" placeholder="全部" disabled></TextField>
               <Button style={{marginLeft: 100}} variant="contained">查询</Button>
              </Stack> 
              </Grid>

              <Grid item xs={12}>
              <Stack sx={{my: 3}} direction="row" spacing={1} alignItems={"center"}>
                  <Typography variant="body2">筛选方式</Typography>
                  <TextField style={{marginRight: "1.5rem"}} size="small" placeholder="全部" disabled></TextField>
                <Typography variant="body2">创建时间</Typography>
                <TextField style={{marginRight: "1.5rem"}} size="small" placeholder="开始日期 - 结束日期" disabled></TextField>

                <Typography variant="body2">状态</Typography>
                <TextField style={{marginLeft: "35px"}} size="small" placeholder="全部"></TextField>
                <Button style={{marginLeft: 100}}  variant="outlined">重置</Button>
              </Stack>
              
               

            </Grid>

            <Grid item xs={12}>
            <Stack sx={{mt: 1}} direction="row" spacing={1} alignItems={"center"}>
            <Button variant="contained">+ 新建</Button>
            <Button variant="outlined">批量导入</Button>
              </Stack>
              </Grid>


            <Grid item xs={12} md={4}>
              <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <List component="nav" aria-label="main mailbox folders">
                  <StyledListItemButton
                    sx={{ height: 70 }}
                    selected={selectedIndex === 0}
                    onClick={(event) => handleListItemClick(event, 0)}
                  >
                    <ListItemText primary="江阴市违建投诉2022年年度综合分析报告" />
                  </StyledListItemButton>
                  <StyledListItemButton
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1)}
                  >
                    <ListItemText primary="江阴市违建投诉2023年1-6月份综合分析报告" />
                  </StyledListItemButton>
                  <StyledListItemButton
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}
                  >
                    <ListItemText primary="江阴市违建投诉2023年1-4月份综合分析报告" />
                  </StyledListItemButton>

                  <StyledListItemButton
                    sx={{ height: 70 }}
                    selected={selectedIndex === 3}
                    onClick={(event) => handleListItemClick(event, 3)}
                  >
                    <ListItemText primary="江阴市消防2022年年度综合分析报告" />
                  </StyledListItemButton>
                  <StyledListItemButton
                    selected={selectedIndex === 4}
                    onClick={(event) => handleListItemClick(event, 4)}
                  >
                    <ListItemText primary="江阴市消防2023年1-6月份综合分析报告" />
                  </StyledListItemButton>
                  <StyledListItemButton
                    selected={selectedIndex === 5}
                    onClick={(event) => handleListItemClick(event, 5)}
                  >
                    <ListItemText primary="江阴市消防2023年1-4月份综合分析报告" />
                  </StyledListItemButton>

                </List>
              </Box>
            </Grid>
            <Grid item xs={12} md={8}>
              <DocViewer pluginRenderers={DocViewerRenderers} documents={docs} />
            </Grid>



          </Grid>
        </Stack>
      </Container>

    </Box>
  );
}
