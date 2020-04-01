<template>
  <div class="login">
    <div class="inner-login">
      <div class="topbar">
        <div v-bind:class="{active:isactive}" @click="toPhoneLogin">手机登录</div>
        <div v-bind:class="{active:!isactive}" @click="toAccountLogin">账号登录</div>
      </div>
      <div class="main">
        <div class="phone" v-show="phoneLogin">
          <div class="phone-input">
            <input type="text" placeholder="请输入您的手机号" v-model="loginForm.tel">
            <p v-show="inputPhone" class="prompt">*{{phoneMistake}}</p>
          </div>
          <div class="code-input">
            <input type="text" placeholder="请输入验证码" class="code" v-model="loginForm.msg">
            <button class="get-code" v-show="show" @click="getCode">获取验证码</button>
            <button class="get-code" v-show="!show">重新获取({{count}}s)</button>
          </div>
          <p v-show="inputCode" class="prompt">*{{codeMistake}}</p>
          <div class="auto">
            <el-checkbox label="自动登录" name="type" @click="!this.checked"></el-checkbox>
          </div>
          <button class="login-button" @click="submit('/home')">登录</button>
        </div>
        <div class="account" v-show="accountLogin">
          <div class="account-input">
            <input type="text" placeholder="请输入您的账号" v-model="account">
            <p v-show="inputAccount" class="prompt">*请输入您的账号</p>
          </div>
          <div class="password">
            <input type="text" placeholder="请输入您的密码" v-model="password">
            <p v-show="inputPassword" class="prompt">*请输入您的密码</p>
          </div>
          <div class="auto">
            <el-checkbox label="自动登录" name="type" @click="!this.checked"></el-checkbox>
            <a href="#" @click="forgotPassword">忘记密码？</a>
          </div>
          <button class="login-button" @click="Login('/home')">登录</button>
        </div>
      </div>
      <div class="footer">其他登录:</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "login",
  data() {
    return {
      isactive: true,
      phoneLogin: true,
      accountLogin: false,
      inputAccount: false,
      inputPassword: false,
      inputPhone: false,
      inputCode: false,
      checked: false,
      show: true,
      account: "",
      password: "",
      count: "",
      timer: null,
      loginForm: {
        tel: "",
        msg: ""
      },
      phoneMistake: "",
      codeMistake: ""
    };
  },
  components: {},

  //页面加载调用获取cookie值
  mounted() {
    this.getCookie();
  },
  methods: {
    getCode() {
      const TIME_COUNT = 30;
      if (!this.timer) {
        this.count = TIME_COUNT;
        this.show = false;
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--;
          } else {
            this.show = true;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
      }
    },
    toPhoneLogin() {
      this.isactive = true;
      this.phoneLogin = true;
      this.accountLogin = false;
    },
    toAccountLogin() {
      this.isactive = false;
      this.phoneLogin = false;
      this.accountLogin = true;
    },
    skip(path) {
      this.$router.push({ path });
    },
    Login(path) {
      //保存的账号
      var name = this.account;
      //保存的密码
      var pass = this.password;
      if (this.account === "" && this.password === "") {
        this.inputAccount = true;
        this.inputPassword = true;
        return;
      } else if (this.account === "") {
        this.inputAccount = true;
        this.inputPassword = false;
        return;
      } else if (this.password === "") {
        this.inputAccount = false;
        this.inputPassword = true;
        return;
      } else {
        let data = { account: this.account, password: this.password };
        // 发请求
        this.$router.push({ path });
      }

      if ((this.checked = true)) {
        //传入账号名，密码，和保存天数3个参数
        this.setCookie(name, pass, 7);
      }
    },

    //设置cookie
    setCookie(c_name, c_pwd, exdays) {
      var exdate = new Date(); //获取时间
      exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
      //字符串拼接cookie
      window.document.cookie =
        "userName" + "=" + c_name + ";path=/;expires=" + exdate.toGMTString();
      window.document.cookie =
        "userPwd" + "=" + c_pwd + ";path=/;expires=" + exdate.toGMTString();
    },
    //读取cookie
    getCookie: function() {
      if (document.cookie.length > 0) {
        var arr = document.cookie.split("; "); //这里显示的格式需要切割一下自己可输出看下
        for (var i = 0; i < arr.length; i++) {
          var arr2 = arr[i].split("="); //再次切割
          //判断查找相对应的值
          if (arr2[0] == "userName") {
            this.account = arr2[1]; //保存到保存数据的地方
          } else if (arr2[0] == "userPwd") {
            this.password = arr2[1];
          }
        }
      }
    },

    //清除cookie
    clearCookie: function() {
      console.log(1);
      this.setCookie("", "", -1); //修改2值都为空，天数为负1天就好了
    },
    submit(path) {
      var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/; // 验证是不是以13,15,18,17开头的数字
      var num = /^\d{6}$/; // 验证是否6位数字
      if (this.loginForm.tel === "") {
        this.inputPhone = true;
        this.inputCode = false;
        this.phoneMistake = "手机号不能为空！";
      } else if (this.loginForm.tel.length !== 11) {
        this.inputPhone = true;
        this.inputCode = false;
        this.phoneMistake = "请输入11位的手机号码！";
      } else if (!myreg.test(this.loginForm.tel)) {
        this.inputPhone = true;
        this.inputCode = false;
        this.phoneMistake = "请输入有效的手机号码！";
      }else if (this.show === true) {
        this.inputPhone = false;
        this.inputCode = true;
        this.codeMistake = "请获取验证码！";
      }  else if (this.loginForm.msg === "") {
        this.inputPhone = false;
        this.inputCode = true;
        this.codeMistake = "请填写验证码！";
      } else if (!num.test(this.loginForm.msg)) {
        this.inputPhone = false;
        this.inputCode = true;
        this.codeMistake = "请填写正确的验证码！";
      } else {
        this.$router.push({ path });
      }
    },
    forgotPassword() {
      this.clearCookie();
      this.toPhoneLogin();
    }
  }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
ul,
ol {
  list-style: none;
}
a {
  text-decoration: none;
  font-size: 14px;
  color: #1890ff;
}
.login {
  position: relative;
  .inner-login {
    width: 362px;
    height: 375px;
    border: 1px solid black;
    position: absolute;
    left: 60vw;
    top: 30vh;
    display: flex;
    flex-direction: column;
    .topbar {
      height: 56px;
      border-bottom: 2px solid #ebebeb;
      display: flex;
      align-items: center;
      justify-content: space-around;
      font-weight: bold;
      cursor: pointer;
      .active {
        color: #1890ff;
      }
    }
    .main {
      flex-grow: 1;
      margin: 0 31px;
      .account {
        .account-input {
          margin-top: 28px;
          input {
            height: 44px;
            width: 100%;
            padding-left: 31px;
            background: #f2f2f2;
            border: none;
            border-radius: 2px;
            color: #aeaeae;
          }
          .prompt {
            font-size: 12px;
            color: red;
          }
        }
        .password {
          margin-top: 20px;
          input {
            height: 44px;
            width: 100%;
            padding-left: 31px;
            background: #f2f2f2;
            border: none;
            border-radius: 2px;
            color: #aeaeae;
          }
          .prompt {
            font-size: 12px;
            color: red;
          }
        }
      }
      .phone {
        .phone-input {
          margin-top: 28px;
          input {
            height: 44px;
            width: 100%;
            padding-left: 31px;
            background: #f2f2f2;
            border: none;
            border-radius: 2px;
            color: #aeaeae;
          }
          .prompt {
            font-size: 12px;
            color: red;
          }
        }
        .code-input {
          margin-top: 20px;
          display: flex;
          .code {
            height: 44px;
            width: 155px;
            padding-left: 31px;
            background: #f2f2f2;
            border: none;
            border-radius: 2px;
            color: #aeaeae;
            margin-right: 20px;
          }
          .get-code {
            height: 44px;
            width: 125px;
            background: #f2f2f2;
            border: none;
            border-radius: 2px;
            color: #aeaeae;
          }
        }

        .prompt {
          font-size: 12px;
          color: red;
        }
        .promptContainer {
          height: 20px;
          margin-top: 20px;
        }
      }
      .auto {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
      }
      .login-button {
        margin-top: 26px;
        height: 40px;
        background: #1890ff;
        border: none;
        width: 100%;
        border-radius: 5px;
        color: #fff;
        font-size: 16px;
      }
    }
    .footer {
      height: 44px;
      margin: 0 31px;
      color: #aeaeae;
      font-size: 14px;
      border-top: 2px solid #ebebeb;
      display: flex;
      align-items: center;
      justify-content: start;
    }
  }
}
</style>

