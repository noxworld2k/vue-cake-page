<template>
  <section class="contact">
    <div>
      <h1>Skontaktuj się z nami lub
        <button class="btn" @click="orderFormToggle">Złóż zamówienie</button>
      </h1>
    </div>
    <div class="contact__form" v-if="orderForm === false">
      <form ref="form" @submit.prevent="sendEmail">
        <label for="name">
          Imię i nazwisko
        </label>
        <input type="text" name="name" required>
        <label for="email">
          E-Mail
        </label>
        <input type="email" name="email" required>
        <label for="date">
          Data Uroczystości
        </label>
        <input type="date" name="date">
        <label for="phone">
          Telefon
        </label>
        <input type="tel" name="phone">
        <label for="address">
          Adres
        </label>
        <input type="text" name="address">
        <label for="message">
          Wiadomość
        </label>
        <textarea name="message"> </textarea>
        <input class="button__submit" type="submit" value="Wyślij">
        <div v-if="mailSendResult.length > 1">
          <p>{{ mailSendResult }}</p>
        </div>
      </form>
    </div>
    <div class="contact__form" v-if="orderForm === true">
      <form ref="form" @submit.prevent="sendEmail">
        <div>
          <label for="name">
            Imię i nazwisko
          </label>
          <input type="text" name="name" required>
          <label for="email">
            E-Mail
          </label>
          <input type="email" name="email" required>
          <label for="date">
            Data Uroczystości
          </label>
          <input type="date" name="date">
          <label>
            Telefon
          </label>
          <input type="text" name="phone">
          <label for="address">
            Adres
          </label>
          <input type="text" name="address">
        </div>
        <div>
          <label for="cakeOption">
            Wybierz Rodzaj Tortu
          </label>
          <select name="cakeOption">
            <option value="TRADYCYJNY">TRADYCYJNY</option>
            <option value="OMBRE">OMBRE</option>
            <option value="ANGIELSKI">ANGIELSKI</option>
            <option value="BEZA PAWŁOWA">BEZA PAWŁOWA</option>
            <option value="DEEP CAKE">DEEP CAKE</option>
            <option value="NAGI TORT">NAGI TORT</option>
          </select>

          <label for="biszkoptOption">
            WYBIERZ RODZAJ BISZKOPTU
          </label>
          <select name="biszkoptOption">
            <option value="1">JASNY</option>
            <option value="2">CIEMNY</option>
          </select>
          <label for="masaOption">
            WYBIERZ RODZAJ 1 MASY
          </label>
          <select name="masaOption" v-for="(index, masa) in masses" :key="index">
            <option value="JASNA">{{ masa }}</option>
            <option value="CIEMNA">CIEMNA</option>
          </select>
          <label for="masaOption2">
            WYBIERZ RODZAJ 2 MASY
          </label>
          <select name="masaOption2" v-for="(index, masa) in masses" :key="index">
            <option value="JASNA">{{ masa }}</option>
            <option value="CIEMNA">CIEMNA</option>
          </select>
          <label for="fruits">
            DODAJ OWOCE
          </label>
          <select name="fruits">
            <option value="JASNA">JASNA</option>
            <option value="CIEMNA">CIEMNA</option>
          </select>

          <label for="decorations">
            DEKORACJE
          </label>
          <select name="decorations">
            <option value="PERSONALIZOWANA">PERSONALIZOWANA</option>
            <option value="WG UZNANIA AUTORA">WG UZNANIA AUTORA</option>
          </select>
          <label for="message">
            Wiadomość
          </label>
          <textarea name="message"> </textarea>
          <input class="button__submit" type="submit" value="Wyślij">
        </div>
        <div v-if="mailSendResult.length > 1">
          <p>{{ mailSendResult }}</p>
        </div>
      </form>
    </div>

  </section>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
  name: "TheOrderForm",
  data() {
    return {
      orderForm: false,
      mailSendResult: "",
    };
  },
  methods: {
    orderFormToggle() {
      return this.orderForm = !this.orderForm;

    },
    sendEmail() {
      emailjs.sendForm('service_47i46rf', 'template_qeah6yg', this.$refs.form, '0IFbyvYh06rFpgIM0')
          .then((result) => {
            this.mailSendResult = result.text;
          }, (error) => {
            this.mailSendResult = error.text;
          });
    }
  },
};
</script>

<style lang="scss" scoped>

.contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  background-image: url(../assets/img/background.png);
}

.contact__form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 600px;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    label, input {
      margin-bottom: 10px;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }
}


</style>