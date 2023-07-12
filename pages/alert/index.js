import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Switch from "@mui/material/Switch";
import MenuAppBar from "../../components/MenuAppBar";
import AlertEditDialog from "../../components/alert/AlertEditDialog";
import AlertOverview from "../../components/alert/AlertOverview";
import AlertGaugeChart from "../../components/alert/AlertGaugeChart";
import AlertAreaChart from "../../components/alert/AlertAreaChart";
import AlertList from "../../components/alert/AlertList";

import { Container, Stack } from "@mui/material";
import Navigation from "../../components/Navigation";

function createData(
  name,
  ID,
  alertStandard,
  trend,
  time,
  creater,
  type,
  operate
) {
  return {
    name,
    id: ID,
    alertStandard,
    trend,
    time: "2023/07/06 23:40:09",
    creater,
    type,
    operate,
  };
}

const rows = [
  createData(
    "Frozen yoghurt",
    1,
    "中",
    "降低",
    "2023/11/2",
    "laozhang",
    true,
    "caozuo"
  ),
  createData(
    "Frozen yoghurt1",
    2,
    "中",
    "降低",
    "2023/11/2",
    "laozhang",
    true,
    "caozuo"
  ),
  createData(
    "Frozen yoghurt2",
    3,
    "中",
    "降低",
    "2023/11/2",
    "laozhang",
    true,
    "caozuo"
  ),
  createData(
    "Frozen yoghurt",
    4,
    "中",
    "降低",
    "2023/11/2",
    "laozhang",
    true,
    "caozuo"
  ),
  createData(
    "Frozen yoghurt",
    5,
    "中",
    "降低",
    "2023/11/2",
    "laozhang",
    true,
    "caozuo"
  ),
  createData(
    "Frozen yoghurt",
    6,
    "中",
    "降低",
    "2023/11/2",
    "laozhang",
    true,
    "caozuo"
  ),
  createData(
    "Frozen yoghurt",
    7,
    "中",
    "降低",
    "2023/11/2",
    "laozhang",
    true,
    "caozuo"
  ),
  createData(
    "Frozen yoghurt",
    8,
    "中",
    "降低",
    "2023/11/2",
    "laozhang",
    true,
    "caozuo"
  ),
  createData(
    "Frozen yoghurt",
    9,
    "中",
    "降低",
    "2023/11/2",
    "laozhang",
    true,
    "caozuo"
  ),
];

function Alert() {
  const router = useRouter();
  const [newRows, setRows] = React.useState(rows);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(newRows[0]);

  function handleDetails(row) {
    router.push({
      pathname: "alert/details",
      query: { rowData: JSON.stringify(row) },
    });
  }
  function handleTypeChange(row) {
    const _newRows = newRows.map((_row) => {
      if (_row.id === row.id) {
        _row.type = !row.type;
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
    setOpenDialog(true);
    setSelectedValue(value);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <MenuAppBar />

      <Container fixed maxWidth="1440px">
        <Stack direction="row" spacing={2}>
          <Navigation />

          <Grid container spacing={0} maxWidth="1200px" >   {/** hacking */}
            <Grid item xs={12} md={3}>
              <AlertOverview
                alertsInEffect={5}
                totalAlerts={80}
                lastAlertTime={"2023/7/6 10:20 am"}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <AlertGaugeChart />
            </Grid>
            <Grid item xs={12}  md={6}>
              <AlertAreaChart />
            </Grid>
            <Grid item xs={12}>
              <AlertList />
            </Grid>

          </Grid>
        </Stack>
      </Container>

    </Box>
  );
}

export default Alert;
