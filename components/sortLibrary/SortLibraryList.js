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
import {CSVLink} from "react-csv";
export default function SortLibraryList({ data }) {
    const [newRows, setRows] = React.useState(data);
    const chipStyle = {
        borderRadius: 5,
    };
    const columns = [
        {
            field: "claimant",
            headerName: "诉求人",
            editable: true,
            width: 120,
            renderCell: (params) => {
                return (
                    <Stack direction="row" spacing={1} sx={{display: 'flex', alignItems: 'center'}}>
                        <span>{params.row.claimant}</span>
                        <IconButton  sx={{marginLeft:0}}>
                            <ContentCopyIcon  sx={{marginLeft:'-10px',width:'12px'}}/>
                        </IconButton>
                    </Stack>
                );
            },
        },
        {
            field: "historicalComplaints",
            headerName: "历史投诉次数",
            width: 120,
            renderCell: (params) => {
                return (
                    <Stack direction="row" spacing={1} sx={{display: 'flex', alignItems: 'center'}}>
                        <span>{params.row.historicalComplaints}</span>
                        <IconButton  sx={{marginLeft:0}}>
                            <ContentCopyIcon  sx={{marginLeft:'-10px',width:'12px'}}/>
                        </IconButton>
                    </Stack>
                );
            },
        },
        {
            field: "street",
            headerName: "镇街",
            width: 150,
            editable: true,
            renderCell: (params) => {
                return (
                    <Stack direction="row" spacing={1} sx={{display: 'flex', alignItems: 'center'}}>
                        <span>{params.row.street}</span>
                        <IconButton  sx={{marginLeft:0}}>
                            <ContentCopyIcon  sx={{marginLeft:'-10px',width:'12px'}}/>
                        </IconButton>
                    </Stack>
                );
            },
        },
        {
            field: "mainAppealChannel",
            headerName: "主要诉求途径",
            width: 200,
            renderCell: (params) => {
                return (
                    <Stack direction="row" spacing={1} sx={{display: 'flex', alignItems: 'center'}}>
                        <span>{params.row.mainAppealChannel}</span>
                        <IconButton  sx={{marginLeft:0}}>
                            <ContentCopyIcon  sx={{marginLeft:'-10px',width:'12px'}}/>
                        </IconButton>
                    </Stack>
                );
            },
        },
        {
            field: "lastRequestTime",
            headerName: "最近诉求时间",
            width: 200,
        },
        {
            field: "complaintSortLabel",
            headerName: "投诉类别标签",
            width: 150,
            renderCell: (params) => {
                return (
                    <Chip label={params.row.complaintSortLabel} style={chipStyle} />
                );
            },
        },
        {
            field: "operations",
            headerName: "投诉详单",
            width: 150,
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
    const headers = [
        { label: "诉求人", key: "claimant" },
        { label: "历史投诉次数", key: "historicalComplaints" },
        { label: "镇街", key: "street" },
        { label: "主要诉求途径", key: "mainAppealChannel" },
        { label: "最近诉求时间", key: "lastRequestTime" },
        { label: "投诉类别标签", key: "complaintSortLabel" },
    ];
    return (
        <>
            <Box
                sx={{ pb: 1, display: "flex", justifyContent: "space-between" }}
            >
                <Stack direction="row" spacing={1} alignItems={"center"}>
                    <Button variant="contained">+ 新建</Button>
                    <Button variant="outlined">批量导入</Button>
                </Stack>
                <Button startIcon={<SaveAltIcon />} variant="outlined">
                    <CSVLink data={newRows}  headers={headers} filename={"分类库.csv"}>下载</CSVLink>
                </Button>
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
