const list = document.querySelector('.list');
const products = {
    1: {
        "name": 'RTX 3090 GPU',
        "price": '1499.0'
    },
    2: {
        "name": 'Intel Z590 Gaming Motherboard',
        "price": '499'
    },
    3: {
        "name": 'DELL QHD 27" Gaming Monitor',
        "price": '899'
    },
    4: {
        "name": 'Asus ROG Zephyrus S17',
        "price": '1199'
    },
    5: {
        "name": 'Razer Book',
        "price": '999'
    },
    6: {
        "name": 'Razer Tomahawk Gaming Chassis',
        "price": '699'
    },
    7: {
        "name": 'RAZER HUNTSMAN V2',
        "price": '399'
    },
    8: {
        "name": 'Razer Mamba Mouse',
        "price": '199'
    },
}
let item = [];
let bill = [];

function addToCart(x) {
    const span = `<span class="price">$${products[x].price}</span>`
    const result = products[x].name + " " + span;
    if (item.includes(products[x]) === false) item.push(result);
    bill.push(products[x].price);

}

function cart() {
    list.innerHTML = "";
    for (let i = 0; i < item.length; i++) {
        let text = item[i];
        let listItem = document.createElement("LI");
        listItem.innerHTML = text;
        list.appendChild(listItem);
        listItem.style.textAlign = 'left';
    }
    const btn = document.querySelector('.bill');
    const total = bill.reduce(add);

    function add(accumulator, a) {
        return parseInt(accumulator) + parseInt(a);
    }
    console.log(total);
    btn.innerHTML = `Total Bill is $${total}`;
}