var product = [
  {
    "id" : "1",
    "img" : "images/5627_hoa-tuoi.jpg",
    "name" : "Hoa Hồng",
    "price" : "100000"  
  },
  {
    "id" : "2",
    "img" : "images/5623_hoa-tuoi.jpg",
    "name" : "Hoa Hồng Trắng",
    "price" : "160000"
  },
  {
    "id" : "3",
    "img" : "images/3157_hoa-tuoi.jpg",
    "name" : "Hoa Hồng Xanh",
    "price" : "120000"
  },
  {
    "id" : "4",
    "img" : "images/5045_cua-hang-hoa.jpg",
    "name" : "Hoa Hồng Đỏ",
    "price" : "180000"
  },
  {
    "id" : "5",
    "img" : "images/4375_hoa-tuoi.jpg",
    "name" : "Hoa Hồng Tình Yêu",
    "price" : "200000"
  },
  {
    "id" : "6",
    "img" : "images/5449_cua-hang-hoa.jpg",
    "name" : "Hoa Tím",
    "price" : "140000"
  },
  {
    "id" : "7",
    "img" : "images/hoaramance.jpg",
    "name" : "Hoa Romance",
    "price" : "1120400"
  },
  {
    "id" : "8",
    "img" : "images/5419_cua-hang-hoa.jpg",
    "name" : "Hoa Cẩm chướng",
    "price" : "200000"
  },
];

var id_click = new Array();
var number_cart = document.getElementById("number-cart");
if (localStorage.getItem("id-pro")) {
  id_click = JSON.parse(localStorage.getItem("id-pro"));
  number_cart.innerHTML = id_click.length;
}
// function showProduct
function showProduct() {
  var txt;
  for (var i = 0; i < product.length; i++) {
    txt = '<li class="product-item">'
      + '<div class="border-product">'
      + '<img src=' + product[i].img + ' alt="Flower">'
      + '<p>' + product[i].name + '</p>'
      + '<p>' + product[i].price + '<span> VNĐ</span></p>'
      + '<button class="button-click" id=' + product[i].id + '>Add to cart</button>'
      + '</div>'
      + '</li>';
    document.getElementById("products").innerHTML += txt;
  }
}
// function showCart
function showCart() {
  var table;
  for (var k = 0; k < id_click.length; k++) {
    table = '<tr id="tr-' + product[id_click[k] - 1].id + '">'
      + '<td>'
      + '<img src=' + product[id_click[k]-1].img + ' alt="Flower">'
      + '</td>'
      + '<td>' + product[id_click[k]-1].name + '</td>'
      + '<td>1</td>'
      + '<td><img class="icon-delete" src="images/delete.jpg" alt="Delete" id="' + product[id_click[k]-1].id + '"></td>'
      + '</tr>';
    document.getElementById("body-cart").innerHTML += table;
  }
}
// disabled item old
function disabled_add() {
  for (var j = 0; j < id_click.length; j++) {
    document.getElementById(id_click[j]).disabled = true;
    document.getElementById(id_click[j]).style.backgroundColor = "#ccc";
  }
}
// show product
if (document.getElementById("products")) {
  showProduct();
  disabled_add();
}
// show cart
if (document.getElementById("body-cart")) {
  showCart();
}

// add event choose product
var button_list = document.getElementsByClassName('button-click');
for(var j = 0; j < button_list.length; j++) {   
  button_list[j].addEventListener('click', function(){
    this.disabled = true;
    this.style.backgroundColor = "#ccc";
    id_click.push(this.getAttribute("id"));
    localStorage.setItem("id-pro", JSON.stringify(id_click));
    number_cart.innerHTML = id_click.length;
  });
}
// add event remove product 
var button_cart_list = document.getElementsByClassName("icon-delete");
for (var j = 0; j < button_cart_list.length; j++) {
  button_cart_list[j].addEventListener('click', function () {
    id_click.splice(id_click.indexOf(this.getAttribute("id")), 1);
    localStorage.setItem("id-pro", JSON.stringify(id_click));
    document.getElementById("tr-" + this.getAttribute("id")).style.display = "none";
    number_cart.innerHTML = id_click.length;
  });
}
// empty cart
if (id_click.length === 0 && document.getElementById("table-id")) {
  document.getElementById("table-id").style.display = "none";
  var tag_span = document.createElement("SPAN");
  var notice = document.createTextNode("Empty Cart");
  tag_span.appendChild(notice);
  document.getElementsByClassName("section-product")[0].appendChild(tag_span);
}
