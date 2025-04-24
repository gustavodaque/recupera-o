class Personagem {
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

    ataque() {
        this.ataque += 5
        console.log('Rajada de magia!')
    }

    defesa() {
        this.defesa = 0
        console.log('Poção de imunidade temporariamente indefinida!')
    }

    manaUsar() {
        this.mana += 1('unit')
        console.log('Erga-se!')
    }

    manaGasta() {
        if (this.manaUsar)
            this.mana -= 50
        console.log('Pouca energia!')
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
}
//Cada classe tem uma função e reação diferente para cada tipo de ataque ou dano recebido.
