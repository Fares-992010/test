function show(){
var products=JSON.parse(localStorage.getItem("products"));
var cart=JSON.parse(localStorage.getItem("cart"));
tbody.innerHTML=""

cart.forEach((elem,i) => {

tbody.innerHTML+=`

  <tr>
    <td>
    <div class="row">
    <div class="col-6">
    <img class="img-test" src"./assets/img/${products[elem.id].img}>
    </div>
    <div class="col-6" style="text-align:start;">
  <h5>${products[elem.id].pname}</h5>
  </div>
  </div>
  </td>
  <td>${products[elem.id].price}$</td>
  <td class="td-width">
  <div class"row">
  <div class"col-4"><button type"button" class="btn btn-outline-primary">plus</button></div>

`
}) 

}