 <!--业务模块，添加应用-->

 <template>
            
 <div class="home">
    <asideCommon />
    <div class="main">
      <topbarCommon />
      <div class="header">
       
        <div>
          <h4>添加应用</h4>
    
        </div>
      </div>
      <div class="body">
        <div class="mainModule">
  <div class="mainModule">
       <div class="from-div">
        <el-form ref="form" :model="form" label-width="96px" >
        <el-form-item label="应用名称:">
            <el-input v-model="form.labename" placeholder="请输入名称"></el-input>
        </el-form-item>
        
      <el-form-item label="应用标识:">
            <el-input v-model="form.labecode" placeholder="请输入"></el-input>
        </el-form-item>
     <el-form-item label="版本号:">
            <el-input v-model="form.labeadmin" placeholder="请输入"></el-input>
        </el-form-item>
   
       
        <el-form-item label="应用说明：">
            <el-input class="labdesc" type="textarea"  v-model="form.labedesc" placeholder="请输入说明"></el-input>
        </el-form-item>

        <el-form-item label="上传图标：">
            <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
         </el-form-item>
    
        </el-form>
     <div class="submitaddbusiness">
            <el-button>取消</el-button>
            <el-button class="next" type="primary" @click="onSubmit">提交</el-button>
        </div>
        </div>

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
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
        this.$router.push({path :'/views/lab/add-lab/lab-config'});
      }
    },
     handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    
  }
</script>
<style scoped>
.from-div{
    width: 50%;
    position:relative;
     left: 20%;
     height: 100%;
    

}

#app .main .body .mainModule  {
    width: 97%;
    height: 80%;
    background: #fff;
    margin: 25px;
    margin-bottom:10%;
    margin-left: 25px;
    border-radius: 5px;
    padding: 10px;
}
.submitaddbusiness{
   position:relative;
    top:10%;
    left: 20%;
}
#app .main .topbar {
    height: 9%;
    border-bottom: 1px solid #E9E9E9;
   
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
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

  #app .main .header P{
    padding: 16px 16px - 40px;
}
.el-icon-plus:before {
 position:relative;
    top: 34%;
    content: "\E62B";

}
.labpassword{
  display: inline-block;
      width: 80%;
} 
.pushpassword{
    
    position:absolute ;
    top:0%;
    left: 110%;

}
.mainModule .el-button--primary.is-plain {
    color: #409EFF;
    background: #FFF;
    border-color: #3a8ee6;
}
.el-textarea__inner{
 height: 100px
}

</style>