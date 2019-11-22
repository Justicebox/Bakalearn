import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    // state vuex中的数据源，我们需要的数据保存在這里 可以通过 this.$store.state
    state: {
        count: 1
    },
    // getters 相当于组件中的计算属性computed getter的返回值会根据他的依赖缓存起来 只有当依赖发生改变才会被重新计算
    // getters  可以用来监听state中值的变化，返回计算结果
    getters: { //类似comtuted
        getStateCount(state) {
            return state.count + 1
        }
    },
    // 当我们想要修改count值 的唯一方法就是提交mutation来修改 this.$store.commit('方法名称')
    // mutations里面的方法都是 同步业务
    mutations: {
        add(state) { //上面定义的state对象
            state.count = state.count + 1;
        },
        reduction(state, n) {
            state.count = state.count - n;
        }
    },
    // action方法可以包含任意的异步操作，这里面的方法用来异步触发mutation里面的方法
    // action里面自定义的函数接收一个context参数和自定义参数 context和store实例具有相同的属性和方法
    // this.$store.dispatch("actions里面的方法名称")
    actions: {
        addFn(context) {
            context.commit('add')
        },
        reductionFn(context, n) {
            context.commit("reduction", n)
        }
    },
    modules: {}
})