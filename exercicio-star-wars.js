"use strict";
// 1 - Super Classe do Personagem
class Personagem {
    nome;
    planeta;
    energia;
    constructor(nome, planeta, energia) {
        this.nome = nome;
        this.planeta = planeta;
        this.energia = energia;
    }
    apresentar() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Planeta: ${this.planeta}`);
        console.log(`Energia: ${this.energia}`);
    }
    usarHabilidade() {
        console.log("O personagem usou uma habilidade.");
    }
}
// 2 - Subclasses dos Personagens
// Classe Jedi
class Jedi extends Personagem {
    corSabre;
    constructor(nome, planeta, energia, corSabre) {
        super(nome, planeta, energia);
        this.corSabre = corSabre;
    }
    // Sobrescrevendo o método usarHabilidade
    usarHabilidade() {
        console.log(`O Jedi ${this.nome} usou o Truque Mental.`);
        console.log(`Cor do sabre de luz: ${this.corSabre}`);
    }
}
// Classe Sith
class Sith extends Personagem {
    nivelRaiva;
    constructor(nome, planeta, energia, nivelRaiva) {
        super(nome, planeta, energia);
        this.nivelRaiva = nivelRaiva;
    }
    usarHabilidade() {
        console.log(`O Sith ${this.nome} usou a Aura Sombria.`);
        console.log(`Nível de raiva: ${this.nivelRaiva}`);
    }
}
// Classe Droide
class Droide extends Personagem {
    funcao;
    constructor(nome, planeta, energia, funcao) {
        super(nome, planeta, energia);
        this.funcao = funcao;
    }
    usarHabilidade() {
        console.log(`O droide ${this.nome} executou sua função: ${this.funcao}.`);
    }
}
// Classe Mandaloriano
class Mandaloriano extends Personagem {
    armaPrincipal;
    constructor(nome, planeta, energia, armaPrincipal) {
        super(nome, planeta, energia);
        this.armaPrincipal = armaPrincipal;
    }
    usarHabilidade() {
        console.log(`O Mandaloriano ${this.nome} atacou usando o ${this.armaPrincipal}.`);
    }
}
// 3 - Saída esperada aproximada
// Jedi
console.log("\nJedi"); // Obi-Wan
const obiWan = new Jedi("Obi-Wan Kenobi", "Stewjon", 98, "Azul");
obiWan.apresentar();
obiWan.usarHabilidade();
// Sith
console.log("\nSith"); // Darth Jar-Jar
const darthJar = new Sith("Darth Jar-Jar", "Naboo", 99, 100);
darthJar.apresentar();
darthJar.usarHabilidade();
// Droide
console.log("\nDroide"); // B2-RP
const b2RP = new Droide("Droid de Batalha B2-RP ", "Quell", 93, "Operações de ataque");
b2RP.apresentar();
b2RP.usarHabilidade();
// Mandaloriano (Desafio)
console.log("\nMandaloriano"); // Pre Vizsla
const mandaloriano1 = new Mandaloriano("Pre Vizsla", "Mandalore", 94, "Sabre Negro");
mandaloriano1.apresentar();
mandaloriano1.usarHabilidade();
// Quebra de linha para deixar bonito
console.log("\n");
// Respotas das Questões
// 1. Qual classe é a superclasse do exercício?
// A classe Personagem.
// 2. Quais classes são subclasses?
// As classes Jedi, Sith, Droid e Mandaloriano.
// 3. Por que usamos super(...) no construtor das subclasses?
// O "super(...)" é utilizado para invocar o construtor da superclasse (Personagem), isso é obrigatório na herança para garantir que os atributos herdados, como por exemplo o nome, planeta, energia sejam corretamente inicializados antes da subclasse inicializar seus atributos exclusivos.
// 4. Qual a diferença entre private e protected?
// O "private" restringe o acesso ao atributo ou método apenas dentro da própria classe onde ele foi declarado, já o "protected" também proíbe o acesso externo, porém, ele permite que o atributo/método seja acessado pelas subclasses (classes filhas).
// 5. O que é sobrescrita de método?
// A sobrescrita é ativada quando uma subclasse recria (redefine) um método que ela herdou da superclasse, permitindo alterar o comportamento original do método para se adequar às necessidades específicas da subclasse, como foi feito no método "usarHabilidade().
