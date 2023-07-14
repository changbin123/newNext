import * as React from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Chip from '@mui/material/Chip';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { CSVLink, CSVDownload } from "react-csv";
export default function PushList({ data }) {
    const [newRows, setRows] = React.useState(data);

    const chipStyle = {
        borderRadius: 5,
    };
    const columns = [
        {
            field: "alertId",
            headerName: "预警编号",
            editable: true,
            width: 120,
        },
        {
            field: "alertName",
            headerName: "预警名称",
            width: 120,
            renderCell: (params) => {
                return (
                    <Chip label={params.row.alertName} style={chipStyle} />
                );
            },
        },
        {
            field: "alertTag",
            headerName: "预警条目",
            width: 120,
            editable: true,
            renderCell: (params) => {
                return (
                    <Chip label={params.row.alertTag} style={chipStyle} />
                );
            },
        },
        {
            field: "number",
            headerName: "次数",
            width: 100,
        },
        {
            field: "receiptName",
            headerName: "提示单名称",
            width: 150,
            renderCell: (params) => {
                return (
                    <Chip label={params.row.receiptName} style={chipStyle} />
                );
            },
        },
        {
            field: "receiptID",
            headerName: "提示单编号",
            width: 120,
        },
        {
            field: "receiptSendingDepartment",
            headerName: "发送部门",
            width: 120,
            renderCell: (params) => {
                return (
                    <Chip label={params.row.receiptSendingDepartment} style={chipStyle} />
                );
            },
        },
        {
            field: "receiptStatus",
            headerName: "签收情况",
            width: 100,
            renderCell: (params) => {
                return (
                    <Stack direction="row" spacing={1} sx={{ display: 'flex', alignItems: 'center' }}>
                        <FiberManualRecordIcon style={{ width: '0.7rem', color: params.row.receiptStatus ? 'green' : 'red', marginRight: '5px' }} />
                        {params.row.receiptStatus ? '已签收' : '未签收'}
                    </Stack>
                );
            },
        },
        {
            field: "operations",
            headerName: "操作",
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
                        <Button
                            variant="text"
                            color="primary"
                        >
                            下载
                        </Button>
                    </Stack>
                );
            },
        },
    ];
    const headers = [
        { label: "预警编号", key: "alertId" },
        { label: "预警名称", key: "alertName" },
        { label: "预警条目", key: "alertTag" },
        { label: "次数", key: "number" },
        { label: "提示单名称", key: "receiptName" },
        { label: "提示单编号", key: "receiptID" },
        { label: "提示单发送部门", key: "receiptSendingDepartment" },
        { label: "签收情况", key: "receiptStatus" },
    ];
    const newObj = newRows.map((item) => {
        return { ...item, receiptStatus: item.receiptStatus ? "已签收" : "未签收" };
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
                <Button startIcon={<SaveAltIcon />} variant="outlined" >
                    <CSVLink data={newObj} headers={headers} filename={"联动推送.csv"}>下载</CSVLink>
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
