<template>

<div class="grid-content bg-purple-light">
    <el-input
        :placeholder="pl"
        prefix-icon="el-icon-search"
        @keyup.enter.native="$emit('search',$event.target.value)"
        :value="terms"
    >
    </el-input>
</div>


</template>


<script>

export default{
    props:["terms","pl"]
}
</script>


<style>
  .bg-purple-light {
    background: #f2f2f2;
  }
  .grid-content {
    border-radius: 0px;
    height: 50px;
    line-height:50px;
  }
</style>