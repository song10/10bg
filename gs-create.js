let google = require('googleapis');
let authentication = require("./authentication");


function addSheet(auth) {
  var sheets = google.sheets('v4');
  sheets.spreadsheets.create({
    auth: auth,
    resource: {
      properties: {
        title: "Anything-you-name"
      }
    }
  }, (err, response) => {
    if (err) {
      console.log('The API returned an error: ' + err);
      return;
    } else {
      console.log("Added");
    }
  });
}

authentication.authenticate().then((auth) => {
  addSheet(auth);
});
