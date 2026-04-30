// Custom UGS Games List
// CDN URLs updated to point to random-coder2's repos

let files = [
  // Keep these 3 from original
  "cl8ballpool",
  "clbabeltower",
  "clcookieclicker",

  // Eaglercraft (Minecraft)
  "clEaglercraftL_19_v0_7_0_Offline_Signed",
  "cleaglercraft152",
  "clEaglercraft-Beta-1.3-Offline",
  "clEaglercraft-Alpha-126-Offline",

  // Casual / Puzzle
  "cl2048",
  "clfamidash",
  "clgeometrydashscratch",

  // Clicker / Idle
  "clcapybaraclicker",
  "clspacebarclicker",
  "clbitlife",

  // Action / Adventure
  "clhobo",
  "clhobo2",
  "clhobo3",
  "clhobo4",
  "clhobo5",
  "clhobo6",
  "clhobo7",
  "clamongus",
  "clbalatrogba",
  "clhollowknight",
  "cldefendyournuts",
  "cldefendyournuts2",
  "cldrivemady",
  "clmonkeymart",
  "clgoodmonkeymart",

  // Sports / Racing
  "clFIFA10",
  "clFIFA11",
  "clsubwaysurferssanfrancisco",
  "clsubwaysurfersnewyork",
  "clsubwaysurferslondon",
  "clbasketrandom",
  "clbasketrandomgood",

  // Horror / Puzzle
  "clFNAF",
  "clFNAF2",
  "clFNAF3",
  "clFNAF4",
  "clfivenightsatepsteins",

  // Tower Defense / Strategy
  "clbloonsTD1",
  "clbloonsTD2",
  "clbloonsTD3",
  "clbloonsTD4",
  "clbloonsTD5",
  "clbloonsTD6scratch",
  "clBTD1",
  "clbtd5",

  // Duck & Ragdoll
  "clducklife",
  "clducklife2",
  "clducklife3",
  "clducklife4",
  "clducklifebattle",
  "clducklifespace",
  "clragdollarchers",

  // Pokémon Games
  "clpokemonemerald",
  "clpokemonfirered",
  "clpokemonleafgreen",
  "clpokemonruby",
  "clpokemonsapphire",
  "clpokeblack",
  "clpokewhite",
  "clpokeheartgold",
  "clpokesoulsilver",
  "clpokediamond",
  "clpokepearl",
  "clpokeplatinum",
  "clpokemonunbound",
  "clpokemonradicalred",
  "clpokemonevolution",
  "clpoketcg1",
  "clpoketcg2",
  "clpokemonstadium",
  "clpokemonstadium2",

  // Other
  "clblackjack",
  "clsoundboard",
];

function generateAllSections() {
  try {
    document.getElementById("lolbutton")?.remove();
  } catch (e) {}

  const allChars = [
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
    "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
    "U", "V", "W", "X", "Y", "Z"
  ];

  const filesByChar = {};
  allChars.forEach((char) => {
    filesByChar[char] = [];
  });

  files.forEach((file) => {
    const lower = file.toLowerCase();
    if (lower.startsWith("cl")) {
      const aftercl = lower.substring(2);
      if (aftercl.length > 0) {
        const firstChar = aftercl[0].toUpperCase();
        if (filesByChar[firstChar]) {
          filesByChar[firstChar].push(file);
        }
      }
    }
  });

  const container = document.getElementById("sections-container");
  if (!container) return;

  allChars.forEach((char) => {
    const section = document.createElement("div");
    section.className = "letter-section";
    section.id = `section-${char}`;

    const header = document.createElement("div");
    header.className = "letter-header";
    header.textContent = char;
    section.appendChild(header);

    const buttonsContainer = document.createElement("div");
    buttonsContainer.className = "buttons-container";

    if (filesByChar[char].length > 0) {
      filesByChar[char].forEach((file) => {
        const btn = document.createElement("input");
        btn.type = "button";
        btn.value = file;
        btn.onclick = () => {
          function normalizeFileName(name) {
            if (name.includes(".") && name.lastIndexOf(".") > 0) return name;
            return name + ".html";
          }

          const normalized = normalizeFileName(file);
          const encoded = encodeURIComponent(normalized);

          // UPDATED CDN URL - pointing to random-coder2's repo
          fetch(
            `https://cdn.jsdelivr.net/gh/random-coder2/ugs-singlefile/UGS-Files/${encoded}?t=${Date.now()}`,
          )
            .then((response) => response.text())
            .then((text) => {
              const newWin = window.open("about:blank", "_blank");
              if (newWin) {
                newWin.document.open();
                newWin.document.write(text);
                newWin.document.close();
              }
            })
            .catch((error) => {
              console.error("Error loading game:", error);
              alert("Failed to load game. Please try again.");
            });
        };
        btn.style.width = "100%";
        btn.style.height = "100%";
        buttonsContainer.appendChild(btn);
      });
    } else {
      section.classList.add("empty");
      const emptyMsg = document.createElement("div");
      emptyMsg.className = "empty-message";
      emptyMsg.textContent = "No files";
      buttonsContainer.appendChild(emptyMsg);
    }

    section.appendChild(buttonsContainer);
    container.appendChild(section);
  });

  generateSidebar(allChars, filesByChar);
}

function generateSidebar(allChars, filesByChar) {
  const sidebar = document.getElementById("sidebar");

  allChars.forEach((char) => {
    const btn = document.createElement("button");
    btn.className = "sidebar-btn";
    btn.textContent = char;

    if (filesByChar[char].length === 0) {
      btn.classList.add("empty");
    } else {
      btn.onclick = () => {
        // Check if proxy is active
        const proxySection = document.getElementById('proxySection');
        if (proxySection && proxySection.classList.contains('active')) {
          // Hide proxy and show games
          proxySection.classList.remove('active');
          document.getElementById('gamesContainer')?.classList.remove('hidden');
          document.getElementById('sections-container').style.display = 'block';
        }

        const section = document.getElementById(`section-${char}`);
        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      };
    }

    sidebar?.appendChild(btn);
  });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', generateAllSections);
} else {
  generateAllSections();
}
