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
import { CSVLink } from "react-csv";
export default function ThematicBigScreenList({ data }) {
    const [newRows, setRows] = React.useState(data);
    const chipStyle = {
        borderRadius: 5,
    };
    const columns = [
        {
            field: "topicName",
            headerName: "专题名称",
            editable: true,
            width: 200,
            renderCell: (params) => {
                return (
                    <Stack direction="row" spacing={1} sx={{display: 'flex', alignItems: 'center'}}>
                        <span>{params.row.topicName}</span>
                        <IconButton  sx={{marginLeft:0}}>
                            <ContentCopyIcon  sx={{marginLeft:'-10px',width:'12px'}}/>
                        </IconButton>
                    </Stack>
                );
            },
        },
        {
            field: "mainSector",
            headerName: "主体部门",
            width: 200,
        },
        {
            field: "createTime",
            headerName: "创建时间",
            width: 300,
            editable: true,
        },
        {
            field: "status",
            headerName: "状态",
            width: 200,
            renderCell: (params) => {
                return (
                    <Stack direction="row" spacing={1} sx={{display: 'flex', alignItems: 'center'}}>
                        <FiberManualRecordIcon style={{ width:'0.7rem', color: params.row.status?'green':'red',marginRight:'5px' }}/>
                        {params.row.status?'已启用':'未启用'}
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
                        >
                            连接
                        </Button>
                        <Button
                            variant="text"
                            color="primary"
                        >
                            操作
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
              <CSVLink data={newRows}  filename={"专题大屏.csv"}>
                <Button variant="outlined">
                  <SaveAltIcon />下载
                </Button>
              </CSVLink>
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
