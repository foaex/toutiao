<template>
  <div class="login-container">
    <el-card>
      <el-row>
        <el-col>
          <img src="@/assets/logo.png"
               alt="">
        </el-col>
      </el-row>
      <el-form :label-position="labelPosition"
               :model="user"
               class="login">
        <el-form-item>
          <el-input v-model="user.mobile"
                    placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="user.code"
                    placeholder="请输入验证码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="checked">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
                     class="login-btn"
                     @click="onLogin" :loading="loading">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import  request  from '@/network/request'
export default {
  name: 'Login',
  data () {
    return {
      // 设置对齐方式
      labelPosition: 'right',
      // 保存用户账号密码
      user: {
        mobile: '13911111111',
        code: '246810'
      },
      // 保存复选框的值
      checked: false,
      // 保存登录
      loading: false
    }
  },
  methods: {
    onLogin () {
      this.loading = true
      request({
        method: 'post',
        url: '/mp/v1_0/authorizations',
        // data设置请求体
        data: this.user
      }).then(() => {
        this.$message.success('登录成功')
        this.loading = false
      }).catch(err => {
        console.log(err)
        this.loading = false
        this.$message.error('登录失败')
      })
    }
  },
}
</script>

<style scoped >
.el-card {
  margin-top: 100px;
}
.login-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1f2f3f;
}
.login {
  padding: 50px;
  width: 300px;
}
.login-btn {
  width: 100%;
}
.el-row {
  text-align: center;
}
.el-row img {
  width: 70px;
}
</style>
