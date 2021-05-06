const readlineSync = require("readline-sync");
var champName = readlineSync.question("What is your name Champion?");
readlineSync.question("Welcome " + champName + " to Cerpents Cave! Where you will fight monsters and retrieve their infamous treasures");

var monsters = ["Ogre", "Chimera", "Giant spider"];
var treasures = ["Ogre eye", "Chimera tail", "Spider venom"];
var prize = [];
let champHealth = 50;
const options = ["Walk", "Exit", "Print"];
let pickup = treasures[Math.floor(Math.random()* treasures.length)];

function runGame(){
    var champAP = Math.floor(Math.random() * (5 - 4 + 3) + 5)
    var monster = monsters[Math.floor(Math.random() * monsters.length)];
    let monstersHealth = 50;
    var monstersAP = Math.floor(Math.random() * (5 - 3 + 2) + 5)
    
    // Player keys in choice
    var ChampIndex = readlineSync.keyInSelect(options, "What is your move Champion?");

    if (options[ChampIndex] == "Exit"){
        return champHealth = 0;
    }
    else if (options[ChampIndex] == "Print"){
        console.log(champName + ": \n" + champHealth +  "\nTreasures: " + pickup);
    }
    else if (options[ChampIndex] === "Walk"){
        let chance = Math.random();
        if (chance <= .3){
            console.log("Walking");
        }
        else if (chance >= .3){
            console.log(monster + " has arisen at your location");

            while(monstersHealth > 0 && champHealth > 0){
                var playerChoice = readlineSync.question('What will you do run or fight or glory? Enter "r" to run or "a" to Fight:');

                switch (playerChoice){
                    case "r":
                        var runAway = Math.random();
                        if(runAway < .5) {
                            console.log("You can not run away fast enough and" + monsters + " attacks you with" + monstersAP);
                        }
                        else {
                            console.log("You fled like the coward you are.");
                            break;
                        }

                    case "a":
                        monstersHealth -= champAP;
                        console.log("You have stuck " + monster + " with " + champAP + " Attack power");
                        
                        champHealth -= monstersAP;
                        console.log("Arisen monster has stuck you with " + monstersAP + " attack power");

                        if (monstersHealth <= 0){
                            console.log("You have slain " + monster + "\n You have picked up " + pickup + "from " + monster);
                            let loot = Math.random();
                            if (loot <= .3){
                                prize.push(pickup);
                            }
                            else if (champHealth <= 0){
                                console.log("You have been slain by" + monster);
                            }
                        }
                }
            }
        }
    }

}

while(champHealth > 0){
    Heal = function(){
        userActive = true;
        champHealth = 50;
    };
    Heal();
    runGame();
}