<template>
  <div class="header__main-background">
    <TheHeader/>
    <TheMainSection/>
  </div>
  <TheCakeDesc/>
  <GetYourCake/>
  <TheOrderForm/>
  <TheFooter/>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import TheMainSection from "@/components/TheMainSection";
import TheCakeDesc from "@/components/TheCakeDesc";
import TheOrderForm from "@/components/TheOrderForm";
import TheFooter from "@/components/TheFooter";
import GetYourCake from "@/components/GetYourCake";

export default {
  name: 'HomeView',
  components: {
    TheHeader,
    TheMainSection,
    TheCakeDesc,
    GetYourCake,
    TheOrderForm,
    TheFooter,
  }
}
</script>

<style scoped>
.header__main-background{
  background-image: url("../assets/img/wdsw.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
}

</style>
