
export default  {
  state: {
    age: '10',
  },
  getters:{
    getReverseAge: state => state.age.split('').reverse().join('')
  },
  mutations: {
    updateAge(state){
      state.age = '29'
    }
  },
  actions: {
    updateAgeAsync({commit}) {
      setTimeout(() => {
        commit('updateAge')
      }, 1000);
    }
  }
}