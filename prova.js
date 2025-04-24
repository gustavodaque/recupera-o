class Personagem {
    #vida
    #forca
    #mana
    constructor(vida, forca, mana, golpe, especial) {
        this.vida = vida;
        this.forca = forca;
        this.mana = mana;
        this.golpe = golpe;
        this.especial = especial;
    }
}

class Mago extends Personagem {
    constructor(ataque, defesa, mana) {
        this.ataque = ataque;
        this.defesa = defesa;
        this.mana = mana
    }

    usaraAtaque() {
        this.ataque += 5;
        console.log('Rajada de magia!');
    }

    usarDefesa() {
        this.defesa = 0;
        console.log('Poção de imunidade temporariamente indefinida!');
    }

    manaUsar() {
        this.mana += 1; 
        console.log('Erga-se!');
    }

    manaGasta() {
        if (this.mana >= 50) {
            this.mana -= 50;
            console.log('Mana usada!');
        } else {
            console.log('Pouca energia!');
        }
    }
}

class Guerreiro extends Personagem {
    constructor(ataque, defesa, golpe) {
        this.ataque = ataque;
        this.defesa = defesa;
        this.golpe = golpe;
    }
    ataque() {
        this.ataque += 10
        console.log('Ataque!')
    }

    defesa() {
        this.vida -= 2
        console.log('Defesa!')
    }

    golpe() {
        this.golpe += 20
        console.log('Golpe!')
    }

}
class Arqueiro extends Personagem {
    constructor(ataque, defesa, especial) {
        this.ataque = ataque;
        this.defesa = defesa;
        this.especial = especial;
    }

    ataque(){
        this.ataque += 5
        console.log('Dano!')
    }

    defesa(){
        if(this.ataque = false)
            this.vida -= 5
        console.log('Raios de defesa!')
    }

    especial(){
        if(this.especial = true)
            this.ataque += 22
        console.log('Flechas divinas!')
    }
}
//Cada classe tem uma função e reação diferente para cada tipo de ataque ou dano recebido.

class P1 {
    constructor(Mago, Arqueiro, Guerreiro){
        this.Mago = Mago;
        this.Arqueiro = Arqueiro;
        this.Guerreiro = Guerreiro;
    }
}

const mago = new Mago('P1', 100, 20, 50, 5, true);
const guerreiro = new Guerreiro('P1', 120, 30, 10, 20, false);
const arqueiro = new Arqueiro('P1', 90, 25, 20, 10, true);