// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import router from './router'
//import UIkit from 'uikit-theme'
//import Icons from 'uikit-ic'
//UIkit.use(Icons)

//import UIkit from './vue-uikit'
//Vue.use(UIkit)

import ElementUI from 'element-ui';
import '../theme/index.css'
import App from './App'
import store from './store/store'


Vue.use(ElementUI);
Vue.config.productionTip = false




import VeeValidate, {Validator}  from 'vee-validate';

import zh from 'vee-validate/dist/locale/zh_CN';

Validator.addLocale(zh);

const config = {
  locale: 'zh_CN'
};

Vue.use(VeeValidate,config);

//自定义规则——手机号码判断
const isMobile = {
    messages: {
        zh_CN:field => field + '必须是11位手机号码',//field 就是自定义规则的名字
    },
    validate: (value, args) => {
       return value.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
    }
}
Validator.extend('mobile', isMobile);//相当于起了个别名



const dictionary = {
   zh_CN: {
    messages: {
      mobile: () => '这个手机号有毒',
      required:(field)=> "请输入"+field

    },
    attributes:{
      //mobile:'--修改默认为空字段--'
    }
  }
};
Validator.updateDictionary(dictionary);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'

})
