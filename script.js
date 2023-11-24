
fetch('https://dummyjson.com/carts')
.then(data=>data.json())
.then(cartData=> displayArray(cartData))


//2 To display the array of data into the html page
function displayArray(cartData){
    for(let ncart of cartData.carts){
        for (let prdct of ncart.products){
        htmlData=`
        <div class="col-3">
        <div class="card mt-3 mx-auto shadow" style="width: 18rem; border-radius: 10px;">
            <img src=${prdct.thumbnail} class="card-img-top" style="height: 200px;">
            <div class="card-body" style="height: 280px;">
            <h5 class="card-title">${prdct.title}</h5>
            <p class="card-text">ID: ${prdct.id}<br>Price: ${prdct.price}<br>Total: ${prdct.id}<br>Quantity: ${prdct.quantity}
            <br>${prdct.discountPercentage}% <br>OffNow At: ${prdct.discountedPrice}</p>
            <div id="buutton">
             <button id="btn">Add to Cart</button>
            </div>
            </div>
        </div>
        </div>`
    result.innerHTML+=htmlData
    }
}
}








