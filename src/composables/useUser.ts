import { StorageSerializers, useStorage } from '@vueuse/core'
import { Toast } from "vant";
import { computed, ref } from "vue";

const user = useStorage('user',null,undefined,{
    serializer: StorageSerializers.object
})

export const useUser = () => {
    
    const userModel = ref({
        username: '',
        password: ''
    })

    interface valueUser {
        username: string
        password: string
    }

    const onSubmit = async (values: valueUser) => {
        user.value = {
            userName: '管理员',
            id: 1
        }
        Toast.success("登录成功!")
        console.log('submit', values);
    }

    const logout = async () => {
        user.value = null; 
        Toast("您已推出登录!")
    }

    const loggedIn = computed(() => user.value?.id)

    return {
        user,
        userModel,
        onSubmit,
        logout,
        loggedIn,
    }
}