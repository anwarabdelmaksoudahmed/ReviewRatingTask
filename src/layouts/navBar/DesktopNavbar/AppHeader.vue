<template>
  <nav class="navbar py-5">
    <div class="navbar-container">
      <div class="logo">
        <img src="../../../assets/Bevatel.webp" alt="Logo" class="logo" />
      </div>
      <div class="navbar-left">
        <ul class="nav-links">
          <router-link
            style="color: #47a5e6; font-size: 20px; font-weight: 800"
            :to="{ name: 'home' }"
            class="px-5"
          >
            {{ $t("Home") }}
          </router-link>
        </ul>
      </div>
      <div class="navbar-right">
        <div class="lang display: flex">
          <div class="dropdown display: flex">
            <img src="../../../assets/arabicLang.svg" alt="" />
            <select class="px-3" @change="switchLanguage($event.target.value)">
              <option value="en">English</option>
              <option value="ar">العربية</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <router-view />
</template>
<script>
export default {
  methods: {
    switchLanguage(lang) {
      this.$i18n.locale = lang;
      document.documentElement.setAttribute(
        "dir",
        lang === "ar" ? "rtl" : "ltr"
      );
      localStorage.setItem("language", lang);
    },
  },
};
</script>

<style scoped lang="scss">
.nav {
  background-color: white;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
}
.navbar-container {
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-left {
  display: flex;
  align-items: center;
  flex: 1;
}

.logo {
  height: 40px;
  margin-right: 20px;
}

.nav-links {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.nav-links li {
  margin-right: 15px;
}

.navbar-right {
  flex: 1.5;
  display: flex;
  justify-content: end;
  align-items: center;
}
.lang {
  width: 29%;
  display: flex;
  justify-content: space-between;
}
.dropdown select {
  border: none;
  background: none;
  font-size: 16px;
  color: #6c757d;
  cursor: pointer;
}
</style>
