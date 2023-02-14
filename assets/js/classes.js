// ---- Classe Padrão ------
class Character {
   _life = 1;
   maxLife = 1;
   attack = 0;
   defense = 0;
 
   constructor(name) {
     this.name = name;
   }
   get life() {
     return this._life;
   }
   set life(newLife) {
     this._life = newLife < 0 ? 0 : newLife;
   }
 }
 
 // ---- Classe do Guerreiro ------
 class Knight extends Character {
   constructor(name) {
     super(name);
     this.life = 100;
     this.attack = 10;
     this.defense = 8;
     this.maxLife = this.life;
   }
 }
 
 // ---- Classe do Mago ------
 class Sorcerer extends Character {
   constructor(name) {
     super(name);
     this.life = 80;
     this.attack = 15;
     this.defense = 3;
     this.maxLife = this.life;
   }
 }
 
// --- Classes do Monstro pequeno ---- 
class LittleMonster extends Character{
   constructor(name){
      super('Necromorfos');
      this.life = 40;
      this.attack = 4;
      this.defense = 4;
      this.maxLife = this.life;
   }
}
// --- Classes do Monstro grande ---- 
class BigMonster extends Character{
   constructor(name){
      super('Omega');
      this.life = 120;
      this.attack = 17;
      this.defense = 6;
      this.maxLife = this.life;
   }
}