<!-- 配置 -->
<template>
  <div class="home">
    <asideCommon/>
    <div class="main">
      <topbarCommon/>
      <div class="header">
        <div>
          <h4>添加，实验室</h4>
        </div>
      </div>
      <div class="body">
        <div class="mainModule">
          <div class="from-div">
            <el-form>
              <el-form-item label="实验室配置">
                <el-select v-model="form.region" placeholder="普通版 ">
                  <el-option label="普通版" value="putong"></el-option>
                  <el-option label="旗舰版" value="qijian"></el-option>
                  <el-option label="自定义" value="zidingyi"></el-option>
                </el-select>
              </el-form-item>
              <div class="regiondiv">
                <el-checkbox-group v-model="checkList">
                  <el-checkbox label="用户管理"></el-checkbox>
                  <el-checkbox label="实验室管理"></el-checkbox>
                </el-checkbox-group>
              </div>
              <div class="radiodiv">
                <el-form-item label="是否独立部署">
                  <el-checkbox-group>
                    <el-radio-group v-model="radio2">
                      <el-radio :label="6">是</el-radio>
                      <el-radio :label="3">否</el-radio>
                    </el-radio-group>
                  </el-checkbox-group>
                </el-form-item>
              </div>
              <div class="submitdiv">
                <el-form-item>
                  <el-button>取消</el-button>
                  <el-button type="primary" @click="onSubmit">提交</el-button>
                </el-form-item>
              </div>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import asideCommon from "@/components/asideCommon";
import topbarCommon from "@/components/topbarCommon";

export default {
  components: { asideCommon, topbarCommon },

  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      checkList: ["用户管理", "实验室管理"],
      radio2: 3
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
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
      padding: 42px 0 42px 53px;
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
        .from-div {
          margin-top: 40px;
          position: relative;
          left: 32%;
          .submitdiv {
            position: relative;
            left: 20%;
            top: 230px;
          }
          .regiondiv {
            position: relative;
            left: 10%;
            top: 2%;
          }
          .radiodiv {
            position: relative;
            left: 0%;
            top: 70px;
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


