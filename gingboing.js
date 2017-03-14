var voicePlosives = ["B","D","G"];
var vLessPlosives = ["P","T","K"];
var Plosives = voicePlosives + vLessPlosives;
// Length = 6

var nasalCons = ["M","N","NG"];
var liquids = ["R","L"];

var vFric = ["THE","Z","ZH"];
var vLFric = ["TH","S","SH","H"];
var Fric = vFric + vLFric;
// Length = 7

var frontVow = ["EE","E","EH","AE"];
var midVow = "UH";
var backVow = ["OO","OH","AH"]
var diph = ["AY","EYE","OH","EER","OAR"]
var pureVow = frontVow + midVow + backVow;
// Length = 9
var allVow = pureVow + diph;
// Length = 14

/////////////////
/////////////////
/////////////////
var random = Math.random();
var value = Math.round(random * 10);
var approxLength = Math.round(random);

/////////////////
/////////////////
/////////////////

// function gbGenerate() {
//     for (var i = 0; i < 
// }

function test() {
    alert(random);
}
