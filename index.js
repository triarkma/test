

let lottStates = [
  { name: "Fratrekk", value: -1 },
  { name: "Ingen påvirkning", value: 0 },
  { name: "Tillegg", value: 1 },
];
let checksumType = [
  { name: "-", value: -1 },
  { name: "Ikke med i sjekksum", value: 0 },
  { name: "+", value: 1 },
];


let lottStatesMap = new Map()

for (let x of lottStates) {
  lottStatesMap.set(x.value, x.name)
}

console.log(f.get(-1))
console.log(f.get(0))
console.log(f.get(1))



let e = new Map()
e.set(-1, 'Fratrekk')
e.set(0, 'Ingen påvirkning')
e.set(1, 'Tillegg')

console.log(e.get(0))