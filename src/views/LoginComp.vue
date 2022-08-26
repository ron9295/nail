<template>
  <div>
    <Navbar />
    <form>
      <div class="row d-flex justify-content-center">
        <img src="../assets/logo.jpg" alt="logo" class="logo" />
      </div>
      <div class="row d-flex justify-content-center">
        <div class="col-7 mb-3">
          <label for="exampleInputEmail1" class="form-label">שם מלא</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
      </div>
      <div class="row d-flex justify-content-center">
        <div class="col-7 mb-3">
          <label for="exampleInputEmail1" class="form-label">סיסמא</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
      </div>
      <div class="row mt-5">
        <div class="col d-flex justify-content-center">
          <button type="submit" class="btn button-submit">היכנס</button>
        </div>
      </div>
      <div class="icon-container d-flex justify-content-center align-items-center">
        <router-link to="/" class="nav-link" exact
          ><i class="fa-solid fa-house-user fa-2xl icon-costum"></i
        ></router-link>
      </div>
    </form>
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
form {
  display: flex;
  justify-content: center;
  flex-direction: column;
  direction: rtl;
  height: 90vh;
  background-color: rgb(255, 223, 211);
  position: relative;
}
.button-submit {
  color: white;
  background-color: rgb(210, 145, 188);
}
.icon-costum {
  color: black;
}
.icon-container {
  position: absolute;
  bottom: 3%;
  right: 3%;
  background-color: white;
  width: 17vw;
  height: 8vh;
  border-radius: 50%;
}
.logo {
  border-radius: 50%;
  width: 50vw;
  height: 20vh;
  margin-top: -15vh;
  margin-bottom: 5vh;
}
</style>
