let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (const car in statistics) {
    if(car.toString().charAt(0) == 'r') {
        console.log(`${statistics[car]}`);
    }
}