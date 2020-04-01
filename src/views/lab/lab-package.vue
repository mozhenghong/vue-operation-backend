<!--套餐配置-->
<template>
  <div class="labpackage">
    <asideCommon/>
    <div class="main">
      <topbarCommon/>
      <div class="header">
        <div>

          <h4>实验室管理/套餐配置</h4>
          <p>套餐配置</p>
        </div>
      </div>
      <div class="body">
        <div class="mainModule">
          <div class="charge">
            <label>
              实验室名称：
              <input type="text" placeholder="请输入">
            </label>
         
            <button class="chargeButton">查询</button>
            <button class="resetButton">重置</button>
          </div>
          <button class="addButton">+ 添加</button>
          <div class="tabelContainer">
            <div class="table">
              <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="id" label="用户id" width="180"></el-table-column>
                <el-table-column prop="name" label="用户名" width="180"></el-table-column>
                <el-table-column prop="address" label="用户昵称"></el-table-column>
                <el-table-column prop="address" label="手机号码"></el-table-column>
                <el-table-column fixed="right" label="操作" width="170">
                  <template slot-scope="scope">
                    <el-button type="text" size="small">查看</el-button>
                    <el-button type="text" size="small">编辑</el-button>
                    <el-button
                      @click.native.prevent="deleteRow(scope.$index, tableData)"
                      type="text"
                      size="small"
                    >移除</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
            <div class="pagination">
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage4"
                :page-sizes="[100, 200, 300, 400,600]"
                :page-size="5"
                layout=" total,prev,pager,next,sizes,jumper "
                :total="1000"
              ></el-pagination>
            </div>
          </div>
        </div>
        <p>Copyright © ‘’</p>
      </div>
    </div>
  </div>
</template>

<script>
import asideCommon from "@/components/asideCommon";
import topbarCommon from "@/components/topbarCommon";
export default {
  data() {
    return {
      current: 10,
      tableData: [
        {
          id: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          id: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333
        },
        {
          id: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333
        },
        {
          id: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333
        },
        {
          currentPage1: 5,
          currentPage2: 5,
          currentPage3: 5,
          currentPage4: 4
        }
      ],
      formInline: {
        user: "",
        region: ""
      }
    };
  },
  components: { asideCommon, topbarCommon },
  methods: {
    skip(path) {
      this.$router.push({ path });
    },
    handleClick(row) {
      console.log(row);
    },

    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    onSubmit() {
      console.log("submit!");
    },
    mainModule: function() {
      this.$router.push({ path: "/addLab" });
      console.log(this.$route);
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
ul,
ol {
  list-style: none;
}
.labpackage {
  display: flex;
  height: 100vh;
  font-size: 14px;
  .main {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    .header {
      border-bottom: 1px solid #e9e9e9;
      display: flex;
      align-items: center;
      padding: 20px 0 20px 33px;
      img {
        width: 56px;
        height: 56px;
        margin-right: 24px;
      }
      div {
        p {
          color: #aeaeae;
        }
        h4 {
          font-size: 20px;
          padding-bottom: 16px;
        }
      }
    }
    .body {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: #f0f2f5;
      .mainModule {
        width: 83.33vw;
        height: 100%;
        background: #fff;
        margin: 26px 40px 10px 24px;
        border-radius: 2px;
        position: relative;
        .charge {
          padding-top: 24px;
          padding-left: 31px;
          label {
            font-size: 16px;
            margin-right: 51px;
            input {
              width: 20.8vw;
              height: 32px;
              padding-left: 10px;
              border: 1px solid #d9d9d9;
              border-radius: 5px;
            }
          }
          button {
            margin-left: 9px;
            width: 65px;
            height: 32px;
            border: none;
            border-radius: 5px;
          }
          .chargeButton {
            background: #1890ff;
            color: #fff;
          }
          .resetButton {
            border: 1px solid #d9d9d9;
            background: #fff;
          }
        }
        .addButton {
          width: 79px;
          height: 32px;
          border: none;
          border-radius: 5px;
          background: #1890ff;
          color: #fff;
          margin: 24px 0 24px 31px;
        }
        .tabelContainer {        
          margin: 25px 33px 31px 33px;
          .table {
           .el-table thead{
             
            }
          }
          .pagination{
            margin-top:10%;
            margin-left:50%;
          }
        }
      }
      p {
        margin: 20px;
      }
    }
  }
}
</style>

