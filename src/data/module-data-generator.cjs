const fs = require('fs');

const count = Number(process.argv[2] ? Number(process.argv[2]) : 10); // odczyt liczby obiektów
let cars = [];                        // tablica z obiektami 


function getRandomDate(startYear, endYear) {
    const start = new Date(`${startYear}-01-01`).getTime();
    const end = new Date(`${endYear}-12-31`).getTime();
    const randomDate = new Date(start + Math.random() * (end - start));
    return randomDate.toISOString().split('T')[0]; 
}
function getRandomPlateNumber() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    let plate = "";
    for (let i = 0; i < 3; i++) {
        plate += letters[Math.floor(Math.random() * letters.length)];
    }
    for (let i = 0; i < 4; i++) {
        plate += numbers[Math.floor(Math.random() * numbers.length)];
    }
    return plate;
}




fs.readFile('./src/cars.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    
    
    const carBrands = data.split("\n").map(s => s.trim()).filter(n => n.length !== 0);

    let content = "export const data = [\n";
    for(let i = 0; i < count; i++){
        const id = i + 1;
        const brand = carBrands[Math.floor(Math.random() * carBrands.length)];
        const productionDate = getRandomDate(1990, 2023);
        const plateNumber = getRandomPlateNumber();
        
        
        content +=`
        { 
        id: ${id},
        brand: "${brand}",
        productionDate: "${productionDate}",
        plateNumber: "${plateNumber}"
        },\n`;
    
    }
    
    content = content.trim().slice(0, -1) + "\n];";
    
    fs.writeFile('./src/data/module-data.js', content, (err) => {
        if (err) {
           console.error(err);
        }
        console.log("module-data.js generated");
       });
});