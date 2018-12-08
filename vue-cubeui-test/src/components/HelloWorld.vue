<template>
  <div class="hello">

    <mt-header title="标题太长会隐藏">
      <mt-button icon="back" slot="left" @click="handleClose">返回</mt-button>
      <mt-button icon="more" slot="right" @click="more">action</mt-button>
    </mt-header>



    <div class="sudoku_row">
        <div class="sudoku_item " :class="curSelect==sudoku.id?'opacity':''   "v-for="(sudoku,index) in sudokus"  :key="index" @click="start(index)">
            <img :src="sudoku.img_src" width="40" height="40" >
            {{sudoku.name}}
        </div>
    </div>

<cube-upload
  ref="upload"
  :action="action"
  :simultaneous-uploads="1"
  :process-file="processFile"
  @file-submitted="fileSubmitted"
  style = "padding-left:15px"

   />


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

//压缩方法的导入
import compress from '../modules/image'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '配合mint-ui，加了一些muse-ui的网格操作',
      data:[{name:'拍照',method:this.getCamera},{name:'从相册中选择',method:this.getLibrary}],
      sheetVisible:false,
      sudokus: [
      {
        img_src: breakfast,
        name: 'Breakfast',
        id:0
      },
      {
        img_src: breakfast,
        name: 'Breakfast',
        id:1
      },
      {
        img_src: breakfast,
        name: 'Breakfast',
        id:2
      },
      {
        img_src: breakfast,
        name: 'Breakfast',
        id:3
      },
      {
        img_src: breakfast,
        name: 'Breakfast',
        id:4
      },
      {
        img_src: breakfast,
        name: 'Breakfast',
        id:5
      },
      {
        img_src: breakfast,
        name: 'Breakfast',
        id:6
      }
      ],
      curSelect:null,
      action: {
        target: '//jsonplaceholder.typicode.com/photos/',
        prop: 'base64Value'
      }
    }
  },

  methods: {

    //压缩图片并通过base64上传，也可以只是压缩，可以和下边配合
    processFile(file, next) {
      compress(file, {
        compress: {
          width: 1600,
          height: 1600,
          quality: 1
        }
      }, next)
    },
    fileSubmitted(file) {
      file.base64Value = file.file.base64
    },






    //这个是直接上传用到的方法
    /*
    <cube-upload
      action="//jsonplaceholder.typicode.com/photos/"
      :simultaneous-uploads="1"
      @files-added="filesAdded" />
    */
    filesAdded(files) {
      let hasIgnore = false
      const maxSize = 5 * 1024 * 1024 // 5M
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
        txt: 'You selected >5M files'
      }).show()
    },



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

        start:function(e){

            console.log("点击了按钮")
            debugger
            var that = this;
            var list = that.sudokus;
            for (var i = 0, len = list.length; i < len; ++i) {
                if (list[i].id == e) {
                    that.curSelect = i;
                          console.log("======" + that.curSelect);
                          that.curSelect= null;
                }
            }
        },

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.gridlist-demo{
  height: 450px;
  overflow-y: auto;
}
.sudoku_row{
  display: flex;
  align-items: center;
  width:100%;
  flex-wrap: wrap;
}
.sudoku_item{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width:25%;
  padding-top: 10px;
  padding-bottom: 10px;
}
.opacity{
  opacity: 0.4;
  background: #e5e5e5;
}
.sudoku_item img{
  margin-bottom: 3px;
  display: block;
}



</style>
