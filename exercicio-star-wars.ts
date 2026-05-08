// 1 - Super Classe do Personagem

class Personagem {

    protected nome: string;
    protected planeta: string;
    protected energia: number;

    constructor(nome: string, planeta: string, energia: number) {

        this.nome = nome;
        this.planeta = planeta;
        this.energia = energia;
    }

    apresentar(): void {

        console.log(`Nome: ${this.nome}`);
        console.log(`Planeta: ${this.planeta}`);
        console.log(`Energia: ${this.energia}`);
    }

    usarHabilidade(): void {

        console.log("O personagem usou uma habilidade.");
    }
}

// 2. Subclasses dos Personagens

// Classe Jedi
class Jedi extends Personagem {

    private corSabre: string;

    constructor(nome: string, planeta: string, energia: number, corSabre: string) {
        super(nome, planeta, energia);
        this.corSabre = corSabre;
    }

    // Sobrescrevendo o método usarHabilidade

    usarHabilidade(): void {

        console.log(`O Jedi ${this.nome} usou o Truque Mental.`);
        console.log(`Cor do sabre de luz: ${this.corSabre}`);
    }
}

// Classe Sith
class Sith extends Personagem {

    private nivelRaiva: number;

    constructor(nome: string, planeta: string, energia: number, nivelRaiva: number) {

        super(nome, planeta, energia);
        this.nivelRaiva = nivelRaiva;
    }

    usarHabilidade(): void {

        console.log(`O Sith ${this.nome} usou a Aura Sombria.`);
        console.log(`Nível de raiva: ${this.nivelRaiva}`);
    }
}

// Classe Droide
class Droide extends Personagem {

    private funcao: string;

    constructor(nome: string, planeta: string, energia: number, funcao: string) {

        super(nome, planeta, energia);
        this.funcao = funcao;
    }

    usarHabilidade(): void {

        console.log(`O droide ${this.nome} executou sua função: ${this.funcao}.`);
    }
}

// Saída esperada aproximada
// Jedi
console.log("\nJedi"); // Obi-Wan
const obiWan = new Jedi("Obi-Wan Kenobi", "Stewjon", 95, "Azul");
obiWan.apresentar();
obiWan.usarHabilidade();

// Sith
console.log("\nSith"); // Darth Jar-Jar
const darthJar = new Sith("Darth Jar-Jar", "Naboo", 99, 100);
darthJar.apresentar();
darthJar.usarHabilidade();

// Droide
console.log("\nDroide");
const b2RP = new Droide("Droid de Batalha B2-RP ", "Quell", 93, "Operações de ataque");
b2RP.apresentar();
b2RP.usarHabilidade();

// Quebra de linha
console.log("\n");

// Respotas das Questões



