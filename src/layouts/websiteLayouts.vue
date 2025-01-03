<template>
  <div>
    <NavBar />
  </div>
</template>

<script>
import NavBar from "./navBar/NavBar.vue";

export default {
  data() {
    return {
      c: 10,
    };
  },
  components: { NavBar },
};
</script>
