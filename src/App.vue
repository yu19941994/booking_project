<template>
  <div id="app">
    <router-view/>
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
  </div>
</template>

<style lang="scss">
  @import "@/assets/stylesheets/application.scss";
  // @import "~bootstrap/scss/bootstrap";
</style>

<script>
export default {
  created () {
    // this.axios({
    //   method: 'get',
    //   baseURL: 'https://challenge.thef2e.com/api/thef2e2019/stage6/rooms',
    //   headers: {
    //     Authorization: 'Bearer ZpNjg6fR488qhR6rBqkJUPUxciEgE5JfKKuvTBSEa8WyQu5ifFDykP9yVJQt',
    //     'Content-Type': 'application/json'
    //   }
    // })
    //   .then((response) => {
    //     console.log(response)
    //   })
  }
}
</script>
