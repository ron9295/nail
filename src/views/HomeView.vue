<template>
  <div class="home">
    <Navbar />
    <div class="form-big">
      <div class="row">
        <div class="col-6">
          <button type="button" class="btn btn-costum" @click="$router.push('/register')">
            להרשמה
          </button>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-6">
          <button type="button" class="btn btn-costum">להתחברות</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  name: "HomeView",
  components: {
    Navbar,
  },
};
</script>

<style scoped>
.btn-costum {
  width: 40vw;
  height: 8vh;
  color: white;
  background-color: rgb(210, 145, 188);
  font-size: 22px;
  font-family: Arial, Helvetica, sans-serif;
}
.form-big {
  background-color: rgb(255, 223, 211);
  flex-direction: column;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
