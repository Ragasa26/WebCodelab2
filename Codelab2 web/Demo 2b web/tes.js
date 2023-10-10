function cek() {
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var alamat = document.getElementById("alamat").value;

    if (nama === "") {
        alert("Kolom nama harus diisi.");
    } else if (email === "") {
        alert("Kolom email harus diisi.");
    } else if (alamat === "") {
        alert("Kolom alamat harus diisi.");
    } else {
        alert("Semua kolom telah diisi.");
    }
}
