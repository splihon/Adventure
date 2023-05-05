//things to work on: third room, taking things out of inventory?,
//third room: door, (pull key for door?), mouse, flames
//add another command in adventure (for notouching and maybe move)
//gainItem command is used, but it doesn't say I already have this item?
class Cover extends Phaser.Scene {
    constructor(){
        super("Cover");
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('Top Secret','Top Secret.png');
        this.load.image('Left Fire','Left Fire.png');
        this.load.image('rightfire','rightfire.png');
    
    }
    create(){
        let topsecret = this.add.image(930,400, 'Top Secret').setScale(0.80);
        let LeftFire = this.add.image(400,500, 'Left Fire').setScale(0.50);
        let rightfire = this.add.image(1500,500, 'rightfire').setScale(0.50);
        let texta = this.add.text(550,600, "The World Needs You!").setFontSize(70).setAlpha(0);
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
        rightfire.depth = 2;

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
        let Entrance = this.add.image(320,210, 'Entrance').setOrigin(0.20,0.30).setScale(0.60);
        let Flowera = this.add.image(400,703, 'Flower').setScale(0.40);
        let Flowerb = this.add.image(500,713, 'Flower').setScale(0.40);
        let Flowerc = this.add.image(600,709, 'Flower').setScale(0.40);
        let Rocka = this.add.image(240,800, 'Rock').setScale(0.40);
        let Rockb = this.add.image(900,870, 'Rock').setScale(0.40);

        
        //this.input.on('pointerdown', () => {
        //    this.cameras.main.fade(1000, 0,0,0);
        //    this.time.delayedCall(1000, () => this.scene.start("First Room"));
        //});
        this.add.text(this.w * 0.3, this.w * 0.5, "Enter Cave")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage('The files must be close. .'))
            .on('pointerdown', () => {
                this.gotoScene('First Room');
            });
        
        Entrance.setInteractive()
            .on('pointerover', () => this.showMessage("This must be where I can find the documents."))
            
        Rocka.setInteractive()
            .on('pointerover', () => this.showMessage("Should I move the rock?"))
            .on('pointerdown', () => {
                // this.showMessage("You picked up a rock.");
                // this.gainItem('Rock');
                //     this.collecting(Rocka);
                this.input.setDraggable(Rocka);
                this.input.on('drag', (pointer, image, dragX, dragY) =>{
                    image.x = dragX;
                    image.y = dragY;
                });
            });

        Rockb.setInteractive()
            .on('pointerover', () => this.showMessage("Should I move the rock?"))
            .on('pointerdown', () => {
                // this.showMessage("You picked up a rock.");
                // this.gainItem('Rock');
                //     this.collecting(Rockb);
                    this.input.setDraggable(Rockb);
                this.input.on('drag', (pointer, image, dragX, dragY) =>{
                    image.x = dragX;
                    image.y = dragY;
                });
            });

        Flowera.setInteractive()
            .on('pointerover', () => this.showMessage("Flower, smells nice."))
            .on('pointerdown', () => {
                this.showMessage("You picked up a flower.");
                this.gainItem('Flower');
                    this.collecting(Flowera);
                });

        Flowerb.setInteractive()
            .on('pointerover', () => this.showMessage("Flower, smells nice."))
            .on('pointerdown', () => {
                this.showMessage("You picked up a flower.");
                this.gainItem('Flower');
                    this.collecting(Flowerb);
                });

        Flowerc.setInteractive()
            .on('pointerover', () => this.showMessage("Flower, smells nice."))
            .on('pointerdown', () => {
                this.showMessage("You picked up a flower.");
                this.gainItem('Flower');
                    this.collecting(Flowerc);
                });
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
    onEnter(){
        this.add.image(320,210, 'FirstRoom').setOrigin(0.30,0.20).setScale(0.83);
        let File = this.add.image(700,780, 'File').setScale(0.20)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Found it!"))
            .on('pointerdown', () => {
                this.showMessage("You picked up confidencial documents.");
                this.gainItem('File');
                    this.collecting(File);
            });

        this.add.text(this.w * 0.2, this.w * 0.5, "Turn Left")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("What is over here?"))
            .on('pointerdown', () => {
                this.gotoScene('Second Room');
            });

        this.add.text(this.w * 0.4, this.w * 0.5, "Go Straight")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Where does this lead?"))
            .on('pointerdown', () => {
              this.gotoScene('Third Room');
            }); 
    
        let Rock = this.add.image(780,770, 'Rock').setScale(0.50);
        Rock.setInteractive()
            .on('pointerover', () => this.showMessage("Hmm, should I move rock to see what it is hiding?"))
            .on('pointerdown', () => {
                // this.showMessage("You picked up a Rock.");
                // this.gainItem('Rock');
                //    this.collecting(Rock);
                this.input.setDraggable(Rock);
                this.input.on('drag', (pointer, image, dragX, dragY) =>{
                    image.x = dragX;
                    image.y = dragY;
                });
            });

        let rightfire = this.add.image(1200,350, 'rightfire').setScale(0.50)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Torch, Embeded in the wall."))
            .on('pointerdown', () => {
                this.showMessage("Hot! No touching!");
                    this.notouching(rightfire);
                });
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
        this.add.image(320,210, 'SecondRoom').setOrigin(0.30,0.20).setScale(0.83);
        let LeftFire = this.add.image(100,400, 'Left Fire').setScale(0.40);
        LeftFire.setInteractive()
            .on('pointerover', () => this.showMessage("Torch, Embeded in the wall."))
            .on('pointerdown', () => {
                this.showMessage("Hot! No touching!");
                    this.notouching(LeftFire);
                    });
    
        this.add.text(this.w * 0.2, this.w * 0.5, "Go back")
          .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerdown', () => {
                this.gotoScene('First Room');
            });

        this.add.text(this.w * 0.4, this.w * 0.5, "Turn Right")
            .setFontSize(this.s * 2)
              .setInteractive()
              .on('pointerover', () => this.showMessage("Where does this lead?"))
              .on('pointerdown', () => {
                  this.gotoScene('Third Room');
              });

        let Key = this.add.image(600,650, 'Key').setScale(0.50);
        Key.setInteractive()
            .on('pointerover', () => this.showMessage("Seems important. ."))
            .on('pointerdown', () => {
                this.showMessage("You picked up the key.");
                this.gainItem('Key');
                   this.collecting(Key);
                });
            }

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
       //     })
       //     .on('pointerdown', () => this.gotoScene('outro'));
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
        this.load.image('rightfire','rightfire.png');
        this.load.image('Left Fire', 'Left Fire.png');
        this.load.image('Flower','Flower.png');
    }
//fix: door, fires, mouse movement
    onEnter() {
        //const background = 
        this.add.image(320,210, 'ThirdRoom').setOrigin(0.30,0.20).setScale(0.83);
       // background.setOrigin(0.30,0.20)
        //const bgWidth = background.displayWidth
        //const bgHeight = background.displayHeight
        //const bottomBoundary = bgHeight - Mouse.height

        // let Mouse = this.add.image(320,610, 'Mouse').setScale(0.06);
        // Mouse.setInteractive()
        //     .on('pointerover', () => this.showMessage("*squeak*"))
        //     .on('pointerdown', () => {
        //         this.showMessage("*squeak squeak*");
        //             this.move(Mouse);
        //     });

       
        this.add.text(this.w * 0.2, this.w * 0.5, "Go back")
          .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("*heavy footsteps*"))
            .on('pointerdown', () => {
                this.gotoScene('Capture');
            });

        let Mouse = this.add.image(320,610, 'Mouse').setScale(0.06);
        Mouse.setInteractive()
            .on('pointerover', () => this.showMessage("*squeak*"))
            .on('pointerdown', () => {
                this.showMessage("*squeak squeak*");
                    this.move(Mouse);
            });

        let Flowera = this.add.image(800,380, 'Flower').setScale(0.30);
        Flowera.setInteractive()
            .on('pointerover', () => this.showMessage("Flower, smells nice."))
            .on('pointerdown', () => {
                this.showMessage("You picked up a flower.");
                this.gainItem('Flower');
                    this.collecting(Flowera);
                });
                
        let Flowerb = this.add.image(430,380, 'Flower').setScale(0.30);
        Flowerb.setInteractive()
            .on('pointerover', () => this.showMessage("Flower, smells nice."))
            .on('pointerdown', () => {
                this.showMessage("You picked up a flower.");
                this.gainItem('Flower');
                    this.collecting(Flowerb);
                });


        let LeftFire = this.add.image(180,310, 'Left Fire').setScale(0.50);
        LeftFire.setInteractive()
            .on('pointerover', () => this.showMessage("Torch, Embeded in the wall."))
            .on('pointerdown', () => {
                this.showMessage("Hot! No touching!");
                    this.notouching(LeftFire);
                });

        let rightfire = this.add.image(1200,310, 'rightfire').setScale(0.50);
        rightfire.setInteractive()
            .on('pointerover', () => this.showMessage("Torch, Embeded in the wall."))
            .on('pointerdown', () => {
                this.showMessage("Hot! No touching!");
                    this.notouching(rightfire);
                });

        let Door = this.add.image(620,250, 'Door').setScale(0.50);
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
                    //Door.showMessage("unlocked door");
                        this.gotoScene('Freedom');
                }
            })
    

        //let door = this.add.text(this.w * 0.1, this.w * 0.15, "locked door")
        //let Door = this.add.image(320,210, 'Door').setScale(0.50);
        //.setFontSize(this.s * 2)
        //this.add.image(500,210, 'Door').setScale(0.50);
        
    }
}

class Freedom extends Phaser.Scene {
    constructor() {
        super('Freedom');
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('Freedom','Freedom.png');
        this.load.image("Left Fire", "Left Fire.png");
        this.load.image("rightfire", "rightfire.png");
    }
    create() {
        this.add.image(320,210, 'Freedom').setOrigin(0.20,0.154).setScale(1.2);
        this.add.image(320,310, 'Left Fire').setScale(0.50);
        this.add.image(1700,310, 'rightfire').setScale(0.50);
        this.add.text(650, 600, "Mission Complete!").setFontSize(70);
        this.add.text(700, 900, "Click anywhere to restart.").setFontSize(40);
    

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
        this.load.image('missionfailed2','missionfailed2.png');
        this.load.image('Left Fire', 'Left Fire.png');
        this.load.image('rightfire', 'rightfire.png');
    }
    create() {
        this.add.image(930,430, 'missionfailed2').setScale(0.90);
        this.add.image(400,500, 'Left Fire').setScale(0.50);
        this.add.image(1500,500, 'rightfire').setScale(0.50);
        this.add.text(650,600, "You took too long!").setFontSize(50);
        this.add.text(450, 690, "And are now captured by the enemy!").setFontSize(50);
        this.add.text(700, 900, "Click anywhere to restart.").setFontSize(40);
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
    scene: [SecondRoom, ThirdRoom, Freedom],
    //scene: [Cover, Intro, Entrance, FirstRoom, SecondRoom, ThirdRoom, Freedom, Capture],
    title: "Adventure Game",
});

