<script lang="ts" setup>
import { useCart } from "@/composables/useCart"
import { Dialog } from "vant";
const { cart, updateQuantity, removeFromCart, isCartEmpty } = useCart()

const changeNum = (value: number, cartItem: CartItem) => {
  return new Promise((resolve) => {
    if (value === 0) {
      Dialog.confirm({
        title: '提示',
        message:
          '您确定要删除该商品吗?',
      })
        .then(() => {
          resolve(false)
          removeFromCart(cartItem);
        })
        .catch(() => {
          resolve(false)
        })
    } else {
      resolve(true)
      updateQuantity(cartItem, value)
    }
  })
}
</script>

<template>
  <div class="cart__wrap">
    <van-empty v-if="isCartEmpty" image="https://cdn.jsdelivr.net/npm/@vant/assets/custom-empty-image.png"
      image-size="80" description="请加入购物车" />
    <template v-if="!isCartEmpty">
       <div class="cart" v-for="item in cart.items" :key="item.productId">
      {{ item.name }}
      <van-stepper :modelValue="item.quntity" min="0" max="100" :name="item.productId"
        :before-change="e => changeNum(e, item)" />
    </div>
    </template>
  </div>
</template>

<style>
.cart {
  padding: 10px;
  display: flex;
  justify-content: space-between;
}
</style>
