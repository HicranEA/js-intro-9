class Player {
    constructor(nickName, score) {
        this.nickName = nickName;
        this.score = score;
    }

    getInfo() {
        return `${this.nickName}'s score is ${this.score}`;
    }

    attack(otherPlayer) {
        this.score++;
        otherPlayer.score--;
        console.log(`${this.nickName} attacking ${otherPlayer.nickName}`);
      }

    damage() {
        this.score--;
        console.log(`${this.nickName} damaged by -1`);
      }
    }

class SuperPlayer extends Player {
    constructor(nickName, score) {
        super(nickName, score); 
    }
   
    superAttack(otherPlayer) {
          this.score += 2;
          otherPlayer.score -= 2;
          console.log(`${this.nickName} attacking ${otherPlayer.nickName}`);
        }
      }

class  HeroPlayer extends Player {
    constructor(nickName, score) {
        super(nickName, score);
    }

    heal(otherPlayer) {
        otherPlayer.score++;
        console.log(`${this.nickName} received 1 point`);
    }
}

const player1 = new Player('Player 1', 5);
const player2 = new Player('Player 2', 5);

const superPlayer = new SuperPlayer('Super Player', 3);
const heroPlayer = new HeroPlayer('Hero Player', 10);

player1.attack(player2);
player1.attack(superPlayer);
superPlayer.superAttack(player2);
superPlayer.superAttack(player1);
superPlayer.superAttack(heroPlayer);
heroPlayer.heal(player1);
heroPlayer.heal(player2);
player1.attack(superPlayer);
player2.attack(superPlayer);
heroPlayer.attack(superPlayer);
player1.damage();
player2.damage();

for(const player of [player1, player2, superPlayer, heroPlayer]) {
    console.log(player.getInfo());
}

/*
console.log(player1.getInfo());
console.log(player2.getInfo());
console.log(superPlayer.getInfo());
console.log(heroPlayer.getInfo());
*/

