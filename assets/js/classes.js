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
class LittleMonster extends Character {
  constructor(name) {
    super("Necromorfos");
    this.life = 40;
    this.attack = 4;
    this.defense = 4;
    this.maxLife = this.life;
  }
}
// --- Classes do Monstro grande ----
class BigMonster extends Character {
  constructor(name) {
    super("Omega");
    this.life = 120;
    this.attack = 17;
    this.defense = 6;
    this.maxLife = this.life;
  }
}

class Stage {
  constructor(fighter1, fighter2, fighter1Element, fighter2Element, logObject) {
    this.fighter1 = fighter1;
    this.fighter2 = fighter2;
    this.fighter1Element = fighter1Element;
    this.fighter2Element = fighter2Element;
    this.logObject = logObject;
  }

  start() {
    this.update();
    this.fighter1Element
      .querySelector(".attackButton")
      .addEventListener("click", () =>
        this.doAttack(this.fighter1, this.fighter2)
      );

    this.fighter2Element
      .querySelector(".attackButton")
      .addEventListener("click", () =>
        this.doAttack(this.fighter2, this.fighter1)
      );
  }
  update() {
    // Fight1
    this.fighter1Element.querySelector(".name").innerHTML = `${
      this.fighter1.name
    } - ${this.fighter1.life.toFixed(1)} HP`;
    let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
    this.fighter1Element.querySelector(".bar").style.width = `${f1Pct}%`;
    // Fight2
    this.fighter2Element.querySelector(".name").innerHTML = `${
      this.fighter2.name
    } - ${this.fighter2.life.toFixed(1)} HP`;
    let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
    this.fighter2Element.querySelector(".bar").style.width = `${f2Pct}%`;
  }

  doAttack(attacking, attacked) {
    if (attacking.life <= 0 ) {
      this.logObject.addMessage(`${attacking.name} está morto, não pode atacar!`);
      return;
    }else if(attacked.life <= 0){
      this.logObject.addMessage(`${attacked.name} já morreu!`);
      return;
    }
    // aplicando fator de buffer em ataque e defesa
    let attackFactor = (Math.random() * 2).toFixed(2);
    let actualAttack = attacking.attack * attackFactor;
    
    let defenseFactor = (Math.random() * 2).toFixed(2);
    let actualDefense = attacked.defense * defenseFactor;
    let borderReplace = document.querySelector('.log');
    if (actualAttack > actualDefense) {
      attacked.life -= actualAttack;

      this.logObject.addMessage(`${attacking.name} causou ${actualAttack.toFixed(2)} de dano em ${attacked.name}!`);
      borderReplace.classList.remove("green")
      borderReplace.classList.add('red');
    } else {
      this.logObject.addMessage(`${attacked.name} conseguiu defender do ataque de ${attacking.name}!`);
      borderReplace.classList.remove("red")
      borderReplace.classList.add('green');

    }

    this.update();
  }
}

class Log {

  list = [];
  constructor(listEl){
    this.listEl = listEl;
  }
  addMessage(msg) {
    this.list.push(msg);
    this.render();
  }
  render(){
    this.listEl.innerHTML = '';
    
    for(let i in this.list){
      this.listEl.innerHTML += `<li class="li-js">${this.list[i]}</li><br/>`
    }
  }
}
