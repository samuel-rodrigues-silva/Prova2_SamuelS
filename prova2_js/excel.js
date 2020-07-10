
let table = document.querySelector('#tableExcel');
let body = table.childNodes[3]

let list = document.querySelectorAll('input');

list.forEach(input => {

    input.addEventListener("blur", i => {
      
        let string = i.target.value;      
        if(string.indexOf('+') != -1){
            let res = string.split("+")
            let x = res[0].split("=");
            let a = document.getElementById(x[1]).value;
            let b = document.getElementById(`${res[1]}`).value;
            let result = parseInt(a) + parseInt(b);
            i.target.value = result;
            i.target.innerHtml = result
         
        }else if(string.indexOf('-') != -1){
            let res = string.split("-")
            let x = res[0].split("=");
            let a = document.getElementById(x[1]).value;
            let b = document.getElementById(`${res[1]}`).value;
            let result = parseInt(a) + parseInt(b);
            i.target.value = result;
            i.target.innerHtml = result
        }else{
            console.log('erro');
        }
       
    })
})
