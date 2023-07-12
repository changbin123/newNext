import ReactECharts from "echarts-for-react";
import * as React from "react";
import _ from "lodash";

import { useTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import ChartTitle from "../ChartTitle";

const DataSourceDistributionChart = ({ minHeight = 100, ...props }) => {
  const theme = useTheme();

  const option = {
    tooltip: {
      trigger: "item",
    },
    series: [
      {
        name: "数据源",
        type: "pie",
        radius: "50%",
        data: [
          { value: 5, name: "12345" },
          { value: 3, name: "网格化" },
          { value: 1, name: "文明云平台" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
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
        <ChartTitle title={"数据来源分布"} />
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

export default DataSourceDistributionChart;
