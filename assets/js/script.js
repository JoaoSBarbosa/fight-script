let char = new Knight("João");
let monster = new LittleMonster();
let log = new Log(document.querySelector('.log'));

let stage = new Stage(
  char,
  monster,
  document.querySelector("#char"),
  document.querySelector("#monster"),
  log
);

stage.start();