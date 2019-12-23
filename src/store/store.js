import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
	userName: '张三', // 当前位置纬度
	userAge: 20, // 当前位置经度
	cartList: {}, // 列表
}

export default new Vuex.Store({
    state,
    mutations
})