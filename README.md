A simple adventure game by Segolen Plihon based on a simple adventure game engine by [Adam Smith](https://github.com/rndmcnlly).

Code requirements:
- **4+ scenes based on `AdventureScene`**: My fours scenes based on the AdventureScene are the Entrance, First Room, Second Room, and Third Room.
- **2+ scenes *not* based on `AdventureScene`**: My scenes that are not based on AdventureScene and instead extends Phaser.Scene are the Cover, Intro, Freedom, and Capture scenes.
- **2+ methods or other enhancement added to the adventure game engine to simplify my scenes**:
    - Enhancement 1: The first enhancement is called collecting and it, targets a specified item, by destroying the item off the scene and having it show in the inventory.
    - Enhancement 2: The second enhancement is called notouching and it, targets a specified item, by shaking the item for a duration of a 100 before it ends.

Experience requirements:
- **4+ locations in the game world**: There are the four AdventureScene locations which include the Entrance, First Room, Second Room, and the Third Room. The other locations in the game world are the Freedom and Capture scenes.
- **2+ interactive objects in most scenes**: I meet this requirement as the Entrance scene has five interactive objects: three flowers and two rocks. The FirstRoom has three interactive objects: one file, one rock, and one torch. The SecondRoom has two interactive objects: one key and one torch. And finally the ThirdRoom has six interactive objects: one mouse, two torches, two flowers, and one door.
- **Many objects have `pointerover` messages**: Many objects have pointerover messages in my adventure game. In the Entrance scene they can be found on: the text "Enter Cave", image of cave entrance, images of rocks, and images of flowers. In the FirstRoom pointerover messages can be found on the: text directions, file, torch, and rock. In the SecondRoom these messages are attached on a text direction, torch, and key. And finally the ThirdRoom has pointerover messages on the text direction, door, mouse, torches, and flowers.
- **Many objects have `pointerdown` effects**: Many objects have pointerdown effects in my adventure game. From the transitions of scene to scene to the objects found in the adventurescenes. In the Entrance scene they can be found on: the text "Enter Cave", images of rocks, and images of flowers. In the FirstRoom pointerover messages can be found on the: text directions, file, torch, and rock. In the SecondRoom these messages are attached on a text direction, torch, and key. And finally the ThirdRoom has pointerover messages on the text direction, door, mouse, torches, and flowers.
- **Some objects are themselves animated**: Some objects in my adventure game are animated such as the mouse in the ThirdRoom, and texts in the Intro scene.

Asset sources:
- All of the image assets were created by me through using procreate.

 Use [Markdown link syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#links).)

Code sources:
- `adventure.js` and `index.html` were created for this project [Adam Smith](https://github.com/rndmcnlly) and edited by me.
- `game.js` was sketched by [Adam Smith](https://github.com/rndmcnlly) and rewritten by me.