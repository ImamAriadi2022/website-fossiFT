function handleResize() {
    // Mendapatkan elemen div class1 dan class2
    const divClass1 = document.querySelector('.class1');
    const divClass2 = document.querySelector('.class2');

    // Menghapus konten sebelumnya dari class1 dan class2
    divClass1.innerHTML = '';
    divClass2.innerHTML = '';

    // Membuat elemen paragraf
    const paragraph = document.createElement('div');

    // Membuat elemen <p>
    const pElement = document.createElement('p');
    pElement.textContent = "Misi Fossi - ft ";

    // Membuat elemen <ul> dan <li>
    const ulElement = document.createElement('ul');

    const li1 = document.createElement('li');
    li1.textContent = "1. Ketuhanan yang Maha Esa";
    
    const li2 = document.createElement('li');
    li2.textContent = "2. cinta alam dan kasih sayang sesama manusia";
    
    const li3 = document.createElement('li');
    li3.textContent = "3. patriot yang sopan dan kesatria";

    // Menambahkan <li> ke dalam <ul>
    ulElement.appendChild(li1);
    ulElement.appendChild(li2);
    ulElement.appendChild(li3);

    // Menambahkan <p> dan <ul> ke dalam paragraf (div)
    paragraph.appendChild(pElement);
    paragraph.appendChild(ulElement);

    // Mengecek lebar viewport
    if (window.innerWidth <= 768) {
        // Menampilkan konten di class1 jika ukuran layar kecil (mobile)
        divClass1.appendChild(paragraph);
    } else {
        // Menampilkan konten di class2 jika ukuran layar besar (desktop/laptop)
        divClass2.appendChild(paragraph);
    }
}

// Memanggil fungsi handleResize saat halaman pertama kali dimuat
handleResize();

// Memanggil fungsi handleResize setiap kali ukuran jendela diubah
window.addEventListener('resize', handleResize);