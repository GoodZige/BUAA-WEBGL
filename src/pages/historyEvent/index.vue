<script setup lang="ts">
import { dayjs } from 'element-plus';
import img from '~/assets/image/placeholder.png'

const axiosUrl = ref("http://172.20.0.238:19355");
const eventMap: any = ref(null);
const eventType = ref();
const startTime = ref(null);
const endTime = ref(null);
const current = ref(1);
const size = ref(10);
const total = ref(1000);
const date = ref<Date[]>([]);
const tableData = ref([{
  id: 1,
  eventType: 1,
  eventStartTime: "2021-08-01 10:00:00",
  videoUrl: img,
  imgBefore: img,
  carType: 1,
}, {
  id: 2,
  eventType: 2,
  eventStartTime: "2021-08-01 10:00:00",
  videoUrl: img,
  imgBefore: img,
  carType: 2,
},
{
  id: 2,
  eventType: 2,
  eventStartTime: "2021-08-01 10:00:00",
  videoUrl: img,
  imgBefore: img,
  carType: 2,
},
{
  id: 2,
  eventType: 2,
  eventStartTime: "2021-08-01 10:00:00",
  videoUrl: img,
  imgBefore: img,
  carType: 2,
},
{
  id: 2,
  eventType: 2,
  eventStartTime: "2021-08-01 10:00:00",
  videoUrl: img,
  imgBefore: img,
  carType: 2,
},
{
  id: 2,
  eventType: 2,
  eventStartTime: "2021-08-01 10:00:00",
  videoUrl: img,
  imgBefore: img,
  carType: 2,
},
{
  id: 2,
  eventType: 2,
  eventStartTime: "2021-08-01 10:00:00",
  videoUrl: img,
  imgBefore: img,
  carType: 2,
},
{
  id: 2,
  eventType: 2,
  eventStartTime: "2021-08-01 10:00:00",
  videoUrl: img,
  imgBefore: img,
  carType: 2,
},
{
  id: 2,
  eventType: 2,
  eventStartTime: "2021-08-01 10:00:00",
  videoUrl: img,
  imgBefore: img,
  carType: 2,
},
{
  id: 2,
  eventType: 2,
  eventStartTime: "2021-08-01 10:00:00",
  videoUrl: img,
  imgBefore: img,
  carType: 2,
},
]);
console.log(tableData);

const name = ref("");
const videoUrl = ref<string | undefined>();
const imgAfter = ref(null);
const imgBefore = ref(null);
const imgMiddle = ref(null);
const dialogTableVisible = ref(false);
const eventArr = ref([
  { id: 0, type: "全部类型" },
  { id: 1, type: "机动车逆行" },
  { id: 2, type: "机动车违规停车" },
]);
const carMap = ref({
  0: "未知",
  1: "小轿车",
  2: "大货车",
  3: "大巴车",
  4: "行人",
  5: "自行车",
  6: "摩托车",
  7: "中巴车",
  8: "危化车",
  9: "抛洒物",
  10: "小货车",
  11: "中货车",
  15: "小巴车",
  16: "施工牌",
  17: "骑行者",
});
console.log(99 as keyof typeof carMap.value);

// Methods
const getEventType = (code: any) => {
  const event = eventArr.value.find((e) => e.id == code);
  if (event) {
    return event.type;
  }
};

const initEventMapArr = () => {
  for (let key in eventMap.value) {
    if (key !== "0") {
      eventArr.value.push({ id: parseInt(key), type: eventMap.value[key] });
    }
  }
};

const initDate = () => {
  date.value = [];
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  today.setHours(0, 0, 0, 0);
  tomorrow.setHours(0, 0, 0, 0);
  date.value.push(today, tomorrow);
};
const query = () => {
  const reqObj = {
    startTime: dayjs(date.value[0]).format("YYYY-MM-DD HH:mm:ss"),
    endTime: dayjs(date.value[1]).format("YYYY-MM-DD HH:mm:ss"),
    eventType: eventType.value,
    current: current.value,
    size: size.value,
  };
  axios({
    method: "post",
    url: axiosUrl.value + "/statis/eventHistory",
    data: reqObj,
  }).then((res) => {
    console.log(res);
    let result = res.data;
    if (result.status === "success") {
      tableData.value = result.data.pageData;
      total.value = result.data.total;
    }
  });
};

const reset = () => {
  initDate();
  current.value = 1;
  eventType.value = null;
  query();
};

const back_3d = (row: any) => {
  LinkUE4(row);
};

const selectRow = (row: any, column: any, event: any) => {
  videoUrl.value = row.videoUrl;
  imgAfter.value = row.imgAfter;
  imgBefore.value = row.imgBefore;
  imgMiddle.value = row.imgMiddle;
};

const zoomVideo = () => {
  dialogTableVisible.value = true;
};
// Add this declaration at the beginning of the file or in a global declarations file.
declare global {
  interface Window {
    ue: any; // Replace 'any' with the specific type if known
  }
}
const LinkUE4 = (data: any) => {
  console.log("data", data);
  if (data.eventEndTime != null) {
    data.eventEndTime += ':000'
  }
  if (data.eventStartTime != null) {
    data.eventStartTime += ':000'
  }
  data = JSON.stringify(data);

  if (window.hasOwnProperty("ue")) {
    if (window.ue.ueclass) {
      window.ue.ueclass.linkue4("eventManage", data);
    }

  }
}
</script>

<template>
  <div w-screen h-screen pt8rem fm-sc color-white bg-index>
    <div class="container-box">
      <div w-full h-2.1rem flex justify-around class="select">
        <div z-10 class="type-select-box">
          <span>事件类型：</span>
          <el-select v-model="eventType" placeholder="全部类型" class="input">
            <el-option v-for="item in eventArr" :key="item.id" :label="item.type" :value="item.id">
            </el-option>
          </el-select>
        </div>
        <div class="date-select-box">
          <span>检测时间：</span>
          <el-date-picker class="date-picker" v-model="(date as [Date, Date])" type="datetimerange"
            start-placeholder="开始日期" end-placeholder="结束日期" :default-time="new Date(2000, 1, 1, 12, 0, 0)">
          </el-date-picker>
        </div>
        <div flex z-10 class="button-group">
          <div w7.35rem h1.98rem mr1rem bg-btn-query active:bg-btn-query-active cursor-pointer></div>
          <div w7.35rem h1.98rem bg-btn-reset active:bg-btn-reset-active cursor-pointer></div>
        </div>
      </div>
      <div flex mt2rem class="container">
        <div w51.38rem h38rem ml6rem class="left-box">
          <el-table :data="tableData" class="event-table" highlight-current-row @row-click="selectRow" :row-style="{}"
            :header-row-style="{}" :header-cell-style="{ 'text-align': 'center', 'font-weight': 'normal', }"
            :cell-style="{ 'text-align': 'center', }">
            <el-table-column prop="eventStartTime" label="检测时间">
            </el-table-column>
            <el-table-column label="事件类型">
              <template #default="scope">
                <span>{{ getEventType(scope.row.eventType) }}</span>
              </template>
            </el-table-column>
            <el-table-column label="参与者类别">
              <template #default="scope">
                <span>{{ carMap[scope.row.carType as keyof typeof carMap] }}</span>
              </template>
            </el-table-column>
            <!-- <el-table-column label="操作">
              <template #default="scope">
                <div class="back-box" @click="back_3d(scope.row)">
                  <img class="back-button" src="./img/playBack_btn.png" alt="" />
                  <span style="color: rgba(148, 232, 255, 1)">三维回放</span>
                </div>
              </template>
            </el-table-column> -->
          </el-table>
        </div>
        <div w60.63rem h38rem ml6rem class="right-box">
          <div wfull>
            <div wfull>
              <div wfull h2rem bg-title flex class="video_title">
                <span ml2rem>事件视频</span>
              </div>
              <video wfull h24rem v-if="videoUrl != null" autoplay muted="true" class="video_dom" :poster="img"
                :src="videoUrl" @dblclick="zoomVideo"></video>
            </div>
            <div wfull mt1rem>
              <div wfull h2rem bg-title flex class="video_title">
                <span ml2rem>事件抓拍照</span>
              </div>
              <div flex>
                <div relative w16rem h9.31rem mr1rem v-if="imgBefore != null">
                  <p wfull text-left indent-1rem absolute left-0 top-0 bg-title1>事件前</p>
                  <div absolute left-13rem top-6rem w2.63rem h2.63rem bg-btn-zoom cursor-pointer></div>
                  <img :src="imgBefore" />
                </div>
                <div relative w16rem h9.31rem mr1rem v-if="imgBefore != null">
                  <p wfull text-left indent-1rem absolute left-0 top-0 bg-title1>事件前</p>
                  <div absolute left-13rem top-6rem w2.63rem h2.63rem bg-btn-zoom cursor-pointer></div>
                  <img :src="imgBefore" />
                </div>
                <div relative w16rem h9.31rem v-if="imgBefore != null">
                  <p wfull text-left indent-1rem absolute left-0 top-0 bg-title1>事件前</p>
                  <div absolute left-13rem top-6rem w2.63rem h2.63rem bg-btn-zoom cursor-pointer></div>
                  <img :src="imgBefore" />
                </div>
              </div>
            </div>
            <!-- <div class="pic2">
              <div class="video_title">
                <span>事件前</span>
              </div>
              <img v-if="imgBefore != null" class="video_dom" :src="imgBefore" />
            </div>
            <div class="pic2">
              <div class="video_title">
                <span>事件中</span>
              </div>
              <img v-if="imgMiddle != null" class="video_dom" :src="imgMiddle" />
            </div>
            <div class="pic2">
              <div class="video_title">
                <span>事件后</span>
              </div>
              <img v-if="imgAfter != null" class="video_dom" :src="imgAfter" />
            </div> -->
          </div>
        </div>
        <el-dialog :visible.sync="dialogTableVisible">
          <div class="zoomBox">
            <div class="video_title">
              <span>事件视频</span>
            </div>
            <video autoplay controls muted="true" class="video_dom" poster="./img/placeholder.png"
              :src="videoUrl"></video>
          </div>
        </el-dialog>
      </div>
      <div mt3rem wfull flex justify-center>
        <el-pagination class="car-pagination" background :current-page.sync="current" :page-size="size" :total="total"
          @current-change="query" layout="prev, pager, next">
        </el-pagination>
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
