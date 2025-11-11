class Summary extends Phaser.Scene {
    constructor() { super({ key: 'Summary' }); }

    create() {
        this.cameras.main.fadeIn(800, 0x00ff88, 0x0f0f23);
        this.stats = this.registry.get('playerStats');

        // Title
        this.add.text(450, 100, 'End of Day\nDIAGNOSIS', {
            font: '48px Orbitron',
            fill: '#ffffff',
            stroke: '#ffaa00',
            strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        // Stats summary
        this.add.text(
            450,
            220,
            `Peace: ${this.stats.peace} | Validation: ${this.stats.validation}\nGuilt: ${this.stats.guilt} | Irony: ${this.stats.irony}`,
            {
                font: '28px Orbitron',
                fill: '#00ff88',
                align: 'center'
            }
        ).setOrigin(0.5);

        // Highest stat “diagnosis”
        const maxStat = Object.entries(this.stats).reduce((a, b) => a[1] > b[1] ? a : b)[0];
        const message = window.GAMEDATA.diagnoses[maxStat] || 'Undefined vibe. Mysterious.';

        const diagnosis = this.add.text(450, 350, message, {
            font: '26px Orbitron',
            fill: '#ffaa00',
            stroke: '#ff6600',
            strokeThickness: 4,
            wordWrap: { width: 700 },
            align: 'center'
        }).setOrigin(0.5);

        diagnosis.setShadow(4, 4, '#ffaa00', 2, true, true);

        // Restart button
        const restartBtn = this.add.text(450, 520, 'RESTART\n(New Vibe)', {
            font: '28px Orbitron',
            fill: '#00ff88',
            stroke: '#ffffff',
            strokeThickness: 4,
            padding: { x: 40, y: 20 },
            align: 'center'
        }).setOrigin(0.5).setInteractive({ useHandCursor: true });

        restartBtn.on('pointerdown', () => this.scene.start('MainMenu'));
    }
}
