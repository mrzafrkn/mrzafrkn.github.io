// let sirketAdi = prompt("Şirketinizin adını girniz.");
// document.getElementById("sirketAdi").value = sirketAdi; 

// let webSitesi = prompt("Şirket web sitesini giriniz");
// document.getElementById("webSitesi").value = webSitesi;

const form = document.getElementById('myForm');
const table = document.getElementById('myTable');

// Sayfa yüklendiğinde localStorage'dan verileri alın
window.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('tableData')) {
    table.innerHTML = localStorage.getItem('tableData');
  }
});

// Form gönderildiğinde
form.addEventListener('submit', function(e) {
  e.preventDefault(); // Sayfanın yenilenmesini engellemek için formun varsayılan davranışını iptal edin

  // Formdaki değerleri alın
  const sirketAdi = document.getElementById('sirketAdi').value;
  const musteriTipi = document.getElementById('musteriTipi').value;
  const sorumluPersonel = document.getElementById('sorumluPersonel').value;
  const webSitesi = document.getElementById('webSitesi').value;
  const ePosta = document.getElementById('ePosta').value;
  const telefon = document.getElementById('telefon').value;
  const adres = document.getElementById('adres').value;

  // Yeni bir tablo satırı oluşturun
  const newRow = document.createElement('tr');

  // Yeni hücreler oluşturun ve değerleri ayarlayın
  const sirketAdiCell = document.createElement('td');
  sirketAdiCell.textContent = sirketAdi;

  const musteriTipiCell = document.createElement('td');
  musteriTipiCell.textContent = musteriTipi;

  const sorumluPersonelCell = document.createElement('td');
  sorumluPersonelCell.textContent = sorumluPersonel;

  const webSitesiCell = document.createElement('td');
  webSitesiCell.textContent = webSitesi;

  const ePostaCell = document.createElement('td');
  ePostaCell.textContent = ePosta;

  const telefonCell = document.createElement('td');
  telefonCell.textContent = telefon;

  const adresCell = document.createElement('td');
  adresCell.textContent = adres;

  // Hücreleri satıra ekleyin
  newRow.appendChild(sirketAdiCell);
  newRow.appendChild(musteriTipiCell);
  newRow.appendChild(sorumluPersonelCell);
  newRow.appendChild(webSitesiCell);
  newRow.appendChild(ePostaCell);
  newRow.appendChild(telefonCell);
  newRow.appendChild(adresCell);

  // Satırı tabloya ekleyin
  table.appendChild(newRow);

  // Formu sıfırlayın
  form.reset();

  // Tablo verilerini localStorage'a kaydedin
  localStorage.setItem('tableData', table.innerHTML);
});
