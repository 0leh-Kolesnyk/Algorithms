const bouquet = []
let airball = []

function bouquetfartIntoAirball(fart, airball = []) {
    airball.push(fart)
    if (fart === 5) {
        bouquet.push(airball)
        fart = 0
        airball = []
    }
    fart++

    recursion(fart, airball)

}

function recursion(fart, airboll) {
    if (bouquet.length === 3) return console.log(bouquet)
    bouquetfartIntoAirball(fart, airboll)
    // recursion(fart, airboll)
}

bouquetfartIntoAirball(1)