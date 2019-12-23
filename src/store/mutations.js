const SET_USERNAME = 'SET_USERNAME'
const SET_USERAGE = 'SET_USERAGE'
const INITIALIZE_DATA = 'INITIALIZE_DATA'
export default {
	//名字
	[SET_USERNAME](state, name) {
		state.userName = name;
	},
	//年纪
	[SET_USERAGE](state, num) {
		state.userAge = state.userAge + num;
	},
	/*
	初始化信息，
	 */
	[INITIALIZE_DATA](state) {
		state.userName = 'luca';
		state.userAge = '0';
	},
}