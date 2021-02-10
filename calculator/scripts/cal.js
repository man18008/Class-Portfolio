let ol = document.queryselector('ol');

const links = [
    {
        label: "Week 1 Notes",
        url: "../week1/index.html"
    },
    {
        label: "Week 2 Notes",
        url: "../week2/index.html"
    }
];

links.forEach(
    link => {
        ol.innerHTML +=
        `<li><a href="${link.url}">${linkl.label}</a></li>`;
    }
)

function save1() {
    const name = document.queryselector('name').value;
}

//displays value 
function dis(val) 
{ 
    document.getElementById("result").value+=val 
} 
  
//evaluates the digit and returns result 
function solve() 
{ 
    let x = document.getElementById("result").value 
    let y = eval(x) 
    document.getElementById("result").value = y 
} 
  
//clears the display 
function clr() 
{ 
    document.getElementById("result").value = "" 
}

