require('dotenv').config();
const google = require('googleapis');
const sheetsApi = google.sheets('v4');
const googleAuth = require('./auth');

const SPREADSHEET_ID = '1KNCBfPbzbHsVGeELpzEtvoOsqmLyZnspyoYDQ68JUtw';

googleAuth.authorize()
    .then((auth) => {
        sheetsApi.spreadsheets.values.get({
            auth: auth,
            spreadsheetId: SPREADSHEET_ID,
            range: "sheet1!A1:C3",
        }, function (err, response) {
            if (err) {
                console.log('The API returned an error: ' + err);
                return console.log(err);
            }
            var rows = response.values;
            console.log(null, rows);
        });
    })
    .catch((err) => {
        console.log('auth error', err);
    });
