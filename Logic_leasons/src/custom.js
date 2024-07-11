//saída
console.log("Digite o nome do seu jogador")

//varíavel
let nickname = "Lorenzinho"

//concatenando uma mensagem + uma variável
console.log("Bem vindo " + nickname)
console.log(nickname + " entrou no servidor")

//Exemplo de como uma notificação funciona
console.log("Clash Royale diz: Báu aberto, venha coletar seu tesouro")
console.log("Clash Royale diz: Seu clã precisa de você, venha para a guerra")

//trocando um texto que sempre se repete, por uma variável
const notificacao = "Clash Royale diz: "

console.log(notificacao + "Baú aberto, venha coletar seu tesouro")
console.log(notificacao + "Seu clã precisa de você, venha para a guerra")

let poteCafe = "Café pilão"
let poteAcucar = "Açucar cristal"
let poteBiscoito = "Biscoito de maizena"

console.log("Na cozinha da vovó, hoje tem: " + poteCafe + " - " + poteAcucar + " - " + poteBiscoito)

let pokemonName = "Pikachu"
let pokemonHp = 45
let pokemonLevel = 20
let pokemonSex = "M"
let selectable = true

// nome, idade, numero de telefone, cpf, endereço, plano de saude
// string = armazenar texto
// number = armazenar numeros
// boolean = armazenar valores lógicos

let grandmaName = "Jusbiscleiza"
let grandmaAge = 85
let grandmaTel = "65987562351"
let grandmaCpf = "321.654.789-34"
let grandmaAddress = "Rua dos Pardais, numero 74, bairro dos joão de Barro"
let grandmaHealthPlan = true

// variaveis sobre uma caneca que está na minha frente
let cupSize = 3
let cupCondition
let cupHasDesign
let cupContent

let pokemons = ["Pikachu", "Bulbassaur", "Charmander"]
console.log(pokemons)
console.log(pokemons[0])

pokemons.pop()
console.log(pokemons)

pokemons.shift()
console.log(pokemons)

pokemons.unshift("Pikachu")
console.log(pokemons)

pokemons.push("Charmander")
console.log(pokemons)

//arrayName.splice(initial position, number of deletions, "new Element name")
pokemons.splice(2, 0, "Ponitta")
console.log(pokemons)

let pokemons2 = ["Squirtle", "Meow"]
console.log(pokemons2)

let pokedex = [].concat(pokemons, pokemons2)
console.log(pokedex)

let pokeTeam = [
    ["Pikachu", "M", "Level 1"],
    ["Charmander", "F", "Level 5"]
]

console.log(pokeTeam[0])
console.log(pokeTeam[0][0])
console.log(pokeTeam[0][1])
console.log(pokeTeam[0][2])

console.log(" O pokemon " + pokeTeam[1][0] + "é do sexo " + [1][1] + " e ainda está no " + pokeTeam [1][2])