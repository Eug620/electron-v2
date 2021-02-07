<!--
 * @Author        : yeyuhang
 * @Date          : Do not edit
 * @LastEditTime : 2021-02-07 14:58:02
 * @LastEditors  : Eug
 * @Descripttion  : Descripttion
-->
<template>
  <div class="eug-login-container" :style="{ 'background-image': `url(${bacImageUrl})` }">
    <router-link to="/home">home</router-link>
    <q-form class="q-gutter-md" v-if="false">
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
          <q-input
            bottom-slots
            v-model="password"
            label="Password"
            counter
            :dense="dense"
            type="password"
          >
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
          <q-btn
            flat
            @click="handleCreate"
            :color="isCreate ? 'info' : 'positive'"
            :label="isCreate ? 'ok' : 'create'"
            class="on-left"
          />
          <q-btn
            flat
            @click="handleLogin"
            color="info"
            type="submit"
            v-if="!isCreate"
            class="on-right"
          >login</q-btn>
          <q-btn
            flat
            @click="handleCancle"
            color="negative"
            type="submit"
            v-if="isCreate"
            class="on-right"
          >cancel</q-btn>
        </q-card-actions>
      </q-card>
    </q-form>
    <!-- background -->
    <template v-if="false">
      <div class="eug-login-container-background"></div>
      <div class="eug-login-container-background"></div>
      <div class="eug-login-container-background"></div>
      <div class="eug-login-container-background"></div>
      <div class="eug-login-container-background"></div>
      <div class="eug-login-container-background"></div>
    </template>
  </div>
</template>

<script>
import serverApi from "@/api";
export default {
  data() {
    return {
      userName: null,
      password: null,
      dense: false,
      isLogin: true,
      isCreate: false,
      bacImageUrl: ""
    };
  },
  created() {
    this.handleGetBackground();
  },
  methods: {
    async handleGetBackground() {
      try {
        let res = await serverApi.Background();
        if (res.code === 200) {
          this.bacImageUrl = res.result.image_url;
        } else {
          console.log(res);
        }
      } catch (error) {
        console.log(error);
      }
    },
    handleResetStatus(isLogin, isCreate) {
      this.isLogin = isLogin;
      this.isCreate = isCreate;
    },
    mergeProps(isLogin) {
      return isLogin
        ? {
            userName: this.userName,
            password: this.password
          }
        : {};
    },
    async handleLogin() {
      try {
        const res = await serverApi.UserLogin(this.mergeProps(true));
        if (res.code === 200) {
          this.$router.push("/home");
        } else {
          this.$q.notify({
            type: "negative",
            position: "top",
            message: "The user does not exist!"
          });
        }
      } catch (error) {
        throw Error(error);
      }
    },
    handleCreate() {
      this.handleResetInput();
      this.handleResetStatus(false, true);
    },
    handleCancle() {
      this.handleResetInput();
      this.handleResetStatus(true, false);
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
      this.userName = null;
      this.password = null;
    }
  }
};
</script>

<style lang="scss">
.my-card {
  width: 100%;
  max-width: 250px;
}
.eug-login-container {
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  
    display: flex;
  &-background {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  &-background:nth-child(1) {
    background: linear-gradient(
      238deg,
      rgb(130, 255, 0) 0%,
      rgb(0, 84, 166) 100%
    );
    animation: move 12s infinite linear;
  }

  &-background:nth-child(2) {
    background: linear-gradient(
      238deg,
      rgb(33, 200, 69) 0%,
      rgb(0, 0, 100) 100%
    );
    mix-blend-mode: overlay;
    animation: move 6s infinite linear;
  }

  &-background:nth-child(3) {
    background: linear-gradient(
      238deg,
      rgb(200, 255, 255) 48%,
      rgb(3, 0, 151) 100%
    );
    mix-blend-mode: multiply;
    animation: move 6s infinite linear;
  }

  &-background:nth-child(4) {
    background: radial-gradient(
      100% 85% at 0% 100%,
      rgb(0, 0, 0) 0%,
      rgb(0, 131, 255) 50%,
      rgb(255, 0, 0) 100%
    );
    mix-blend-mode: difference;
    animation: move 6s infinite linear;
  }

  &-background:nth-child(5) {
    background: radial-gradient(
      100% 225% at 0% 100%,
      rgb(255, 0, 0) 0%,
      rgb(66, 255, 0) 100%
    );
    mix-blend-mode: difference;
    animation: move 6s infinite linear;
  }

  &-background:nth-child(6) {
    background: radial-gradient(
      100% 140% at 100% 0%,
      rgb(0, 134, 62) 0%,
      rgb(0, 239, 255) 50%,
      rgb(0, 113, 186) 100%
    );
    mix-blend-mode: overlay;
    animation: move 6s infinite linear;
  }

  @keyframes move {
    0% {
      filter: unset;
    }

    100% {
      filter: hue-rotate(360deg);
    }
  }
}
</style>
