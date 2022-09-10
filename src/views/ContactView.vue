<template>
  <h1>
    Vue Popup
  </h1>
  <button @click="openPopup">Open popup</button>
  <ModalUni v-if="popUpTrigger === true">
    <h1>
      Vue Popup
    </h1>
  </ModalUni>
  <div v-for="(user) in usersData" :key="user.id">
    <h1>
      {{user.firstname}}
    </h1>
    <h2>
      {{user.lastname}}
    </h2>
    <p v-for="(friend, index) in user.friends" :key="index">
      {{ friend }}
    </p>
  </div>
</template>

<script>
import {ref} from 'vue';
import ModalUni from '@/components/ModalUni.vue';

export default {
  name: "ContactView",
  setup() {
    const popUpTrigger = ref(false);
    return {
      ModalUni,
      popUpTrigger,
    }
  },
  components: {
    ModalUni
  },
  methods: {
    openPopup() {
      this.popUpTrigger = true;
    },
    closePopup() {
      this.popUpTrigger = false;
    },
    deleteSomethingFromId(id) {
      this.users = this.users.filter(user => user.id !== id);
    },

  },
  data() {
    return {
      usersData: []
    }
  },




}
</script>

<style scoped>

</style>