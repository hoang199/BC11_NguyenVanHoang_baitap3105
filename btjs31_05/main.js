
document.getElementById("btnTinhTien").onclick = function (event) {
    event.preventDefault();
    var product = document.getElementById("product").value;
    var count = document.getElementById("count").value;
    var price = document.getElementById("price").value;
    var tongTien = 0;
    if ( parseInt( count ) <50 ) {
  
      tongTien = parseInt( count ) * parseFloat( price );
    }
    if ( parseInt( count ) >= 50 && parseInt( count ) <= 100 ) {
       tongTien =  ( parseInt( count ) * parseFloat( price ) )*0.92;
      }
    if ( parseInt( count ) > 100 ) {
  
        tongTien = ( parseInt( count ) * parseFloat( price ) )*0.88;
      }

    var info = "<div class='alert alert-success'>" +"Sản phẩm : " + product  +"<br> Số Lượng : " + count + "<br> Tổng Tiền là : " + tongTien + "VND"+ "</div>";

    document.getElementById("footerCard").innerHTML = info;
};

