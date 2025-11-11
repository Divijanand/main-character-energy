class MainMenu extends Phaser.Scene {
    constructor() {
        super({ key: 'MainMenu' });
    }

    create() {
        this.cameras.main.fadeIn(1000, 0x00ff88, 0x0f0f23);

        // Title
        let title = this.add.text(450, 150, 'MAIN\nCHARACTER\nENERGY', {
            font: '64px Orbitron',
            fill: '#ffffff',
            stroke: '#00ff88',
            strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);
        title.setShadow(4, 4, '#00ff88', 0, true, true);

        // Tagline
        this.add.text(450, 280, 'Avoid responsibility.\nWin at life. Sort of.', {
            font: '28px Orbitron',
            fill: '#aaaaaa',
            align: 'center'
        }).setOrigin(0.5);

        // Start button
        const startBtn = this.add.text(450, 420, 'START GAME\n(Avoid Everything)', {
            font: '32px Orbitron',
            fill: '#00ff88',
            stroke: '#ffffff',
            strokeThickness: 4,
            padding: { x: 30, y: 20 },
            align: 'center'
        }).setOrigin(0.5).setInteractive({ useHandCursor: true });

        startBtn.setShadow(2, 2, '#00ff88', 0, true, true);

        startBtn.on('pointerover', () => startBtn.setScale(1.05));
        startBtn.on('pointerout', () => startBtn.setScale(1));

        startBtn.on('pointerdown', () => {
            this.cameras.main.fadeOut(500, 0, 0xff, 0);
            this.time.delayedCall(500, () => this.scene.start('DayScene'));
        });

        // Credits
        const creditsBtn = this.add.text(450, 550, 'Credits (We Exist)', {
            font: '24px Orbitron',
            fill: '#888888'
        }).setOrigin(0.5).setInteractive({ useHandCursor: true });

        creditsBtn.on('pointerdown', () =>
            alert('Vibes by Grok. Avoid responsibly. #MainCharacterEnergy')
        );
    }
}
