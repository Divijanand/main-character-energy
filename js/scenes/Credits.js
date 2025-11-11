class Credits extends Phaser.Scene {
    constructor() { super({ key: 'Credits' }); }

    create() {
        this.cameras.main.fadeIn(800, 0x00ff88, 0x0f0f23);

        this.add.text(450, 100, 'CREDITS', {
            font: '48px Orbitron',
            fill: '#ffffff',
            stroke: '#00ff88',
            strokeThickness: 6
        }).setOrigin(0.5);

        this.add.text(450, 250, 'Game Design: You\nSatire Writing: Grok\nEngine: Phaser 3\nMood: Existential but cute', {
            font: '24px Orbitron',
            fill: '#00ff88',
            align: 'center'
        }).setOrigin(0.5);

        const backBtn = this.add.text(450, 500, 'BACK TO MENU', {
            font: '28px Orbitron',
            fill: '#ffaa00',
            stroke: '#ffffff',
            strokeThickness: 3,
            padding: { x: 20, y: 10 }
        }).setOrigin(0.5).setInteractive({ useHandCursor: true });

        backBtn.on('pointerdown', () => this.scene.start('MainMenu'));
    }
}
