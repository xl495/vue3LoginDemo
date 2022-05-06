import { computed, ref } from "vue"

const cart = ref({
    items: [] as CartItem[]
})

export const useCart = () => {

    const addToCart = (product: Products) => {
        const item = cart.value.items.find(item => item.productId === product.id)
        if (item) {
            updateQuantity(item, item.quntity + 1)
        } else {
            cart.value.items.push({
                productId: product.id,
                quntity: 1,
                name: product.name,
                price: product.price
            })
        }

    }

    const updateQuantity = (item: CartItem, quntity: number) => {
        item.quntity = quntity
    }

    const removeFromCart = (item: CartItem) => {
        const index = cart.value.items.findIndex(cartItem => cartItem.productId === item.productId)
        if (index > -1) {
            cart.value.items.splice(index, 1)
        }
    }

    const totalProduct = computed(() => {
        return cart.value.items.reduce((acc, item) => {
            return acc + item.quntity
        }, 0)
    })

    const isCartEmpty =  computed(()=> cart.value.items.length === 0)

    return {
        cart,
        addToCart,
        updateQuantity,
        totalProduct,
        removeFromCart,
        isCartEmpty
    }
}