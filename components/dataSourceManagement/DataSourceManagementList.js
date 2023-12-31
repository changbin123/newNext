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
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { CSVLink, CSVDownload } from "react-csv";
export default function DataSourceManagementList({ data }) {
    const [newRows, setRows] = React.useState(data);
    const chipStyle = {
        borderRadius: 5,
    };
    const handleLinkClick = () => {
        window.location.href = ''; // 设置要跳转的链接地址
    };
    const columns = [
        {
            field: "dataSource",
            headerName: "数据来源",
            editable: true,
            width: 200,
            renderCell: (params) => {
                return (
                    <Chip label={params.row.dataSource} style={chipStyle} />
                );
            },
        },
        {
            field: "inclusionAmount",
            headerName: "纳入数据量",
            width: 120,
        },
        {
            field: "updataTime",
            headerName: "更新时间",
            width: 200,
            editable: true,
        },
        {
            field: "accessDepartment",
            headerName: "接入部门",
            width: 150,
            renderCell: (params) => {
                return (
                    <Chip label={params.row.accessDepartment} style={chipStyle} />
                );
            },
        },
        {
            field: "timeRange",
            headerName: "时间范围",
            width: 200,
        },
        {
            field: "status",
            headerName: "状态",
            width: 100,
            renderCell: (params) => {
                return (
                    <Stack direction="row" spacing={1} sx={{ display: 'flex', alignItems: 'center' }}>
                        <FiberManualRecordIcon style={{ width: '0.7rem', color: params.row.status ? 'green' : 'red', marginRight: '5px' }} />
                        {params.row.status ? '已启用' : '未启用'}
                    </Stack>
                );
            },
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
                            onClick={handleLinkClick}
                        >
                            查看
                        </Button>
                    </Stack>
                );
            },
        },
    ];
    const headers = [
        { label: "数据来源", key: "dataSource" },
        { label: "纳入数据量", key: "inclusionAmount" },
        { label: "更新时间", key: "updataTime" },
        { label: "接入部门", key: "accessDepartment" },
        { label: "时间范围", key: "timeRange" },
        { label: "状态", key: "status" },
    ];

    const newObj = newRows.map((item) => {
        return { ...item, status: item.status ? "开启" : "未开启" };
    });



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
                    <CSVLink data={newObj} headers={headers} filename={"数据源.csv"}>下载</CSVLink>
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
