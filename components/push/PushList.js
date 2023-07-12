import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Chip from '@mui/material/Chip';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export default function PushList({data}) {
    const [newRows, setRows] = React.useState(data);
    const chipStyle = {
        borderRadius: 5,
      };
    const columns = [
        {
            field: "alertId",
            headerName: "预警编号",
            editable: true,
            width: 100,
        },
        {
            field: "alertName",
            headerName: "预警名称",
            width:100,
            renderCell: (params) => {
                return (
                  <Chip label={params.row.alertName}  style={chipStyle} />
                );
              },
        },
        {
            field: "alertTag",
            headerName: "预警条目",
            width: 100,
            editable: true,
            renderCell: (params) => {
                return (
                  <Chip label={params.row.alertTag}  style={chipStyle} />
                );
              },
        },
        {
            field: "receiptSendSituation",
            headerName: "提示单发送情况",
            width: 100,
        },
        {
            field: "receiptID",
            headerName: "提示单编号",
            width: 100,
        },
        {
            field: "receiptSendingDepartment",
            headerName: "提示单发送部门",
            width: 100,
            renderCell: (params) => {
                return (
                  <Chip label={params.row.receiptSendingDepartment}  style={chipStyle} />
                );
              },
        },
        {
            field: "receiptStatus",
            headerName: "签收情况",
            width: 100,
            renderCell: (params) => {
                return (
                    <Stack direction="row" spacing={1} sx={{display: 'flex', alignItems: 'center'}}>
                        <FiberManualRecordIcon style={{ width:'0.7rem', color: params.row.receiptStatus?'green':'red',marginRight:'5px' }}/>
                        {params.row.receiptStatus?'已启用':'未启用'}
                    </Stack>
                );
            },
        },
        {
            field: "operations",
            headerName: "操作",
            width: 350,
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
                            endIcon={<KeyboardArrowDownIcon />}
                        >
                            专向督办
                        </Button>
                        <Button
                            variant="text"
                            color="primary"
                        >
                            关注
                        </Button>
                        <Button
                            variant="text"
                            color="primary"
                        >
                            收藏
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

    return (
        <>
            <Box
                sx={{pb:1, display: "flex", justifyContent: "space-between" }}
            >
                <Stack direction="row" spacing={1} alignItems={"center"}>
                    <Button variant="contained">+ 新建</Button>
                    <Button variant="outlined">批量导入</Button>
                </Stack>
                <Button startIcon={<SaveAltIcon/>}variant="outlined">
                    下载
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
