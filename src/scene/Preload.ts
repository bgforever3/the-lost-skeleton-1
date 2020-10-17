import { Boot } from "./Boot";

class Preload extends Phaser.Scene {

    constructor() {
        super("preload");
    }

    create() {
        this.load.on("progress", this.onProgressUpdated, this);
        this.load.on("load", this.onFileLoaded, this);
        this.load.on("complete", this.onComplete, this);

        this.load.image("trees", "assets/images/bgrd_tree2.png");
        this.load.image("bg0", "assets/images/тъмно 0.png");
        this.load.image("bg1", "assets/images/тъмно 1.png");
        this.load.image("bg2", "assets/images/тъмно 2.png");
        this.load.image("land", "assets/images/land better.png");
        this.load.tilemapTiledJSON("map", "assets/images/map.json");

        this.load.start();

    }

    private onProgressUpdated(value: number): void {
        console.log("progress update:", value);
    }

    private onFileLoaded(file: Phaser.Loader.File): void {
        console.log("file loaded: ", file);
    }

    private onComplete(): void {
        console.log("load complete");

        this.scene.start("main");
    }
}

export { Preload }