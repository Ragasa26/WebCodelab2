function jumlahkan() {
    var bilanganPertama = parseFloat(document.getElementById("satu").value);
    var bilanganKedua = parseFloat(document.getElementById("dua").value);

    if (!isNaN(bilanganPertama) && !isNaN(bilanganKedua)) {
      var hasil = bilanganPertama + bilanganKedua;
      alert(hasil);
    } else {
      alert("Masukkan bilangan yang valid.");
    }
  }

  function ulang() {
    document.getElementById("satu").value = "";
    document.getElementById("dua").value = "";
    document.getElementById("hasil").textContent = "";
  }