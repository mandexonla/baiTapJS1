var id = 0;
      var sell = () => {
        var name = frm.pname.value;
        var quantity = parseInt(frm.qty.value);
        var price = parseInt(frm.price.value);
        var discount = parseInt(frm.dc.value);
        var subtotal = quantity * price - (1 - discount / 100);
        console.log(id + " " + subtotal);
        if (quantity && price && discount) {
          id++;
          var row = "<tr>";
          row += "<td>" + id + "</td>";
          row += "<td>" + name + "</td>";
          row += "<td>" + quantity + "</td>";
          row += "<td>" + price + "</td>";
          row += "<td>" + discount + "</td>";
          row += "<td>" + subtotal + "</td>";
          row += "</tr>";
          document.getElementById("tbody").innerHTML += row;
        } else {
          alert("Nhap sai vui long nhap lai");
        }
      };
      var cancel = () => {
        var name = (frm.pname.value = "");
        var quantity = (frm.qty.value = "");
        var price = (frm.price.value = "");
        var discount = (frm.dc.value = "");
      };