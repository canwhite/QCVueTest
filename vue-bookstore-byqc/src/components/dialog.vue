<template>
  <div class="dialog-wrapper">

    <div class="dialog">


      <div  class="close-dev" @click="closeDialog">
      </div>


      <div class="message">
        <span>{{bookName}}</span>
      </div>


    </div>


  </div>
</template>

<script>
  import "./dialog.less"
  export default {
    props:['bookName'],
    data(){
      return {}
    },
    methods:{
      closeDialog(){
         //给父组件传参
         this.$emit('closeDialog')
      }
    }
  }
</script>




