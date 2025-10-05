// Complete game data
const gameData = {
    ghosts: [
        {
            name: "Spirit",
            evidence: ["EMF Level 5", "Spirit Box", "Ghost Writing"],
            strength: "No particular strengths",
            weakness: "Using Smudge Sticks will stop it attacking for a long time",
            behavior: "Most common ghost type, no special abilities"
        },
        {
            name: "Wraith",
            evidence: ["EMF Level 5", "Spirit Box", "D.O.T.S Projector"],
            strength: "Can fly and sometimes travel through walls",
            weakness: "Toxic reaction to Salt",
            behavior: "Doesn't leave footprints, can teleport to players"
        },
        {
            name: "Phantom",
            evidence: ["Spirit Box", "Fingerprints", "D.O.T.S Projector"],
            strength: "Looking at it will considerably drop your sanity",
            weakness: "Taking a photo of it will make it temporarily disappear",
            behavior: "Can wander to random players frequently"
        },
        {
            name: "Poltergeist",
            evidence: ["Spirit Box", "Fingerprints", "Ghost Orb"],
            strength: "Can throw multiple objects at once",
            weakness: "Ineffective in an empty room",
            behavior: "Loves to interact with multiple objects simultaneously"
        },
        {
            name: "Banshee",
            evidence: ["Fingerprints", "Ghost Orb", "D.O.T.S Projector"],
            strength: "Will focus on one player at a time",
            weakness: "Fearful of Crucifixes",
            behavior: "Targets one player until they die, then picks new target"
        },
        {
            name: "Jinn",
            evidence: ["EMF Level 5", "Freezing Temperatures", "Ghost Orb"],
            strength: "Faster when its victim is far away",
            weakness: "Turning off the location's power source will prevent it from using its ability",
            behavior: "Can travel at significant speed when hunting"
        },
        {
            name: "Mare",
            evidence: ["Spirit Box", "Ghost Orb", "Freezing Temperatures"],
            strength: "Increased chance to attack in the dark",
            weakness: "Turning the lights on will lower its chance to attack",
            behavior: "More active in dark rooms, will try to turn off lights"
        },
        {
            name: "Revenant",
            evidence: ["Ghost Orb", "Ghost Writing", "Freezing Temperatures"],
            strength: "Moves faster when hunting",
            weakness: "Moves very slowly when not hunting",
            behavior: "Significantly speeds up when it detects a player"
        },
        {
            name: "Shade",
            evidence: ["EMF Level 5", "Freezing Temperatures", "Ghost Writing"],
            strength: "Shy ghost, will rarely perform actions with multiple people nearby",
            weakness: "Less likely to hunt with multiple people nearby",
            behavior: "Prefers to be alone, less active with groups"
        },
        {
            name: "Demon",
            evidence: ["Fingerprints", "Ghost Writing", "Freezing Temperatures"],
            strength: "Will attack more often than other ghosts",
            weakness: "Asking successful Ouija Board questions won't lower sanity",
            behavior: "Most aggressive ghost type, hunts more frequently"
        },
        {
            name: "Yurei",
            evidence: ["Ghost Orb", "Freezing Temperatures", "D.O.T.S Projector"],
            strength: "Has a stronger effect on sanity",
            weakness: "Using Smudge Sticks will cause it to not wander around the location for a long time",
            behavior: "Can drain more sanity during ghost events"
        },
        {
            name: "Oni",
            evidence: ["EMF Level 5", "Freezing Temperatures", "D.O.T.S Projector"],
            strength: "More active when people are nearby and can move objects at great speed",
            weakness: "More visible during ghost events",
            behavior: "Very active when players are nearby, throws objects frequently"
        }
    ],

    cursedItems: [
        {
            name: "Ouija Board",
            description: "Allows communication with the ghost to gain information",
            effects: [
                "Lowers sanity when used",
                "Can ask about ghost location, room, and sanity",
                "Can trigger cursed hunts if questions anger the ghost"
            ],
            usageTips: [
                "Ask specific questions for best results",
                "Use in ghost room for better connection",
                "Don't ask the same question repeatedly"
            ]
        },
        {
            name: "Voodoo Doll",
            description: "A cursed doll that can force ghost interactions",
            effects: [
                "Each pin stuck lowers sanity",
                "Sticking all pins triggers a ghost event",
                "Can force the ghost to reveal itself"
            ],
            usageTips: [
                "Use near ghost room for best effect",
                "Count pins to predict events",
                "Be prepared for immediate hunts"
            ]
        },
        {
            name: "Mirror",
            description: "A haunted mirror that shows the ghost room",
            effects: [
                "Looking in mirror drains sanity quickly",
                "Shows the ghost room from ghost's perspective",
                "Can break and trigger a hunt"
            ],
            usageTips: [
                "Use briefly to locate ghost room",
                "Watch sanity levels carefully",
                "Have smudge sticks ready when using"
            ]
        },
        {
            name: "Summoning Circle",
            description: "A pentagram that can summon the ghost",
            effects: [
                "Lighting all candles summons the ghost",
                "Ghost is trapped for short time after summoning",
                "Always triggers a hunt after summoning"
            ],
            usageTips: [
                "Have escape route planned before using",
                "Use to get ghost photos easily",
                "Can be used to prevent wandering"
            ]
        },
        {
            name: "Music Box",
            description: "A box that plays music attracting the ghost",
            effects: [
                "Plays music that attracts the ghost",
                "Ghost will sing along when close",
                "Can trigger immediate hunt if ghost reaches box"
            ],
            usageTips: [
                "Place box and move to safe location",
                "Listen for ghost singing",
                "Be ready to run when music stops"
            ]
        },
        {
            name: "Tarot Cards",
            description: "A deck of cursed cards with random effects",
            effects: [
                "10 different cards with various effects",
                "Can restore sanity, trigger hunts, or teleport players",
                "The Fool card looks like other cards but does nothing"
            ],
            usageTips: [
                "Draw cards in safe location",
                "Be prepared for any outcome",
                "The Sun and Moon cards affect sanity"
            ]
        }
    ],

    maps: [
        {
            name: "Bleasdale Farmhouse",
            size: "Medium",
            features: [
                "Two floors with attic",
                "Multiple hiding spots in bedrooms",
                "Good line-of-sight in living areas",
                "Difficult ghost room locations in attic"
            ],
            tips: [
                "Check attic early with sound sensors",
                "Use crucifix in central hallway",
                "Bedrooms make good hiding spots"
            ]
        },
        {
            name: "Edgefield Street House",
            size: "Small",
            features: [
                "Compact two-story house",
                "Good visibility throughout",
                "Limited hiding spots",
                "Easy to navigate quickly"
            ],
            tips: [
                "Use lockers in hallway for hiding",
                "Check basement for ghost room",
                "Easy to monitor with few motion sensors"
            ]
        },
        {
            name: "Prison",
            size: "Large",
            features: [
                "Massive two-block layout",
                "Many small rooms and cells",
                "Difficult navigation",
                "Limited hiding spots in open areas"
            ],
            tips: [
                "Use sound sensors to narrow location",
                "Cell blocks can be dangerous during hunts",
                "Guard rooms make good safe zones"
            ]
        },
        {
            name: "Asylum",
            size: "Very Large",
            features: [
                "Largest map in the game",
                "Long hallways with many rooms",
                "Very difficult to locate ghost",
                "Few good hiding spots"
            ],
            tips: [
                "Use parabolic microphone extensively",
                "Work in teams to cover areas",
                "Use truck as command center"
            ]
        },
        {
            name: "Willow Street House",
            size: "Small",
            features: [
                "Simple one-story layout",
                "Easy to navigate",
                "Good for beginners",
                "Limited room variety"
            ],
            tips: [
                "Quick to eliminate rooms",
                "Garage often contains ghost",
                "Use crucifix in central areas"
            ]
        }
    ],

    equipment: [
        {
            name: "EMF Reader",
            usage: "Detects EMF levels from ghost activity",
            effectiveness: "Shows level 5 for specific ghosts",
            tips: "Leave in ghost room to monitor activity"
        },
        {
            name: "Spirit Box",
            usage: "Allows communication with ghost",
            effectiveness: "Responds when lights are off and alone",
            tips: "Ask clear yes/no questions"
        },
        {
            name: "UV Flashlight",
            usage: "Reveals fingerprints and footprints",
            effectiveness: "Shows ghost interactions on surfaces",
            tips: "Check doors, light switches, and windows"
        },
        {
            name: "Video Camera",
            usage: "Detects ghost orbs and D.O.T.S. ghost",
            effectiveness: "Essential for two evidence types",
            tips: "Place on tripod in ghost room"
        },
        {
            name: "Crucifix",
            usage: "Prevents hunts in 3-meter radius",
            effectiveness: "2 uses per crucifix",
            tips: "Place in ghost room to prevent hunts"
        },
        {
            name: "Smudge Sticks",
            usage: "Prevents hunting for 90 seconds/180 seconds for Demon",
            effectiveness: "Works during hunts to repel ghost",
            tips: "Light and hold near ghost during hunt"
        },
        {
            name: "Thermometer",
            usage: "Detects freezing temperatures",
            effectiveness: "Below 0°C indicates freezing temps",
            tips: "Best initial tool for finding ghost room"
        }
    ]
};

// Global search functionality
function setupGlobalSearch() {
    const searchInput = document.getElementById('globalSearch');
    const searchResults = document.getElementById('searchResults');

    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase().trim();
        
        if (searchTerm === '') {
            searchResults.style.display = 'none';
            return;
        }

        const results = [];
        
        // Search ghosts
        gameData.ghosts.forEach(ghost => {
            if (ghost.name.toLowerCase().includes(searchTerm) ||
                ghost.evidence.some(evidence => evidence.toLowerCase().includes(searchTerm)) ||
                ghost.behavior.toLowerCase().includes(searchTerm)) {
                results.push({
                    type: 'Ghost',
                    name: ghost.name,
                    description: ghost.evidence.join(', '),
                    link: 'ghosts.html'
                });
            }
        });

        // Search cursed items
        gameData.cursedItems.forEach(item => {
            if (item.name.toLowerCase().includes(searchTerm) ||
                item.description.toLowerCase().includes(searchTerm)) {
                results.push({
                    type: 'Cursed Item',
                    name: item.name,
                    description: item.description,
                    link: 'cursed-items.html'
                });
            }
        });

        // Search maps
        gameData.maps.forEach(map => {
            if (map.name.toLowerCase().includes(searchTerm) ||
                map.features.some(feature => feature.toLowerCase().includes(searchTerm))) {
                results.push({
                    type: 'Map',
                    name: map.name,
                    description: map.size + ' map',
                    link: 'maps.html'
                });
            }
        });

        // Search equipment
        gameData.equipment.forEach(item => {
            if (item.name.toLowerCase().includes(searchTerm) ||
                item.usage.toLowerCase().includes(searchTerm)) {
                results.push({
                    type: 'Equipment',
                    name: item.name,
                    description: item.usage,
                    link: 'equipment.html'
                });
            }
        });

        displaySearchResults(results);
    });

    function displaySearchResults(results) {
        if (results.length === 0) {
            searchResults.innerHTML = '<div class="search-result-item">No results found</div>';
            searchResults.style.display = 'block';
            return;
        }

        searchResults.innerHTML = results.slice(0, 8).map(result => `
            <div class="search-result-item" onclick="location.href='${result.link}'">
                <strong>${result.type}: ${result.name}</strong><br>
                <span>${result.description}</span>
            </div>
        `).join('');

        searchResults.style.display = 'block';
    }
}

// Ghost page functionality
function createGhostCards(ghostList = gameData.ghosts) {
    const ghostGrid = document.getElementById('ghostGrid');
    if (!ghostGrid) return;

    ghostGrid.innerHTML = '';

    ghostList.forEach(ghost => {
        const card = document.createElement('div');
        card.className = 'ghost-card';
        
        card.innerHTML = `
            <h3>${ghost.name}</h3>
            <div class="ghost-strength">
                <strong>Strength:</strong> ${ghost.strength}
            </div>
            <div class="ghost-weakness">
                <strong>Weakness:</strong> ${ghost.weakness}
            </div>
            <div class="ghost-behavior">
                <strong>Behavior:</strong> ${ghost.behavior}
            </div>
            <div class="evidence">
                <strong>Evidence:</strong>
                <div class="evidence-list">
                    ${ghost.evidence.map(evidence => 
                        `<div class="evidence-item">${evidence}</div>`
                    ).join('')}
                </div>
            </div>
        `;
        
        ghostGrid.appendChild(card);
    });
}

// Cursed items page functionality
function createCursedItems() {
    const itemsGrid = document.getElementById('itemsGrid');
    if (!itemsGrid) return;

    itemsGrid.innerHTML = gameData.cursedItems.map(item => `
        <div class="item-card">
            <h3>${item.name}</h3>
            <p><strong>Description:</strong> ${item.description}</p>
            <div class="usage-tips">
                <strong>Effects:</strong>
                <ul class="effects-list">
                    ${item.effects.map(effect => `<li>${effect}</li>`).join('')}
                </ul>
            </div>
            <div class="usage-tips">
                <strong>Usage Tips:</strong>
                <ul class="effects-list">
                    ${item.usageTips.map(tip => `<li>${tip}</li>`).join('')}
                </ul>
            </div>
        </div>
    `).join('');
}

// Maps page functionality
function createMaps() {
    const mapsGrid = document.getElementById('mapsGrid');
    if (!mapsGrid) return;

    mapsGrid.innerHTML = gameData.maps.map(map => `
        <div class="map-card">
            <h3>${map.name} (${map.size})</h3>
            <div class="map-features">
                <strong>Key Features:</strong>
                <ul class="features-list">
                    ${map.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
            <div class="usage-tips">
                <strong>Pro Tips:</strong>
                <ul class="effects-list">
                    ${map.tips.map(tip => `<li>${tip}</li>`).join('')}
                </ul>
            </div>
        </div>
    `).join('');
}

// Equipment page functionality
function createEquipmentTable() {
    const equipmentTable = document.getElementById('equipmentTable');
    if (!equipmentTable) return;

    equipmentTable.innerHTML = `
        <table class="equipment-table">
            <thead>
                <tr>
                    <th>Equipment</th>
                    <th>Usage</th>
                    <th>Effectiveness</th>
                    <th>Tips</th>
                </tr>
            </thead>
            <tbody>
                ${gameData.equipment.map(item => `
                    <tr>
                        <td><strong>${item.name}</strong></td>
                        <td>${item.usage}</td>
                        <td>${item.effectiveness}</td>
                        <td>${item.tips}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

// Initialize page based on current page
document.addEventListener('DOMContentLoaded', function() {
    setupGlobalSearch();
    
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    switch(currentPage) {
        case 'ghosts.html':
            createGhostCards();
            break;
        case 'cursed-items.html':
            createCursedItems();
            break;
        case 'maps.html':
            createMaps();
            break;
        case 'equipment.html':
            createEquipmentTable();
            break;
    }
});
