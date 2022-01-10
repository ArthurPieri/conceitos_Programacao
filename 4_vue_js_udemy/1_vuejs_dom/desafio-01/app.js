new Vue({
  el: '#desafio',
  data: {
    nome: 'Ana',
    idade: 28,
    imagem: 'http://files.cod3r.com.br/curso-vue/vue.jpg'
  },
  methods: {
    idadeX3() {
      return this.idade * 3
    },
    random() {
      return Math.random()
    }
  }
})