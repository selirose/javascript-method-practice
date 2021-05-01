const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

//***MAP***
//1. Get array of all names
const names = characters.map((character) =>character.name)
console.log(names);
//2. Get array of all heights
const heights = characters.map ((character) =>character.height)
console.log(heights);
//3. Get array of objects with just name and height properties
const minifiedRecords = characters.map((character)=>({
    name : character.name,
    height: character.height,
}))
console.log(minifiedRecords);
//4. Get array of all first names
const firstNames = characters.map((character) => character.name.split(' ')[0])
console.log(firstNames);

//***REDUCE***
//1. Get total mass of all characters
const totalMass = characters.reduce((acc, cur) =>{
    return acc + cur.mass
},0);
console.log((totalMass));
//2. Get total height of all characters
const totalHeight = characters.reduce ((acc, cur)=> acc + cur.height,0)
console.log(totalHeight);
//3. Get total number of characters by eye color
const characterByEyeColor = characters.reduce((acc, cur) =>{
    const color = cur.eye_color
    if(acc[color]){
        acc[color]++;
    } else{
        acc[color]=1
    }
    return acc
},{});
console.log(characterByEyeColor)
//4. Get total number of characters in all the character names
const lengthOfName = characters.reduce((acc, cur)=>acc + cur.name.length, 0)
console.log(lengthOfName)

//***FILTER***
//1. Get characters with mass greater than 100
const greater100Characters = characters.filter( character => {
    return character.mass > 100;
});
console.log(greater100Characters);
//2. Get characters with height less than 200
const shorterCharacter = characters.filter( character => {
    return character.height <200;
});
console.log(shorterCharacter);
//3. Get all male characters
const maleCharacter = characters.filter(character => {
    return character.gender === "male";
});
console.log(maleCharacter);
//4. Get all female characters
const femaleCharacter =characters.filter (character=> {
    return character.gender === "female"
})
console.log(femaleCharacter);
//***SORT***
//1. Sort by mass
const byMass= characters.sort((a,b) => {
    return a.mass - b.mass; // hasilnya ascending , darikecil ke besar
    //return b.mass - a.mass // hasilnya descensing, dari besar ke kecil
 })
 console.log(byMass);
//2. Sort by height
const byHeight = characters.sort((a,b) =>a.height - b.height);
console.log(byHeight);
//3. Sort by name
const byName =characters.sort((a,b)=> {
    if (a.name < b.name) return -1; // untuk hasil ascending 
    return 1;

    //untuk hasil descending 
    //if (a.name < b.name) return 1;  
    //return -1;
});
console.log(byName)
//4. Sort by gender
const byGender = characters.sort((a,b)=>{
    if(a.gender=== "female") return -1;
    return 1
});
console.log(byGender);

//***EVERY***
//jawabannya true, false

//1. Does every character have blue eyes?
const checkBlueEye = characters.every(character => character.eye_color === "blue");
console.log(checkBlueEye);
//2. Does every character have mass more than 40?
const checkMass = characters.every(character => character.mass >40)
console.log(checkMass);
//3. Is every character shorter than 200?
const checkShorter = characters.every(character =>character.height <200)
console.log(checkShorter);
//4. Is every character male?
const checkGender = characters.every(character => character.gender=== "male")
console.log(checkGender);

//***SOME***
//balikannya true, false

//1. Is there at least one male character?
const oneMaleCharacter= characters.some ((character)=> character.gender === "male");
console.log(oneMaleCharacter);
//2. Is there at least one character with blue eyes?
const blueEyes = characters.some((character) => character.eye_color ==="blue" );
console.log(blueEyes);
//3. Is there at least one character taller than 210?
const tallerThan210 = characters.some ((character)=> character.height > 210);
console.log(tallerThan210);
//4. Is there at least one character that has mass less than 50?
const massLessThan50 = characters.some ((some) => some.mass < 50);
console.log(massLessThan50);
