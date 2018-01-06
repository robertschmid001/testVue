<template>
  <div class="component1-container">
    <div class="texte">
      <p>Ceci est un troisième composant, il contient des inputs</p>
    </div>
    <div class="content-body">
      <form class="" action="index.html" method="post">
        <input type="text" name="" value="" placeholder="Nom" v-model="firstName">
        <input type="text" name="" value="" placeholder="Prénom" v-model="lastName">
        <input type="date" name="" value="" placeholder="Année de naissance" v-model="age">
        <button type="button" name="button" @click="send">Envoyer</button>
      </form>

      <div class="user Info" v-if="user">
        <p>Bonjour {{user.firstName}} {{user.lastName}}.</p>
        <p>tu as {{user.age}} jours aujourd'hui</p>
      </div>
    </div>
  </div>
</template>
<script>
import moment from 'moment'
export default {
  props: {

  },
  data () {
    return {
      user: null,
      firstName: '',
      lastName: '',
      age: 0

    }
  },
  components: {
  },
  computed: {

  },
  methods: {
    send () {
      this.user = {
        firstName: this.firstName,
        lastName: this.lastName,
        age: moment().diff(moment(this.age), 'days')
      }
    }
  }
}
</script>
<style>
.component1-container {
  display: flex;
  flex-direction: column;
}
.texte {
  font-size: 1.2rem;
  font-weight: bold;
}
.content-body {
  padding: 50px;
}
input[type="text"],
input[type="date"] {
  height: 20px;
  border: 2px solid blue;
  border-radius: 5px;
}
</style>
