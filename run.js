let dateData = ["1-1", "1-2"];
let lengthData = [];
let timeData = [];
let minutePerMileData = [1.5, 2.2]; 
let submitrun = () => {
//Assign variables to HTML elements
let date = document.getElementById("date").value;
let length = document.getElementById("length").value;
let time = document.getElementById("time").value;
let dateColumn = document.getElementById("dateColumn");
let lengthColumn = document.getElementById("lengthColumn");
let timeColumn = document.getElementById("timeColumn");
//Add Input data to a p element appended to a column
let newDateEntry = document.createElement("p");
newDateEntry.innerHTML=date;
dateColumn.appendChild(newDateEntry);

let newLengthEntry = document.createElement("p");
newLengthEntry.innerHTML=length +" miles";
lengthColumn.appendChild(newLengthEntry);

let newTimeEntry = document.createElement("p");
newTimeEntry.innerHTML=time + " minutes";
timeColumn.appendChild(newTimeEntry);


//function that converts time to decimal and calculates average mile time 
let minutePerMile = () =>{
let minute0 = time[0].toString();
let minute1 = time[1].toString();
let minute2 = "";
if(time.length>5){minute2=time[2].toString();}
let minutes = Number((minute0+minute1+minute2));


let second0 = time[time.length-2].toString();
let second1 = time[time.length-1].toString();
let seconds = Number((second0+second1));

let decimalSecond = seconds/60;
let decimalMinute = minutes+decimalSecond;

return decimalMinute/length;

}
minutePerMileData.push(minutePerMile());
console.log(minutePerMileData);
//push data to arrays for storage/graphing
dateData.push(date);
lengthData.push(length);
timeData.push(time);
console.log(timeData, lengthData, dateData);
}
