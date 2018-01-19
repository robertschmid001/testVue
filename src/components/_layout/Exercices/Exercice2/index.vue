
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
        <p>Le but de cet exercice est de mettre en place un composant dynamique qui changera au clique sur un nom d'une liste.</p>
        <p>A chaque clique sur un des noms, le composant devra changer d'état.</p>
        <p>Les composants à afficher se situent dans le dossier "./_subs/" </p>
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
      Liste des composants :<span @click="changeTheDisplayedComponent('composant1')">composants1</span>
                            <span @click="changeTheDisplayedComponent('composant2')">composants2</span>
                            <span @click="changeTheDisplayedComponent('composant3')">composants3</span>
      <!-- ton code ici -->

        <ul>
          <li><component1></component1></li>
          <!-- Show a list of components, maybe with an active state. 
          PS the whole <ul> should be an active state? maybe inside a div
            *Check if <li><ul> are needed.-->
        </ul>

    </div>
  </div>
  </div>
</template>

<script>
  import Component1 from './_subs/Component1.vue'
  import Component2 from './_subs/Component2.vue'
  import Component3 from './_subs/Component3.vue'

export default {
    data () {
      return {
      }
    },
    methods: {
      changeTheDisplayedComponent: function () {
        /* CODE: Probably state changes with a couple of 'If' 
        example, if click composant1, comp1=true,comp2=false,comp3=false
        Or three seperate methods, but would have to modify the click events.*/
        
      }
    },
    components: {
      Component1,
      Component2,
      Component3
    }
}
</script>

<style>
 .right span {
   cursor: pointer;
 }
</style>
