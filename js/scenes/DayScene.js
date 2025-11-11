class DayScene extends Phaser.Scene {
    constructor() {
        super({ key: 'DayScene' });
    }

    init() {
        this.eventIndex = 0;
        this.stats = this.registry.get('playerStats') || {
            peace: 5,
            validation: 5,
            guilt: 5,
            irony: 5
        };
    }

    create() {
        this.cameras.main.setBackgroundColor('#0f0f23');
        this.showEvent();
        this.updateStatsUI();
    }

    showEvent() {
        // End of day → summary screen
        if (this.eventIndex >= window.GAMEDATA.events.length) {
            this.time.delayedCall(500, () => this.scene.start('Summary'));
            return;
        }

        this.children.removeAll(true, true); // Clear previous
        this.cameras.main.fadeIn(400);

        const event = window.GAMEDATA.events[this.eventIndex];

        // Background box for event text
        const promptBox = this.add.rectangle(450, 170, 760, 150, 0x1a1a33)
            .setStrokeStyle(2, 0x00ff88)
            .setAlpha(0.9);

        // Event title/prompt
        this.add.text(
            450,
            170,
            `Event ${this.eventIndex + 1}/${window.GAMEDATA.events.length}\n\n${event.prompt}`,
            {
                font: '24px Orbitron',
                fill: '#e8ffe8',
                stroke: '#00cc88',
                strokeThickness: 2,
                wordWrap: { width: 720 },
                align: 'center',
                lineSpacing: 10
            }
        ).setOrigin(0.5);

        // Choice buttons
        event.choices.forEach((choice, i) => {
            const y = 360 + i * 90; // More vertical spacing for readability
            const btn = this.add.text(450, y, choice.text, {
                font: '22px Orbitron',
                fill: '#d6ffd6',          // softer, readable green
                stroke: '#00cc88',
                strokeThickness: 1.5,
                padding: { x: 40, y: 18 },
                align: 'center',
                wordWrap: { width: 650 }
            })
                .setOrigin(0.5)
                .setInteractive({ useHandCursor: true });

            // Subtle shadow for contrast
            btn.setShadow(3, 3, '#002211', 2, true, true);

            // Hover effects
            btn.on('pointerover', () => {
                btn.setScale(1.05);
                btn.setColor('#aaffaa');
            });
            btn.on('pointerout', () => {
                btn.setScale(1);
                btn.setColor('#d6ffd6');
            });

            // Click → process choice
            btn.on('pointerdown', () => this.selectChoice(choice));
        });

        this.updateStatsUI();
    }

    selectChoice(choice) {
        // Remove any old narrative text
        if (this.narrativeText) this.narrativeText.destroy();

        // Apply choice results
        window.applyDelta(this.stats, choice.delta);
        this.registry.set('playerStats', this.stats);

        // Disable clicks while showing feedback
        this.input.enabled = false;

        // Fade out current choice buttons for clarity
        this.children.list.forEach(child => {
            if (child.input && child.input.enabled) {
                this.tweens.add({
                    targets: child,
                    alpha: 0.3,
                    duration: 200
                });
            }
        });

        // Narrative text — move slightly lower than before
        this.narrativeText = this.add.text(450, 600, choice.narrative, {
            font: '26px Orbitron',
            fill: '#ffdd88',
            stroke: '#ff9900',
            strokeThickness: 3,
            wordWrap: { width: 720 },
            align: 'center'
        }).setOrigin(0.5);

        // Light camera shake for feedback
        this.cameras.main.shake(100, 0.004);

        // Fade narrative out before the next event
        this.tweens.add({
            targets: this.narrativeText,
            alpha: 0,
            duration: 1400,
            ease: 'Sine.easeInOut',
            delay: 1100
        });

        // Wait before moving to next event
        this.time.delayedCall(2000, () => {
            this.eventIndex++;
            this.input.enabled = true;
            this.showEvent();
        });

        // Update stat bars
        this.updateStatsUI();
    }


    updateStatsUI() {
        // Refresh stats bar UI
        if (this.statsUI) this.statsUI.clear(true, true);
        this.statsUI = this.add.group();

        const labels = ['peace', 'validation', 'guilt', 'irony'];

        labels.forEach((stat, i) => {
            const y = 40 + i * 35;

            const bg = this.add.rectangle(750, y, 140, 25, 0x333355)
                .setStrokeStyle(2, 0x666688);
            const value = this.stats[stat] || 0;
            const fill = this.add.rectangle(
                750 - 70 + value * 7,
                y,
                value * 14,
                25,
                0x00ff88
            ).setOrigin(0.5);

            this.add.text(
                680,
                y - 8,
                stat.substring(0, 4).toUpperCase(),
                { font: '15px Orbitron', fill: '#ccffcc' }
            ).setOrigin(1, 0.5);

            this.statsUI.addMultiple([bg, fill]);
        });
    }
}
