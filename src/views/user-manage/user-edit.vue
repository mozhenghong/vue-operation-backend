<template>
  <div class="userEdit">
    <asideCommon/>
    <div class="main">
      <topbarCommon/>
      <div class="header">
        <img
          src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
          alt="avatar"
        >
        <div>
          <h4>用户详情</h4>
          <p>用户管理/用户详情</p>
        </div>
      </div>
      <div class="body">
        <div class="mainModule">
          <div class="editForm">
            <el-form ref="form" :model="form" label-width="90px" size="mini">
              <el-form-item label="用户名：" class="input">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="昵称：">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="性别：">
                <el-radio-group v-model="form.resource">
                  <el-radio label="男"></el-radio>
                  <el-radio label="女"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="生日：">
                <el-col :span="24">
                  <el-date-picker
                    type="date"
                    placeholder="选择日期"
                    v-model="form.date1"
                    style="width: 100%;"
                  ></el-date-picker>
                </el-col>
              </el-form-item>
              <el-form-item label="手机号：">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="邮箱：">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="居住地：">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="个人签名">
                <el-input type="textarea" v-model="form.desc"></el-input>
              </el-form-item>
              <el-form-item label="身份：">
                <el-select v-model="form.region" placeholder="请选择身份">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="工号：">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="用户照片">
                <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload"
                >
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>

              <el-form-item>
                <el-button type="primary" @click="onSubmit" class="createButton">提交</el-button>
                <el-button class="cancelButton">取消</el-button>
              </el-form-item>
            </el-form>
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
      imageUrl: ""
    };
  },
  components: { asideCommon, topbarCommon },
  methods: {
    skip(path) {
      this.$router.push({ path });
    },
    onSubmit() {
      console.log("submit!");
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
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
.userEdit {
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
        .editForm {
          margin: 20px 300px;
          .el-form-item {
            margin-bottom: 16px;
          }
          .avatar-uploader {
            width: 104px;
            height: 104px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #fafafa;
            border: 1px dashed #d9d9d9;
            border-radius: 5px;
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

