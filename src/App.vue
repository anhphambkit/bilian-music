<template>
  <div id="app">
    asdasd
  </div>
</template>

<script>
import RepositoryFactory from "./repositories/RepositoryFactory";
export default {
  name: 'App',
  async mounted() {
    let response = await RepositoryFactory.album().top();
    console.log("response", response)
  },
}
</script>
