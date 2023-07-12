import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
export default function ScoringModelList({ data }) {
    const [newRows, setRows] = React.useState(data);
    const chipStyle = {
        borderRadius: 5,
    };
    const columns = [
        {
            field: "street",
            headerName: "镇街",
            editable: true,
            width: 150,
            renderCell: (params) => {
                return (
                    <Stack direction="row" spacing={1} sx={{ display: 'flex', alignItems: 'center' }}>
                        <span>{params.row.street}</span>
                        <IconButton sx={{ marginLeft: 0 }}>
                            <ContentCopyIcon sx={{ marginLeft: '-10px', width: '12px' }} />
                        </IconButton>
                    </Stack>
                );
            },
        },
        {
            field: "lowSatisfaction",
            headerName: "低满意度",
            width: 150,
            renderCell: (params) => {
                return (
                    <Stack direction="row" spacing={1} sx={{ display: 'flex', alignItems: 'center' }}>
                        <span>{params.row.lowSatisfaction}</span>
                        <IconButton sx={{ marginLeft: 0 }}>
                            <ContentCopyIcon sx={{ marginLeft: '-10px', width: '12px' }} />
                        </IconButton>
                    </Stack>
                );
            },
        },
        {
            field: "timeOut",
            headerName: "超时",
            width: 150,
            editable: true,
            renderCell: (params) => {
                return (
                    <Stack direction="row" spacing={1} sx={{ display: 'flex', alignItems: 'center' }}>
                        <span>{params.row.timeOut}</span>
                        <IconButton sx={{ marginLeft: 0 }}>
                            <ContentCopyIcon sx={{ marginLeft: '-10px', width: '12px' }} />
                        </IconButton>
                    </Stack>
                );
            },
        },
        {
            field: "prevarications",
            headerName: "推诿",
            width: 150,
            renderCell: (params) => {
                return (
                    <Stack direction="row" spacing={1} sx={{ display: 'flex', alignItems: 'center' }}>
                        <span>{params.row.prevarications}</span>
                        <IconButton sx={{ marginLeft: 0 }}>
                            <ContentCopyIcon sx={{ marginLeft: '-10px', width: '12px' }} />
                        </IconButton>
                    </Stack>
                );
            },
        },
        {
            field: "repeatingEvent",
            headerName: "重复事件",
            width: 150,
            renderCell: (params) => {
                return (
                    <Stack direction="row" spacing={1} sx={{ display: 'flex', alignItems: 'center' }}>
                        <span>{params.row.repeatingEvent}</span>
                        <IconButton sx={{ marginLeft: 0 }}>
                            <ContentCopyIcon sx={{ marginLeft: '-10px', width: '12px' }} />
                        </IconButton>
                    </Stack>
                );
            },
        },
        {
            field: "totalScore",
            headerName: "总分",
            width: 150,
        },
        {
            field: "operations",
            headerName: "操作",
            width: 200,
            renderCell: (params) => {
                return (
                    <Stack width='100%' direction="row" alignItems={"center"}>
                        <Button
                            variant="text"
                            color="primary"
                        >
                            查看
                        </Button>
                    </Stack>
                );
            },
        },
    ];
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Box
                sx={{ pb: 1, display: "flex", justifyContent: "space-between" }}
            >
                <Stack direction="row" spacing={1} alignItems={"center"}>
                    <Button variant="contained">+ 新建</Button>
                    <Button variant="outlined">批量导入</Button>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="镇街" />
                            <Tab label="部门" />
                        </Tabs>
                    </Box>

                </Stack>
                <Stack direction="row" spacing={1} alignItems={"center"}>
                    <Button startIcon={<SaveAltIcon />} variant="outlined">
                        下载
                    </Button>
                </Stack>

            </Box>
            <Paper sx={{ mx: 1 }} elevation={0}>
                <DataGrid
                    rows={newRows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 10,
                            },
                        },
                    }}
                    pageSizeOptions={[10]}
                    disableRowSelectionOnClick
                />

            </Paper>
        </>
    );
}
