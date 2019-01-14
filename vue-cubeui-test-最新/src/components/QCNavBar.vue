<template>
  <div id="nav">

    <mt-header title="列表页">
      <mt-button icon="back" slot="left" @click="handleClose">返回</mt-button>
    </mt-header>


  <div class="wrapper">
    <!-- navbar -->
    <mt-navbar class="page-part" v-model="selected">

      <mt-tab-item id="1" style="margin-bottom:0px">选项一</mt-tab-item>

      <mt-tab-item id="2" style="margin-bottom:0px">选项二</mt-tab-item>

      <mt-tab-item id="3" style="margin-bottom:0px">选项三</mt-tab-item>

    </mt-navbar>



    <!-- tabcontainer -->
    <mt-tab-container v-model="selected">

      <mt-tab-container-item  id="1">
        <mt-cell style="background-size: 100% 0px;" v-for="n in 10" :title="'内容 ' + n" />
      </mt-tab-container-item>



      <mt-tab-container-item id="2">
        <mt-cell style="background-size: 100% 0px;" v-for="n in 4" :title="'测试 ' + n" />
      </mt-tab-container-item>



      <mt-tab-container-item id="3">
        <mt-cell style="background-size: 100% 0px;" v-for="n in 6" :title="'选项 ' + n" />
      </mt-tab-container-item>


    </mt-tab-container>

    </div>


  </div>
</template>

<script>

import { Navbar, TabItem } from 'mint-ui';
export default {
  name: 'Nav',
  data(){
    return{
      selected:'1'
    }
  },
  methods:{
    handleClose: function(){
      console.log("返回")
      this.$router.go(-1)

    },
  }
}
</script>

<style scope>

</style>

