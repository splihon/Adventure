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
        let texta = this.add.text(570,600, "The World Needs You!").setFontSize(70).setAlpha(0);
        let textb = this.add.text(700,900, "Click anywhere to begin.").setFontSize(40).setAlpha(0);
        
        this.tweens.add({
            targets: texta,
            duration: 1000,
            alpha: 1,
            ease: 'Linear',
            delay: 900,
            });

        this.tweens.add({
            targets: textb,
            duration: 1000,
            alpha: 1,
            ease: 'Linear',
            delay: 2000,
            });
        topsecret.depth = 1;
        LeftFire.depth = 2;
        RightFire.depth = 2;

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
        let texta = this.add.text(70,90, "The world is in danger once more. . .").setFontSize(50).setAlpha(0);
        let textb = this.add.text(150,300, "Your Mission:").setFontSize(70).setAlpha(0);
        let textc = this.add.text(40,430, "You must retrieve the stolen files, while evading capture.").setFontSize(50).setAlpha(0);
        let textd = this.add.text(300,580, "Best of Luck.").setFontSize(50).setAlpha(0);
        let texte = this.add.text(700,900, "Click anywhere to continue.").setFontSize(40).setAlpha(0);

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
            delay: 1600
        });

        this.tweens.add({
            targets: textc,
            duration: 1000,
            alpha: 1,
            ease: 'Linear',
            delay: 2000
        });

        this.tweens.add({
            targets: textd,
            duration: 1000,
            alpha: 1,
            ease: 'Linear',
            delay: 3600
        });

        this.tweens.add({
            targets: texte,
            duration: 1000,
            alpha: 1,
            ease: 'Linear',
            delay: 4600
        });

        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start("Entrance"));
        });
    }
}

class Entrance extends AdventureScene {
    constructor(){
        super("Entrance", "Entrance");
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('Entrance','Entrance.png');
        this.load.image('Rock', 'Rock.png');
        this.load.image('Flower', 'Flower.png');
    }
    onEnter(){
    //create(){
//for some reason only flowerc shows a message
//also need to fix transition so that it does not match picking up item
//how to get all items above Entrance image
//how to get Entrance Image in the middle behind invetory
//how to get message for rocks
//why are there four flowers but only created three??
//why is the text enter cave not showing??
        let Entrance = this.add.image(320,210, 'Entrance').setOrigin(0.30,0.20).setScale(0.83);
        let Flowera = this.add.image(100,203, 'Flower').setScale(0.50);
        let Flowerb = this.add.image(500,213, 'Flower').setScale(0.50);
        let Flowerc = this.add.image(800,229, 'Flower').setScale(0.50);
        let Rocka = this.add.image(200,200, 'Rock').setScale(0.50);
        let Rockb = this.add.image(200,300, 'Rock').setScale(0.50);
//not working to show images??
        Entrance.depth = 1;
        Flowera.depth = 2;
        Flowerb.depth = 2;
        Flowerc.depth = 2;
        Rocka.depth = 2;
        Rockb.depth = 2;
        //inventory.depth = 3;
//Need to fix so that can collect item while not switching to next scene
//Q: does this need to go after onEnter, or maybe put onEnter above create?? 
//F: if starts to work check on how long the delay is,and if it is sufficent time   
        
        //this.input.on('pointerdown', () => {
        //    this.cameras.main.fade(1000, 0,0,0);
        //    this.time.delayedCall(1000, () => this.scene.start("First Room"));
        //});
   // }
//Q: thought maybe images are not showing up with it as this.add.text so changed to image but still not loading??
    //onEnter(){
        this.add.text(this.w * 0.6, this.w * 0.8, "Enter Cave")
            .setFontSize(this.s * 2)
            .depth = 3;//not working to show text??
        //let Entrance = this.add.image(320,210, 'Entrance')//.setOrigin(0,0);
        //still not working??
            Entrance.setInteractive()
            .on('pointerover', () => {
                this.showMessage("This must be where I can find the documents.");
            })
            .on('pointerdown', () => {
                this.gotoScene('First Room');
            });
        //let Rock = this.add.image(this.w * 0.3, this.w * 0.3, "Rock")
       // let Rocka = this.add.image(320, 210, 'Rock').setScale(0.50);
            //.setFontSize(this.s * 2)
        Rocka.setInteractive()
//possibly change so the rock moves and does not collect as on of the additions
            .on('pointerover', () => this.showMessage("Stone, heavy."))
            .on('pointerdown', () => {
                this.showMessage("You picked up a rock.");
                this.gainItem('Rock');
                this.tweens.add({
                    targets: Rocka,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                   onComplete: () => Rocka.destroy()
                }
                )});

        Rockb.setInteractive()
//possibly change so the rock moves and does not collect as on of the additions
            .on('pointerover', () => this.showMessage("Stone, heavy."))
            .on('pointerdown', () => {
                this.showMessage("You picked up a rock.");
                this.gainItem('Rock');
                this.tweens.add({
                    targets: Rockb,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                   onComplete: () => Rockb.destroy()
                }
                )});
        //let Flower = this.add.image(this.w * 0.3, this.w * 0.3, "Flower")
        //let Flower = this.add.image(320,210, 'Flower').setScale(0.50);
            //.setFontSize(this.s * 2)
    // one out of two to item to adventure (this."action"(item);)
        Flowera.setInteractive()
            .on('pointerover', () => this.showMessage("Flower, smells nice."))
            .on('pointerdown', () => {
                this.showMessage("You picked up a flower.");
                this.gainItem('Flower');
                /*this.tweens.add({
                    targets: Flowera,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => Flowera.destroy()*/
                    this.touching(Flowera);
                })
            }
    }

class FirstRoom extends AdventureScene {
    constructor() {
        super("First Room", "First Room");
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('FirstRoom','FirstRoom.png');
        this.load.image('File','File.png');
        this.load.image("Rock","Rock.png");
        this.load.image("rightfire", "rightfire.png")
    }
//so confused, only one file shows up while two torchs and rocks showed up when unoted below, but none show message????
    onEnter(){
    //create(){
        this.add.image(320,210, 'FirstRoom').setOrigin(0.30,0.20).setScale(0.83);
        let File = this.add.image(150,710, 'File').setScale(0.20)
            .setInteractive()
            .on('pointerover', () => {
            this.showMessage("Found it!")
        })
        .on('pointerdown', () => {
            this.showMessage("You picked up confidencial documents.");
            this.gainItem('File');
    //                this.tweens.add({
    //                    targets: File,
    //                    y: `-=${2 * this.s}`,
    //                    alpha: { from: 1, to: 0 },
    //                    duration: 500,
    // //idea on what one of the things i change or add to other page is .move for rocks or .shake for flower bundles?(if even am understanding that part correctly )
    //                   onComplete: () => File.destroy()
    //                })
                this.touching(File);
            });
        //I am possibly defining the 'Rock' variable twice,maybe?
        //let Rock = 
        //this.add.image(320,210, 'Rock').setScale(0.50);
        //let RightFire = 
        //this.add.image(520,550, 'Right Fire').setScale(0.50);
    //}
    //onEnter() {
        this.add.text(this.w * 0.2, this.w * 0.5, "Turn Left")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("What is over here?");
            })
            .on('pointerdown', () => {
                this.gotoScene('Second Room');
            });

        this.add.text(this.w * 0.4, this.w * 0.5, "Go Straight")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
              this.showMessage("Where does this lead?");
            })
            .on('pointerdown', () => {
              this.gotoScene('Third Room');
            });

//currently set to collect rock, should I only move it off??
        //let Rock = this.add.text(this.w * 0.3, this.w * 0.3, "Rock")
    //   
    
    
        let Rock = this.add.image(750,630, 'Rock').setScale(0.50);
        //.setFontSize(this.s * 2)
        Rock.setInteractive()
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
                })
    })
///????
        //let RightFire = 
        let rightfire = this.add.image(800,550, 'rightfire').setScale(0.50)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Torch, Embeded in the wall."))
            .on('pointerdown', () => {
                this.showMessage("Hot! No touching!");
                this.tweens.add({
                    targets: rightfire,
                    x: '+=' + this.s,
                    repeat: 2,
                   yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                })});
//check spacing for how let .. should be aligning compared to onEnter and other 
//this file does not connect with loaded image??               
        //let File = this.add.text(this.w * 0.5, this.w * 0.1, "File")
//         let File = this.add.image(750,710, 'File').setScale(0.20);
//         //.setFontSize(this.s * 2)
//         File.setInteractive()
//             .on('pointerover', () => {
//             this.showMessage("Found it!")
//           })
//            .on('pointerdown', () => {
//                this.showMessage("You picked up confidencial documents.");
//                this.gainItem('File');
// //                this.tweens.add({
// //                    targets: File,
// //                    y: `-=${2 * this.s}`,
// //                    alpha: { from: 1, to: 0 },
// //                    duration: 500,
// // //idea on what one of the things i change or add to other page is .move for rocks or .shake for flower bundles?(if even am understanding that part correctly )
// //                   onComplete: () => File.destroy()
// //                })
//                 this.touching(File);
//                });
           }

}

class SecondRoom extends AdventureScene {
    constructor() {
        super("Second Room", "Second Room");
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('SecondRoom','SecondRoom.png');
        this.load.image('Key','Key.png');
        this.load.image("Left Fire", "Left Fire.png")
    }
    onEnter() {
    //create(){
        this.add.image(320,210, 'SecondRoom').setOrigin(0.30,0.20).setScale(0.83);
        let LeftFire = this.add.image(40,550, 'Left Fire').setScale(0.40);
        //this.add.image(320,210, 'Key').setScale(-0.11);
// I dont understand why there are two keys and on how to make the below interaction go along with the loaded image of key above???
    //}
    //onEnter() {
//should i take out go back and only have an option to turn right??
        this.add.text(this.w * 0.2, this.w * 0.5, "Go back")
          .setFontSize(this.s * 2)
            .setInteractive()
      //      .on('pointerover', () => {
      //          this.showMessage("You've got no other choice, really.");
     //       })
            .on('pointerdown', () => {
                this.gotoScene('First Room');
            });

        this.add.text(this.w * 0.4, this.w * 0.5, "Turn Right")
            .setFontSize(this.s * 2)
              .setInteractive()
        //      .on('pointerover', () => {
        //          this.showMessage("You've got no other choice, really.");
       //       })
              .on('pointerdown', () => {
                  this.gotoScene('Third Room');
              });

        let Key = this.add.image(600,650, 'Key').setScale(0.30);
              //let Key = this.add.(this.w * 0.5, this.w * 0.1, "Key")
            //.setFontSize(this.s * 2)
            Key.setInteractive()
            .on('pointerover', () => {
             this.showMessage("Seems important. .")
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
//not sure why i had two fires for a sec and then none?? but doesnt respond pointover
        //let LeftFire = this.text(this.w * 0.3, this.w * 0.3, "Left Fire")
        //let LeftFire = 
        this.add.image(40,550, 'Left Fire').setScale(0.40);
        //.setFontSize(this.s * 2)
        LeftFire.setInteractive()
            .on('pointerover', () => {
                this.showMessage("Torch, Embeded in the wall.");
            })
            .on('pointerdown', () => {
                this.showMessage("Hot! No touching!");
                this.tweens.add({
                    targets: LeftFire,
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
        super("Third Room", "Third Room");
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('ThirdRoom','ThirdRoom.png');
        this.load.image('Door','Door.png');
        this.load.image('Mouse','Mouse.png');
    }
    onEnter() {
    //create(){
        this.add.image(320,210, 'ThirdRoom').setOrigin(0.30,0.20).setScale(0.83);
        this.add.image(320,210, 'Left Fire').setScale(0.50);
        this.add.image(320,210, 'Right Fire').setScale(0.50);
        this.add.image(320,210, 'Flower').setScale(0.50);
        this.add.image(320,210, 'Flower').setScale(0.50);
        this.add.image(320,210, 'Mouse').setScale(0.50);
        this.add.image(320,210, 'Door').setScale(0.50);
    //}

    //onEnter() {
        //let RightFire = this.text(this.w * 0.3, this.w * 0.3, "Right Fire")
          //  .setFontSize(this.s * 2)
          let RightFire = this.add.image(320,210, 'Right Fire').setScale(0.50);
          RightFire.setInteractive()
            .on('pointerover', () => {
                this.showMessage("Torch, Embeded in the wall.");
            })
            .on('pointerdown', () => {
                this.showMessage("Hot! No touching!");
                this.tweens.add({
                    targets: RightFire,
                    x: '+=' + this.s,
                    repeat: 2,
                   yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                })
            })
        //let LeftFire = this.text(this.w * 0.3, this.w * 0.3, "Left Fire")
        let LeftFire = this.add.image(320,210, 'Left Fire').setScale(0.50);
        //.setFontSize(this.s * 2)
        LeftFire.setInteractive()
            .on('pointerover', () => {
                this.showMessage("Torch, Embeded in the wall.");
            })
            .on('pointerdown', () => {
                this.showMessage("Hot! No touching!");
                this.tweens.add({
                    targets: LeftFire,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                })
            })

        //let Flower = this.add.image(this.w * 0.3, this.w * 0.3, "Flower")
          //  .setFontSize(this.s * 2)
        let Flower = this.add.image(320,210, 'Flower').setScale(0.50);
        Flower.setInteractive()
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
        let Mouse = this.add.image(320,210, 'Mouse').setScale(0.50);
        Mouse.setInteractive()
            .on('pointerover', () => {
                this.showMessage("*squeak*");
            })
            .on('pointerdown', () => {
                this.showMessage("*squeak squeak*");
                //this.tweens.move({});
            })

        //let door = this.add.text(this.w * 0.1, this.w * 0.15, "locked door")
        let Door = this.add.image(320,210, 'Door').setScale(0.50);
        //.setFontSize(this.s * 2)
        Door.setInteractive()
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
                    Door.setText("unlocked door");
                    this.gotoScene('Freedom');
                } else {
                    this.showMessage("You could not get the door open in time.");
                    Door.setText("door locked");
                    this.gotoScene('Capture');
                }
            })
    }
}
//possibly add in an overall delay that will send to capture scene, so that can have a go back button from thrid room to find key

class Freedom extends Phaser.Scene {
    constructor() {
        super('Freedom');
    }
    preload(){
        this.load.path = './assets/';
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
        this.load.path = './assets/';
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
    scene: [FirstRoom],
    //scene: [Cover, Intro, Entrance, FirstRoom, SecondRoom, ThirdRoom, Freedom, Capture],
    title: "Adventure Game",
});

