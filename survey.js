const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question(`What's your name? Nicknames are also acceptable `, (name) => {
  rl.question(`Which meal is your favourite? (eg: dinner, brunch, etc.) `, (meal) => {
    rl.question(`What do you listen to while doing that? `, (music) => {
      rl.question(`What's your favourite thing to eat for that meal? `, (food) => {
        rl.question(`Which sport is your absolute favourite? `, (sport) => {
          rl.question(`What is your superpower? In a few words, tell us what you are amazing at! `, (superPower) => {
            console.log(`${name}'s special superpower is ${superPower}! Their favourite meal is ${meal} and 
            they love devouring ${food}. In their spare time they listen to ${music} and watch ${sport}.`);
            rl.close();
          });
        });
      });
    });
  });
});


