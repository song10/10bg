let google = require('googleapis');
let authentication = require('./authentication');

authentication.authenticate().then((auth) => {
  getData(auth);
});

function getData(auth) {
  let sheets = google.sheets('v4');
  sheets.spreadsheets.batchUpdate({
    auth: auth,
    spreadsheetId: '1KNCBfPbzbHsVGeELpzEtvoOsqmLyZnspyoYDQ68JUtw',
    resource: {
      requests: [
        {
          addSheet: {
            properties: {
              sheetId: 2,
              title: "sheet3"
            }
          }
        }
      ]
    }
  }, (err, response) => {
    if (err) {
      console.error(err);
      return;
    } else
      console.log(JSON.stringify(response, null, 2));
  });
}
