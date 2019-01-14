<template>
  <div id="app">
    <!-- 页头 -->
  <el-container>

    <el-header style="height:80px;line-height:80px">
      <MyHeader header="图书" subHeader="Vue CRUD示例"></MyHeader>
    </el-header>


    <el-main>

      <el-row>

        <el-col :span="5" align="center"><div class="grid-content bg-purple-light">共<span style="font-size:18px">{{books.length}}</span>本书</div></el-col>

        <el-col :span="11" align="center">

          <MySearch :terms="terms" pl="请输入您要筛选的书名" @search="terms=$event"></MySearch>

        </el-col>


        <el-col :span="4" align="center">

          <div class="grid-content bg-purple-light">

            <el-button icon="el-icon-delete" @click="delMulData()"></el-button>

          </div>
        </el-col>

        <el-col :span="4" align="center">

          <div class="grid-content bg-purple-light">

            <el-button icon="el-icon-plus" @click="dialogVisible = true"></el-button>
          </div>

        </el-col>


      </el-row>

    <el-table
      :data="bookFilter"
      style="width: 100%"
      stripe
      ref="multipleTable"
      @selection-change="handleSelectionChange"
      :default-sort ="{prop:'published',order:'descending'}"
      >

      <el-table-column
        type="selection"
        min-width="5%">
      </el-table-column>

      <el-table-column
        label="书名"
        min-width="55%"
        prop="name"
        sortable
        >

        <template slot-scope="scope">
          <i class="el-icon-document"></i>
          <span style="margin-left: 10px">{{scope.row.name}}</span>
          <p>{{ scope.row.authors | join }}</p>
        </template>

      </el-table-column>


      <el-table-column
        prop="category"
        label="类别"
        sortable
        min-width="20%">
      </el-table-column>


      <el-table-column
        prop="published"
        label="出版日期"
        sortable
        min-width="20%"
        >
      </el-table-column>
    </el-table>

    <el-dialog
      title="dialog测试"
      :visible.sync="dialogVisible"
      width="60%"

      :before-close="handleClose">

      <div style="width=60%">对话框标题范德雷克；高速路；奋斗高考了；水淀粉；给；得房率可高了；快点放开了苹果地方；两个地方哭了；赶快来；的反馈给力的反馈了；隔开；里的反馈；临时工快乐；的反馈了；上公开了；范德雷克；给的反馈了；赶快发动口；赶快来；的反馈了；给的反馈了；赶快来；的反馈了；g</div>
      <div>
        <input v-validate="'required|mobile'" name="mobile" type="text" placeholder="mobile">
        <span v-show="errors.has('mobile')"  >{{ errors.first('mobile') }}</span>

      </div>


      <div>对话框标题</div>
      <div>对话框标题</div>
      <div>对话框标题</div>
      <div>对话框标题</div>
      <div>对话框标题</div>
      <div>对话框标题</div>
      <div>对话框标题</div>
      <div>可以看出来高度是自适应的</div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
       </span>

    </el-dialog>


    </el-main>


  </el-container>


  </div>
</template>

<script>
    import faker from "./fixtures/faker.js"
    import MyHeader from "./components/pageheader.vue"
    import MySearch from "./components/search-box.vue"
    import _ from "lodash"
    import { mapState } from 'vuex'


    export default {
      name: 'App',
      data(){
        return{
          books:undefined,
          terms:"",
          multipleSelection:[],
          dialogVisible:false,
          localData:"",

        }
      },

      components:{
        MyHeader,
        MySearch,
      },



      created(){
        this.books = faker.getBookData()
        console.log(this.books)
        //如果已经存了，就会存储下来，我们在这里直接接收一下
        this.localData = window.localStorage.getItem('qcLogin')
        console.log(this.localData)

      },


      filters:{
            join(args){
                return _.join(args,',')
            }
      },


      /*
         computed是在HTML DOM加载后马上执行的，如赋值；
         methods则必须要有一定的触发条件才能执行，如点击事件；
         watch呢？它用于观察Vue实例上的数据变动。对应一个对象，键是观察表达式，值是对应回调。值也可以是方法名，或者是对象，包含选项。
      */
      computed: {
        bookFilter () {
          //用函数式将书名包含terms内容的数组读出来，否则返回原数组
          return this.terms.length ? this.books.filter(x => x.name.indexOf(this.terms) > -1) : this.books
        },
        ...mapState([
            'login'
        ]),

        vuex(){
          return  this.localData.length >0 ? this.localData:this.login
        }


      },

      methods:{

      handleClose(done){
        this.$confirm('确认关闭?').then(_=>{ done();}).catch(_=>{})
      },

      //测试vuex
      vuexClick(){


        this.$store.commit("loginchange",'isLogin')
        //重新输出
        console.log(this.localData)

      },

      delMulData(){
        //拿到选中的数据
        let val = this.multipleSelection
        //如果选中数据存在
        if(val){
            //将选中数据遍历
            val.forEach((value,index) =>{
              //遍历源数据
              this.books.forEach((v,i)=>{
                //如果选中数据和源数据的某一条唯一标识符相等，删除对应的源数据
                //如果有判断语句，最好不要使用_.forEach 容易从迭代中跳出
                if(_.includes(value.isbn,v.isbn)){
                  this.books.splice(i,1)
                }
              })
          })
        }
        //清除选中状态
        this.$refs.multipleTable.clearSelection()

      },
      //得到选中数据
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
      }
    }
</script>

<style>
  .el-main{
    display:block;
  }
  .el-row {
    margin-bottom: 0px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #f2f2f2;
  }
  .grid-content {
    border-radius: 0px;
    height: 50px;
    line-height:50px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

</style>
