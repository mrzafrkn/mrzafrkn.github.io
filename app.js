const form = document.getElementById('myForm');
const table = document.getElementById('myTable');

// Sayfa yüklendiğinde localStorage'dan verileri alın
window.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('tableData')) {
    table.innerHTML = localStorage.getItem('tableData');
    attachDeleteButtonListeners();
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

  // E-posta daha önce girilmiş mi diye kontrol edin
  if (checkDuplicateEmail(ePosta)) {
    alert('Bu e-posta adresi zaten kullanılmıştır. Lütfen farklı bir e-posta adresi girin.');
    return; // Uyarıyı gösterip formun gönderilmesini engelleyin
  }

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

  const deleteButtonCell = document.createElement('td');
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Sil';
  deleteButton.addEventListener('click', function() {
    var result = confirm('Bu satırı silmek istediğinize emin misiniz?');
    if (result) {
      deleteRow(newRow);
    }
  });
  deleteButtonCell.appendChild(deleteButton);

  // Hücreleri satıra ekleyin
  newRow.appendChild(sirketAdiCell);
  newRow.appendChild(musteriTipiCell);
  newRow.appendChild(sorumluPersonelCell);
  newRow.appendChild(webSitesiCell);
  newRow.appendChild(ePostaCell);
  newRow.appendChild(telefonCell);
  newRow.appendChild(adresCell);
  newRow.appendChild(deleteButtonCell);

  // Satırı tabloya ekleyin
  table.appendChild(newRow);

  // Formu sıfırlayın
  form.reset();

  // Tablo verilerini localStorage'a kaydedin
  localStorage.setItem('tableData', table.innerHTML);

  // Event listener'ları ekle
  attachDeleteButtonListeners();
});

// E-posta adresinin daha önce girilip girilmediğini kontrol edin
function checkDuplicateEmail(email) {
  const existingEmails = Array.from(document.querySelectorAll('#myTable td:nth-child(5)')).map(cell => cell.textContent);
  return existingEmails.includes(email);
}

// Satırı sil
function deleteRow(row) {
  row.parentNode.removeChild(row);
  // Tablo verilerini localStorage'a kaydedin
  localStorage.setItem('tableData', table.innerHTML);
}

// "Delete" butonlarının event listener'larını ekle
function attachDeleteButtonListeners() {
  const deleteButtons = document.querySelectorAll('#myTable button');
  deleteButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      var result = confirm('Bu satırı silmek istediğinize emin misiniz?');
      if (result) {
        var row = button.parentNode.parentNode;
        deleteRow(row);
      }
    });
  });
}