//Q; why are my images not loading??
//Q: why is the inventory not showing up??
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
        let topsecret = this.add.image(830,600, 'Top Secret').setScale(0.80);
        let LeftFire = this.add.image(120,700, 'Left Fire').setScale(0.50);
        let RightFire = this.add.image(1200,600, 'Right Fire').setScale(0.50);
      //add tween delays for text  
        this.add.text(700,600, "The World Needs You!").setFontSize(50);
        this.add.text(700,740, "Click anywhere to begin.").setFontSize(40);
        
        topsecret.depth = 1;
        LeftFire.depth = 2;
        RightFire.depth = 2;

        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start("Intro"));
            });
    }

}
//Q: why does the text no fade in over time, or it does but since cover does not work it does not start??
class Intro extends Phaser.Scene {
    constructor() {
        super("Intro")
    }
    create() {
        let texta = this.add.text(70,90, "The world is in danger once more. . .").setFontSize(50);
        let textb = this.add.text(150,300, "Your Mission:").setFontSize(70);
        let textc = this.add.text(40,430, "You must retrieve the stolen files, while evading capture.").setFontSize(50);
        let textd = this.add.text(300,580, "Best of Luck.").setFontSize(50);
        let texte = this.add.text(500,900, "Click anywhere to continue.").setFontSize(40);
//delay is not working??
        this.tweens.add({
            targets: texta,
            duration: 1000,
            alpha: 1,
            ease: 'Linear',
            delay: 1000,
            });

        this.tweens.add({
            targets: textb,
            duration: 1000,
            alpha: 1,
            ease: 'Linear',
            delay: 1100
        });

        this.tweens.add({
            targets: textc,
            duration: 1000,
            alpha: 1,
            ease: 'Linear',
            delay: 1200
        });

        this.tweens.add({
            targets: textd,
            duration: 1000,
            alpha: 1,
            ease: 'Linear',
            delay: 1300
        });

        this.tweens.add({
            targets: texte,
            duration: 1000,
            alpha: 1,
            ease: 'Linear',
            delay: 1400
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
        let Entrance = this.add.image(320,210, 'Entrance').setOrigin(0,0);
        let Flowera = this.add.image(400,203, 'Flower').setScale(0.50);
        let Flowerb = this.add.image(400,206, 'Flower').setScale(0.50);
        let Flowerc = this.add.image(400,209, 'Flower').setScale(0.50);
        let Rocka = this.add.image(200,200, 'Rock').setScale(0.50);
        let Rockb = this.add.image(400,300, 'Rock').setScale(0.50);
//not working to show images??
        Entrance.depth = 1;
        Flowera.depth = 2;
        Flowerb.depth = 2;
        Flowerc.depth = 2;
        Rocka.depth = 2;
        Rocka.depth = 2;

//Q: does this need to go after onEnter, or maybe put onEnter above create?? 
//F: if starts to work check on how long the delay is,and if it is sufficent time   
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start("First Room"));
        });
    }
//Q: thought maybe images are not showing up with it as this.add.text so changed to image but still not loading??
    onEnter(){
        this.add.image(this.w * 0.6, this.w * 0.8, "Enter Cave")
            .setFontSize(this.s * 2)
        //let Entrance = this.add.image(320,210, 'Entrance')//.setOrigin(0,0);
        //still not working??
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("This must be where I can find the documents.");
            })
            .on('pointerdown', () => {
                this.gotoScene('First Room');
            });
        let Rock = this.add.image(this.w * 0.3, this.w * 0.3, "Rock")
            .setFontSize(this.s * 2)
            .setInteractive()
//possibly change so the rock moves and does not collect as on of the additions
            .on('pointerover', () => this.showMessage("Stone, heavy."))
            .on('pointerdown', () => {
                this.showMessage("You picked up a rock.");
                this.gainItem('Rock');
                this.tweens.add({
                    targets: Rock,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                   onComplete: () => Rock.destroy()
                }
                )});
        let Flower = this.add.image(this.w * 0.3, this.w * 0.3, "Flower")
                .setFontSize(this.s * 2)
                .setInteractive()
                .on('pointerover', () => this.showMessage("Flower, smells nice."))
                .on('pointerdown', () => {
                    this.showMessage("You picked up a flower.");
                    this.gainItem('Flower');
                    this.tweens.add({
                        targets: Flower,
                        y: `-=${2 * this.s}`,
                        alpha: { from: 1, to: 0 },
                        duration: 500,
                       onComplete: () => Flower.destroy()
                    })
                })
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
        this.add.image(320,210, 'File').setScale(0.50);
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
                this.showMessage("You picked up a Rock.");
                this.gainItem('Rock');
                this.tweens.add({
                    targets: Rock,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                   onComplete: () => Rock.destroy()
                }
                )});

        let RightFire = this.text(this.w * 0.3, this.w * 0.3, "Right Fire")
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

        let Key = this.add.text(this.w * 0.5, this.w * 0.1, "Key")
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
        let LeftFire = this.text(this.w * 0.3, this.w * 0.3, "Left Fire")
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
        let Mouse = this.add.image(320,210, 'Mouse').setScale(0.50);
        let door = this.add.image(320,210, 'Door').setScale(0.50);
    }

    onEnter() {
        let RightFire = this.text(this.w * 0.3, this.w * 0.3, "Right Fire")
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
                })
            })
        let LeftFire = this.text(this.w * 0.3, this.w * 0.3, "Left Fire")
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
                })
            })

        let Flower = this.add.image(this.w * 0.3, this.w * 0.3, "Flower")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Flower, smells nice."))
            .on('pointerdown', () => {
                this.showMessage("You picked up a flower.");
                this.gainItem('Flower');
                this.tweens.add({
                    targets: Flower,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                   onComplete: () => Flower.destroy()
                })
            })

        //let Mouse = this.add.image
        let door = this.add.text(this.w * 0.1, this.w * 0.15, "locked door")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("Key")) {
                    this.showMessage("You've got the key for this door.");
                } else {
                    this.showMessage("It's locked. You do not have the key for this door.");
                }
            })
            .on('pointerdown', () => {
                if (this.hasItem("Key")) {
                    this.loseItem("Key");
                    this.showMessage("*squeak*");
                    door.setText("unlocked door");
                    this.gotoScene('Freedom');
                } else {
                    this.showMessage("You could not get the door open in time.");
                    door.setText("door locked");
                    this.gotoScene('Capture');
                }
            })
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
        let freedom = this.add.image(320,210, 'Freedom').setScale(0.50);
        let LeftFireb = this.add.image(320,210, 'Left Fire').setScale(0.50);
        let RightFireb = this.add.image(320,210, 'Right Fire').setScale(0.50);
        this.add.text(500, 500, "Mission Complete!").setFontSize(50);
        this.add.text(500, 900, "Click anywhere to restart.").setFontSize(40);
        //not working to load images???
        freedom.depth = 1;
        LeftFireb.depth = 2;
        RightFireb.depth = 2;

        this.input.on('pointerdown', () => this.scene.start('Cover'));
        //this.input.on('pointerdown', () => {
        //    this.cameras.main.fade(1000, 0,0,0);
         //   this.time.delayedCall(4000, () => this.scene.start("Intro"));
        //    });
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
        let MissionFailed = this.add.image(320,210, 'Mission Failed').setScale(0.50);
        let LeftFirec = this.add.image(320,210, 'Left Fire').setScale(0.50);
        this.add.image(320,210, 'Right Fire').setScale(0.50);
        this.add.text(300, 500, "You have been captured by the enemy!").setFontSize(50);
        this.add.text(500, 900, "Click anywhere to restart.").setFontSize(40);
        
        MissionFailed.depth = 1;
        LeftFirec =  2;

        this.input.on('pointerdown', () => this.scene.start('Cover'));
        
        //this.input.on('pointerdown', () => {
        //    this.cameras.main.fade(1000, 0,0,0);
         //   this.time.delayedCall(1000, () => this.scene.start("Intro"));
        //    });
    }
}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Cover],
    //scene: [Cover, Intro, Entrance, FirstRoom, SecondRoom, ThirdRoom, Freedom, Capture],
    title: "Adventure Game",
});

