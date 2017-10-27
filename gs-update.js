let google = require('googleapis');
let authentication = require("./authentication");


function updateData(auth) {
  var sheets = google.sheets('v4');
  sheets.spreadsheets.values.update({
    auth: auth,
    spreadsheetId: '1KNCBfPbzbHsVGeELpzEtvoOsqmLyZnspyoYDQ68JUtw',
    range: 'Sheet1!A2:B', //Change Sheet1 if your worksheet's name is something else
    valueInputOption: "USER_ENTERED",
    resource: {
      values: [["Void", "Canvas"], ["Paul", "Shan"]]
    }
  }, (err, response) => {
    if (err) {
      console.log('The API returned an error: ' + err);
      return;
    } else {
      console.log("Updated");
    }
  });
}

authentication.authenticate().then((auth) => {
  updateData(auth);
});
