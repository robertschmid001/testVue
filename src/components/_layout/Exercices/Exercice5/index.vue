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
      <p class="texte">Le code : {{text}}</p>
      <input type="number" name="" value="" v-model="number">
      <p class="texte">Résultat: {{cesar(number, text)}}</p>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      number: 0,
      text: 'Lkroiozgzout, za gy xéayyo zut ingrrktmk'
    }
  },
  methods: {
    cesar (number, text) {
      this.number = Number(this.number) 

    /* Je ne comprends pas pourquoi seule la méthode Number() marche.
       La valeur dans l'input est bien un number et non une string, 
       je comprend que la méthode permet de donner un nombre qui représente la valeur d'un objet.
       Mais pourquoi est ce que je ne pourrais pas tout simplement appeler Number = this.number ? */

      console.log(number);
    let i = 0;
    let result = "";
    while (i < text.length) {
        let code = text.charCodeAt(i);
        if (this.isLetter(code)) {
            code += this.number;
            if (this.isAfterZ(code, number)) {
                code -= 26;
            }
            if (this.isBeforeA(code, number)) {
                code += 26;
            }

        }
        let char = String.fromCharCode(code);
        result += char;
        /* console.log(result) */
        i++;
    }
    return result;
    },

isLetter(code) {
/* console.log(code) */
    return (this.isLowerCaseLetter(code) || this.isUpperCaseLetter(code));
},

isUpperCaseLetter(code){
    let aUpperCode = "A".charCodeAt(0);
    let zUpperCode = "Z".charCodeAt(0);
    return (aUpperCode <= code && code <= zUpperCode);
},

isLowerCaseLetter(code){
    let aCode = "a".charCodeAt(0);
    let zCode = "z".charCodeAt(0);
    return (aCode <= code && code <= zCode);
},

isAfterZ(code, number){
    let zCode = "z".charCodeAt(0);
    let zUpperCode = "Z".charCodeAt(0);
      console.log(number)
    return (zCode < code && code <= zCode + number) ||
        (zUpperCode < code && code <= zUpperCode + number);
},

isBeforeA(code, number){
    let aCode = "a".charCodeAt(0);
    let aUpperCode = "A".charCodeAt(0);
      console.log(number);
    return (aCode > code && code >= aCode + number) ||
        (aUpperCode > code && code >= aUpperCode + number);
},

  },
  components: {



    
  }
}
</script>
<style>
</style>
