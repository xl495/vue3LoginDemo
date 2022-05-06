import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { Button, CellGroup, Dialog, Empty, Field, Form, Icon, Stepper, Toast } from 'vant';

const app = createApp(App)

app.use(router)
app.use(Icon)
app.use(Form);
app.use(Field);
app.use(CellGroup);
app.use(Button);
app.use(Toast);
app.use(Stepper);
app.use(Dialog);
app.use(Empty);


app.mount('#app')
