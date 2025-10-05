// Complete game data with ALL information
const gameData = {
    ghosts: [
        {
            id: "spirit",
            name: "Spirit",
            evidence: ["EMF Level 5", "Spirit Box", "Ghost Writing"],
            strength: "No particular strengths",
            weakness: "Using Smudge Sticks will stop it attacking for a long time",
            behavior: "The most common ghost you will come across but still very dangerous and versatile.",
            hunting: "Hunts at 50% average sanity. Standard hunt duration and speed.",
            speed: {
                normal: "1.7 m/s",
                hunting: "1.7 m/s"
            },
            abilities: [
                "No special abilities",
                "Standard ghost behavior patterns"
            ],
            strategies: [
                "Use smudge sticks when it hunts to get extended safety time",
                "Easy to identify with standard evidence collection",
                "Good ghost for beginners to practice identification"
            ],
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
            speed: {
                normal: "1.7 m/s",
                hunting: "1.7 m/s"
            },
            abilities: [
                "Can teleport to random players on the map",
                "Does not leave UV footprints (most of the time)",
                "Can pass through walls during hunts"
            ],
            strategies: [
                "Place salt piles to detect its presence (it will avoid them)",
                "Listen for teleportation sounds",
                "Be careful as it can appear suddenly anywhere"
            ],
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
            speed: {
                normal: "1.7 m/s",
                hunting: "1.7 m/s"
            },
            abilities: [
                "Looking at it during ghost events drains extra sanity",
                "Can disappear from photos",
                "More likely to wander to random players"
            ],
            strategies: [
                "Take photos to make it disappear during ghost events",
                "Avoid looking directly at it",
                "Use cameras to track its movements"
            ],
            trivia: "Phantoms are particularly affected by photography and will vanish when photographed."
        }
        // Add more ghosts with same detailed structure...
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
        }
        // Add more cursed items...
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
        }
        // Add more maps...
    ]
};

// Navigation and utility functions
function setupNavigation() {
    // Set active nav link based on current page
    const currentPage = window.location.pathname.split('/').pop();
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
            <div class="ghost-preview">
                <strong>Behavior:</strong> ${ghost.behavior.substring(0, 100)}...
            </div>
            <div class="click-hint">Click for full details →</div>
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
                <strong>Uses:</strong> ${item.uses}
            </div>
            <div class="click-hint">Click for full details and wishes →</div>
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
                <strong>Size:</strong> ${map.size} | <strong>Rooms:</strong> ${map.rooms.length}
            </div>
            <div class="features-preview">
                ${map.features.substring(0, 120)}...
            </div>
            <div class="click-hint">Click for map layout and strategies →</div>
        </div>
    `).join('');
}

// Individual ghost page loader
function loadGhostPage() {
    const urlParams = new URLSearchParams(window.location.search);
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
                        <h4>Normal Speed</h4>
                        <p>${ghost.speed.normal}</p>
                    </div>
                    <div class="speed-card">
                        <h4>Hunting Speed</h4>
                        <p>${ghost.speed.hunting}</p>
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

            ${item.wishes ? `
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
    
    if (currentPage.includes('/ghosts.html') || currentPage.endsWith('/')) {
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
    
    setupGlobalSearch();
});
