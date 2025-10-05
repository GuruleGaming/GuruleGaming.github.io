// Complete game data
const gameData = {
    ghosts: [
        {
            id: "spirit",
            name: "Spirit",
            evidence: ["EMF Level 5", "Spirit Box", "Ghost Writing"],
            strength: "No particular strengths",
            weakness: "Using Smudge Sticks will stop it attacking for a long time",
            behavior: "The most common ghost you will come across but still very dangerous and versatile.",
            hunting: "Hunts at 50% average sanity",
            speed: "1.7 m/s",
            abilities: ["No special abilities", "Standard ghost behavior patterns"],
            strategies: ["Use smudge sticks when it hunts to get extended safety time", "Easy to identify with standard evidence collection"],
            trivia: "Spirits are very common but can be quite aggressive despite having no special powers."
        },
        {
            id: "wraith",
            name: "Wraith",
            evidence: ["EMF Level 5", "Spirit Box", "D.O.T.S Projector"],
            strength: "Can fly and sometimes travel through walls. Doesn't leave footprints.",
            weakness: "Toxic reaction to Salt. Will never step in salt.",
            behavior: "Known for its ability to fly and pass through walls and doors.",
            hunting: "Hunts at 50% average sanity. Can teleport to players before hunting.",
            speed: "1.7 m/s",
            abilities: ["Can teleport to random players on the map", "Does not leave UV footprints", "Can pass through walls during hunts"],
            strategies: ["Place salt piles to detect its presence", "Listen for teleportation sounds", "Be careful as it can appear suddenly anywhere"],
            trivia: "Wraiths are one of the most dangerous ghosts due to their unpredictable movement."
        },
        {
            id: "phantom",
            name: "Phantom",
            evidence: ["Spirit Box", "Fingerprints", "D.O.T.S Projector"],
            strength: "Looking at a Phantom will drop your sanity considerably.",
            weakness: "Taking a photo of the Phantom will make it temporarily disappear.",
            behavior: "A ghost that can possess the living and induce fear.",
            hunting: "Hunts at 50% average sanity. Can wander frequently.",
            speed: "1.7 m/s",
            abilities: ["Looking at it during ghost events drains extra sanity", "Can disappear from photos", "More likely to wander to random players"],
            strategies: ["Take photos to make it disappear during ghost events", "Avoid looking directly at it", "Use cameras to track its movements"],
            trivia: "Phantoms are particularly affected by photography and will vanish when photographed."
        },
        {
            id: "poltergeist",
            name: "Poltergeist",
            evidence: ["Spirit Box", "Fingerprints", "Ghost Orb"],
            strength: "Can throw multiple objects at once.",
            weakness: "Ineffective in an empty room.",
            behavior: "Known for its ability to manipulate multiple objects simultaneously.",
            hunting: "Hunts at 50% average sanity",
            speed: "1.7 m/s",
            abilities: ["Can throw multiple objects at once", "Can create loud noises by interacting with objects"],
            strategies: ["Clear objects from ghost room to reduce activity", "Watch for sudden object movement bursts"],
            trivia: "Poltergeists are the most interactive ghosts and love to throw objects."
        },
        {
            id: "banshee",
            name: "Banshee",
            evidence: ["Fingerprints", "Ghost Orb", "D.O.T.S Projector"],
            strength: "Will focus on one player at a time.",
            weakness: "Fearful of Crucifixes.",
            behavior: "A natural hunter that will stalk its prey one at a time.",
            hunting: "Hunts at 50% average sanity, but only targets one player",
            speed: "1.7 m/s",
            abilities: ["Targets one specific player until they die", "Screams during paranormal events", "Can travel through walls when hunting its target"],
            strategies: ["Use crucifixes effectively as they have larger range against Banshees", "If you're the target, stay near crucifixes"],
            trivia: "Banshees are known for their distinctive screaming sounds during ghost events."
        },
        {
            id: "jinn",
            name: "Jinn",
            evidence: ["EMF Level 5", "Freezing Temperatures", "Ghost Orb"],
            strength: "Faster when its victim is far away.",
            weakness: "Turning off the location's power source will prevent it from using its ability.",
            behavior: "A territorial ghost that will attack when threatened.",
            hunting: "Hunts at 50% average sanity",
            speed: "1.7 m/s (2.5 m/s when ability active)",
            abilities: ["Can travel at significant speed when hunting if electrical power is on", "Can cause EMF spikes when using abilities"],
            strategies: ["Turn off breaker to neutralize its speed ability", "Watch for EMF spikes near electrical equipment"],
            trivia: "Jinns are affected by electrical current and become more powerful when power is on."
        },
        {
            id: "mare",
            name: "Mare",
            evidence: ["Spirit Box", "Ghost Orb", "Freezing Temperatures"],
            strength: "Increased chance to attack in the dark.",
            weakness: "Turning the lights on will lower its chance to attack.",
            behavior: "A ghost that thrives in darkness and fears light.",
            hunting: "Hunts at 60% sanity in dark rooms, 40% in lit rooms",
            speed: "1.7 m/s",
            abilities: ["More likely to turn off lights and break light bulbs", "More active in dark rooms", "Less likely to turn lights on"],
            strategies: ["Keep lights on in the ghost room", "Use night vision instead of flashlight in its room"],
            trivia: "Mares are the most light-sensitive ghosts and will actively try to create darkness."
        },
        {
            id: "revenant",
            name: "Revenant",
            evidence: ["Ghost Orb", "Ghost Writing", "Freezing Temperatures"],
            strength: "Moves faster when hunting.",
            weakness: "Moves very slowly when not hunting.",
            behavior: "A slow but violent ghost that attacks indiscriminately.",
            hunting: "Hunts at 50% average sanity",
            speed: "1.7 m/s normally, 3.0 m/s when hunting and detecting players",
            abilities: ["Extremely fast when it has line of sight on a player during hunt", "Very slow when not chasing someone"],
            strategies: ["Hide immediately during hunts - do not try to loop it", "Use smudge sticks when it's close"],
            trivia: "Revenants are the fastest ghosts during hunts and can easily catch fleeing players."
        },
        {
            id: "shade",
            name: "Shade",
            evidence: ["EMF Level 5", "Freezing Temperatures", "Ghost Writing"],
            strength: "Shy ghost, will rarely perform actions with multiple people nearby.",
            weakness: "Less likely to hunt with multiple people nearby.",
            behavior: "A shy ghost that prefers to be alone and avoids groups.",
            hunting: "Hunts at 35% average sanity",
            speed: "1.7 m/s",
            abilities: ["Less active when multiple players are nearby", "Rarely starts hunts when players are together", "Prefers to interact when alone"],
            strategies: ["Stay in groups to reduce hunting chance", "Send one player to ghost room to encourage activity"],
            trivia: "Shades are the shyest ghosts and will often remain inactive when observed."
        },
        {
            id: "demon",
            name: "Demon",
            evidence: ["Fingerprints", "Ghost Writing", "Freezing Temperatures"],
            strength: "Will attack more often than other ghosts.",
            weakness: "Asking successful Ouija Board questions won't lower sanity.",
            behavior: "The most aggressive ghost that will attack without reason.",
            hunting: "Hunts at 70% average sanity",
            speed: "1.7 m/s",
            abilities: ["Can hunt at very high sanity levels", "Less time between hunts", "Successful Ouija Board questions don't drain sanity"],
            strategies: ["Use crucifixes aggressively due to early hunting", "Be prepared for frequent hunts"],
            trivia: "Demons are the most aggressive ghosts and can hunt at much higher sanity levels than others."
        },
        {
            id: "yurei",
            name: "Yurei",
            evidence: ["Ghost Orb", "Freezing Temperatures", "D.O.T.S Projector"],
            strength: "Has a stronger effect on sanity.",
            weakness: "Using Smudge Sticks will cause it to not wander around the location for a long time.",
            behavior: "A ghost that reacts strongly to emotions and can drain sanity quickly.",
            hunting: "Hunts at 50% average sanity",
            speed: "1.7 m/s",
            abilities: ["Can drain 15% sanity instead of 10% when doing ghost events", "Smudging prevents room changing for 90 seconds", "Can close doors fully without touching them"],
            strategies: ["Use smudge sticks to keep it in one room", "Watch for significant sanity drops"],
            trivia: "Yureis are known for completely closing doors, which other ghosts rarely do."
        },
        {
            id: "oni",
            name: "Oni",
            evidence: ["EMF Level 5", "Freezing Temperatures", "D.O.T.S Projector"],
            strength: "More active when people are nearby and can move objects at great speed.",
            weakness: "More visible during ghost events.",
            behavior: "A very active ghost that enjoys being near people.",
            hunting: "Hunts at 50% average sanity",
            speed: "1.7 m/s",
            abilities: ["More active when players are nearby", "Can throw objects at high speed", "Easier to see during ghost events"],
            strategies: ["Use its high activity to gather evidence quickly", "Be cautious of fast-moving objects"],
            trivia: "Onis are often mistaken for Demons due to their high activity, but they're less dangerous."
        }
    ],

    cursedItems: [
        {
            id: "ouija-board",
            name: "Ouija Board",
            description: "A spirit board used to communicate with the dead. Asking questions lowers sanity.",
            location: "Can spawn anywhere on the map",
            uses: "Unlimited uses but drains sanity",
            sanityDrain: {
                question: "20% per question",
                failedQuestion: "40% if question fails",
                cursedHunt: "Immediate hunt if used at 0% sanity"
            },
            questions: [
                "Where are you? - Reveals current room",
                "How old are you? - Ghost's age",
                "How many people are here? - Player count",
                "Are you friendly? - Random response",
                "What is my sanity? - Your current sanity",
                "Are you here? - Confirms presence",
                "Where is the bone? - Bone location"
            ],
            effects: [
                "Successful questions drain 20% sanity",
                "Failed questions drain 40% sanity",
                "Can trigger cursed hunt at 0% sanity",
                "Answers can be vague or misleading"
            ],
            strategies: [
                "Use in ghost room for better connection",
                "Have sanity pills ready when using",
                "Ask specific, clear questions",
                "Don't ask the same question repeatedly"
            ],
            risks: "Using the Ouija Board at low sanity can trigger immediate hunts"
        },
        {
            id: "monkey-paw",
            name: "Monkey Paw",
            description: "A mummified monkey's paw that grants wishes with terrible consequences.",
            location: "Can spawn anywhere on the map",
            uses: "5 wishes total (one per finger)",
            wishes: [
                {
                    wish: "I wish to be safe",
                    effect: "Teleports all players to the front door",
                    downside: "Triggers a cursed hunt immediately",
                    sanityCost: "50% from all players"
                },
                {
                    wish: "I wish for activity",
                    effect: "Forces ghost to perform an interaction",
                    downside: "Drops everyone's sanity by 25%",
                    sanityCost: "25% from all players"
                },
                {
                    wish: "I wish for life",
                    effect: "Revives a dead player",
                    downside: "Another random player dies immediately",
                    sanityCost: "50% from all players"
                },
                {
                    wish: "I wish to know the ghost",
                    effect: "Reveals the ghost type",
                    downside: "Triggers a hunt and locks front door for 20 seconds",
                    sanityCost: "40% from all players"
                },
                {
                    wish: "I wish to leave",
                    effect: "Ends the contract successfully",
                    downside: "Forces everyone to leave immediately (no rewards)",
                    sanityCost: "60% from all players"
                }
            ],
            strategies: [
                "Use 'I wish to be safe' as emergency escape",
                "'I wish for life' can save a run but risks another player",
                "'I wish to know the ghost' for quick identification",
                "Save 'I wish to leave' as last resort"
            ],
            risks: "Every wish has severe consequences. Use carefully!"
        },
        {
            id: "voodoo-doll",
            name: "Voodoo Doll",
            description: "A cursed doll that can force ghost interactions when pins are used.",
            location: "Usually found on beds or chairs",
            uses: "7 pins total",
            effects: [
                "Each pin stuck lowers sanity by 10%",
                "Sticking all 7 pins triggers a ghost event",
                "Can force the ghost to reveal itself or interact",
                "Random effects when pins are used"
            ],
            strategies: [
                "Use near ghost room for best effects",
                "Count pins to predict events",
                "Be prepared for immediate hunts after using",
                "Use in safe locations only"
            ],
            risks: "Using all pins guarantees a ghost event, which may lead to a hunt"
        },
        {
            id: "music-box",
            name: "Music Box",
            description: "A box that plays music attracting the ghost. Can trigger hunts if misused.",
            location: "Can spawn anywhere on the map",
            uses: "Single use per contract",
            effects: [
                "Plays music that attracts the ghost to its location",
                "Ghost will sing along when close to the box",
                "If ghost reaches the box, it will start a cursed hunt",
                "Can reveal ghost location through singing"
            ],
            strategies: [
                "Place box and move to safe location",
                "Listen for ghost singing to locate it",
                "Be ready to run when music stops suddenly",
                "Use to get ghost photos easily"
            ],
            risks: "If the ghost reaches the music box, it will start hunting immediately"
        },
        {
            id: "tarot-cards",
            name: "Tarot Cards",
            description: "A deck of cursed cards with random effects when drawn.",
            location: "Can spawn anywhere on the map",
            uses: "10 cards per deck",
            cards: [
                {
                    card: "The Sun",
                    effect: "Restores 40% sanity to the entire team",
                    rarity: "Rare"
                },
                {
                    card: "The Moon",
                    effect: "Drains 40% sanity from the entire team",
                    rarity: "Rare"
                },
                {
                    card: "The Tower",
                    effect: "Causes a ghost interaction nearby",
                    rarity: "Common"
                },
                {
                    card: "The Wheel of Fortune",
                    effect: "Either restores 25% sanity or drains 25% sanity randomly",
                    rarity: "Uncommon"
                },
                {
                    card: "The Devil",
                    effect: "Triggers a ghost event",
                    rarity: "Uncommon"
                },
                {
                    card: "The High Priestess",
                    effect: "Revives a random dead player",
                    rarity: "Very Rare"
                },
                {
                    card: "Death",
                    effect: "Triggers a cursed hunt",
                    rarity: "Rare"
                },
                {
                    card: "The Hanged Man",
                    effect: "Initiates a hunt if player sanity is below 50%",
                    rarity: "Uncommon"
                },
                {
                    card: "The Hermit",
                    effect: "Teleports the ghost back to its room and traps it for 1 minute",
                    rarity: "Rare"
                },
                {
                    card: "The Fool",
                    effect: "Looks like another card but does nothing",
                    rarity: "Common"
                }
            ],
            strategies: [
                "Draw cards in safe locations only",
                "Be prepared for any outcome",
                "The Fool card looks like other cards but does nothing",
                "Use when you need specific effects"
            ],
            risks: "Drawing Death or The Hanged Man can cause immediate hunts"
        }
    ],

    maps: [
        {
            id: "bleasdale-farmhouse",
            name: "Bleasdale Farmhouse",
            size: "Medium",
            type: "Residential",
            floors: ["Ground Floor", "First Floor", "Attic"],
            rooms: [
                "Entrance Hall", "Living Room", "Dining Room", "Kitchen", 
                "Utility Room", "Bathroom", "Master Bedroom", "Bedroom 2", 
                "Bedroom 3", "Bathroom 2", "Attic"
            ],
            hidingSpots: [
                "Lockers in Utility Room",
                "Closets in Bedrooms",
                "Behind furniture in Living Room",
                "Kitchen counters"
            ],
            ghostRooms: [
                "Attic (common)",
                "Master Bedroom",
                "Living Room",
                "Utility Room"
            ],
            strategies: [
                "Check attic early with sound sensors",
                "Use crucifix in central hallway",
                "Bedrooms make good hiding spots during hunts",
                "Watch for ghost roaming between floors"
            ],
            difficulty: "Medium",
            features: "Two floors with attic, multiple hiding spots, good line-of-sight"
        },
        {
            id: "edgefield-street",
            name: "Edgefield Street House",
            size: "Small",
            type: "Residential",
            floors: ["Ground Floor", "First Floor", "Basement"],
            rooms: [
                "Entrance Hall", "Living Room", "Dining Room", "Kitchen",
                "Garage", "Bathroom", "Master Bedroom", "Bedroom 2",
                "Bathroom 2", "Basement"
            ],
            hidingSpots: [
                "Lockers in hallway",
                "Closets in bedrooms",
                "Behind kitchen island",
                "Garage shelves"
            ],
            ghostRooms: [
                "Garage (common)",
                "Master Bedroom",
                "Basement",
                "Living Room"
            ],
            strategies: [
                "Quick to search due to small size",
                "Use motion sensors in hallways",
                "Basement can be dangerous during hunts",
                "Good for beginner players"
            ],
            difficulty: "Easy",
            features: "Compact layout, easy navigation, good for learning game mechanics"
        }
    ]
};

// Navigation and utility functions
function setupNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// Ghost page functionality
function createGhostListing() {
    const ghostGrid = document.getElementById('ghostGrid');
    if (!ghostGrid) return;

    ghostGrid.innerHTML = gameData.ghosts.map(ghost => `
        <div class="ghost-card" onclick="location.href='ghost-${ghost.id}.html'">
            <h3>${ghost.name}</h3>
            <div class="evidence-list">
                ${ghost.evidence.map(evidence => 
                    `<div class="evidence-item">${evidence}</div>`
                ).join('')}
            </div>
            <div class="ghost-strength">
                <strong>Strength:</strong> ${ghost.strength}
            </div>
            <div class="ghost-weakness">
                <strong>Weakness:</strong> ${ghost.weakness}
            </div>
            <div class="click-hint">Click for complete details →</div>
        </div>
    `).join('');
}

// Cursed items listing
function createCursedItemsListing() {
    const itemsGrid = document.getElementById('itemsGrid');
    if (!itemsGrid) return;

    itemsGrid.innerHTML = gameData.cursedItems.map(item => `
        <div class="item-card" onclick="location.href='item-${item.id}.html'">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <div class="item-preview">
                <strong>Location:</strong> ${item.location} | <strong>Uses:</strong> ${item.uses}
            </div>
            <div class="click-hint">Click for complete usage guide →</div>
        </div>
    `).join('');
}

// Maps listing
function createMapsListing() {
    const mapsGrid = document.getElementById('mapsGrid');
    if (!mapsGrid) return;

    mapsGrid.innerHTML = gameData.maps.map(map => `
        <div class="map-card" onclick="location.href='map-${map.id}.html'">
            <h3>${map.name}</h3>
            <div class="map-preview">
                <strong>Size:</strong> ${map.size} | <strong>Difficulty:</strong> ${map.difficulty}
            </div>
            <div class="features-preview">
                ${map.features}
            </div>
            <div class="click-hint">Click for complete map guide →</div>
        </div>
    `).join('');
}

// Individual ghost page loader
function loadGhostPage() {
    const ghostId = window.location.pathname.split('-').pop().replace('.html', '');
    
    const ghost = gameData.ghosts.find(g => g.id === ghostId);
    if (!ghost) return;

    document.title = `${ghost.name} - Phasmophobia Companion`;
    
    const content = document.getElementById('ghostContent');
    if (!content) return;

    content.innerHTML = `
        <div class="ghost-header">
            <h1>${ghost.name}</h1>
            <div class="ghost-evidence">
                <h3>Evidence:</h3>
                <div class="evidence-list">
                    ${ghost.evidence.map(evidence => 
                        `<div class="evidence-item">${evidence}</div>`
                    ).join('')}
                </div>
            </div>
        </div>

        <div class="ghost-details">
            <div class="detail-section">
                <h3>📊 Ghost Overview</h3>
                <div class="detail-grid">
                    <div class="detail-card">
                        <h4>Strengths</h4>
                        <p>${ghost.strength}</p>
                    </div>
                    <div class="detail-card">
                        <h4>Weaknesses</h4>
                        <p>${ghost.weakness}</p>
                    </div>
                    <div class="detail-card">
                        <h4>Behavior</h4>
                        <p>${ghost.behavior}</p>
                    </div>
                    <div class="detail-card">
                        <h4>Hunting</h4>
                        <p>${ghost.hunting}</p>
                    </div>
                </div>
            </div>

            <div class="detail-section">
                <h3>🎯 Speed Information</h3>
                <div class="speed-info">
                    <div class="speed-card">
                        <h4>Ghost Speed</h4>
                        <p>${ghost.speed}</p>
                    </div>
                </div>
            </div>

            <div class="detail-section">
                <h3>⚡ Abilities & Special Traits</h3>
                <ul class="abilities-list">
                    ${ghost.abilities.map(ability => `<li>${ability}</li>`).join('')}
                </ul>
            </div>

            <div class="detail-section">
                <h3>🛡️ Strategies & Tips</h3>
                <ul class="strategies-list">
                    ${ghost.strategies.map(strategy => `<li>${strategy}</li>`).join('')}
                </ul>
            </div>

            <div class="detail-section">
                <h3>💡 Trivia</h3>
                <p>${ghost.trivia}</p>
            </div>
        </div>

        <div class="back-button">
            <button onclick="location.href='ghosts.html'">← Back to All Ghosts</button>
        </div>
    `;
}

// Individual cursed item page loader
function loadCursedItemPage() {
    const itemId = window.location.pathname.split('-').pop().replace('.html', '');
    
    const item = gameData.cursedItems.find(i => i.id === itemId);
    if (!item) return;

    document.title = `${item.name} - Phasmophobia Companion`;
    
    const content = document.getElementById('itemContent');
    if (!content) return;

    let wishesHTML = '';
    if (item.wishes) {
        wishesHTML = `
            <div class="detail-section">
                <h3>🌟 Wishes & Effects</h3>
                <div class="wishes-list">
                    ${item.wishes.map((wish, index) => `
                        <div class="wish-card">
                            <h4>Wish ${index + 1}: "${wish.wish}"</h4>
                            <div class="wish-effects">
                                <div class="effect">
                                    <strong>Effect:</strong> ${wish.effect}
                                </div>
                                <div class="downside">
                                    <strong>Downside:</strong> ${wish.downside}
                                </div>
                                <div class="sanity-cost">
                                    <strong>Sanity Cost:</strong> ${wish.sanityCost}
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    let cardsHTML = '';
    if (item.cards) {
        cardsHTML = `
            <div class="detail-section">
                <h3>🃏 Tarot Cards</h3>
                <div class="cards-grid">
                    ${item.cards.map(card => `
                        <div class="card-item">
                            <h4>${card.card} (${card.rarity})</h4>
                            <p>${card.effect}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    content.innerHTML = `
        <div class="item-header">
            <h1>${item.name}</h1>
            <p class="item-description">${item.description}</p>
        </div>

        <div class="item-details">
            <div class="detail-section">
                <h3>📋 Basic Information</h3>
                <div class="info-grid">
                    <div class="info-card">
                        <h4>Location</h4>
                        <p>${item.location}</p>
                    </div>
                    <div class="info-card">
                        <h4>Uses</h4>
                        <p>${item.uses}</p>
                    </div>
                </div>
            </div>

            ${item.sanityDrain ? `
            <div class="detail-section">
                <h3>😵 Sanity Costs</h3>
                <div class="sanity-costs">
                    ${Object.entries(item.sanityDrain).map(([action, cost]) => `
                        <div class="sanity-card">
                            <h4>${action.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</h4>
                            <p>${cost}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
            ` : ''}

            ${wishesHTML}
            ${cardsHTML}

            ${item.effects ? `
            <div class="detail-section">
                <h3>⚡ Effects</h3>
                <ul class="effects-list">
                    ${item.effects.map(effect => `<li>${effect}</li>`).join('')}
                </ul>
            </div>
            ` : ''}

            ${item.questions ? `
            <div class="detail-section">
                <h3>❓ Questions You Can Ask</h3>
                <ul class="questions-list">
                    ${item.questions.map(question => `<li>"${question}"</li>`).join('')}
                </ul>
            </div>
            ` : ''}

            <div class="detail-section">
                <h3>🎯 Usage Strategies</h3>
                <ul class="strategies-list">
                    ${item.strategies.map(strategy => `<li>${strategy}</li>`).join('')}
                </ul>
            </div>

            ${item.risks ? `
            <div class="detail-section warning">
                <h3>⚠️ Risks & Dangers</h3>
                <p>${item.risks}</p>
            </div>
            ` : ''}
        </div>

        <div class="back-button">
            <button onclick="location.href='cursed-items.html'">← Back to All Cursed Items</button>
        </div>
    `;
}

// Initialize based on current page
document.addEventListener('DOMContentLoaded', function() {
    setupNavigation();
    
    const currentPage = window.location.pathname;
    
    if (currentPage.includes('/ghosts.html') || currentPage.endsWith('/') || currentPage.endsWith('/index.html')) {
        createGhostListing();
    } else if (currentPage.includes('/cursed-items.html')) {
        createCursedItemsListing();
    } else if (currentPage.includes('/maps.html')) {
        createMapsListing();
    } else if (currentPage.includes('/ghost-')) {
        loadGhostPage();
    } else if (currentPage.includes('/item-')) {
        loadCursedItemPage();
    }
});
