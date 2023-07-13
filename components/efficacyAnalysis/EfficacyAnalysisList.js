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
export default function EfficacyAnalysisList({ data }) {
    const [newRows, setRows] = React.useState(data);
    const chipStyle = {
        borderRadius: 5,
    };
    const handleLinkClick = () => {
        window.location.href = 'https://www.figma.com/proto/YpK1NACQco95LkXeeaePjL/%E7%A4%BE%E6%83%85%E6%B0%91%E6%84%8F?page-id=502%3A61971&type=design&node-id=505-50615&viewport=5241%2C-1674%2C0.5&t=FxcYISwKZmEmqtKN-1&scaling=min-zoom&starting-point-node-id=505%3A50615'; // 设置要跳转的链接地址
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
        { label: "镇街", key: "street" },
        { label: "平均满意度(%)", key: "averageSatisfaction" },
        { label: "平均处理时长(天)", key: "averageProcessingTime" },
        { label: "平均推诿数(次)", key: "averageNumberPrevarications" },
        { label: "总分(次)", key: "totalScore" },
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
                  <CSVLink data={newRows} headers={headers} >下载</CSVLink>
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
