<template>
  <div class="login-container">
    <h2>Login</h2>
    <div class="input-wrapper">
      <input ref="usernameInput" type="text" v-model="username" placeholder="Username" class="input-field" @keyup.enter="focusPassword">
    </div>
    <div class="input-wrapper">
      <input ref="passwordInput" type="password" v-model="password" placeholder="Password" class="input-field" @keyup.enter="login">
    </div>
    <div class="button-wrapper">
      <button @click.prevent="login" class="login-button">Login</button>
    </div>
  </div>
</template>
  
<script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      async login() {
      axios
        .post(
          `${
            process.env.NODE_ENV === "production"
              ? "http://10.21.60.152:9000"
              : "http://127.0.0.1:9000"
          }/user/login`,
          {
            username: this.username,
            password: this.password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log("Login response:", response);
          if (response.status === 200 || response.status === 201) {
            if (response.data.status === "success") {
              localStorage.setItem(
                "user",
                JSON.stringify({
                  userName: this.username,
                  passWord: this.password,
                })
              );
              window.alert("Logged in user:", this.username);

              setTimeout(() => {
                this.$router.push("/table");
                location.reload();
              }, 100);
            } else {
              window.alert("Хэрэглэгч олдсонгүй.");
            }
          }
        })
        .catch((error) => {
          console.error("Login error:", error);
        });
    },
      focusPassword() {
        this.$refs.passwordInput.focus();
      }
    },
    mounted() {
      this.$refs.usernameInput.focus();
      if(localStorage.getItem('user')){
        this.$router.push('/table');
      }
    }
  };
</script>
  
<style scoped>
  .login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;
  }
  .input-wrapper {
    margin-bottom: 10px;
  }
  .input-field {
    width: 300px;
    padding: 10px;
    font-size: 16px;
  }
  .login-button {
    width: 320px;
    padding: 12px;
    font-size: 18px;
    background-color: #4CAF50;
    border: none;
    color: white;
    text-align: center;
    display: inline-block;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 8px;
  }
  .login-button:hover {
    background-color: #45a049;
  }
</style>