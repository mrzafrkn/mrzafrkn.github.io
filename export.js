// Excel'e aktar
function exportToXLSX() {
    // Remove the delete button cells before exporting
    var rows = document.querySelectorAll("#myTable tr");
    rows.forEach(function(row) {
      var deleteButtonCell = row.querySelector("td:last-child");
      if (deleteButtonCell) {
        deleteButtonCell.parentNode.removeChild(deleteButtonCell);
      }
    });
  
    // Export the table data to Excel
    var table = document.getElementById("myTable");
    var sheet = XLSX.utils.table_to_sheet(table);
  
    var workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, sheet, "Sheet1");
  
    var xlsxBuffer = XLSX.write(workbook, { type: "array", bookType: "xlsx" });
  
    var blob = new Blob([xlsxBuffer], { type: "application/octet-stream" });
    var url = URL.createObjectURL(blob);
  
    var a = document.createElement("a");
    a.href = url;
    a.download = "musteriler.xlsx";
    a.click();
  }