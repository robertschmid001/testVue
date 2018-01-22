<template>
  <div class="first-container">
    <div class="header">
      <div class="buttons">
        <div class="button" @click="$router.go(-1)">
          Précédent
        </div>
        <div class="button" @click="$router.push({name: 'exercice5'})">
          Suivant
        </div>
      </div>
      <div class="title">
        Ton quatrième défi, utiliser le store.
      </div>
      <div class="content">
        <p>Le but de cet exercice est de découvrir le store (optionnel).</p>
        <p>Le store te permet de passer des données d'un composant frère à un autre.</p>
        <p>Retourne sur le premier exercice et enregistre les données de ta todo liste d'un un store,</p>
        <p>puis affiche les sur cette page.</p>
        <p>Aucun style imposé</p>
    </div>
  </div>
  <div class="body">
    <div class="left">
      <ul class="themes">
        Thèmes:
        <li>Store</li>
        <li>Setter</li>
        <li>Getter</li>
        <li>Configuration</li>
      </ul>
    </div>
    <div class="separator">
    </div>
    <div class="right">

    <div class="wrap-content">
      <ul class="list">
        <li v-for="todo in todos">
          <div class="listedItems">
            <label>{{ todo.label }}</label>
          </div>
        </li>
      </ul>
          <span class="todo-count"><strong>{{remaining}}</strong> taches à faire</span>
    </div>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      donnée: {
        title: 'Mon super composant',
        content: 'je suis utilisable où tu veux',
        question: 'Classe ou pas classe ?'
      }
    }
  },
  methods: {

  },
  computed: {
    todos() {
      return this.$store.state.todos;
    },

    remaining() {
      return this.$store.state.todos.filter(todo => !todo.completed).length;
    }
  },

  components: {
  }
}
</script>
<style>
.listedItems {
  box-shadow: 1px 1px 1px 1px;
  border-radius: 5px;
  margin: 2px;
  padding: 2px;
}
.wrap-content {
  width: 600px;
  background-color: white;
  padding: 30px;
  margin: 0;
}

li {
  list-style-type: none;
  padding-bottom: 2px;
  margin: 0;
}
.first-container {
  background-color: lightgrey;
}
ul {
  padding: 0;
  margin: 0;
  align-content: center;
}
.inputDelete {
  float: right;
  border-radius: 5px;
}
</style>
