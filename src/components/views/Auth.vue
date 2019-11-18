<template>
  <div class="main-auth">
      <div class="card-auth">
      <div class="logo">Login</div>
          <div class="form-group">
                <input type="text" class="form-control" 
                    name="name" v-model="name" placeholder="name">
          </div>
          <div class="form-group">
                <input type="text" class="form-control" v-model="password" 
                    name="password" placeholder="pass">
          </div>
          <div class="form-group">
                <button class="btn btn-primary" @click="login">Entrar</button>
          </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            name: '',
            password: '',
        }
    },

    methods: {
        login() {
            axios.post('http://localhost:3005/signin', { name: this.name, password: this.password })
                .then(resp => {
                    this.$store.commit('setUser', resp.data)

                    localStorage.setItem('companyId', resp.data.companyId)

                    this.$router.push({ path: '/admin'})
                })
        }
    }
}
</script>

<style scoped>

.main-auth {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.logo {
    color: #0007;
    font-size: 30px;
    margin-bottom: 15px;
}

.card-auth {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #0002;
    border-radius: 5px;
    padding: 10px;
    margin-top: 150px;

}

</style>