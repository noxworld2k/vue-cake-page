<template>
<section>
  <div class="container">
    <div class="main__container" >
      <div class="main__container-box">
        <h1>Pracownia tortów artystycznych,
          w której spełniają się słodkie marzenia.
          Sprawdź nasze realizację.
        </h1>
        <router-link class="btn" to="/gallery">Galeria </router-link>

      </div>
      <div class="main__container-box">
        <img src="../assets/img/wea.png" alt="Tort z kremem" >
      </div>
    </div>
    </div>
</section>
</template>

<script>

export default {
  name: "TheMainSection",
}
</script>

<style scoped lang="scss">
.main__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10%;
}
.main__container-box {
  width: 40%;
  h1 {
    margin: 1rem;
  }
}
</style>