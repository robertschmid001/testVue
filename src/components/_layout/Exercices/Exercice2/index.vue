
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
      Liste des composants :<span @click="changeTheDisplayedComponent('composant1')">composant1</span>
                            <span @click="changeTheDisplayedComponent('composant2')">composant2</span>
                            <span @click="changeTheDisplayedComponent('composant3')">composant3</span>
      <!-- ton code ici -->
      <div>
        <component1 v-if="comp1" ></component1>
        <component2 v-if="comp2" ></component2>
        <component3 v-if="comp3" ></component3>
      </div>     
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
        comp1: false,
        comp2: false,
        comp3: false
      }
    },
    methods: {
      changeTheDisplayedComponent(text) {
        let newtext = text

  if (newtext == "composant1"){
 this.comp1=true;
 this.comp2=false;
 this.comp3=false;
} else if (newtext == "composant2"){
 this.comp1=false;
 this.comp2=true;
 this.comp3=false;
} else if (newtext == "composant3"){
 this.comp1=false;
 this.comp2=false;
 this.comp3=true;
} else return console.log("error");
  
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
