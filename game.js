class Cover extends Phaser.Scene {
    constructor(){
        super("Cover");
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('Top Secret','Top Secret.png');
        this.load.image('Left Fire','Left Fire.png');
        this.load.image('Right Fire','Right Fire.png');
    
    }
    create(){
        this.add.image(320,210, 'Top Secret').setScale(0.50);
        this.add.image(220,100, 'Left Fire').setScale(0.50);
        this.add.image(220,400, 'Right Fire').setScale(0.50);
        this.add.text(420,210, "The World Needs You!").setFontSize(50);
        this.add.text(50,100, "Click anywhere to begin.").setFontSize(20);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start("Intro"));
            });
    }

}

class Intro extends Phaser.Scene {
    constructor() {
        super("Intro")
    }
    create() {
        let texta = this.add.text(20,20, "The world is in danger once more. . .").setFontSize(50);
        let textb = this.add.text(30,30, "Your Mission:").setFontSize(50);
        let textc = this.add.text(40,40, "You must retrieve the stolen files, while evading capture").setFontSize(50);
        let textd = this.add.text(50,50, "Best of Luck").setFontSize(50);
        let texte = this.add.text(60,100, "Click anywhere to continue.").setFontSize(20);
//add animation so that text comes in one after the other
        this.tweens.add({
            targets: texta,
            duration: 1000,
            alpha: 1,
            ease: 'Linear',
            delay: 100,
            });

        this.tweens.add({
            targets: textb,
            duration: 1000,
            alpha: 1,
            ease: 'Linear',
            delay: 300
        });

        this.tweens.add({
            targets: textc,
            duration: 1000,
            alpha: 1,
            ease: 'Linear',
            delay: 500
        });

        this.tweens.add({
            targets: textd,
            duration: 1000,
            alpha: 1,
            ease: 'Linear',
            delay: 700
        });

        this.tweens.add({
            targets: texte,
            duration: 1000,
            alpha: 1,
            ease: 'Linear',
            delay: 900
        });

        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start("Entrance"));
        });
    }
}

class Entrance extends AdventureScene {
    constructor(){
        super("Entrance");
    }
    preload(){
        this.load.image('Entrance','Entrance.png');
        this.load.image('Rock', 'Rock.png');
        this.load.image('Flower', 'Flower.png');
    }
    create(){
        this.add.image(320,210, 'Entrance').setScale(0.50);
        this.add.image(400,203, 'Flower').setScale(0.50);
        this.add.image(400,206, 'Flower').setScale(0.50);
        this.add.image(400,209, 'Flower').setScale(0.50);
        this.add.image(200,200, 'Rock').setScale(0.50);
        this.add.image(400,300, 'Rock').setScale(0.50);
        // point over + point down: . . .this.add.text
        //animation
        //sub classes are onEnter???
        //arrown or text to move between rooms??
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start("First Room"));
        });
    }
    onEnter(){
        this.add.text(this.w * 0.6, this.w * 0.8, "Enter Cave")
        .setFontSize(this.s * 2)
          .setInteractive()
          .on('pointerover', () => {
              this.showMessage("This must be where I can find the documents.");
          })
          .on('pointerdown', () => {
              this.gotoScene('First Room');
          });
        }
    }

class FirstRoom extends AdventureScene {
    constructor() {
        super("First Room");
    }
    preload(){
        this.load.image('FirstRoom','FirstRoom.png');
        this.load.image('File','File.png');
    }
    create(){
        this.add.image(320,210, 'FirstRoom').setScale(0.50);
        let File = this.add.image(320,210, 'File').setScale(0.50);
        //I am possibly defining the 'Rock' variable twice,maybe?
        //let Rock = this.add.image(320,210, 'Rock').setScale(0.50);
        let RightFire = this.add.image(320,210, 'Right Fire').setScale(0.50);
    }
    onEnter() {
        this.add.text(this.w * 0.6, this.w * 0.8, "Turn Left")
        .setFontSize(this.s * 2)
          .setInteractive()
          .on('pointerover', () => {
              this.showMessage("Where does this lead?");
          })
          .on('pointerdown', () => {
              this.gotoScene('Second Room');
          });

        this.add.text(this.w * 0.6, this.w * 0.8, "Go Straight")
        .setFontSize(this.s * 2)
          .setInteractive()
          .on('pointerover', () => {
              this.showMessage("Where does this lead?");
          })
          .on('pointerdown', () => {
              this.gotoScene('Third Room');
          });

//currently set to collect rock, should I only move it off??
           let Rock = this.add.text(this.w * 0.3, this.w * 0.3, "Rock")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Stone, heavy."))
             .on('pointerdown', () => {
                this.showMessage("You picked up a Rock.");//you moved a Rock
                this.gainItem('Key');
                this.tweens.add({
                    targets: Rock,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                   onComplete: () => Rock.destroy()
                }
                )});

                let RightFire = this.text(this.w * 0.3, this.w * 0.3, "Torch")
                .setFontSize(this.s * 2)
                .setInteractive()
                .on('pointerover', ("Torch, Embeded in the wall."))
                   .on('pointerdown', () => {
                this.showMessage("Hot! No touching!");
                this.tweens.add({
                    targets: clip,
                    x: '+=' + this.s,
                    repeat: 2,
                   yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                })});
//check spacing for how let .. should be aligning compared to onEnter and other                
            let File = this.add.text(this.w * 0.5, this.w * 0.1, "File")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
            this.showMessage("Found it!")
          })
           .on('pointerdown', () => {
               this.showMessage("You picked up confidencial documents.");
               this.gainItem('File');
               this.tweens.add({
                   targets: File,
                   y: `-=${2 * this.s}`,
                   alpha: { from: 1, to: 0 },
                   duration: 500,
//idea on what one of the things i change or add to other page is .move for rocks or .shake for flower bundles?(if even am understanding that part correctly )
                  onComplete: () => File.destroy()
               }
               )});
           }

}

class SecondRoom extends AdventureScene {
    constructor() {
        super("Second Room");
    }
    preload(){
        this.load.image('SecondRoom','SecondRoom.png');
        this.load.image('Key','Key.png');
    }
    create(){
        this.add.image(320,210, 'SecondRoom').setScale(0.50);
        this.add.image(320,210, 'Left Fire').setScale(0.50);
        let Key = this.add.image(320,210, 'Key').setScale(0.50);
    }
    onEnter() {
       this.add.text(this.w * 0.3, this.w * 0.4, "Go back")
          .setFontSize(this.s * 2)
            .setInteractive()
      //      .on('pointerover', () => {
      //          this.showMessage("You've got no other choice, really.");
     //       })
            .on('pointerdown', () => {
                this.gotoScene('First Room');
            });

        this.add.text(this.w * 0.6, this.w * 0.8, "Turn Right")
            .setFontSize(this.s * 2)
              .setInteractive()
        //      .on('pointerover', () => {
        //          this.showMessage("You've got no other choice, really.");
       //       })
              .on('pointerdown', () => {
                  this.gotoScene('Third Room');
              });

            let Key = this.add.text(this.w * 0.5, this.w * 0.1, "🔑 key")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
             this.showMessage("Seems important. . .")
           })
            .on('pointerdown', () => {
                this.showMessage("You picked up the key.");
                this.gainItem('Key');
                this.tweens.add({
                    targets: Key,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                   onComplete: () => Key.destroy()
                });
            })

    //    let door = this.add.text(this.w * 0.1, this.w * 0.15, "🚪 locked door")
    //        .setFontSize(this.s * 2)
    //        .setInteractive()
    //        .on('pointerover', () => {
    //            if (this.hasItem("key")) {
    //                this.showMessage("You've got the key for this door.");
    //            } else {
    //                this.showMessage("It's locked. Can you find a key?");
    //            }
    //        })
    //        .on('pointerdown', () => {
    //            if (this.hasItem("key")) {
    //                this.loseItem("key");
    //                this.showMessage("*squeak*");
     //               door.setText("🚪 unlocked door");
       //             this.gotoScene('demo2');
         //       }

     //   let finish = this.add.text(this.w * 0.6, this.w * 0.2, '(finish the game)')
     //       .setInteractive()
     //       .on('pointerover', () => {
     //           this.showMessage('*giggles*');
      //          this.tweens.add({
       //             targets: finish,
        //            x: this.s + (this.h - 2 * this.s) * Math.random(),
         //           y: this.s + (this.h - 2 * this.s) * Math.random(),
          //          ease: 'Sine.inOut',
           //         duration: 500
         //       });
       //     })
       //     .on('pointerdown', () => this.gotoScene('outro'));
    }
}

class ThirdRoom extends AdventureScene {
    constructor() {
        super("Third Room");
    }
    preload(){
        this.load.image('ThirdRoom','ThirdRoom.png');
        this.load.image('Door','Door.png');
        this.load.image('Mouse','Mouse.png');
    }
    create(){
        this.add.image(320,210, 'SecondRoom').setScale(0.50);
        this.add.image(320,210, 'Left Fire').setScale(0.50);
        this.add.image(320,210, 'Right Fire').setScale(0.50);
        this.add.image(320,210, 'Flower').setScale(0.50);
        this.add.image(320,210, 'Flower').setScale(0.50);
        this.add.image(320,210, 'Mouse').setScale(0.50);
        this.add.image(320,210, 'Door').setScale(0.50);
    }

    onEnter() {

    }
}


class Freedom extends Phaser.Scene {
    constructor() {
        super('Freedom');
    }
    preload(){
        this.load.image('Freedom','Freedom.png');
    }
    create() {
        this.add.image(320,210, 'Freedom').setScale(0.50);
        this.add.image(320,210, 'Left Fire').setScale(0.50);
        this.add.image(320,210, 'Right Fire').setScale(0.50);
        this.add.text(50, 50, "Mission Complete!").setFontSize(50);
        this.add.text(50, 100, "Click anywhere to restart.").setFontSize(20);
        this.input.on('pointerdown', () => this.scene.start('Cover'));
    }
}

class Capture extends Phaser.Scene {
    constructor() {
        super('Capture');
    }
    preload(){
        this.load.image('Mission Failed','Mission Failed.png');
    }
    create() {
        this.add.image(320,210, 'Mission Failed').setScale(0.50);
        this.add.image(320,210, 'Left Fire').setScale(0.50);
        this.add.image(320,210, 'Right Fire').setScale(0.50);
        this.add.text(50, 50, "You have been captured by the enemy!").setFontSize(50);
        this.add.text(50, 100, "Click anywhere to restart.").setFontSize(20);
        this.input.on('pointerdown', () => this.scene.start('Cover'));
    }
}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Cover, Intro, FirstRoom, SecondRoom, ThirdRoom, FourthRoom, Freedom, Capture],
    title: "Adventure Game",
});

