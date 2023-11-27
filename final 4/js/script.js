document.querySelector('.burger').onclick = function(){
    // document.querySelector('.menu').classList.add('menu-show');
    document.querySelector('.menu').classList.toggle('menu-show');
}

document.querySelector('#cart-btn').onclick = function(){
    document.querySelector('#cart-box').classList.toggle('cart-show');
}