import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import demo1 from '@/components/demo1'
import demo2 from '@/components/demo2'
import inputAutoNext from '@/components/inputAutoNext'
import directory from '@/components/directory'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'directory', component: directory},
    {path: '/HelloWorld', name: 'HelloWorld', component: HelloWorld},
    {path: '/demo1', name: 'demo1', component: demo1},
    {path: '/demo2', name: 'demo2', component: demo2},
    {path: '/inputAutoNext', name: 'inputAutoNext', component: inputAutoNext},
  ]
})


