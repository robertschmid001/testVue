<template>
  <div class="first-container">
    <div class="header">
      <div class="buttons">
        <div class="button" @click="$router.go(-1)">
          Précédent
        </div>
        <div class="button" style="visibility: hidden">
          Suivant
        </div>
      </div>
      <div class="title">
        Ton dernier défi, un peu de javascript.
      </div>
      <div class="content">
        <p>Le but de cet exercice est d'évaluer ton sens de l'algorithmie'.</p>
        <p>créer un algorithme pour déchiffrer le message secret</p>
        <p>Le chiffre de césar, tu connais?</p>
        <p>un chiffre de césar te permet de cripter une chaine de caractère en décalant la lettre,</p>
        <p>du nombre de lettre défini par une variable (aucune lettre avec un accent)</p>
        <p>ex: cesar(2, "salut") retournera "ucnqv"</p>
        <p>a toi de jouer (et ne triche pas, on le vera!!!)</p>
    </div>
  </div>
  <div class="body">
    <div class="left">
      <ul class="themes">
        Thèmes:
        <li>Algorithme</li>
        <li>JavaScript</li>
        <li>César</li>
      </ul>
    </div>
    <div class="separator">
    </div>
    <div class="right">
      <p class="texte">Le code : {{phrase}}</p>
      <input type="number" name="" value="" v-model="number">
      <p class="texte">Résultat: {{cesar(number, phrase)}}</p>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      number: 0,
      phrase: 'Lkroiozgzout, za gy xéayyo zut ingrrktmk'
    }
  },
  methods: {
    cesar (number, text) {
      // ton code ici
    }
  },
  components: {
  }
}
</script>
<style>
</style>
