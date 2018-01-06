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
        <p>Le but de cet exercice est de découvrir le store.</p>
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
      <!-- ton code ici -->
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
  components: {
  }
}
</script>
<style>
</style>
