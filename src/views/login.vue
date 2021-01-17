<template>
  <div class="login_css">
    <div class="login_box">
      <div class="avator_box">
        <img src="../assets/yuxi.jpg" />
      </div>
      <el-form
        ref="loginForm"
        :model="loginForm"
        label-width="0px"
        class="login_form"
        :rules="rules"
      >
        <el-form-item prop="username">
          <el-input
            prefix-icon="iconfont icon-user"
            v-model="loginForm.username"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            prefix-icon="iconfont icon-mima"
            v-model="loginForm.password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary" @click="onSubmit">登录</el-button>
          <el-button type="info" @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { getUser } from "../api/login";
import { getOrder } from "../api/login1";
export default {
  name: "Login",
  data() {
    return {
      //表单数据
      loginForm: {},
      //校验
      rules: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    //提交登录
    onSubmit() {
      this.$refs["loginForm"].validate((valid) => {
        if (valid) {
          console.log("发起登录");
          // this.$store.dispatch("Login",this.loginForm).then(response=>{
          //   console.log(response)
          // })
          getUser().then((response) => {
            console.log(response);
          });
        }
      });
    },
    //重置
    reset() {
      //this.$refs.loginForm.resetFields();
      getOrder().then(response=>{
        console.log(response)
      })
    },
  },
};
</script>
<style scoped>
.login_css {
  background-color: #2b4b6b;
  height: 100%;
}
.login_box {
  height: 300px;
  width: 450px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.avator_box {
  width: 130px;
  height: 130px;
  border: 1px solid #eee;
  border-radius: 50%;
  padding: 10px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
}
img {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background-color: #eee;
}
.btns {
  display: flex;
  justify-content: flex-end;
}
.login_form {
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 0 20px;
  box-sizing: border-box;
}
</style>