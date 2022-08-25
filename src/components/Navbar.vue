<template>
  <nav class="navbar navbar-costum">
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h1">Glamour</span>
  </div>
</nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
  },
};
</script>

<style scoped>
.navbar-costum{
  height: 10vh;
  direction: rtl;
  background-color: rgb(149,125,173);
}
span {
  color: white;
}
</style>
