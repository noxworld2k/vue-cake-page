<template>
<section class="section-100vh">
  <div class="section__cake-title">
    <h2>WYBIERZ RODZAJ TORTU</h2>
  </div>
  <div class="container">
    <div class="section__cake">
      <div class="box__cake" v-for="cake in cakeOptions" :key="cake.id" >
        <div>
          <img :src="cake.image" :alt="cake.alt">
        </div>
        <div>
          <h3>{{cake.title}}</h3>
          <p>{{cake.desc}}</p>
        </div>
      </div>
    </div>
  </div>

</section>
</template>

<script>
import {cakeOptions} from "@/data/cakeOptions";

export default {
  name: "GetYourCake",
  data() {
    return {
      cakeOptions: cakeOptions,
    };
  }
}
</script>

<style lang="scss" scoped>
.section__cake {
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
}
.box__cake {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 25px 20px;
  max-width: 300px;
  min-width: 250px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
}
.section__cake-title {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  h2 {
    font-size: 3rem;
  }
}
</style>