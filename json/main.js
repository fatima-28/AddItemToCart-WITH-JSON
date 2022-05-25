fetch("product.json")
then(function(response) {
    return response.json();
})
then(function(data){
    localstorage.setItem("product",JSON.stringify(data)); //our shopping cart
    if (!localstorage.getItem("cart")) {
        localstorage.setItem("cart","[]")
    }
});

let products=JSON.parse(localstorage.getItem("product"));
let cart=JSON.parse(localstorage.getItem("cart)"));

function AddItemToCart(productid){
    let product=products.find(function(product){
        return product.id==productid;
    })

    if (cart.length==0) {  //if there are any other product in cart
        cart.push(product);
    }
    else {
        let res=cart.find(element=>element.id==productid);
        if (res===undefined) {
            cart.push(product);
        }
    }

    localstorage.setItem("cart",JSON.stringify("cart"));
}
addItemToCart(1);



