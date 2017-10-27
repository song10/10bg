let google = require('googleapis');
let authentication = require("./authentication");


function appendData(auth) {
  var sheets = google.sheets('v4');
  sheets.spreadsheets.values.append({
    auth: auth,
    spreadsheetId: '1KNCBfPbzbHsVGeELpzEtvoOsqmLyZnspyoYDQ68JUtw',
    range: 'Sheet1!A2:B', //Change Sheet1 if your worksheet's name is something else
    valueInputOption: "USER_ENTERED",
    resource: {
      values: [["Void", "Canvas", "Website"], ["Paul", "Shan", "Human"]]
    }
  }, (err, response) => {
    if (err) {
      console.log('The API returned an error: ' + err);
      return;
    } else {
      console.log("Appended");
    }
  });
}

authentication.authenticate().then((auth) => {
  appendData(auth);
});
