
function table(){
   let tableNum = +document.getElementById("printNum").value;
   let minLength = +document.getElementById("minLength").value;
   let maxLength = +document.getElementById("maxLength").value;

    if(isNaN(tableNum) || isNaN(minLength) || isNaN(maxLength)){
        document.getElementById("displaytable") `Put correct number`
        return;
    }
tableNum = +(tableNum)
let table = '';
for (let i = minLength; i <= maxLength; i++){
table += `${tableNum} x ${i} = ${tableNum * i} <br>`
}

document.getElementById("displaytable").innerHTML = table;
}
function refresh(){
    document.getElementById("printNum").value = "";
    document.getElementById("minLength").value = "";
    document.getElementById("maxLength").value = "";
    document.getElementById("displaytable").innerHTML = "";
}