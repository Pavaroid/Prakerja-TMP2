<php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nama = $_POST['nama'];
    $email = $_POST['email'];
    $telepon = $_POST['telepon'];
    $pesan = $_POST['pesan'];

    echo "Terimakasih, $nama. Pesan Anda telah dikirim.";
}
?></php>