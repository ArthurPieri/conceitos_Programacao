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
            this.monsterLife = 100,
            this.logs = []
        },
        quitGame() {
            this.running = false,
            this.quit = true,
            this.playerLife = 0,
            this.monsterLife = 100
            this.msg = "Come abacate bem!"
            this.registerLog("pra fazer coco bonito", 'healed')
        },
        attack(special) {
            this.hurt('monsterLife', 5, 10, special, 'jogador', 'Monstro', 'player')
            if (this.monsterLife > 0)
            this.hurt('playerLife', 7, 12, false, 'Monstro', 'Jogador', 'monster')
        },
        hurt(prop, min, max, special, source, target, cls){
            const plus = special ? 5 : 0
            const hurt = this.getRandom(min + plus, max + plus)
            this[prop] = Math.max(this[prop] - hurt, 0)
            this.registerLog(`${source} atingiu ${target} com ${hurt}.`, cls)
        },
        healAndHurt(){
            this.heal(10, 15)
            this.hurt('playerLife', 7, 12, false, 'Monstro', 'Jogador', 'monster')
        },
        heal(min, max){
            const heal = this.getRandom(min, max)
            this.playerLife = Math.min(this.playerLife + heal, 100)
            this.registerLog(`Jogador ganhou força de ${heal}.`, 'healed')
        },
        getRandom(min, max) {
            const value = Math.random() * (max - min) + min
            return Math.round(value)
        },
        registerLog(text, cls) {
            this.logs.unshift({ text, cls })
        }
   },
   watch: {
        hasResult(value) {
            if (value) this.running = false
        },
        playerLife() {
            if (this.playerLife == 0 && !this.quit)
                this.msg = "Vencedores não usam drogas!"
        },
        monsterLife() {
            if (this.monsterLife == 0)
                this.msg = '"Vencedores vencem!" "Vencedores vencem!"'
        }
   }
})