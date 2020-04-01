<!-- 添加实验室 -->
<template>
 <div class="home">
    <asideCommon />
    <div class="main">
      <topbarCommon />
      <div class="header">
       
        <div>
          <h4>添加，实验室</h4>
    
        </div>
      </div>
      <div class="body">
        <div class="mainModule">
           <div class="from-div">
              <el-form ref="form" :model="form" label-width="96px">
                <el-form-item label="实验室名称:">
                  <el-input v-model="form.labename" placeholder="请输入名称"></el-input>
                </el-form-item>

                <el-form-item label="实验室编码:">
                  <el-input v-model="form.labecode" placeholder="1001"></el-input>
                </el-form-item>
                <el-form-item label="超级管理员:">
                  <el-input v-model="form.labeadmin" placeholder="admin"></el-input>
                </el-form-item>
                <el-form-item label="密码：" class="labpassword">
                  <el-input placeholder="123456" v-model="input11" show-password></el-input>
                </el-form-item>

                <el-form-item label="手机号：">
                  <el-input v-model="form.mobile" placeholder="请输入超级管理员手机号"></el-input>
                </el-form-item>

                <el-form-item label="实验室说明：">
                  <el-input
                    class="labdesc"
                    type="textarea"
                    v-model="form.labedesc"
                    placeholder="请输入说明"
                  ></el-input>
                </el-form-item>

                <el-form-item label="上传图片：">
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
                <el-form-item label="实验室后台网址：" label-width="125px">
                  <el-input v-model="form.labbackurl" placeholder="URL"></el-input>
                </el-form-item>
                <el-form-item label="前台访问网址：" label-width="125px">
                  <el-input v-model="form.laborgurl" placeholder="URL"></el-input>
                </el-form-item>
                <el-form-item class="submit-button">
                  <el-button>取消</el-button>
                  <el-button class="next" type="primary" @click="onSubmit">下一步</el-button>
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
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
      this.$router.push({ path: "/views/lab/add-lab/lab-config" });
    }
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
};
</script>
<style lang="scss" scoped>

.from-div {
  width: 50%;
  position: relative;
  left: 20%;
  height: 100%;
}
#app .main .body .mainModule {
  width: 97%;
  height: 80%;
  background: #fff;
  margin: 25px;
  margin-bottom: 10%;
  margin-left: 25px;
  border-radius: 5px;
  padding: 10px;
}
.submit-button el-button {
  width: 200%;
}
.submit-button {
  position: absolute;
  left: 9%;
}

.submit-button .next {
  position: absolute;
  left: 160%;
}
#app .main .topbar {
  height: 9%;
  border-bottom: 1px solid #e9e9e9;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 105px;
  height: 100px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}

#app .main .header p {
  padding: 16px 16px - 40px;
}
.el-icon-plus:before {
  position: relative;
  top: 34%;
  content: "\E62B";
}
.labpassword {
  display: inline-block;
  width: 80%;
}
.pushpassword {
  position: absolute;
  top: 0%;
  left: 110%;
}
.mainModule .el-button--primary.is-plain {
  color: #409eff;
  background: #fff;
  border-color: #3a8ee6;
}
.el-textarea__inner {
  height: 130px;
}
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
      }
      p {
        margin: 20px;
      }
    }
  }
}

</style>




