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

</style>


<style lang="scss">
*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0 auto;
}

html, body {
  height: 100%;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

#root, #__next {
  isolation: isolate;
}

$color-primary: #980440;
$color-secondary: #fff;
$color-tertiary: #000000;
$font-primary: 'Open Sans', sans-serif;
* {
  font-family: $font-primary;
  color: $color-primary;
  text-decoration: none;
}
header, footer, main, section {
  width: 100%;
  margin: 0 auto;
}
.container {
  width: 100%;
  margin: 0 auto;
  display: flex;
  padding: 1.2rem;
  @media screen and (min-width: 1080px) {
    width: 1080px;
  }
}
.btn, .button__submit {
  background-color: #980440;
  color: #fff;
  border: none;
  padding: 10px 20px;
  text-align: center;
  font-size: 16px;
  margin: 2rem;
  cursor: pointer;
}

.section-100vh {
  height: 100vh;
}
.header__main-background{
  background-image: url("./assets/img/wdsw.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 90vh;
}

</style>
