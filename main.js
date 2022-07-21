const hero = {
    image: '🦸‍♂️',
    health: 100
}

const boss = {
    image: '👹',
    health: 100
}

function damage() {
    boss.health -= 5
    drawBoss()
}
    
        // updatePlayer(key)   TODO
        
    


// function damage(key) {
//     for (key in players) {
//         let player = players[key]
//         player.health -= 10    
//         drawPlayers()
//     }
// }


function drawHero() {
    let template = ''
    hero.forEach(hero => {
        template += `
        <div class="col-6">
                <h1>Hero</h1>
                <div">${hero.image}</div>
                <div class="progress">
                    <div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
        </div>
        `
        
    });

        let playerElm = document.getElementById('hero')
        playerElm.innerHTML = template
    }
    drawHero()

function drawBoss() {
    let template = ''
    boss.forEach(boss => {
        template += `
        <div class="col-6">
                <h1>Boss</h1>
                <div onclick="damage()">${boss.image}</div>
                <div class="progress">
                    <div class="progress-bar bg-danger" role="progressbar" style="width: ${boss.health}%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
        </div>
        `
        
    });

        let playerElm = document.getElementById('boss')
        playerElm.innerHTML = template
    } 
    drawBoss()   





