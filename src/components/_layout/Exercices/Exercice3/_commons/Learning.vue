<template>
  <div class="learning-container">
    <p>{{donnee.title}}</p>
    <p>{{donnee.content}}</p>
   <button @click="statusChange">{{donnee.question}}</button> 


  </div>
</template>
<script>
export default {
  props: {

  },
  data () {
    return {
      donnee: {
        title: 'Mon super composant',
        content: 'je suis utilisable où tu veux',
        question: 'Classe ou pas classe ?'
      }
    }
  },
  components: {
 
  },
  computed: {

  },
  methods: {
    statusChange(){
      this.donnee.question = "Un stage contre un taco?? ;)"
    }
  }
}
</script>
<style>
.learning-container {
  display: flex;
  flex-direction: column;
}
button{
  width: 100%;
  height: 50px;
  border-radius: 15px 15px 15px 15px;
}
</style>