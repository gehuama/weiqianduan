import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerMicroApps, start, setDefaultMountApp } from 'qiankun';

Vue.config.productionTip = false
// Blob上传
// const AZBLOB = require("@azure/storage-blob");
// import AZBLOB from "@azure/storage-blob"
// AZBLOB.StorageURL.newPipeline(new AZBLOB.AnonymousCredential())
registerMicroApps([
  {
    name: 'app-react', // app name registered
    entry: '//localhost:3000',
    container: '#container',
    activeRule: '/react',
  },
  {
    name: 'app-vue',
    entry:  '//localhost:4000/vue/',    container: '#container',
    activeRule: '/vue',
  },
]);
start();
setDefaultMountApp('/vue');
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


