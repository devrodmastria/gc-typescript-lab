"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var land = [
    { name: "Kilimanjaro", height: 19300 },
    { name: "Everest", height: 1000000 },
    { name: "Denali", height: 20000 }
];
function FindTallestMountain(land) {
    return land.reduce(function (m1, m2) { return (m1.height > m2.height) ? m1 : m2; }).name;
}
var tallMount = FindTallestMountain(land);
console.log(tallMount);
function FindAverageMountain(land) {
    var totalHeigh = 0;
    land.forEach(function (element) {
        totalHeigh += element.height;
    });
    return Number((totalHeigh / land.length).toFixed(2));
}
console.log(FindAverageMountain(land));
// values are not official
var Tracks = [
    { Boulder: { name: "Kili", height: 19300 }, Walls: 2 },
    { Boulder: { name: "Every", height: 1000000 }, Walls: 5 },
    { Boulder: { name: "Denali", height: 20000 }, Walls: 3 },
];
function CalcCombinedWalls(hikePlaces) {
    var sum = hikePlaces.reduce(function (combined, w) { return (Number(combined) + Number(w.Walls * w.Boulder.height)); }, 0);
    return sum;
}
console.log(CalcCombinedWalls(Tracks));
