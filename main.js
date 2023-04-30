var btnsL = document.getElementsByClassName("btnsL")
var btnsR = document.getElementsByClassName("btnsR")
var in1 = document.getElementById("In1");
var in2 = document.getElementById("In2");
var modes = document.getElementsByClassName("modes")
var lSelected = btnsL[0]
var RSelected = btnsR[0]
var mode = "dist"
for(let i=0; i<btnsL.length; i++){
    btnsL[i].addEventListener('click', ()=>{setLItem(btnsL[i]); setIn2()})
}

for(let i=0; i<btnsR.length; i++){
    btnsR[i].addEventListener('click', ()=>{setRItem(btnsR[i]); setIn2()})
}

for(let i=0; i<modes.length; i++){
    modes[i].addEventListener('click', ()=>{setMode(modes[i])})
}

function setInit()
{
    btnsL[0].style.color = "#FF9001";
    btnsR[0].style.color = "#FF9001";
    in1.addEventListener('input', ()=>{setIn2()})
}

function Reset(){
    lSelected.style.color = "#4B4B4B";
    RSelected.style.color = "#4B4B4B";
    setInit()
}

function setLItem(item)
{
    lSelected.style.color = "#4B4B4B";
    lSelected = item
    lSelected.style.color = "#FF9001"

}

function setRItem(item)
{
    RSelected.style.color = "#4B4B4B";
    RSelected = item
    RSelected.style.color = "#FF9001"
}


function getValue()
{
    if(mode=="dist"){
        return (in1.value * distance[RSelected.innerHTML] ) / distance[lSelected.innerHTML]
    }
    else if(mode=="time"){
        return (in1.value * time[RSelected.innerHTML] ) / time[lSelected.innerHTML]
    }
    else if(mode=="temperature"){   
        return (in1.value * temperature[RSelected.innerHTML](Math.floor(in1.value))) / temperature[lSelected.innerHTML](Math.floor(in1.value))
    }
    else if(mode=="area"){
        return (in1.value / area[RSelected.innerHTML] ) * area[lSelected.innerHTML]
    }
    else if(mode == "weight")
    {
        return (in1.value / weight[RSelected.innerHTML] ) * weight[lSelected.innerHTML]
    }
    else if(mode == "volume")
    {
        return (in1.value / volume[RSelected.innerHTML] ) * volume[lSelected.innerHTML]
    }
}

function setIn2(){
    in2.value = getValue()
}

function makeInvisible(){
    let len = btnsL.length
    for(let i=0; i<len; i++)
    {
        btnsL[i].innerHTML = "";
    }
    for(let i=0; i<len; i++)
    {
        btnsR[i].innerHTML = "";
    }
}

function setModeColors(item)
{
    for(let i=0; i<modes.length; i++)
    {
        modes[i].style.background = "#ECE5D3"
        modes[i].style.color = "black"
    }
    item.style.background = "tan"
    item.style.color = "white"
}

function setMode(item){
    setModeColors(item)
    item = item.innerHTML.toLowerCase()
    if(mode != item){
        makeInvisible()
        mode = item
        let dict = eval(mode)
        let dictKeys = Object.keys(dict)
        for(let i=0; i<dictKeys.length; i++){
            btnsL[i].innerHTML = dictKeys[i]
            btnsR[i].innerHTML = dictKeys[i]
        }
        in1.value = ""
        in2.value = "0"
        
    }   
}

setInit()




var distance = {
    KiloMetres : 1,
    Metres : 1000,
    CentiMetres : 100000,
    MilliMetres : 1000000
}

var time = {
    Hours : 1,
    Minutes : 60,
    Seconds : 3600,
    MilliSeconds : 3600000
}

function celc(c){
    if(lSelected.innerHTML == "Kelvin")
        {
            return c-273.15
        }
        else if(lSelected.innerHTML == "Farenheit")
        {
            return (c-32) *5/9
        }
        else{
            return c
        }
}

function faren(c)
{   
    if(lSelected.innerHTML == "Celcius"){
        return (c*9/5)+32
     }
     else if(lSelected.innerHTML == "Kelvin"){
         return (c-273.15)*9/5+32
     }
     else{
         return c
     }
}

function kel(c)
{
    if(lSelected.innerHTML == "Celcius"){
        return c+273.15
    }
    else if(lSelected.innerHTML == "Farenheit"){
        return (c - 32) * 5/9 + 273.15
    }
    else{
        return c
    }
}

var temperature = {
    Celcius : function(c){
       return celc(c)
    },
    Farenheit : function(c){
        return faren(c)
    },
    Kelvin : function(c){
        return kel(c)
    }
}

var area = {
    SquareMeter : 1,
    SquareKilometer : 1000000,
    SquareHectometer : 10000,
    SquareDecameter :  100,
    SquareDecimeter : 0.01,
    SquareCentimeter : 0.0001,
    SquareMillimeter : 0.000001

}

var weight = {
    Gram : 1,
    PicoGram : 0.000000000001,
    NanoGram : 0.000000001,
    MicroGram : 0.000001,
    MilliGram : 0.001,
    KiloGram : 1000,
    Tonne : 1000000,
    MegaTonne : 1000000000000,
    GigaTonne : 1000000000000000
}

var volume = {
    CubicMeter : 1,
    CubicDecimeter : 0.001,
    CubicCentimeter : 0.000001,
    CubicMillimeter : 0.000000001,
    CubicKilometer : 1000000000,
    HectoMeterCubic : 1000000,
    Decameter : 1000,
    Liter : 0.001,
    MilliLiter : 0.000001,
    USgallon : 0.00378541,
    USquart : 0.0009463525,
    USpint : 0.0004731763,
    UScup : 0.0002365881,
    USfluidOunce : 0.0000295735,
    UStableSpoon : 0.0000147868,
    USteaSpoon : 0.0000049289,
    ImperialGallon : 0.00454609,
    ImperialQuart : 0.0011365225,
    ImperialPint : 0.0005682613,
    ImperialFluidOunce : 0.0000284131,
    ImperialTableSpoon : 0.0000177582,
    ImperialTeaSpoon : 0.0000059194,
    CubicMile : 4168180000,
    CubicYard : 0.764554858,
    CubicFoot : 0.0283168466,
    CubicInch : 0.0000163871
}