<template>
  <div id="app">
    <div v-if="isLoggedIn">
      <nav>
        <ul>
          <li :class="{ 'active': $route.path === '/table' }"><router-link to="/table">Table</router-link></li>
          <li :class="{ 'active': $route.path === '/history' }"><router-link to="/history">History Log</router-link></li>
        </ul>
      </nav>
      <router-view />
    </div>
    <div v-else>
      <LoginComponent />
    </div>
  </div>
</template>

<script>
import LoginComponent from './components/LoginComponent.vue';

export default {
  data() {
    return {
      isLoggedIn: false
    };
  },
  components: {
    LoginComponent
  },
  methods: {
    goToLogin() {
      this.$router.push('/login');
    }
  },
  mounted() {
    if (localStorage.getItem('user')) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }
};
</script>

<style>
  #app {
    font-family: 'Raleway', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 30px;
  }
  nav {
    background-color: #ffffff;
    color: white;
    padding: 10px;
  }
  nav ul {
    list-style-type: none;
    padding: 0;
    text-align: center; 
  }
  nav ul li {
    display: inline;
    margin-right: 10px;
  }
  nav ul li a {
    color: rgb(0, 0, 0);
    text-decoration: none;
    font-weight: bold;
    font-size: 18px;
    margin-right: 30px;
    padding: 6px 20px 6px 20px;
    border-radius: 10px;
  }
  nav ul li.active a {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
</style>
