let char = new Knight("João");
let monster = new LittleMonster();

let stage = new Stage(
  char,
  monster,
  document.querySelector("#char"),
  document.querySelector("#monster")
);

stage.start();