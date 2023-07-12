import * as React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import ChartTitle from "../ChartTitle";

export default function AlertOverview(props) {
  const { alertsInEffect, totalAlerts, lastAlertTime } = props;

  return (
    <>
      <Box
        sx={{ mx: 1, mt: 1, display: "flex", justifyContent: "space-between" }}
      >
        <ChartTitle title={"预警概况"} />
      </Box>
      <Paper
        sx={{ mx: 1 }}
        elevation={1}
      >
        <Box sx={{ py: 1 }} style={{ opacity: 0.8 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Stack sx={{ m: 2 }} direction="column" alignItems="center" gap={0}>
              <Typography gutterBottom variant="body1" component="div">
                预警生效
              </Typography>
              <Typography variant="h3" color="text.primary">
                {alertsInEffect}
              </Typography>
            </Stack>

            <Stack sx={{ m: 2 }} direction="column" alignItems="center" gap={0}>
              <Typography gutterBottom variant="body1" component="div">
                生成告警事件
              </Typography>
              <Typography variant="h3" color="text.primary">
                {totalAlerts}
              </Typography>
            </Stack>
          </Box>
        </Box>

        <Divider />

        <Box sx={{ m: 2 }} style={{ opacity: 0.8 }}>
          <Typography variant="body1">最近告警时间</Typography>

          <Stack sx={{ m: 1 }} direction="column" alignItems="center" gap={0}>
            <Typography variant="h4">{"2023/7/6"}</Typography>
            <Typography variant="h3" paddingBottom={2.5}>
              {"10:20 am"}
            </Typography>
          </Stack>
        </Box>
      </Paper>
    </>
  );
}
