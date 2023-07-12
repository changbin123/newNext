import ReactECharts from "echarts-for-react";
import * as React from "react";
import _ from "lodash";

import { useTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import ChartTitle from "../ChartTitle";

const AlertGaugeChart = ({ minHeight = 100, ...props }) => {
  const theme = useTheme();

  const numberOfAlerts = 7;

  const option = {
    tooltip: {
      formatter: "{a} <br/>{b} : {c}",
    },
    series: [
      {
        name: "每月告警次数",
        type: "gauge",
        progress: {
          show: true,
        },
        detail: {
          valueAnimation: true,
          formatter: "{value}",
        },
        data: [
          {
            value: numberOfAlerts,
            name: "均值",
          },
        ],
      },
    ],
  };

  const echartsTheme = theme.palette.mode === "dark" ? "dark" : "";
  return (
    <>
      <Box
        sx={{ mx: 1, mt: 1, display: "flex", justifyContent: "space-between" }}
      >
        <ChartTitle title={"平均每月告警次数"} />
      </Box>
      <Paper sx={{ mx: 1 }} elevation={0}>
        <ReactECharts
          option={option}
          theme={echartsTheme}
          style={{ minHeight: 100 }}
        />
      </Paper>
    </>
  );
};

export default AlertGaugeChart;
