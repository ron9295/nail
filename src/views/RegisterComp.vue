<template>
  <div>
    <Navbar class="mb-5" />
    <form class="pt-5">
      <div class="row d-flex justify-content-center">
        <div class="col-7 mb-3">
          <label for="exampleInputEmail1" class="form-label">שם מלא</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
      </div>
      <div class="row d-flex justify-content-center">
        <div class="col-7 mb-3">
          <label for="exampleInputEmail1" class="form-label">מספר טלפון</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
      </div>
      <div class="row mt-5">
        <div class="col d-flex justify-content-center">
          <button type="submit" class="btn btn-primary button-submit">הירשם</button>
        </div>
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
  direction: rtl;
}
</style>
