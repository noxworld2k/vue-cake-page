<template>
<header>
  <div class="container container__header">
    <div>
      <router-link to="/home" ><img class="header__logo" src="../assets/img/logo.png" alt="Logo z tortem" ></router-link>
    </div>
    <div>
      <ul class="header__nav">
        <router-link class="header__nav-item" to="/home" >Strona Główna</router-link>
        <router-link class="header__nav-item" to="/gallery" >Galeria Realizacji</router-link>
        <router-link class="header__nav-item" to="/contact" >Kontakt</router-link>
      </ul>
    </div>
  </div>
</header>
</template>

<script>
export default {
  name: "TheHeader"
}
</script>

<style scoped>
h1, h2, h3, h4, h5, h6, p {
  color: #980440;
}
.header__logo{
  width: 100px;
  height: 100px;
  margin: 0 auto;
}

.container__header {
  justify-content: space-between;
  align-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
  padding: 0 20px;
  height: 100px;
}

</style>