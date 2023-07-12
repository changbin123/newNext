import ReactECharts from "echarts-for-react";
import * as React from "react";
import _ from "lodash";

import { useTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import ChartTitle from "../ChartTitle";

const DataTimeSeriesChart = ({ minHeight = 100, ...props }) => {
  const theme = useTheme();

  const numberOfAlerts = 7;

  const option = {
    xAxis: {
      type: "category",
      data: [
        "6/18/2023",
        "6/19/2023",
        "6/20/2023",
        "6/21/2023",
        "6/22/2023",
        "6/23/2023",
        "6/24/2023",
        "6/25/2023",
        "6/26/2023",
        "6/27/2023",
        "6/28/2023",
        "6/29/2023",
        "6/30/2023",
        "7/1/2023",
        "7/2/2023",
        "7/3/2023",
        "7/4/2023",
        "7/5/2023",
        "7/6/2023",
      ],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [1, 2, 3, 1, 2, 3, 1, 2, 3, 3, 2, 1, 2, 3, 4, 1, 4],
        type: "bar",
      },
    ],
  };

  const echartsTheme = theme.palette.mode === "dark" ? "dark" : "";
  return (
    <>
      <Box
        sx={{ mx: 1, mt: 1, display: "flex", justifyContent: "space-between" }}
      >
        <ChartTitle title={"事件日期分布"} />
      </Box>
      <Paper sx={{ mx: 1 }} elevation={0}>
        <ReactECharts
          option={option}
          theme={echartsTheme}
          style={{ minHeight: minHeight }}
        />
      </Paper>
    </>
  );
};

export default DataTimeSeriesChart;
