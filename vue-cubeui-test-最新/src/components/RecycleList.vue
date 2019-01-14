<template>
  <div class="view-wrapper">

    <mt-header title="列表页">
      <mt-button icon="back" slot="left" @click="handleClose">返回</mt-button>

    </mt-header>

  <cube-recycle-list class="list" :size="size" :on-fetch="onFetch" :offset="offset">


    <template slot="item" slot-scope="{ data}">


      <div :id="data.id" class="item" @click="handleClick(data)">


        <div class="avatar" :style="{backgroundImage: 'url(' + (data.avatar || '') + ')'}"></div>
        <div class="bubble">
          <p>{{ data.msg }}</p>
          <div class="meta">
            <time class="posted-date">{{ data.time }}</time>
          </div>
        </div>


      </div>



    </template>


  </cube-recycle-list>





</div>
</template>

<script>
import { Indicator } from 'mint-ui';



export default {
  name: 'RecycleList',
  data () {
    return {
      size: 50,
      offset: 100
    }

  },

  methods: {
    onFetch() {
      let items = []
      return new Promise((resolve) => {
        // 模拟请求 50 条数据，因为 size 设置为 50
        setTimeout(() => {
          for (let i = 0; i < 50; i++) {
            items.push({
              id: i,
              avatar:'https://s3.amazonaws.com/uifaces/faces/twitter/danpliego/128.jpg',
              msg: '这是一条确定的列表信息',
              time: '2018-12-06'
            })
          }
          resolve(items)
        }, 1000)
      })
    },
    handleClick(data) {
      console.log('Item:' + data)
    },
    handleClose: function(){
      console.log("返回")
      this.$router.go(-1)

    },



  }

}
</script>




<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.view-wrapper{
    position: fixed;
    top: 0px;
    left: 0;
    bottom: 0;
    width: 100%;
}
.list{
    margin: 0 auto;
    padding: 0;
    border: 1px solid #ddd;
    list-style-type: none;
    text-align: center;
    background: #eee;
}

.item{
    display: flex;
    padding: 10px 0;
    width: 100%;
    text-align: left;
}

.avatar{
    border-radius: 50%;
    margin-left: 15px;
    margin-right: 6px;
    min-width: 48px;
    width: 48px;
    height: 48px;
    background-image: url('../assets/logo.png');
    background-size: cover;
    outline: none;
}
.bubble{
    padding: 7px 10px;
    color: #333;
    background: #fff;
    box-shadow: 0 3px 2px rgba(0, 0, 0, 0.1);
    position: relative;
    max-width: 420px;
    min-width: 80px;
    margin: 0 20px 0 5px;
}
.meta{
    font-size: 0.8rem;
    color: #999;
    margin-top: 3px;
}
</style>
