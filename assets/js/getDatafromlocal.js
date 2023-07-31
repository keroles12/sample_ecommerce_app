function getproductin(){
    var arr=localStorage.getItem("productitems");
    obj=JSON.parse(arr);
    var array=Object.values(obj);
    for (let index = 0; index < array.length; index++) {
        document.getElementById("data").innerHTML+=`
        <div class="row mt-5">
            <div class="col-2">${array[index].name}</div>
            <div class="col-2"><img width="50" height="50" src="${array[index].image}"></div>
            <div class="col-2">${array[index].price}</div>
            <div class="col-2">${array[index].incard*array[index].price}</div>
            <div class="col-2">
            <button class="btn btn-success" onclick="decrease(${array[index].id})">-</button>
            ${array[index].incard}
            <button class="btn btn-success" onclick="increase(${array[index].id})">+</button></div>
            <div class="col-2 fs-5 fw-bold"><button class="btn-danger btn" onclick="delet(${array[index].id})">delete</button></div>
            
        </div>
        `
      
    }
    var total=localStorage.getItem("totalCost");
    document.getElementById("data").innerHTML+=`
    <div class="row mt-4 mb-3">
    <div class="col-6">Total price for all product</div>
    <div class="col-6">${total}</div>
    </row>
    <div class="row">
    <div class="col-12 mb-3 mt-3 justify-content-end d-flex"><a class=" btn btn-success" href="checkout.html">Check Out</a></div>

    </div>
     
  `
    
}
///function increase number of product

function increase(id){
  var numberOfProduct=localStorage.getItem("cardNumber");
  var totalCost=parseInt(localStorage.getItem("totalCost"));
  var arr=localStorage.getItem("productitems");
  obj=JSON.parse(arr);
  var array=Object.values(obj);

  for (let index = 0; index < array.length; index++) {
     // var xx=array[index].incard;
      if(id==array[index].id)
        {
          array[index].incard++
          localStorage.setItem("productitems",JSON.stringify(array))
           totalCost=totalCost+(array[index].price)
          numberOfProduct=parseInt(numberOfProduct)+1
          localStorage.setItem("cardNumber",numberOfProduct);
          localStorage.setItem("totalCost",totalCost)
        }
    
  }
  
  window.location.reload();
  // loadDoc();
}
function loadDoc() {
  const xhttp = new XMLHttpRequest();
  console.log(xhttp)
  xhttp.onload = function() {
    document.getElementById("asd").innerHTML= this.responseText
  }
  xhttp.open("get", "ProductInCard.html");
  xhttp.send();
}
 //function that decrease the number of broduct
 function decrease(id){
  var numberOfProduct=localStorage.getItem("cardNumber");
  var totalCost=parseInt(localStorage.getItem("totalCost"));
  var arr=localStorage.getItem("productitems");
  obj=JSON.parse(arr);
  var array=Object.values(obj);
 
  for (let index = 0; index < array.length; index++) {
      if(id==array[index].id && array[index].incard>1)
        {
             array[index].incard--
             localStorage.setItem("productitems",JSON.stringify(array))
             totalCost=totalCost-(array[index].price)
             numberOfProduct=parseInt(numberOfProduct)-1
             localStorage.setItem("cardNumber",numberOfProduct);
             localStorage.setItem("totalCost",totalCost)
        }
    
  }
  window.location.reload();
 
}


///delete item from total product
 
 function delet(productId){
  
  var numberOfProduct=localStorage.getItem("cardNumber");
  var totalCost=parseInt(localStorage.getItem("totalCost"));
  var arr=localStorage.getItem("productitems");
  obj=JSON.parse(arr);
  var array=Object.values(obj);
 for (let index = 0; index < array.length; index++) {
  var x=array[index].incard;
    if(productId==array[index].id)
    { numberOfProduct=parseInt(numberOfProduct)-x;
      totalCost=totalCost-(array[index].price*array[index].incard)
      //console.log(array[index].incard)
      array.splice(index,1);
      localStorage.setItem("cardNumber",numberOfProduct);
      localStorage.setItem("productitems",JSON.stringify(array))
      localStorage.setItem("totalCost",totalCost)

    } 
  }
 // var table =document.getElementById("table");
  

     window.location.reload();

}
getproductin();

