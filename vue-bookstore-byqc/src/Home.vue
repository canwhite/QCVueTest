<!-- /home.vue -->
<template>
    <div v-if="page_data">

        <div class="section">
            <!-- 热门推荐 -->
            <Slider :slides="page_data.top"></Slider>

            <!-- 快讯 -->
            <Announcement :label="page_data.announcement.label" :content="page_data.announcement.text"></Announcement>

        </div>


        <div class="section">
            <!-- 新书上架 -->
            <BookList :books="page_data.promotions"
                      heading="最新更新"
                      @select="preview($event) ">
            </BookList>

        </div>

        <div class="section">
            <!-- 编辑推荐 -->
            <BookList :books="page_data.recommended"
                      heading="编辑推荐">
            </BookList>
        </div>

        <div class="section" v-if="vm.showDialog">

            <Dialog @closeDialog="close" :bookName="selected.title">


            </Dialog>
        </div>


    </div>
</template>



<style>

</style>

<script type="text/ecmascript-6">

    import Slider from "./components/slider.vue"
    import faker from "./fixtures/faker"
    import Announcement from "./components/announcement.vue"
    import BookList from "./books/booklist.vue"
    import Dialog from "./components/dialog.vue"


    import qs from 'qs'
    import axios from 'axios'


    let reqUrl = 'http://192.168.1.180:93/byxwebsite/api/getNewsByType';
    let reqParams = {
      type: 7,
      limit:6,
      page:1
    }
    export default{
        //data好像必须是一个函数
        data () {
            return {
                page_data: undefined,
                selected:undefined,
                testStr:undefined,
                vm: {
                showDialog: false,
                }

            }
        },
        created() {
            this.page_data = faker.getHomeData()

        },
        mounted(){
            axios.post(reqUrl, qs.stringify(reqParams)).then(response => {
                this.testStr = response
            },error =>{
                this.testStr = error
            })
        },

        components: {Slider,Announcement,BookList,Dialog},
        methods:{
            preview(book){
                this.selected = book
                this.vm.showDialog= true
            },
            close(){
                this.vm.showDialog = false
            }

        }
    }
</script>
