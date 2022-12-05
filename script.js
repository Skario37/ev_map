let P_DATA = undefined;

window.pkmnCntrIcon = L.icon({
    iconUrl: "./markers/pokecentre.png",
    iconSize:     [32, 32], // size of the icon
    iconAnchor:   [16, 16] // point of the icon which will correspond to marker's location
});

window.gymIcon = L.icon({
    iconUrl: "./markers/arene.png",
    iconSize:     [32, 32], // size of the icon
    iconAnchor:   [16, 16] // point of the icon which will correspond to marker's location
});

window.pokeballIcon = L.icon({
    iconUrl: "./markers/pokeball_a.png",
    iconSize:     [32, 32], // size of the icon
    iconAnchor:   [16, 16] // point of the icon which will correspond to marker's location
});

window.scarletIcon = L.icon({
    iconUrl: "./markers/pokeball_b.png",
    iconSize:     [32, 32], // size of the icon
    iconAnchor:   [16, 16] // point of the icon which will correspond to marker's location
});

window.violetIcon = L.icon({
    iconUrl: "./markers/pokeball_c.png",
    iconSize:     [32, 32], // size of the icon
    iconAnchor:   [16, 16] // point of the icon which will correspond to marker's location
});

window.starIcon = L.icon({
    iconUrl: "./markers/etoile.png",
    iconSize: [ 32, 32 ], // size of the icon
    iconAnchor: [ 16, 16 ], // point of the icon which will correspond to marker's location
});

window.trainerIcon = L.icon({
    iconUrl: "./markers/dresseurs.png",
    iconSize: [ 32, 32 ], // size of the icon
    iconAnchor: [ 16, 16 ], // point of the icon which will correspond to marker's location
});
window.symbolIcon = L.icon({
    iconUrl: "./markers/pokeball2.png",
    iconSize: [ 32, 32 ], // size of the icon
    iconAnchor: [ 16, 16 ], // point of the icon which will correspond to marker's location
});

window.flyIcon = L.icon({
    iconUrl: "./markers/vol.png",
    iconSize: [ 32, 32 ], // size of the icon
    iconAnchor: [ 16, 16 ], // point of the icon which will correspond to marker's location
});

window.chestIcon = L.icon({
    iconUrl: "./markers/mordudor.png",
    iconSize: [ 32, 32 ], // size of the icon
    iconAnchor: [ 16, 16 ], // point of the icon which will correspond to marker's location
});

window.coinIcon = L.icon({
    iconUrl: "./markers/mordudormarche.png",
    iconSize: [ 32, 32 ], // size of the icon
    iconAnchor: [ 16, 16 ], // point of the icon which will correspond to marker's location
});

window.teraIcon = L.icon({
    iconUrl: "./markers/teracristal.png",
    iconSize:     [32, 32], // size of the icon
    iconAnchor:   [16, 16], // point of the icon which will correspond to marker's location
});

window.shrineIcon = L.icon({
    iconUrl: "./markers/legende.png",
    iconSize: [ 32, 32 ], // size of the icon
    iconAnchor: [ 16, 16 ], // point of the icon which will correspond to marker's location
});

window.shrineFIcon = L.icon({
    iconUrl: "./markers/legendevol.png",
    iconSize: [ 32, 32 ], // size of the icon
    iconAnchor: [ 16, 16 ], // point of the icon which will correspond to marker's location
});

window.tingluIcon = L.icon({
    iconUrl: "./markers/dinglu.png",
    iconSize: [ 32, 32 ], // size of the icon
    iconAnchor: [ 16, 16 ], // point of the icon which will correspond to marker's location
});

window.wochienIcon = L.icon({
    iconUrl: "./markers/chongjian.png",
    iconSize: [ 32, 32 ], // size of the icon
    iconAnchor: [ 16, 16 ], // point of the icon which will correspond to marker's location
});

window.chienpaoIcon = L.icon({
    iconUrl: "./markers/baojian.png",
    iconSize: [ 60, 60 ], // size of the icon
    iconAnchor: [ 30, 30 ], // point of the icon which will correspond to marker's location
});

window.chiyuIcon = L.icon({
    iconUrl: "./markers/yuyu.png",
    iconSize: [ 60, 60 ], // size of the icon
    iconAnchor: [ 30, 30 ], // point of the icon which will correspond to marker's location
});

window.grassIcon = L.icon({
    iconUrl: "./markers/gymlogo_badge_00^q.png",
    iconSize: [ 32, 32 ], // size of the icon
    iconAnchor: [ 16, 16 ], // point of the icon which will correspond to marker's location
});

window.electricIcon = L.icon({
    iconUrl: "./markers/gymlogo_badge_01^q.png",
    iconSize: [ 32, 32 ], // size of the icon
    iconAnchor: [ 16, 16 ], // point of the icon which will correspond to marker's location
});

window.psychicIcon = L.icon({
    iconUrl: "./markers/gymlogo_badge_02^q.png",
    iconSize: [ 32, 32 ], // size of the icon
    iconAnchor: [ 16, 16 ], // point of the icon which will correspond to marker's location
});

window.bugIcon = L.icon({
    iconUrl: "./markers/gymlogo_badge_03^q.png",
    iconSize: [ 32, 32 ], // size of the icon
    iconAnchor: [ 16, 16 ], // point of the icon which will correspond to marker's location
});

window.iceIcon = L.icon({
    iconUrl: "./markers/gymlogo_badge_04^q.png",
    iconSize: [ 32, 32 ], // size of the icon
    iconAnchor: [ 16, 16 ], // point of the icon which will correspond to marker's location
});

window.ghostIcon = L.icon({
    iconUrl: "./markers/gymlogo_badge_05^q.png",
    iconSize: [ 32, 32 ], // size of the icon
    iconAnchor: [ 16, 16 ], // point of the icon which will correspond to marker's location
});

window.normalIcon = L.icon({
    iconUrl: "./markers/gymlogo_badge_06^q.png",
    iconSize: [ 32, 32 ], // size of the icon
    iconAnchor: [ 16, 16 ], // point of the icon which will correspond to marker's location
});

window.waterIcon = L.icon({
    iconUrl: "./markers/gymlogo_badge_07^q.png",
    iconSize: [ 32, 32 ], // size of the icon
    iconAnchor: [ 16, 16 ], // point of the icon which will correspond to marker's location
});

window.fireIcon = L.icon({
    iconUrl: "./markers/gymlogo_badge_08^q.png",
    iconSize: [ 32, 32 ], // size of the icon
    iconAnchor: [ 16, 16 ], // point of the icon which will correspond to marker's location
});

window.poisonIcon = L.icon({
    iconUrl: "./markers/gymlogo_badge_09^q.png",
    iconSize: [ 32, 32 ], // size of the icon
    iconAnchor: [ 16, 16 ], // point of the icon which will correspond to marker's location
});

window.fightingIcon = L.icon({
    iconUrl: "./markers/gymlogo_badge_10^q.png",
    iconSize: [ 32, 32 ], // size of the icon
    iconAnchor: [ 16, 16 ], // point of the icon which will correspond to marker's location
});

window.fairyIcon = L.icon({
    iconUrl: "./markers/gymlogo_badge_11^q.png",
    iconSize: [ 32, 32 ], // size of the icon
    iconAnchor: [ 16, 16 ], // point of the icon which will correspond to marker's location
});

window.darkIcon = L.icon({
    iconUrl: "./markers/gymlogo_badge_12^q.png",
    iconSize: [ 32, 32 ], // size of the icon
    iconAnchor: [ 16, 16 ], // point of the icon which will correspond to marker's location
});

window.rockIcon = L.icon({
    iconUrl: "./markers/gymlogo_badge_13^q.png",
    iconSize: [ 32, 32 ], // size of the icon
    iconAnchor: [ 16, 16 ], // point of the icon which will correspond to marker's location
});

window.steelIcon = L.icon({
    iconUrl: "./markers/gymlogo_badge_14^q.png",
    iconSize: [ 32, 32 ], // size of the icon
    iconAnchor: [ 16, 16 ], // point of the icon which will correspond to marker's location
});

window.groundIcon = L.icon({
    iconUrl: "./markers/gymlogo_badge_15^q.png",
    iconSize: [ 32, 32 ], // size of the icon
    iconAnchor: [ 16, 16 ], // point of the icon which will correspond to marker's location
});

window.flyingIcon = L.icon({
    iconUrl: "./markers/gymlogo_badge_16^q.png",
    iconSize: [ 32, 32 ], // size of the icon
    iconAnchor: [ 16, 16 ], // point of the icon which will correspond to marker's location
});

window.dragonIcon = L.icon({
    iconUrl: "./markers/gymlogo_badge_17^q.png",
    iconSize: [ 32, 32 ], // size of the icon
    iconAnchor: [ 16, 16 ], // point of the icon which will correspond to marker's location
});

window.gridIcon = L.icon({
    iconUrl: "./markers/grille_a.png",
    iconSize: [ 51, 51 ], // size of the icon
    iconAnchor: [ 25.5, 25.5 ], // point of the icon which will correspond to marker's location
    className: "gridicon gridicon1" // concat gridicon and zoomlevel
});

window.gridScarletIcon = L.icon({
    iconUrl: "./markers/grille_b.png",
    iconSize: [ 51, 51 ], // size of the icon
    iconAnchor: [ 25.5, 25.5 ], // point of the icon which will correspond to marker's location
    className: "gridicon gridicon1" // concat gridicon and zoomlevel
});

window.gridVioletIcon = L.icon({
    iconUrl: "./markers/grille_c.png",
    iconSize: [ 51, 51 ], // size of the icon
    iconAnchor: [ 25.5, 25.5 ], // point of the icon which will correspond to marker's location
    className: "gridicon" // concat gridicon and zoomlevel
});


customLayer = L.layerGroup()
window.layers = {
    layPokeball: L.layerGroup(),
    layScarlet: L.layerGroup(),
    layViolet: L.layerGroup(),
    layTitan: L.layerGroup(),
    layStardust: L.layerGroup(),
    layTrainer: L.layerGroup(),
    laySymbol: L.layerGroup(),
    layFly: L.layerGroup(),
    layChest: customLayer,
    layCoin: L.layerGroup(),
    layTera: L.layerGroup(),
    layTinglu: L.layerGroup(),
    layWochien: L.layerGroup(),
    layChienpao: L.layerGroup(),
    layChiyu: L.layerGroup(),
    layGym: L.layerGroup(),
}



window.addEventListener("DOMContentLoaded", async (event) => {
    let markersListElem = document.getElementById("markersList");
    let pokemonList = document.getElementById("pokemonList");
    
    window.map = L.map("map", {
        minZoom: 0,
        maxZoom: 3,
        crs: L.CRS.Simple
    }).setView([ 0, 0 ], 1); //setView([lat, long], default zoom level)

    let southWest = window.map.unproject([0, 4096], window.map.getMaxZoom());
    let northEast = window.map.unproject([4096, 0], window.map.getMaxZoom());
    let bounds = new L.LatLngBounds(southWest, northEast);
    window.map.setMaxBounds(bounds);

    window.map.on('zoomend', () => resizeGrid(window.map));

    L.tileLayer("./map/tiles/tile_{z}-{x}-{y}.png", {
        minZoom: 0,
        maxZoom: 3,
        noWrap: true,
        attribution: "<a href='https://www.pokekalos.fr/jeux/switch/pev/' title='Pokékalos'>Pokémon Écarlate et Pokémon Violet</a>", //map label in bottom right
    }).addTo(map);

    P_DATA = await getJson("./EVMapData.json");

    // Create all markers
    for (let [key, markers] of Object.entries(P_DATA)) {
        if (key === "pokemon") { 
            let coordsUniq = [{coords: [0,0,0]}];
        
            for (let pokemon of markers) {
                window.layers[pokemon.name] = L.layerGroup();
                createPokemonPopup(pokemonList, pokemon);

                for (let fix_enc of pokemon.fix_enc) {
                    L.marker(cvert(fix_enc.coords), { icon: window[fix_enc.icon] })
                        .addTo(window.layers[fix_enc.layer]);
                    L.marker(cvert(fix_enc.coords), { icon: window[fix_enc.icon] })
                        .addTo(window.layers[pokemon.name]);
                }

                for (let std_enc of pokemon.std_enc) {
                    let uniq = true;
                    for (let elem of coordsUniq) {
                        if (elem.coords[0] === std_enc.coords[0] && elem.coords[2] === std_enc.coords[2] && elem.layer === std_enc.layer) {
                            uniq = false;
                            break;
                        }
                    }
                    if (uniq) {
                        coordsUniq.push({coords: std_enc.coords, icon: std_enc.icon, layer: std_enc.layer});
                        L.marker(cvert(std_enc.coords), { icon: window[std_enc.icon] })
                            .addTo(window.layers[std_enc.layer]);
                    }

                    let icon = std_enc.icon;
                    if (std_enc.icon === "pokeballIcon") icon = "gridIcon";
                    else if (std_enc.icon === "scarletIcon") icon = "gridScarletIcon";
                    else if (std_enc.icon === "violetIcon") icon = "gridVioletIcon";
                
                    L.marker(cvert(std_enc.coords), { icon: window[icon] })
                        .addTo(window.layers[pokemon.name]);
                }
                for (let ter_enc of pokemon.ter_enc) {
                    L.marker(cvert(ter_enc.coords), { icon: window[ter_enc.icon] })
                        .addTo(window.layers[ter_enc.layer]);
                    L.marker(cvert(ter_enc.coords), { icon: window[ter_enc.icon] })
                        .addTo(window.layers[pokemon.name]);
                }
            }
            
        } else if (key !== "never_used") {
            for (let marker of markers) {
                L.marker(cvert(marker.coords), { icon: window[marker.icon] })
                    .addTo(window.layers[marker.layer]);
            }
        }
    }
});


function cvert(orig) {
    const x = orig[ 0 ] * (512/5000);
    //const z = orig[1];
    const y = orig[ 2 ] * -1 * (512/5000);
    return [ y, x ];
}

async function getJson(json) {
    return await fetch(json)
        .then(response => response.json())
        .then(json => json);
}

function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;
  
    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
}

function resizeGrid(map) {
    let newZoom = map.getZoom();
    let gridIcons = document.getElementsByClassName("gridicon");
    let newSize = 25.5 * Math.pow(2,newZoom);
    for (let elem of gridIcons) {
        elem.style.width = newSize + "px";
        elem.style.height = newSize + "px";
        elem.style.marginTop = -newSize/2 + "px";
        elem.style.marginLeft = -newSize/2 + "px";
    }
}

function getTranslate3d (el) {
    var values = el.style.transform.split(/\w+\(|\);?/);
    if (!values[1] || !values[1].length) {
        return [];
    }
    return values[1].split(/,\s?/g).map(e => parseInt(e, 10));
}

function createPokemonPopup(parent, pokemon) {
    let divPopPok = document.createElement("div");
    let divPopImg = document.createElement("div");
    let img = document.createElement("img");
    let p = document.createElement("p");

    divPopPok.appendChild(divPopImg);
    divPopPok.appendChild(p);
    divPopImg.appendChild(img);
    
    parent.appendChild(divPopPok);

    divPopPok.onclick = () => toggleLayer(pokemon.name, map, divPopPok);
    divPopPok.classList.add("popupPokemon");
    divPopImg.classList.add("popupImg");
    img.src = "./pokemon/" + pokemon.name + ".png"; 
    p.classList.add("popupName");
    p.innerText = pokemon.name;
}

function toggleTab(e) {
    const allTabs = document.querySelectorAll('[data-tab]');
    for (const tab of allTabs) {
        tab.classList.remove("active");
    }

    const tabs = document.querySelectorAll('[data-tab="' + e.dataset.tab + '"]');
    for (const tab of tabs) {
        tab.classList.toggle("active")
    }
}

function toggleLayer(layer, point, self) {
    if (point.hasLayer(window.layers[layer])) {
        window.layers[layer].removeFrom(point);
        self.classList.remove("active");
    } else {
        window.layers[layer].addTo(point);
        resizeGrid(window.map);
        self.classList.add("active");
    }
}