<template>
  <div id="app">
    {{getName}}
    {{getAge}}
    <br/>
    <button @click="changeName" value="更名">更名</button>
    <button @click="changeNameAsync" value="更名">更名异步</button>
    <br/>
    <button @click="changeAge" >更改年龄</button>
    <button @click="changeAgeAsync" >更改年龄异步</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    getName() {
      console.log('store', this.$store);
      return this.$store.state.moduleA.name
    },
    getAge() {
      console.log('store', this.$store);
      return this.$store.state.moduleB.age
    },
  },
  methods:{
      changeName(){
        this.$store.commit('updateName')
      },
      changeNameAsync(){
        this.$store.dispatch('updateNameAsync')
      },
      changeAge(){
        this.$store.commit('updateAge')
      },
      changeAgeAsync(){
        this.$store.dispatch('updateAgeAsync')
      }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
