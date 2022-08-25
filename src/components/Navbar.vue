<template>
  <nav class="navbar navbar-costum">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 h1">Glamour</span>
    </div>
    <div dir="RTL">
      <ul class="navbar-nav me-auto mb-2">
        <li class="nav-item">
          <router-link to="/" class="nav-link" exact>בית</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: {},
};
</script>

<style scoped>
.navbar-costum {
  height: 10vh;
  direction: rtl;
  background-color: rgb(149, 125, 173);
}
span {
  color: black;
}
a {
  color: white;
}
.link-list {
  direction: rtl;
}
</style>
