<template>
  <div class="container ">
    <h1>Skontaktuj się z nami lub złóż zamówienie</h1>
  </div>
  <section class="container contact">
    <div class="contact__form" >
      <form ref="form" @submit.prevent="sendEmail" class="contact__form-order">
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
          <label for="cakeOption">
            Wybierz Rodzaj Tortu
          </label>
          <select name="cakeOption">
            <option v-for="cakeOptions in cakeOption" :key="cakeOptions.id" :value="cakeOptions.name">
              {{ cakeOptions.name }}
            </option>
          </select>
          <label for="biszkoptOption">
            WYBIERZ RODZAJ BISZKOPTU
          </label>
          <select name="biszkoptOption">
            <option v-for="biszkoptOptions in biszkoptOption" :value="biszkoptOptions.name" :key="biszkoptOptions.id">
              {{ biszkoptOptions.name }}
            </option>
          </select>
          <label for="masaOption">
            WYBIERZ RODZAJ 1 MASY
          </label>
          <select name="masaOption" >
            <option  v-for="masaOptions in masaOption" :value="masaOptions.name" :key="masaOptions.id">{{ masaOptions.name }}</option>
          </select>
          <label for="masaOption2">
            WYBIERZ RODZAJ 2 MASY
          </label>
          <select name="masaOption2">
            <option  v-for="masaOptions in masaOption" :value="masaOptions.name" :key="masaOptions.id">{{ masaOptions.name }} </option>
          </select>
          <label for="fruits">
            DODAJ OWOCE
          </label>
          <select name="fruits">
            <option v-for="fruits in fruitsOptions" :value="fruits.name" :key="fruits.id">{{fruits.name}}</option>
          </select>
          <label for="decorations">
            DEKORACJE
          </label>
          <select name="decorations">
            <option v-for="decoration in decorationOptions" :value="decoration.name" :key="decoration.id">{{decoration.name}}</option>
          </select>
          <label for="message">
            Wiadomość
          </label>
          <textarea name="message"> </textarea>
          <input class="button__submit" type="submit" value="Wyślij">
        </div>
      </form>
      <div v-if="mailSendResult.length > 1">
        <p>{{ mailSendResult }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import emailjs from '@emailjs/browser';
import {cakeOption, biszkoptOption, masaOption, fruitsOptions, decorationOptions} from '../data/options.json';

export default {
  name: "TheOrderForm",
  data() {
    return {
      orderForm: false,
      mailSendResult: "",
      cakeOption: cakeOption,
      biszkoptOption: biszkoptOption,
      masaOption: masaOption,
      fruitsOptions: fruitsOptions,
      decorationOptions: decorationOptions,
    };
  },
  methods: {
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
.contact__form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem auto;
  width: 100%;
  max-width: 1200px;
  padding: 0 1rem;
  .contact__form-order {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 600px;
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      max-width: 300px;
      label {
        margin: 0.5rem 0;
        font-size: 1.2rem;
        font-weight: 600;
      }
      input {
        margin: 0.5rem 0;
        padding: 0.5rem;
        border: 1px solid #000;
        border-radius: 5px;
        font-size: 1rem;
        font-weight: 400;
        width: 100%;
      }
      select {
        margin: 0.5rem 0;
        padding: 0.5rem;
        border: 1px solid #000;
        border-radius: 5px;
        font-size: 1rem;
        font-weight: 400;
        width: 100%;
      }
      textarea {
        margin: 0.5rem 0;
        padding: 0.5rem;
        border: 1px solid #000;
        border-radius: 5px;
        font-size: 1rem;
        font-weight: 400;
        width: 100%;
      }
    }
  }
  .button__submit {
    margin: 0.5rem 0;
    padding: 0.5rem;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: 600;
    background-color: #97043f;
}
}

</style>