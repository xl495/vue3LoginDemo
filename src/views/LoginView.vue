<script setup lang="ts">
import { useUser } from "@/composables/useUser"
const { user, userModel, onSubmit, logout, loggedIn } = useUser()
</script>
<template>
  <div class="login">
    <p v-if="loggedIn">{{ user.userName }}
    </p>
    <van-button v-if="loggedIn" size="small" round block type="danger" @click="logout">
      退出登录
    </van-button>
    <van-form v-if="!loggedIn" @submit="onSubmit">
      <van-cell-group inset>
        <van-field v-model="userModel.username" name="username" label="用户名" placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]" />
        <van-field v-model="userModel.password" type="password" name="password" label="密码" placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]" />
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>