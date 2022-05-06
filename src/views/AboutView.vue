<script lang="ts" setup >
import { useUser } from "@/composables/useUser";

const { loggedIn, user } = useUser()
</script>

<template>
  <div class="about">
    <p v-if="loggedIn">欢迎 , {{ user.userName }}
    </p>
    <h1>This is an about page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
