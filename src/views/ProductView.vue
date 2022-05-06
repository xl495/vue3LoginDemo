<script lang="ts" setup >
import { useCart } from "@/composables/useCart"
import { onMounted, ref } from "vue";
const products = ref<Products[]>()
onMounted(() => {
  products.value = [{
    id: 1,
    name: '商品1',
    price: 12.29,
  },
  {
    id: 2,
    name: '商品2',
    price: 4.29,
  },
  {
    id: 3,
    name: '商品3',
    price: 0.99,
  },
  {
    id: 4,
    name: '商品4',
    price: 100.12,
  }
  ]
})

const { addToCart } = useCart()
</script>

<template>
  <div class="product__wrap">
    <div class="product" v-for="(item, index) in products" :key="index">
      <span>{{ item.name }}</span>
      <span>￥{{ item.price }}</span>
      <van-button type="primary" size="mini" @click="addToCart(item)">添加到购物车</van-button>
    </div>
  </div>
</template>

<style>
.product {
  padding: 4px;
  display: flex;
  justify-content: space-between;
}
</style>
