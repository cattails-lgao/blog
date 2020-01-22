// 导入自己需要的组件
import { 
    Input, 
    Dialog, 
    Form,
    FormItem,
    Button
} from 'element-ui';

const element = {
    install: function (Vue) {
      Vue.use(Form)
      Vue.use(FormItem)
      Vue.use(Input)
      Vue.use(Dialog)
      Vue.use(Button)
    }
  }
  export default element