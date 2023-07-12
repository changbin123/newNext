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
export default function EfficacyAnalysisList({ data }) {
    const [newRows, setRows] = React.useState(data);
    const chipStyle = {
        borderRadius: 5,
    };
    const columns = [
        {
            field: "street",
            headerName: "镇街",
            editable: true,
            width: 180,
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
            field: "averageSatisfaction",
            headerName: "平均满意度(%)",
            width: 180,
            renderCell: (params) => {
                return (
                    <Stack direction="row" spacing={1} sx={{display: 'flex', alignItems: 'center'}}>
                    <span>{params.row.averageSatisfaction}</span>
                    <IconButton  sx={{marginLeft:0}}>
                        <ContentCopyIcon  sx={{marginLeft:'-10px',width:'12px'}}/>
                    </IconButton>
                </Stack>
                );
            },
        },
        {
            field: "averageProcessingTime",
            headerName: "平均处理时长(天)",
            width: 180,
            editable: true,
            renderCell: (params) => {
                return (
                    <Stack direction="row" spacing={1} sx={{display: 'flex', alignItems: 'center'}}>
                    <span>{params.row.averageProcessingTime}</span>
                    <IconButton  sx={{marginLeft:0}}>
                        <ContentCopyIcon  sx={{marginLeft:'-10px',width:'12px'}}/>
                    </IconButton>
                </Stack>
                );
            },
        },
        {
            field: "averageNumberPrevarications",
            headerName: "平均推诿数(次)",
            width: 180,
        },
        {
            field: "totalScore",
            headerName: "总分(次)",
            width: 180,
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
