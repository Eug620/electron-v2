<!--
 * @Author        : yeyuhang
 * @Date          : Do not edit
 * @LastEditTime : 2021-01-28 16:14:58
 * @LastEditors  : Eug
 * @Descripttion  : Descripttion
-->
<template>
  <div>
    <router-link to="/home">home</router-link>
    <q-form class="q-gutter-md">
      <q-card class="my-card text-blick fixed-center">
        <!-- title -->
        <q-card-section>
          <div class="text-h6 text-center">{{isLogin ? 'Login' : 'Create'}}</div>
          <div class="text-subtitle2 text-center">by Eug</div>
        </q-card-section>
        <!-- form -->
        <q-card-section>
          <!-- userName -->
          <q-input bottom-slots v-model="userName" label="Name" counter :dense="dense">
            <template v-slot:prepend>
              <q-icon name="account_circle" />
            </template>
            <template v-slot:append>
              <q-icon name="close" @click="userName = ''" class="cursor-pointer" />
            </template>
            <template v-slot:hint>Field hint</template>
          </q-input>
          <!-- password -->
          <q-input bottom-slots v-model="password" label="Password" counter :dense="dense" type="password">
            <template v-slot:prepend>
              <q-icon name="fingerprint" />
            </template>
            <template v-slot:append>
              <q-icon name="close" @click="password = ''" class="cursor-pointer" />
            </template>
            <template v-slot:hint>Field hint</template>
          </q-input>
        </q-card-section>

        <q-separator dark />

        <q-card-actions class="q-pa-md q-gutter-sm">
          <q-btn flat @click="handleCreate" :color="isCreate ? 'info' : 'positive'" :label="isCreate ? 'ok' : 'create'" class="on-left"/>
          <q-btn flat @click="handleLogin" color="info" type="submit" v-if="!isCreate" class="on-right">login</q-btn>
          <q-btn flat @click="handleCancle" color="negative" type="submit" v-if="isCreate" class="on-right">cancel</q-btn>
        </q-card-actions>
      </q-card>
    </q-form>
  </div>
</template>

<script>
import serverApi from '@/api'
export default {
  data() {
    return {
      userName: null,
      password: null,
      dense: false,
      isLogin: true,
      isCreate: false
    };
  },
  created() {
  },
  methods: {
    handleResetStatus (isLogin, isCreate) {
      this.isLogin = isLogin
      this.isCreate = isCreate
    },
    mergeProps (isLogin) {
      return isLogin ? {
        userName: this.userName,
        password: this.password
      } :
      {
        
      }
    },
    async handleLogin () {
      try {
        const res = await serverApi.UserLogin(this.mergeProps(true))
        if (res.code === 200) {
          this.$router.push('/home')
        } else {
          this.$q.notify({
            type: 'negative',
            position: 'top',
            message: 'The user does not exist!'
          })
        }
      } catch (error) {
        throw Error(error);
      }
    },
    handleCreate () {
      this.handleResetInput()
      this.handleResetStatus(false, true)
    },
    handleCancle () {
      this.handleResetInput()
      this.handleResetStatus(true, false)
    },
    onSubmit() {
      this.$q.notify({
        color: "red-5",
        textColor: "white",
        icon: "warning",
        message: "You need to accept the license and terms first"
      });
    },
    handleResetInput() {
      this.userName = null
      this.password = null
    }
  }
};
</script>

<style>
.my-card {
  width: 100%;
  max-width: 250px;
}
</style>
