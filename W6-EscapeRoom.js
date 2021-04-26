var readlineSync = require('readline-sync');
var playerName = readlineSync.question("Provide your name Please.");

var intro = `Welcome ${playerName} to the Escape Room Game Demo`;
console.log(intro);

// Player alive or has key flags.
var Alive = true;
var hasKey = false;

while(Alive == true){
    var menuOptions = readlineSync.keyIn("Press 1 to enter your hand in the hole \n Press 2 to grab the key on the counter \n Press 3 to open the door", {limit: '$<1-3>'});
    if (menuOptions == 1){
        //Player selected option 1
        //Player dies when placing hand in the hole. Thus ending the game.
        console.log("You have entered your hand in the HOLE and have unfortunatley DIED!!");
        Alive = false;
    }
    else if (menuOptions == 2 && hasKey == false){
        //Option 2 if player has not found key yet.
        console.log( `${playerName}, you now grab the key off of the counter. Hmmmmm. What to do next?`)
        hasKey = true;
    }
    else if (menuOptions == 2 && hasKey == true){
        //Player chose 2 and already has the key.
        console.log(`HEY ${playerName}, stop playing around and get to the DOOR!! you already have the key don't you?`);
    }
    else if (menuOptions == 3 && hasKey == false){
        //Player chose 3 but did not have the key.
        console.log(`${playerName}, you are missing a KEY wink wink item. Come back when you have the item`)
    }
    else if (menuOptions == 3 && hasKey == true){
       //Playeer has found the key and opened the door. Ending the game sucessfully.
        console.log(`You place the key in the door and it opens. ${playerName}, You have reached your salvation. CONGRATULATIONS!!!!!!!`)
        Alive = false;
    }
}