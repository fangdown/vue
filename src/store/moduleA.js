
export default  {
  state: {
    name: 'oldName',
  },
  getters:{
    getReverseName: state => state.name.split('').reverse().join('')
  },
  mutations: {
    updateName(state){
      state.name = 'newName'
    }
  },
  actions: {
    updateNameAsync({commit}) {
      setTimeout(() => {
        commit('updateName')
      }, 1000);
    }
  }
}