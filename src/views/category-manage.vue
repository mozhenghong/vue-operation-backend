<!--类目管理-->
<template>
  <div class="catelog">
   <asideCommon />
    <div class="main">
     <topbarCommon />
      <div class="header">
        <div>
          <h4>类目管理</h4>
          <p>类目管理</p>
        </div>
      </div>
      <div class="body">
        <div class="mainModule">
          <div class="level">
            <div class="one">
              <div class="catelog-container">
                <div>一级类目</div>
              </div>

              <button @click="active">+ 添加</button>
            </div>
            <div class="two">
              <div>二级类目</div>
              <button>+ 添加</button>
            </div>
            <div class="three">
              <div>三级类目</div>
              <button>+ 添加</button>
            </div>
            <div class="four">
              <div>类目属性管理</div>
              <button>+ 添加</button>
            </div>
          </div>
          <div class="alert" v-bind:class="{active:isactive}">
            <div class="alert-header">添加类目</div>
            <div class="alert-body">
              <el-form
                :model="ruleForm"
                :rules="rules"
                ref="ruleForm"
                label-width="100px"
                class="demo-ruleForm"
              >
                <el-form-item label="类目级别">
                  <el-input placeholder="一级类目" v-model="input1" :disabled="true"></el-input>
                </el-form-item>

                <el-form-item label="类目名称" prop="name">
                  <el-input v-model="ruleForm.name" placeholder="请输入类目名称"></el-input>
                </el-form-item>
                <el-form-item label="类目状态" prop="region">
                  <el-select v-model="ruleForm.region" class>
                    <el-option label="启用" value="shanghai" selected></el-option>
                    <el-option label="未启用" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item class="alert-button">
                  <el-button @click="resetForm('ruleForm')">取消</el-button>
                  <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </div>
        <p>Copyright © </p>
      </div>
    </div>
  </div>
</template>

<script>
import asideCommon from '../components/asideCommon'
import topbarCommon from "../components/topbarCommon";
export default {
  data() {
    return {
      current: 10,
      isactive: false,
      input1: "",
      ruleForm: {
        name: "",
        region: ""
      },
      rules: {
        name: [{ required: true, message: "请输入类目名称", trigger: "blur" }],
        region: [
          { required: true, message: "请选择类目状态", trigger: "change" }
        ]
      }
    };
  },
  components: {asideCommon,topbarCommon},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.isactive = false;
    },
    active() {
      this.isactive = true;
    },
    skip(path) {
      this.$router.push({ path });
    },
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
.catelog {
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
        .level {
          margin-top: 30px;
          display: flex;
          margin-left: 36px;
          div {
            display: flex;
            align-items: center;
            font-size: 16px;
            button {
              margin-left: 87px;
              margin-right: 102px;
              width: 70px;
              height: 32px;
              color: #999999;
              background: none;
              border: 1px dashed #e8e8e8;
              border-radius: 4px;
            }
          }
        }
        .alert {
          display: none;
          position: absolute;
          background: #fff;
          z-index: 1;
          top: 16px;
          left: 50%;
          margin-left: -235px;
          width: 470px;
          height: 412px;
          border-radius: 5px;
          box-shadow: 10px 10px 9px 0px rgba(199, 199, 199, 0.83);
          .alert-header {
            height: 56px;
            background: #eceded;
            font-size: 16px;
            padding-left: 22px;
            display: flex;
            align-items: center;
          }
          .alert-body {
            margin-top: 35px;
            margin-left: 30px;
            margin-right: 44px;
            .alert-button {
              margin-top: 70px;
              button {
                width: 90px;
                height: 40px;
                margin-right: 20px;
              }
            }
          }
        }
        .alert.active {
          display: block;
        }
      }
      p {
        margin: 20px;
      }
    }
  }
}
</style>




