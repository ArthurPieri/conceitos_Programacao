new Vue({
    el: '#app',
   data: {
        running: false,
        quit: false,
        playerLife: 100,
        monsterLife: 100,
        msg: '',
        logs: []
   },
   computed: {
        hasResult() {
            return this.playerLife == 0 || this.monsterLife == 0
        }
   },
   methods: {
        startGame() {
            this.running = true,
            this.quit = false,
            this.playerLife = 100,
            this.monsterLife = 100
        },
        quitGame() {
            this.running = false,
            this.quit = true,
            this.playerLife = 0,
            this.monsterLife = 100
            this.msg = "Come abacate bem!"
        },
        attack(special) {
            this.hurt('playerLife', 7, 12, false)
            this.hurt('monsterLife', 5, 10, special)
        },
        hurt(prop, min, max, special){
            const plus = special ? 5 : 0
            const hurt = this.getRandom(min + plus, max + plus)
            this[prop] = Math.max(this[prop] - hurt, 0)
        },
        healAndHurt(){
            this.heal(10, 15)
            this.hurt('playerLife', 7, 12, false)
        },
        heal(min, max){
            const heal = this.getRandom(min, max)
            this.playerLife = Math.min(this.playerLife + heal, 100)
        },
        getRandom(min, max) {
            const value = Math.random() * (max - min) + min
            return Math.round(value)
        }
   },
   watch: {
        hasResult(value) {
            if (value) this.running = false
        },
        playerLife() {
            if (this.playerLife == 0 && !quit)
                this.msg = "Vencedores não usam drogas"
        },
        monsterLife() {
            if (this.monsterLife == 0)
                this.msg = '"Vencedores vencem!" "Vencedores vencem!"'
        }
   }
})