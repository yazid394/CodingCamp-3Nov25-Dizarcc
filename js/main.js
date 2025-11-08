function tampilkanNama() {
    let name = document.getElementById("your_name").value.trim()
    let output = document.getElementById("name")

    if (name === "") {
        output.innerText = "Halo, Pengunjung";
    } else {
        output.innerText = "Halo, " + name + "!";
    }
}

document.getElementById("currentTime").textContent = new Date().toString();
document.getElementById("messageForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const tanggal = document.getElementById("tanggal").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const pesan = document.getElementById("pesan").value;

    document.getElementById("resultNama").textContent = nama;
    document.getElementById("resultTanggal").textContent = tanggal;
    document.getElementById("resultGender").textContent = gender;
    document.getElementById("resultPesan").textContent = pesan;
});