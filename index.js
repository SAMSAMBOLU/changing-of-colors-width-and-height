
let x= 344.01
console.log(Math.floor(x));


function changeColor(){
  let color=  document.getElementById('input1').value
  document.getElementById('show').style.backgroundColor=color
}
function changeTextColor(){
    let color=  document.getElementById('input2').value
    // document.getElementById('show').style.backgroundColor=color
    document.getElementById('p').style.color=color

  }
  function changeWidth(){
    let color=  document.getElementById('input3').value
    // document.getElementById('show').style.backgroundColor=color
    document.getElementById('show').style.width=color

  }
  function changeHeight(){
    let color=  document.getElementById('input4').value
    // document.getElementById('show').style.backgroundColor=color
    document.getElementById('show').style.height=color

  }
  

