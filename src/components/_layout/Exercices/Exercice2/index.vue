<template>
  <div class="first-container">
    <div class="header">
      <div class="buttons">
        <div class="button" @click="$router.go(-1)">
          Précédent
        </div>
        <div class="button" @click="$router.push({name: 'exercice3'})">
          Suivant
        </div>
      </div>
      <div class="title">
        Ton deuxième défi, le composant dynamique.
      </div>
      <div class="content">
        <p>Le but de cet exercice est de mettre en place un composant dynamique qui changera au click sur un nom d'une liste.</p>
        <p>A chaque click sur un des noms, le composant devra changer d'état.</p>
        <p>Les composants à afficher se situe dans le dossier "./_subs/" </p>
        <p>Aucun style imposé</p>
    </div>
  </div>
  <div class="body">
    <div class="left">
      <ul class="themes">
        Thèmes:
        <li>Dynamique Components</li>
        <li>Event listener</li>
      </ul>
    </div>
    <div class="separator">
    </div>
    <div class="right">
      <!-- ton code ici -->
    </div>
  </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {

  },
  components: {
  }
}
</script>
<style>
</style>
