import * as React from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Switch from "@mui/material/Switch";
import MenuAppBar from "../../components/MenuAppBar";
import AlertEditDialog from "./AlertEditDialog";
import ChartTitle from "../ChartTitle";
import Paper from "@mui/material/Paper";

const rows = [
  {
    name: "超10件提醒单",
    id: 1,
    alertStandard: "> 10",
    trend: "",
    time: "2023/07/06 15:33:01",
    creator: "12345",
    status: true,
    alertType: 1,
  },
  {
    name: "重复投诉",
    id: 2,
    alertStandard: ">=2",
    trend: "",
    time: "2023/06/16 10:21:24",
    creator: "12345",
    status: true,
    alertType: 2,
  },
  {
    name: "时间特长未办单",
    id: 3,
    alertStandard: "> 3h",
    trend: "",
    time: "2023/07/01 11:35:32",
    creator: "12345",
    status: true,
    alertType: 1,
  },
  {
    name: "重复投诉且不满意",
    id: 4,
    alertStandard: "> 3h 且 状态=‘不满意’",
    trend: "",
    time: "2023/05/03 09:24:13",
    creator: "12345",
    status: true,
    alertType: 2,
  },
];

export default function AlertList(props) {
  const router = useRouter();
  const [newRows, setRows] = React.useState(rows);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(newRows[0]);

  const columns = [
    {
      field: "name",
      headerName: "名称",
      editable: true,
      width: 150,
      // renderCell: (params) => {
      //   return (
      //     <>
      //       <Button
      //         variant="text"
      //         color="primary"
      //         onClick={() => handleDetails(params.row)}
      //       >
      //         {params.row.name}
      //       </Button>
      //     </>
      //   );
      // },
    },
    {
      field: "id",
      headerName: "ID",
      width: 80,
    },
    {
      field: "alertStandard",
      headerName: "预警标准",
      width: 200,
      editable: true,
    },
    {
      field: "trend",
      headerName: "趋势",
      width: 50,
      renderCell: (params) => (
        <ArrowDropDownIcon color="success" style={{ cursor: "pointer" }} />
      ),
    },
    {
      field: "time",
      headerName: "最近告警时间",
      width: 180,
    },
    {
      field: "creator",
      headerName: "创建⼈",
      width: 100,
    },
    {
      field: "status",
      headerName: "状态",
      width: 150,
      renderCell: (params) => {
        return (
          <Switch
            checked={params.row.status}
            onChange={() => handleStatusChange(params.row)}
          />
        );
      },
    },
    {
      field: "operations",
      headerName: "操作",
      width: 200,
      renderCell: (params) => {
        return (
          <>

            <Button
              variant="text"
              sx={{ ml: -2 }}
              color="primary"
              onClick={() => { }}
            >
              <Link target="_blank" href={{
                pathname: "alert/details",
                query: { rowData: JSON.stringify(params.row) }
              }}>
                链接
              </Link>
            </Button>
            <Button
              sx={{ ml: -3 }}
              variant="text"
              color="primary"
              onClick={() => handleOpenDialog(params.row)}
            >
              编辑
            </Button>
            <Button
              variant="text"
              sx={{ ml: -3 }}
              color="error"
              onClick={() => handleDelete(params.row)}
            >
              删除
            </Button>
          </>
        );
      },
    },
  ];
  function handleDetails(row) {
    router.push({
      pathname: "alert/details",
      query: { rowData: JSON.stringify(row) },
    });
  }
  function handleStatusChange(row) {
    const _newRows = newRows.map((_row) => {
      if (_row.id === row.id) {
        _row.status = !row.status;
        return _row;
      } else {
        return _row;
      }
    });
    setRows(_newRows);
  }
  function handleDelete(row) {
    const _newRows = newRows.filter((_row) => _row.id !== row.id);
    setRows(_newRows);
  }
  const handleOpenDialog = (value) => {
    setSelectedValue(value);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Box
        sx={{ mx: 1, display: "flex", justifyContent: "space-between" }}
      >
        <ChartTitle title={"预警列表"} />
        <Button sx={{ m: 1 }} variant="contained">
          新建预警
        </Button>
      </Box>
      <Paper sx={{ mx: 1 }} elevation={0}>
        <DataGrid
          rows={newRows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
        />
        <AlertEditDialog
          selectedValue={selectedValue}
          open={openDialog}
          onClose={handleCloseDialog}
        ></AlertEditDialog>
      </Paper>
    </>
  );
}
