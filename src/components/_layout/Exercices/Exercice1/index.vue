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
    
    <div class="wrap-content">
      <input class="inputNewLabel" v-model="newLabel" @keyup.enter="addTodo" placeholder="UNE NOUVELLE TACHE">
      <ul class="list">
        <li v-for="todo in todos">
          <div class="listedItems">
            <input type="checkbox" v-model="todo.completed">
            <label>{{ todo.label }}</label>
            <button class="inputDelete" @click="deleteTodo(todo)">Delete</button>
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
const todo = [
  {
    label: "ma première chose à faire"
  },
  {
    label: "ma deuxième chose à faire"
  }
];

console.log(todo);

export default {
  data() {
    return {
      todos: [
        {
          completed: false,
          label: "ma première chose à faire"
        },
        {
          completed: false,
          label: "ma deuxième chose à faire"
        }
      ]
    };
  },

  methods: {
    addTodo() {
      this.todos.unshift({
        completed: false,
        label: this.newLabel
      });
      this.newLabel = "";
    },

    deleteTodo(todo) {
      this.todos = this.todos.filter(i => i !== todo);
    }
  },

  computed: {
    remaining() {
      return this.todos.filter(todo => !todo.completed).length;
    }
  }
};
</script>

<style>
.listedItems {
  box-shadow: 1px 1px 1px 1px;
  border-radius: 5px;
  margin: 2px;
  padding: 2px;
}
.wrap-content{
  width:600px;
  background-color:white;
  padding: 30px;
  margin: 0;

}
.inputNewLabel{
  height: 20px;
  width: 100%;
  border-radius: 5px;
}
li{
  list-style-type: none;
  padding-bottom: 2px;
  margin: 0;
}
.first-container{
  background-color: lightgrey;
}
ul{
  padding: 0;
  margin: 0;
  align-content: center;
}
.inputDelete{
  float:right;
  border-radius: 5px;
}
</style>
