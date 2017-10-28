var GoogleSpreadsheet = require('google-spreadsheet');
var authentication = require('./client_secret.json');

// Create a document object using the ID of the spreadsheet - obtained from its URL.
var doc = new GoogleSpreadsheet('1KNCBfPbzbHsVGeELpzEtvoOsqmLyZnspyoYDQ68JUtw');
console.log(doc);

// Authenticate with the Google Spreadsheets API.
doc.useServiceAccountAuth(authentication, function (err) {

	// Get all of the rows from the spreadsheet.
	doc.getRows(1, function (err, rows) {
		if (err)
			console.log(err);
		else
			console.log(rows);
	});
});