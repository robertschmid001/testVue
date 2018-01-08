<template>
  <div class="first-container">
    <div class="header">
      <div class="buttons">
        <div class="button" @click="$router.go(-1)">
          Précédent
        </div>
        <div class="button" @click="$router.push({name: 'exercice2'})">
          Suivant
        </div>
      </div>
      <div class="title">
        Ton premier défi, la TODO list.
      </div>
      <div class="content">
        <p>Si tu es familier de cet exercice, cela ne devrait pas poser de problème.</p>
        <p>Sinon l'exercice consiste à créer une liste, qui s'implémentera avec les valeurs que tu rentreras dans un input</p>
        <p>(bonus: créer un bouton pour supprimer un élément)</p>
    </div>
  </div>
  <div class="body">
    <div class="left">
      <ul class="themes">
        Thèmes:
        <li>List rendering</li>
        <li>Data Binging</li>
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

const todo = [{
  label: 'ma première chose à faire'
}, {
  label: 'ma deuxième chose à faire'
}]

console.log(todo)

export default {
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>
<style>

</style>
