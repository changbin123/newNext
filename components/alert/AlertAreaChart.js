import ReactECharts from "echarts-for-react";
import * as React from "react";
import _ from "lodash";

import { useTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import ChartTitle from "../ChartTitle";

const AlertAreaChart = ({ minHeight = 100, ...props }) => {
  const theme = useTheme();

  const numberOfAlerts = 7;

  const option = {
    legend: {
      data: ["生效预警", "未生效预警"],
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985",
        },
      },
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [2, 3, 11, 29, 31, 53, 67],
        type: "line",
        name: "生效预警",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
      },
      {
        data: [2, 13, 31, 69, 131, 153, 167],
        type: "line",
        label: {
          show: true,
          position: "top",
        },
        name: "未生效预警",
        stack: "Total",
        areaStyle: {},
        // lineStyle: {
        //     color: "#b3e19d",
        // },
        emphasis: {
          focus: "series",
        },
      },
    ],
  };

  const echartsTheme = theme.palette.mode === "dark" ? "dark" : "";
  return (
    <>
      <Box
        sx={{ mx: 1, mt: 1, display: "flex", justifyContent: "space-between" }}
      >
        <ChartTitle title={"预警配置数量趋势"} />
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

export default AlertAreaChart;
