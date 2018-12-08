<!-- /.vue -->
<template>
<div>

    <mt-header title="首页">
    </mt-header>

    <!-- 根据名字跳转到详情页 -->

    <mt-cell
    title="标题文字"
      :to="{name:'Detail',params:{'id':1112}}"
      is-link
      value="链接跳转"
    >
    </mt-cell>

    <!-- 根据路径跳转到列表页 -->
    <mt-cell title="列表" :to="{name:'List',params:{id:1112,mode:'view'}}" is-link >
        <img src="./assets/logo.png" width="24" height="24">
        <span>跳转列表页</span>
        <img slot="icon" src="./assets/logo.png" width="24" height="24">
    </mt-cell>



    <!-- label的使用 -->
    <mt-cell title="标题" label="label显示在标题下边">
        <mt-button @click="more">Indicator按钮</mt-button>
    </mt-cell>


    <!-- for循环添加cell -->
    <mt-cell v-for="n in 10" :title="'for循环列表' + n"> value </mt-cell>


</div>
</template>


<script>

import { Indicator } from 'mint-ui';


export default {

    methods: {

    more: function(){
      console.log("更多")
      Indicator.open('加载中...');
      setTimeout(this.closeIndicator,3000);
    },

    closeIndicator(){
      Indicator.close();
    }

  }


}

</script>


<style>
</style>


