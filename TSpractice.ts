export {}

interface Mountain
{
    name: string;
    height: number;
}

let land : Mountain[] = [
    {name: "Kilimanjaro", height: 19300},
    {name: "Everest", height: 1000000},
    {name: "Denali", height: 20000}
]

function FindTallestMountain(land: Mountain[]): string 
{
    return land.reduce((m1, m2) => (m1.height > m2.height) ? m1 : m2).name;
}

let tallMount = FindTallestMountain(land);
console.log(tallMount);

function FindAverageMountain(land: Mountain[]): number
{
    let totalHeigh = 0;
    land.forEach(element => {
        totalHeigh += element.height
    });

    return Number((totalHeigh / land.length).toFixed(2));
}

console.log(FindAverageMountain(land));

// inspired by climber Alex Honnold from National Geographic
interface HikePlace
{
    Boulder: Mountain;
    Walls: number;
}

// values are not official
let Tracks : HikePlace[] = [
    {Boulder: {name: "Kili", height: 19300}, Walls: 2},
    {Boulder: {name: "Every", height: 1000000}, Walls: 5},
    {Boulder: {name: "Denali", height: 20000}, Walls: 3},
]

function CalcCombinedWalls(hikePlaces: HikePlace[]): number 
{
    let sum = hikePlaces.reduce((combined: number, w: HikePlace) => (Number(combined) + Number(w.Walls * w.Boulder.height)), 0);
    return sum;
}

console.log(CalcCombinedWalls(Tracks));