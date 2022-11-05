<template>
<section class="section-100vh background-fall flex">
  <div class="container section__cake">
    <div class="box__cake-desc ">
      <h2>
        CZEKOLADOWY
      </h2>
      <ul>
        <li>MLECZNA CZEKOLADA</li>
        <li>BIAŁA CZEKOLADA</li>
        <li>PALONA CZEKOLADA</li>
      </ul>
    </div >
    <div class="box__cake-desc box__cake-right">
      <h2>
        POPULARNY
      </h2>
      <ul>
        <li>OREO</li>
        <li>KINDER BUENO</li>
        <li>RAFAELLO</li>
      </ul>
    </div>

    <div class="box__cake-desc">
      <h2>
        OWOCOWY
      </h2>
      <ul>
        <li>MALINA</li>
        <li>TRUSKAWKA</li>
        <li>BORÓWKA</li>
        <li>BRZOSKWINIA</li>
        <li>WIŚNIA</li>
        <li>JAGODA</li>
      </ul>
    </div>
    <div class="box__cake-desc box__cake-right">
      <h2>
        PIANKO-MUS
      </h2>
      <ul>
        <li>PIANKA MALINOWA</li>
        <li>PIANKA TRUSKAWKOWA</li>
        <li>PIANKA MANGO</li>
        <li>PIANKA WIŚNIOWA</li>
      </ul>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: "TheCakeDesc"
}
</script>

<style lang="scss" scoped>
.section__cake {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 2rem;
  background-image: url("../assets/img/cake.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 400px;
  div {
    width: 300px;
    height: 200px;
    margin: 25px 20px;
    position: relative;
    .image-absolute {
      width: 450px;
      height: 100%;
      position: absolute;
      top: -150px;
      left: -50px;
    }
  }
}
.box__cake-desc {
  flex-basis: 45%;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
}
.box__cake-right {
  text-align: right;
}
.background-fall {
  background-image: url("../assets/img/background.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 90vh;
}
.flex {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>