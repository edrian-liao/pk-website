function onOpen() {
  SpreadsheetApp.getUi().alert('To update the database, click "Update Data" on Menu. Then, click "Run Script".');
  SpreadsheetApp.getUi()
      .createMenu('Update Data')
      .addItem('Run script', 'getData')
      .addToUi();
}

function getData() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('Sheet1');

  var data = getFirebaseData("users");
  var row = 2;
  for (var user in data) {
    var path = "users/" + user;
    var user_data = getFirebaseData(path);
    const values = Object.values(user_data);
    var col = 1;
    for (i = 0; i < 6; i++) {
      var range = sheet.getRange(row, col, 1, 1);
      range.setValue(values[i]);
      col = col + 1;
      if (col == 7) break;;
    }
    row = row + 1;
  }
}

function getFirebaseData(data) {
  var firebaseUrl = "https://kayamanan-d3a22-default-rtdb.firebaseio.com"
  var result = FirebaseApp.getDatabaseByUrl(firebaseUrl).getData(data);
  return result;

}
