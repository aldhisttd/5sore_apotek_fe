$('#input').submit(function(e){
    e.preventDefault();
    var formData = new FormData(this);
    $.ajax({
        type: 'POST',
        url: host+"obat_input.php",
        data: formData,
        cache: false,
        contentType: false, 
        processData: false, 
        dataType: 'json',
        success: (result) => {
            alert(result.msg);
        },
    });
  })

   function populasiKategori() {
    $.ajax({
        type: "GET",
        url: host+"read_kategori.php", // Gantilah dengan URL API kategori
        dataType: "json",
        async: true,
        cache: false,
        contentType: false,
        processData: false,
        success: function (data) {
            var categories = data.body.data;
            var select = $("#kode_kategori");

            // Kosongkan opsi pemilihan sebelum mengisi kembali
            select.empty();

            // Tambahkan opsi pemilihan untuk setiap kategori
            for (var i = 0; i < categories.length; i++) {
                select.append(`<option value="${categories[i].kode}">${categories[i].kode}</option>`);
            }
        },
    });
}
// Panggil fungsi untuk mengisi opsi pemilihan kategori saat halaman dimuat
$(document).ready(function () {
    populasiKategori();
});
function populasiSuplier() {
  $.ajax({
      type: "GET",
      url: host+"read_supplier.php", // Gantilah dengan URL API kategori
      dataType: "json",
      async: true,
      cache: false,
      contentType: false,
      processData: false,
      success: function (data) {
          var categories = data.body.data;
          var select = $("#kode_supplier");

          // Kosongkan opsi pemilihan sebelum mengisi kembali
          select.empty();

          // Tambahkan opsi pemilihan untuk setiap kategori
          for (var i = 0; i < categories.length; i++) {
              select.append(`<option value="${categories[i].kode}">${categories[i].kode}</option>`);
          }
      },
  });
}
// Panggil fungsi untuk mengisi opsi pemilihan kategori saat halaman dimuat
$(document).ready(function () {
  populasiSuplier();
});
