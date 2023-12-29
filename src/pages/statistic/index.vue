<script setup lang="ts">
import { ChartParams } from '~/composables/types';

// import { ChartParams } from '~/composables/types';

// interface ChartParams {
//   domId: string
//   data: {
//     labels: string[]
//     datasets: {
//       label: string
//       data: number[]
//     }[]
//   }
// }
const chartParams1:ChartParams = {
  domId: 'chart1',
  data: {
    labels: ['12/01', '12/02', '12/03', '12/04', '12/05', '12/06', '12/07'],
    datasets: [
      {
        label: '机动车',
        data: [10, 20, 30, 40, 50, 60, 70],
        lineColor:'rgba(102, 146, 255, 1)',
      },
      {
        label: '非机动车',
        data: [30, 10, 20, 40, 80, 20, 90],
        lineColor:'rgba(179, 221, 252, 1)',
      },
      {
        label: '行人',
        data: [90, 20, 10, 20, 30, 70, 10],
        lineColor:'rgba(254, 225, 134, 1)',
      }
    ]
  }
}
</script>

<template>
  <div flex justify-center w-screen h-screen pt8rem fm-sc color-white bg-index>
    <div w107.375rem h50rem flex flex-wrap justify-around>
      <div w52.4375rem h23.75rem bg-long>
        <span relative top-0.2rem>路口流量趋势分析</span>
        <div wfull mt1rem h20rem>
          <LineChart :chartParams="chartParams1"></LineChart>
        </div>
      </div>
      <div w52.4375rem h23.75rem bg-long>
        <span relative top-0.2rem>交通事件数量趋势分析</span>

      </div>

      <div w34.125rem h23.75rem mt1rem bg-short>
        <span relative top-0.2rem>交通事件类型占比分析</span>

      </div>
      <div w34.125rem h23.75rem mt1rem bg-short>
        <span relative top-0.2rem>断面流量趋势分析</span>

      </div>
      <div w34.125rem h23.75rem mt1rem bg-short>
        <span relative top-0.2rem>平均通行速度趋势分析</span>

      </div>
    </div>

    <div absolute bottom-0 left-0 w-screen h-4.88rem bg-footer></div>
  </div>
</template>
<style lang="scss">
@import "~/assets/style/my_fonts.scss";
@import "~/assets/style/my_element.scss";
// @import "~/assets/style/historyEvent.scss";
</style>
<route lang="yaml">
  meta:
    layout: home
</route>
