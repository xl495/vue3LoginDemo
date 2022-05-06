/// <reference types="vite/client" />


declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
    const component: DefineComponent<{}, {}, any>
    export default component
}


type Products = {
    id: number;
    name: string;
    price: number;
    stock?: number;
    [key: string]: any;
}

type CartItem = {
    productId: number;
    quntity: number;
    name: string;
    price: number;
}