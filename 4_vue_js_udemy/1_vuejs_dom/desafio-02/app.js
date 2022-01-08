new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert(`Estou te alertando`)
          },
        apresentarValor(e) {
            this.valor = e.target.value
        }
    }
})