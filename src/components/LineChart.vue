<script setup lang="ts">
import { ChartParams } from '~/composables/types';
let { chartParams } = defineModels<{ chartParams: ChartParams }>()
const colors = {
  入口1: "rgba(1, 156, 255, 1)", // 蓝色
  入口2: "rgba(145, 204, 117, 1)", // 绿色
  入口3: "rgba(250, 200, 88, 1)", // 橙色
  axisLineColor: "rgba(186, 231, 255, 1)", // 轴线颜色
  axisAreaColor1: "rgba(1, 156, 255, 0.20)", // 轴区域颜色1
  axisAreaColor2: "rgba(0, 0, 0, 0)", // 轴区域颜色2
  lineColor: "rgba(1, 156, 255, 1)", // 折线颜色
  shadowColor: "rgba(1, 156, 255, 1)", // 阴影颜色
};

const xAxisConfig = {
  type: "category",
  boundaryGap: false,
  axisLine: { lineStyle: { color: colors.axisLineColor, width: 2 } },
  axisTick: { show: false },
  splitLine: { show: false },
  data: null, // 应在此处替换为实际的x轴数据
};

const yAxisConfig = {
  type: "value",
  splitLine: { show: true, lineStyle: { type: "dashed", color: colors.axisAreaColor1 } },
  nameTextStyle: { color: "white", fontSize: 28, fontWeight: 600 },
};

function createSeries(name: any, lineColor: any, shadowColor: any, data: any) {
  return {
    name,
    type: "line",
    data: data, // 应在此处替换为实际的y轴数据
    smooth: true,
    symbol: "none",
    lineStyle: { width: 2, shadowColor, color: lineColor },
    areaStyle: {
      opacity: 1,
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: `${lineColor}` },
        { offset: 1, color: colors.axisAreaColor2 },
      ]),
    },
  };
}
const option: any = {
  tooltip: {
    trigger: "axis",
    textStyle: {
      fontSize: 16,
    },
  },
  legend: {
    icon: "rect",
    left: "right",
    itemWidth: 28,
    itemHeight: 4,
    textStyle: {
      color: "white",
      fontSize: 16,
    },
  },
  grid: {
    left: "3%",
    right: "8%",
    bottom: "1%",
    top: "25%",
    containLabel: true,
  },
}

option.series = [
  // createSeries("西南入口", colors.lineColor, colors.shadowColor, colors.lineColor),
  // createSeries("东北入口", colors.lineColor, colors.shadowColor, colors.lineColor),
  // createSeries("西北入口", colors.lineColor, colors.shadowColor, colors.lineColor),
];

option.xAxis = { ...xAxisConfig };
option.yAxis = { ...yAxisConfig };

// 如果有实际的数据，请在这里替换
option.xAxis.data = chartParams.value.data.labels
chartParams.value.data.datasets.forEach((d: any) => {
  console.log(d);
  console.log(d.data);
  option.series.push(createSeries(d.label, d.lineColor, colors.shadowColor, d.data));
});
// option.yAxis.data = ...;
// option.series.forEach(s => s.data = ...);


onMounted(() => {
  let dom = document.getElementById(chartParams.value.domId)
  console.log(dom);
  let myChart = echarts.init(document.getElementById(chartParams.value.domId));
  myChart.setOption(option);
  console.log(option);
})
</script>

<template>
  <div wfull hfull :id="chartParams.domId">
  </div>
</template>
