// Global Game Data — archetypes, events, and diagnoses
window.GAMEDATA = {
    archetypes: {
        'Thriftcore Minimalist': {
            peace: 8,
            validation: 6,
            guilt: 2,
            irony: 4,
            desc: '3 identical shirts. Intentional minimalism.',
            avatar: 'minimalist'
        },
        'Burnout Influencer': {
            peace: 4,
            validation: 9,
            guilt: 5,
            irony: 7,
            desc: 'Content = self-care. #Sponsored.',
            avatar: 'influencer'
        },
        'Soft Nihilist Academic': {
            peace: 7,
            validation: 3,
            guilt: 4,
            irony: 9,
            desc: 'Foucault says no. Sources: All of them.',
            avatar: 'academic'
        }
    },

    // Day events
    events: [
        {
            prompt: 'Boss: "Report due yesterday?"',
            choices: [
                { text: 'Responsible: Grind it out.', delta: { peace: -3, validation: 2, guilt: -2, irony: 0 }, narrative: 'You adulted. Who dis impostor?' },
                { text: 'Aesthetic: "Curating my workload rn."', delta: { peace: 1, validation: 4, guilt: 1, irony: 3 }, narrative: 'Boss replies: "Vibes received. Slay."' },
                { text: 'Evasion: "In my healing era, async pls."', delta: { peace: 2, validation: 1, guilt: 3, irony: 2 }, narrative: 'Ghosted. Sweet, unearned peace.' }
            ]
        },
        {
            prompt: 'Friend: "Help me move this weekend?"',
            choices: [
                { text: 'Responsible: Show up early.', delta: { peace: -2, validation: 3, guilt: -1, irony: 0 }, narrative: 'Sweaty boxes. Real friend?' },
                { text: 'Aesthetic: "Minimalist phase, no clutter."', delta: { peace: 3, validation: 2, guilt: 2, irony: 4 }, narrative: 'They get it. Or not.' },
                { text: 'Evasion: "Boundaries! Love you tho."', delta: { peace: 4, validation: 0, guilt: 4, irony: 1 }, narrative: 'Text unread. Peace.' }
            ]
        },
        {
            prompt: 'Mom texts: "Real job yet?"',
            choices: [
                { text: 'Responsible: Update resume.', delta: { peace: -4, validation: 1, guilt: -3, irony: 0 }, narrative: 'Corporate dreams. Yawn.' },
                { text: 'Aesthetic: "Pursuing passion economy."', delta: { peace: 0, validation: 5, guilt: 2, irony: 5 }, narrative: 'She sends LinkedIn tips.' },
                { text: 'Evasion: "Therapizing my path rn."', delta: { peace: 5, validation: -1, guilt: 5, irony: 3 }, narrative: 'Guilt +100. Worth it.' }
            ]
        },
        {
            prompt: 'Therapist: "Have you been journaling?"',
            choices: [
                { text: 'Responsible: Daily reflections.', delta: { peace: 3, validation: 1, guilt: -2, irony: 0 }, narrative: 'Your inner child is mildly impressed.' },
                { text: 'Aesthetic: "It’s all digital—Notion vibes."', delta: { peace: 2, validation: 3, guilt: 1, irony: 2 }, narrative: 'Therapist nods… skeptically.' },
                { text: 'Evasion: "Mentally, yes."', delta: { peace: 4, validation: 0, guilt: 3, irony: 3 }, narrative: 'A new form of avoidance unlocked.' }
            ]
        },
        {
            prompt: 'Date: "So, what are your goals?"',
            choices: [
                { text: 'Responsible: 5-year plan mode.', delta: { peace: -2, validation: 3, guilt: 0, irony: 0 }, narrative: 'They look… impressed? Unfamiliar feeling.' },
                { text: 'Aesthetic: "Main character arc."', delta: { peace: 3, validation: 2, guilt: 2, irony: 3 }, narrative: 'They laugh. You win the bit.' },
                { text: 'Evasion: "Healing era, no goals rn."', delta: { peace: 5, validation: 1, guilt: 2, irony: 1 }, narrative: 'They ghost you. Balance restored.' }
            ]
        },
        {
            prompt: 'Coworker: "Team lunch today?"',
            choices: [
                { text: 'Responsible: Show up and smile.', delta: { peace: -1, validation: 3, guilt: -1, irony: 0 }, narrative: 'You perform humanity flawlessly.' },
                { text: 'Aesthetic: "I’m intermittent fasting."', delta: { peace: 2, validation: 2, guilt: 1, irony: 3 }, narrative: 'They believe you. Somehow.' },
                { text: 'Evasion: "Still processing last lunch."', delta: { peace: 3, validation: 0, guilt: 2, irony: 2 }, narrative: 'Introvert victory royale.' }
            ]
        },
        {
            prompt: 'Roommate: "Did you use my oat milk again?"',
            choices: [
                { text: 'Responsible: Replace it immediately.', delta: { peace: -2, validation: 2, guilt: -2, irony: 0 }, narrative: 'Restored household harmony.' },
                { text: 'Aesthetic: "It’s communal energy."', delta: { peace: 1, validation: 4, guilt: 2, irony: 3 }, narrative: 'They’re speechless. Probably impressed.' },
                { text: 'Evasion: "Gaslight: you don’t even buy oat milk."', delta: { peace: 2, validation: 1, guilt: 4, irony: 4 }, narrative: 'You ascend to chaotic neutral.' }
            ]
        },
        {
            prompt: 'Friend: "You never text first."',
            choices: [
                { text: 'Responsible: "You’re right, I’ll do better."', delta: { peace: -1, validation: 2, guilt: -2, irony: 0 }, narrative: 'Healthy communication? Ew.' },
                { text: 'Aesthetic: "Mystery is my brand."', delta: { peace: 3, validation: 3, guilt: 2, irony: 3 }, narrative: 'They roll their eyes but love you anyway.' },
                { text: 'Evasion: "I’m in my no-phone arc."', delta: { peace: 4, validation: 1, guilt: 3, irony: 1 }, narrative: 'Unbothered. Untexted. Unreachable.' }
            ]
        },
        {
            prompt: 'Social Media: "Post something or lose engagement!"',
            choices: [
                { text: 'Responsible: Authentic update post.', delta: { peace: 1, validation: 5, guilt: 1, irony: 1 }, narrative: 'Likes hit triple digits. Validation restored.' },
                { text: 'Aesthetic: "Moodboard carousel."', delta: { peace: 3, validation: 4, guilt: 1, irony: 4 }, narrative: 'Followers assume you’re thriving.' },
                { text: 'Evasion: "Digital detox, babes."', delta: { peace: 5, validation: 0, guilt: 2, irony: 2 }, narrative: 'You vanish mysteriously. Power move.' }
            ]
        },
        {
            prompt: 'Alarm: "You’ve hit snooze 6 times."',
            choices: [
                { text: 'Responsible: Get up immediately.', delta: { peace: -3, validation: 1, guilt: -3, irony: 0 }, narrative: 'You’re awake… and instantly regret it.' },
                { text: 'Aesthetic: "Soft morning, no rush."', delta: { peace: 3, validation: 2, guilt: 1, irony: 2 }, narrative: 'Main character montage achieved.' },
                { text: 'Evasion: "Time is a construct."', delta: { peace: 4, validation: 0, guilt: 3, irony: 3 }, narrative: 'Work emails? Couldn’t be you.' }
            ]
        }
    ],

    // End of day “diagnosis”
    diagnoses: {
        peace: 'Peak avoidance. You *are* the main character.',
        validation: 'Likes > rent paid. Influencer arc unlocked.',
        guilt: 'Did nothing, felt everything. Classic.',
        irony: 'Self-aware meme. Post it.'
    }
};

// Stat update helper
window.applyDelta = function (stats, delta) {
    for (let key in delta) {
        stats[key] = (stats[key] || 0) + delta[key];
        stats[key] = Math.max(0, Math.min(10, stats[key])); // Clamp 0–10
    }
};
