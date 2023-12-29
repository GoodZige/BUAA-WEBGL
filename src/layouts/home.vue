<script setup lang="ts">
defineOptions({
  name: 'HomeLayout',
})
const router = useRouter()
// 获取当前路由url
const currentPath = computed(() => router.currentRoute.value.path)
console.log(currentPath);
</script>

<template>
  <main h-screen overflow-hidden text="center gray-700 dark:gray-200">
    <div absolute left-0 top-0 w-screen h-screen :class="{ 'bg-main': true }">
      <div absolute left-13rem top-2.8rem w10.04rem h3.31rem cursor-pointer
        :class="currentPath === '/holography' ? 'bg-btn1-active' : 'bg-btn1'"
        @click="() => router.push('/holography')"></div>
      <div absolute left-25rem top-2.8rem w10.04rem h3.31rem cursor-pointer
        :class="currentPath === '/historyEvent' ? 'bg-btn2-active' : 'bg-btn2'"
        @click="() => router.push('/historyEvent')"></div>
      <div absolute right-25rem top-2.8rem w10.04rem h3.31rem cursor-pointer
        :class="currentPath === '/statistic' ? 'bg-btn3-active' : 'bg-btn3'"
        @click="() => router.push('/statistic')"></div>
      <div absolute right-13rem top-2.8rem w10.04rem h3.31rem cursor-pointer
        :class="currentPath === '/signalControl' ? 'bg-btn4-active' : 'bg-btn4'"
        @click="() => router.push('/signalControl')"></div>
      </div>
      <RouterView />
  </main>
</template>
<style lang="less" scoped></style>