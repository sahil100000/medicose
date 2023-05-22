const product = [
    {
        id: 0,
        image: './media/nuro.jpg',
        title: 'Nurokind Gold Capsules',
        price: 10
    },
    {
        id: 1,
        image: './media/moxi.jpg',
        title: 'Moxikind CV 625',
        price: 20
    },
    {
        id: 2,
        image: './media/amlo.jpg',
        title: 'Amlokind AT',
        price: 15
    },
    {
        id: 3,
        image: './media/rabe.jpg',
        title: 'Rabekind DSR',
        price: 13
    },
    {
        id: 4,
        image: './media/saml.jpg',
        title: 'Samlokind AT',
        price: 18
    }
];

const categories = [...new Set(product.map((item)=>
    {return item}))]

    document.getElementById('root').innerHTML = categories.map((item,i)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src='${image}'></img>
            </div>
        <div class='bottom'>
            <p>${title}</p>
            <h2>$ ${price}.00</h2>+
            "<button onclick='addtocart(${i})'>Add to Cart</button>"
        </div>
        </div>`
    )
}).join('')

var cart = [];

function addtocart(a){
    cart.push({...categories[a]});
    console.log(cart)
    displaycart();
}

function deElement(a){
    cart.splice(a,1);
    displaycart();
}

function displaycart(){
    let j = 0;
    let total = 0;

    
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartitem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML= "$ "+0+".00";
    }
    else {
        document.getElementById("cartitem").innerHTML = cart.map((items)=>
        {
            var{image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML= "$ "+total+".00";
            return(
                `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowing' src='${image}'></img>
                    </div>
                    <p style='font-size:12px'>${title}</p>
                    <h2 style='font-size:15px'>$ ${price}.00</h2>+
                    "<i class='fa-solid fa-trash' onclick='deElement("+(j++) +")'></i>
                </div>`
            )
        }).join('');
    }
}