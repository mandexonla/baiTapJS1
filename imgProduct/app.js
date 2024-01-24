function add(){
    var image = document.getElementById("image").files[0];
    var pro = document.getElementById("pro").value;
    var pri = document.getElementById("pri").value;
    var reader = new FileReader();
    reader.onload = function(e) {
        var imgSrc = e.target.result;

        // Hiển thị hình ảnh và thông tin sản phẩm
        var cartItem = document.createElement('li');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src='${imgSrc}' alt='Product Image' />
            <div>
                <p><strong>Product : ${pro}</strong></p>
                <p>Price: ${pri}</p>
            </div>
        `;
        document.getElementById("cart").appendChild(cartItem);
    };
    reader.readAsDataURL(image);
} 