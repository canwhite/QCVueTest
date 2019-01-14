<template>
  <div class="hello">

    <mt-header title="标题太长会隐藏">
      <mt-button icon="back" slot="left" @click="handleClose">返回</mt-button>
      <mt-button icon="more" slot="right" @click="more">action</mt-button>
    </mt-header>

      <mu-grid-list class="gridlist-demo" :cols="3">
        <mu-sub-header>{{ msg }}</mu-sub-header>

        <mu-grid-tile v-for="tile, index in list" :key="index">

          <img :src="tile.image" >

          <span slot="title">{{tile.title}}</span>


        </mu-grid-tile>
      </mu-grid-list>

     <mt-actionsheet
        :actions= "data"
        v-model="sheetVisible">
     </mt-actionsheet>






  </div>
</template>

<script>
import { Indicator } from 'mint-ui';
import breakfast from '../assets/logo.png';
import burger from '../assets/logo.png';
import camera from '../assets/logo.png';
import hats from '../assets/logo.png';
import honey from '../assets/logo.png';
import morning from '../assets/logo.png';
import vegetables from '../assets/logo.png';
import waterPlant from '../assets/logo.png';


export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '配合mint-ui，加了一些muse-ui的网格操作',
      data:[{name:'拍照',method:this.getCamera},{name:'从相册中选择',method:this.getLibrary}],
      sheetVisible:false,
      list: [{
        image: breakfast,
        title: 'Breakfast',
        author: 'Myron'
      }, {
        image: burger,
        title: 'Burger',
        author: 'Linyu'
      }, {
        image: camera,
        title: 'Camera',
        author: 'ruolin'
      }, {
        image: hats,
        title: 'Hats',
        author: 'kakali'
      }]
    }
  },

  methods: {
    handleClose: function(){
      console.log("返回")
      this.$router.push({name: 'Main'})

    },
    more: function(){
      this.sheetVisible = true;
    },
    getCamera: function(){
      console.log("打开照相机")
    },
    getLibrary: function(){
      console.log("打开相册")
    },
    filesAdded(files) {
      let hasIgnore = false
      const maxSize = 1 * 1024 * 1024 // 1M
      for (let k in files) {
        const file = files[k]
        if (file.size > maxSize) {
          file.ignore = true
          hasIgnore = true
        }
      }
      hasIgnore && this.$createToast({
        type: 'warn',
        time: 1000,
        txt: 'You selected >1M files'
      }).show()
    }
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.gridlist-demo{
  height: 450px;
  overflow-y: auto;
}
</style>
