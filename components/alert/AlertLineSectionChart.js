import ReactECharts from "echarts-for-react";
import * as React from "react";
import _ from "lodash";

import { useTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import ChartTitle from "../ChartTitle";

const AlertLineSectionChart = ({ minHeight = 100, ...props }) => {
  const theme = useTheme();

  const numberOfAlerts = 7;

  const option = {
    title: {
      text: "",
      subtext: "",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
    },
    toolbox: {
      show: true,
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      // prettier-ignore
      data: ['2022/6', '2022/7', '2022/8', '2022/9', '2022/10', '2022/11', '2022/12', '2023/1', '2023/2', '2023/3', '2023/4', '2023/5', '2023/6', '2023/7'],
    },
    yAxis: {
      type: "value",
      axisLabel: {
        formatter: "{value}",
      },
      axisPointer: {
        snap: true,
      },
    },
    visualMap: {
      show: false,
      dimension: 0,
      pieces: [
        {
          lte: 9,
          color: "green",
        },
        {
          gt: 9,
          lte: 10,
          color: "red",
        },
        {
          gt: 10,
          lte: 14,
          color: "green",
        },
      ],
    },
    series: [
      {
        name: "诉求数量",
        type: "line",
        smooth: true,
        // prettier-ignore
        data: [2, 3, 4, 1, 8, 1, 2, 1, 0, 6, 7, 2, 2, 3],
        markArea: {
          itemStyle: {
            color: "rgba(255, 173, 177, 0.4)",
          },
          data: [
            [
              {
                name: "告警区间",
                xAxis: "2023/3",
              },
              {
                xAxis: "2023/4",
              },
            ],
          ],
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
        <ChartTitle title={"告警过程监控"} />
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

export default AlertLineSectionChart;
