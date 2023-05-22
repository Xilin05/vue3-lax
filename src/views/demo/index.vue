<template>
  <div class="demo-container">
    这里是demo

    <h1 className="spinMe">Scroll down..</h1>

    <!-- <el-button @click="unMountedLax">卸载</el-button> -->
    <div class="btn-danger" @click="unMountedLax">卸载</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
// import { ElButton } from 'element'
import lax from 'lax.js'

const unMountedLax = () => {
  lax.removeElements('.spinMe')
}

onMounted(() => {
  // Setup lax
  lax.init()

  lax.addDriver('scrollY', function () {
    return window.scrollY
  })

  // Add your elements
  lax.addElements(
    '.spinMe',
    {
      scrollY: {
        rotate: [
          [0, 1e9],
          [0, 1e9]
        ]
      }
    },
    []
  )
})
</script>

<style scoped lang="scss">
.demo-container {
  height: 10000px;

  h1 {
    font-family: sans-serif;
    text-align: center;
    top: calc(50vh - 40px);
    position: fixed;
    width: 100vw;
    font-size: 80px;
    margin: 0;
    color: #a26ddc;
  }
}
</style>
