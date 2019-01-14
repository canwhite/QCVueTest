<!-- /.vue -->
<template>


<div class="page-tabbar">



  <div class="page-wrap">

    <mt-tab-container class="page-tabbar-container" v-model="selected">


      <mt-tab-container-item id="首页">

        <mt-header title="vue首页">
        </mt-header>

        <!-- 根据名字跳转到详情页 -->
        <mt-cell
          style="background-size: 100% 0px;"
          title="九宫格"
          :to="{name:'Detail',params:{'id':1112}}"
          is-link
          value="链接跳转">
        </mt-cell>

        <!-- 根据名字跳转到详情页 -->
        <mt-cell
          style="background-size: 100% 0px;"
          title="navbar"
          :to="{name:'Nav',params:{'id':1112}}"
          is-link
          value="链接跳转">
        </mt-cell>

        <!-- 根据路径跳转到列表页 -->
        <mt-cell style="background-size: 100% 0px;" title="recycleList" :to="{name:'List',params:{id:1112,mode:'view'}}" is-link >
          <img src="./assets/logo.png" width="24" height="24">
          <span>跳转列表页</span>
          <img slot="icon" src="./assets/logo.png" width="24" height="24">
        </mt-cell>




        <!-- label的使用 -->
        <mt-cell style="background-size: 100% 0px;" title="标题" label="label显示在标题下边">
          <mt-button @click="more">Indicator按钮</mt-button>
        </mt-cell>


        <!-- for循环添加cell -->
        <mt-cell style="background-size: 100% 0px;" v-for="n in 25" :title="'for循环列表' + n"> value </mt-cell>


      </mt-tab-container-item>








      <mt-tab-container-item id="发现">

        <mt-header title="vue发现">
        </mt-header>
        <mt-cell style="background-size: 100% 0px;" v-for="n in 7" :title="'发现 ' + n" />
      </mt-tab-container-item>





      <mt-tab-container-item id="我的">

          <mt-header title="vue我的">
          </mt-header>

          <div class="page-part">
            <mt-cell style="background-size: 100% 0px;" v-for="n in 10" :title="'我的 ' + n" />
          </div>



          <router-link to="/">
            <mt-button style="margin-left:5%;margin-right:5%;width:90%; background-color:rgb(32,169,242)" @click="showDatePicker" type="danger" size="large">时间选择器</mt-button>
          </router-link>


        </mt-tab-container-item>

      </mt-tab-container>


    </div>







    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="首页">
        <img slot="icon" src="./assets/logo.png">
        首页
      </mt-tab-item>

      <mt-tab-item id="发现">
        <img slot="icon" src="./assets/logo.png">
        发现
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="./assets/logo.png">
        我的
      </mt-tab-item>
    </mt-tabbar>

</div>
</template>


<script>

import { Indicator } from 'mint-ui';


export default {

    data() {
        return{
      selected:'首页'
    };
    },

    methods: {

    more: function(){
      console.log("更多")
      Indicator.open('加载中...');
      setTimeout(this.closeIndicator,3000);
    },

    closeIndicator(){
      Indicator.close();
    },

    showDatePicker() {
      if (!this.datePicker) {
        this.datePicker = this.$createDatePicker({
          title: 'Date Picker',
          min: new Date(2008, 7, 8),
          max: new Date(2020, 9, 20),
          value: new Date(),
          onSelect: this.selectHandle,
          onCancel: this.cancelHandle
        })
      }

      this.datePicker.show()
    },
    selectHandle(date, selectedVal, selectedText) {
      this.$createDialog({
        type: 'warn',
        content: `Selected Item: <br/> - date: ${date} <br/> - value: ${selectedVal.join(', ')} <br/> - text: ${selectedText.join(' ')}`,
        icon: 'cubeic-alert'
      }).show()
    },
    cancelHandle() {
      this.$createToast({
        type: 'correct',
        txt: 'Picker canceled',
        time: 1000
      }).show()
    }
  }
}

</script>


<style>
  .page-tabbar {
    overflow: hidden;
    height: 100vh;
  }
  .page-wrap {
    overflow:scroll;
    height:100%;

  }
  .page-tabbar-container{

    padding-bottom:100px;

  }
</style>


