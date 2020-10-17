class Main extends Phaser.Scene {
    private map: Phaser.Tilemaps.Tilemap;

    constructor() {
        super("main");
    }

    create() {
        console.log("MAIN");

        this.map = this.make.tilemap({ key: "map" });

        let trees: Phaser.Tilemaps.Tileset = this.map.addTilesetImage("bgrd_tree2", "trees");
        let bg0: Phaser.Tilemaps.Tileset = this.map.addTilesetImage("тъмно 0", "bg0");
        let bg1: Phaser.Tilemaps.Tileset = this.map.addTilesetImage("тъмно 1", "bg1");
        let bg2: Phaser.Tilemaps.Tileset = this.map.addTilesetImage("тъмно 2", "bg2");
        let land: Phaser.Tilemaps.Tileset = this.map.addTilesetImage("land better", "land");

        let bg0Layer: Phaser.Tilemaps.StaticTilemapLayer = this.map.createStaticLayer("background", bg0, 0, 0).setDepth(0);
        let bg1Layer: Phaser.Tilemaps.StaticTilemapLayer = this.map.createStaticLayer("cliffs", bg1, 0, 0).setDepth(1);
        let bg2Layer: Phaser.Tilemaps.StaticTilemapLayer = this.map.createStaticLayer("forest", bg2, 0, 0).setDepth(2);
        let treeLayer: Phaser.Tilemaps.StaticTilemapLayer = this.map.createStaticLayer("dark trees", trees, 0, 0).setDepth(3);
        let landLayer: Phaser.Tilemaps.StaticTilemapLayer = this.map.createStaticLayer("land", land, 0, 0).setDepth(4);
    }

}

export { Main }