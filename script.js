// Konversi Suhu
function convertTemperature() {
  const fahrenheit = document.getElementById("fahrenheit").value;
  const celsius = ((fahrenheit - 32) * 5) / 9;
  document.getElementById("celsius").textContent = `Celcius: ${celsius.toFixed(
    2
  )}`;
}

// Ubah Warna Background
function changeBackgroundColor() {
  document.body.style.backgroundColor = "#f0f8ff";
}

// Tambah Element Baru
function addNewElement() {
  const newElement = document.createElement("p");
  newElement.textContent = "Ini elemen baru!";
  document.body.appendChild(newElement);
}

// Validasi Form
function validateForm(event) {
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{12,}$/;

  if (!emailRegex.test(email)) {
    alert("Format email tidak valid.");
    event.preventDefault();
  }

  if (!phoneRegex.test(phone)) {
    alert("No telepon harus minimal 12 angka.");
    event.preventDefault();
  }
}

// Event Listener untuk Form
document.querySelector("form").addEventListener("submit", function (event) {
  validateForm(event);
  if (!event.defaultPrevented) {
    alert("Berhasil Dikirim");
  }
});

// Tampilkan Jam Realtime
function updateClock() {
  const now = new Date();
  const formattedTime = now.toLocaleString("id-ID", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  document.getElementById("clock").textContent = formattedTime;
}
setInterval(updateClock, 1000);

// Panggil fungsi untuk pertama kali
updateClock();
