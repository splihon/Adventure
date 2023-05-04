class Cover extends Phaser.Scene {
    constructor(){
        super("Cover");
    }
    preload(){
        this.preload.path = './assets/';
        this.preload.image('Top Secret','Top Secret.png');
        this.preload.image('Left Fire','Left Fire.png');
        this.preload.image('Right Fire','Right Fire.png');

    }
    create(){
        //Top Secret, two fires, text
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
        this.add.text(20,20, "The world is in danger once more. . .").setFontSize(50);
        this.add.text(30,30, "Your Mission:").setFontSize(50);
        this.add.text(40,40, "You must retrieve the stolen files, while evading capture").setFontSize(50);
        this.add.text(50,50, "Best of Luck").setFontSize(50);
        this.add.text(60,100, "Click anywhere to continue.").setFontSize(20);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start("Entrance"));
        });
    }
}

class Entrance extends Phaser.Scene {
    constructor(){
        super("Entrance");
    }
    preload(){
        
    }
    create(){
        //Top Secret, two fires, text
        this.add.image
        this.add.text
    }

}

class FirstRoom extends AdventureScene {
    constructor() {
        super("First Room");
    }
    preload(){

    }
    create(){
        //Top Secret, two fires, text
        this.add.image
        this.add.text
    }

    onEnter() {

        let clip = this.add.text(this.w * 0.3, this.w * 0.3, "📎 paperclip")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Metal, bent."))
            .on('pointerdown', () => {
                this.showMessage("No touching!");
                this.tweens.add({
                    targets: clip,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
            });

        let key = this.add.text(this.w * 0.5, this.w * 0.1, "🔑 key")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("It's a nice key.")
            })
            .on('pointerdown', () => {
                this.showMessage("You pick up the key.");
                this.gainItem('key');
                this.tweens.add({
                    targets: key,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => key.destroy()
                });
            })

        let door = this.add.text(this.w * 0.1, this.w * 0.15, "🚪 locked door")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("key")) {
                    this.showMessage("You've got the key for this door.");
                } else {
                    this.showMessage("It's locked. Can you find a key?");
                }
            })
            .on('pointerdown', () => {
                if (this.hasItem("key")) {
                    this.loseItem("key");
                    this.showMessage("*squeak*");
                    door.setText("🚪 unlocked door");
                    this.gotoScene('demo2');
                }
            })

    }
}

class SecondRoom extends AdventureScene {
    constructor() {
        super("Second Room");
    }
    onEnter() {
        this.add.text(this.w * 0.3, this.w * 0.4, "just go back")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("You've got no other choice, really.");
            })
            .on('pointerdown', () => {
                this.gotoScene('demo1');
            });

        let finish = this.add.text(this.w * 0.6, this.w * 0.2, '(finish the game)')
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage('*giggles*');
                this.tweens.add({
                    targets: finish,
                    x: this.s + (this.h - 2 * this.s) * Math.random(),
                    y: this.s + (this.h - 2 * this.s) * Math.random(),
                    ease: 'Sine.inOut',
                    duration: 500
                });
            })
            .on('pointerdown', () => this.gotoScene('outro'));
    }
}

class ThirdRoom extends AdventureScene {
    constructor() {
        super("Third Room");
    }
    preload(){

    }
    create(){
        this.add.image
        this.add.text
    }

    onEnter() {

    }
}

class FourthRoom extends AdventureScene {
    constructor() {
        super("Fourth Room");
    }
    preload(){

    }
    create(){
        this.add.image
        this.add.text
    }

    onEnter() {

    }
}

class Freedom extends Phaser.Scene {
    constructor() {
        super('Freedom');
    }
    create() {
        this.add.text(50, 50, "That's all!").setFontSize(50);
        this.add.text(50, 100, "Click anywhere to restart.").setFontSize(20);
        this.input.on('pointerdown', () => this.scene.start('Cover'));
    }
}

class Capture extends Phaser.Scene {
    constructor() {
        super('Capture');
    }
    create() {
        this.add.text(50, 50, "That's all!").setFontSize(50);
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
    scene: [Cover], //Intro, FirstRoom, SecondRoom, ThirdRoom, FourthRoom, Freedom, Capture],
    title: "Adventure Game",
});

