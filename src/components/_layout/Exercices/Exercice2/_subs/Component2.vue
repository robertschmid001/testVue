<template>
  <div class="component2-container">
    <div class="texte">
      <p>Ceci est un deuxieme composant, il contient des images</p>
    </div>
    <div class="content-body">
      <img src="~@/assets/logo-code-forefront.png" alt="">
      <div class="">
        powered by
      </div>
      <img src="~@/assets/logo.png" alt="">
    </div>
  </div>
</template>
<script>
export default {
  props: {

  },
  data () {
    return {

    }
  },
  components: {
  },
  computed: {

  },
  methods: {

  }
}
</script>
<style>
.component2-container {
  display: flex;
  flex-direction: column;
}
.texte {
  font-size: 1.2rem;
  font-weight: bold;
}
.content-body {
  margin: 10% 25%;
  display: inline-flex;
  align-self: center;
  justify-content: space-around;
  align-items: center;
  align-content: center

}

img {
  height: 200px;
}
</style>
