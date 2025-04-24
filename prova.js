class Personagem{
    constructor(vida, forca, mana){
        this.vida = vida;
        this.forca = forca;
        this.mana = mana;
    }
}

class Mago extends Personagem{
  constructor(ataque, defesa,usarMana){
    this.ataque = ataque;
    this.defesa = defesa;
    this.usarMana = usarMana
  }
}

class Guerreiro extends Personagem{
  constructor(ataque, defesa, golpe){
    this.ataque = ataque;
    this.defesa = defesa;
    this.golpe = golpe;
  }
}

class Arqueiro extends Personagem{
    constructor(ataque, defesa, especial){
        this.ataque = ataque;
        this.defesa = defesa;
        this.especial = especial;
    }

}