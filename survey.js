const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let profile = {};

//callback hell

rl.question('What\'s your name? ', (response) => {
  profile["name"] = response;
  rl.question('What\'s an activity you like doing? ', (response) => {
    profile["activity"] = response;
    rl.question('What do you listen to while doing that? ', (response) => {
      profile["listen"] = response;
      rl.question('Which meal is your favorite (eg: dinner, brunch, etc.)? ', (response) => {
        profile["meal"] = response;  
        rl.question('What\'s your favorite thing to eat for that meal? ', (response) => {
          profile["food"] = response;
          rl.question('Which sport is your absolute favorite? ', (response) => {
            profile["sport"] = response;
            rl.question('What is your superpower? ', (response) => {
              profile["superpower"] = response;  
              console.log(`Here is your bio: \n${profile.name} loves listening to ${profile.listen} while ${profile.activity}, devours ${profile.food} for ${profile.meal}, prefers ${profile.sport} over any other sport, and is amazing at ${profile.superpower}.`);
              rl.close();
            })
          })
        })
      })
    })
  })
});