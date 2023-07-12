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
import { Divider } from "@mui/material";

export default function Navigation() {
    const router = useRouter();

    const [isMenuOpen, setIsMenuOpen] = React.useState({
        "search": true,
        "alert": true,
        "topic": true,
        "duty": false,
        "kb": false,
        "system": false,
    });
    const handleMenuClick = (e, name) => {
        e.stopPropagation();

        let newState = {...isMenuOpen};
        newState[name] = !newState[name];
        setIsMenuOpen(newState);
    };

    const [open, setOpen] = React.useState(false);
    const [adminOpen, setAdminOpen] = React.useState(false);
    const [analyseOpen, setAnalyseOpen] = React.useState(false);

    const [searchOpen, setSearchOpen] = React.useState(false);
    const [alertOpen, setAlertOpen] = React.useState(false);
    const [topicOpen, setTopicOpen] = React.useState(false);

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


    return (
        <Box
            sx={{ width: 250, minWidth: 250 }}
            role="presentation"
        >
            <List>

            <ListItem key={"search-management"} disablePadding>
                    <ListItemButton onClick={(e) => handleMenuClick(e, "search")}>
                        <ListItemIcon>
                            <StackedBarChartIcon />
                        </ListItemIcon>
                        <ListItemText primary={"智能搜索"} />
                        {isMenuOpen["search"] ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                </ListItem>
                <Collapse in={isMenuOpen["search"]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton
                            sx={{ ml: 7 }}
                            onClick={(e) => router.push("/search/q")}
                        >
                            <ListItemText primary="检索配置" />
                        </ListItemButton>
                    </List>
                </Collapse>



                <ListItem key={"alert-management"} disablePadding>
                    <ListItemButton onClick={(e) => handleMenuClick(e, "alert")}>
                        <ListItemIcon>
                            <StackedBarChartIcon />
                        </ListItemIcon>
                        <ListItemText primary={"监测预警"} />
                        {isMenuOpen["alert"] ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                </ListItem>
                <Collapse in={isMenuOpen["alert"]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton
                            sx={{ ml: 7}}
                            onClick={() => {}}
                        >
                            <ListItemText primary="创建预警" />
                        </ListItemButton>
                    </List>
                </Collapse>
                <Collapse in={isMenuOpen["alert"]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton
                            sx={{ ml: 7 }}
                            onClick={(e) => router.push("/alert")}
                        >
                            <ListItemText primary="预警清单" />
                        </ListItemButton>
                    </List>
                </Collapse>
                <Collapse in={isMenuOpen["alert"]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton
                            sx={{ ml: 7 }}
                            onClick={(e) => router.push("/push")}
                        >
                            <ListItemText primary="联动推送" />
                        </ListItemButton>
                    </List>
                </Collapse>


                <ListItem key={"topic-management"} disablePadding>
                    <ListItemButton onClick={(e) => handleMenuClick(e, "topic")}>
                        <ListItemIcon>
                            <StackedBarChartIcon />
                        </ListItemIcon>
                        <ListItemText primary={"专题管理"} />
                        {isMenuOpen["topic"] ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                </ListItem>
                <Collapse in={isMenuOpen["topic"]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton
                            sx={{ ml: 7 }}
                            onClick={(e) => router.push("/sortLibrary")}
                        >
                            <ListItemText primary="分类库" />
                        </ListItemButton>
                    </List>
                </Collapse>
                <Collapse in={isMenuOpen["topic"]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton
                            sx={{ ml: 7 }}
                            onClick={(e) => router.push("/thematicBigScreen")}
                        >
                            <ListItemText primary="专题大屏" />
                        </ListItemButton>
                    </List>
                </Collapse>
                <Collapse in={isMenuOpen["topic"]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton
                            sx={{ ml: 7 }}
                            onClick={(e) => router.push("/preview")}
                        >
                            <ListItemText primary="报告管理" />
                        </ListItemButton>
                    </List>
                </Collapse>
                <Collapse in={isMenuOpen["topic"]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton
                            sx={{ ml: 7 }}
                            onClick={() => {}}
                        >
                            <ListItemText primary="效能评价" />
                        </ListItemButton>
                    </List>
                </Collapse>


                <ListItem key={"duty-management"} disablePadding>
                    <ListItemButton onClick={(e) => handleMenuClick(e, "duty")}>
                        <ListItemIcon>
                            <StackedBarChartIcon />
                        </ListItemIcon>
                        <ListItemText primary={"履职监督"} />
                        {isMenuOpen["duty"] ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                </ListItem>
                <Collapse in={isMenuOpen["duty"]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton
                            sx={{ ml: 7 }}
                            onClick={(e) => router.push("/scoringModel")}
                        >
                            <ListItemText primary="评分模型" />
                        </ListItemButton>
                    </List>
                </Collapse>
                <Collapse in={isMenuOpen["duty"]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton
                            sx={{ ml: 7 }}
                            onClick={(e) => router.push("/efficacyAnalysis")}
                        >
                            <ListItemText primary="效能分析" />
                        </ListItemButton>
                    </List>
                </Collapse>


                <ListItem key={"kb-management"} disablePadding>
                    <ListItemButton onClick={(e) => handleMenuClick(e, "kb")}>
                        <ListItemIcon>
                            <StackedBarChartIcon />
                        </ListItemIcon>
                        <ListItemText primary={"知识库"} />
                        {isMenuOpen["kb"] ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                </ListItem>
                <Collapse in={isMenuOpen["kb"]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton
                            sx={{ ml: 7 }}
                            onClick={() => {}}
                        >
                            <ListItemText primary="政策检索" />
                        </ListItemButton>
                    </List>
                </Collapse>
                <Collapse in={isMenuOpen["kb"]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton
                            sx={{ ml: 7 }}
                            onClick={() => {}}
                        >
                            <ListItemText primary="标签管理" />
                        </ListItemButton>
                    </List>
                </Collapse>

                <ListItem key={"system-management"} disablePadding>
                    <ListItemButton onClick={(e) => handleMenuClick(e, "system")}>
                        <ListItemIcon>
                            <StackedBarChartIcon />
                        </ListItemIcon>
                        <ListItemText primary={"系统配置"} />
                        {isMenuOpen["ksystemb"] ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                </ListItem>
                <Collapse in={isMenuOpen["system"]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton
                            sx={{ ml: 7 }}
                            onClick={(e) => router.push("/dataSourceManagement")}
                        >
                            <ListItemText primary="数据源管理" />
                        </ListItemButton>
                    </List>
                </Collapse>
                <Collapse in={isMenuOpen["system"]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton
                            sx={{ ml: 7 }}
                            onClick={() => {}}
                        >
                            <ListItemText primary="自动报告" />
                        </ListItemButton>
                    </List>
                </Collapse>
                <Collapse in={isMenuOpen["system"]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton
                            sx={{ ml: 7 }}
                            onClick={() => {}}
                        >
                            <ListItemText primary="知识库管理" />
                        </ListItemButton>
                    </List>
                </Collapse>


                <ListItem key={"report-preview"} disablePadding>
                    <ListItemButton onClick={(e) => router.push("/preview")}>
                        <ListItemIcon>
                            <StackedBarChartIcon />
                        </ListItemIcon>
                        <ListItemText primary={"报告预览"} />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );
}
