function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');
  const data = JSON.parse(e.postData.contents);

  const row = [
    new Date(),
    data.FacilityName,
    data.HPVBatch1Number,
    data.HPVBatch1Expiry,
    data.HPVBatch1Balance,
    data.HPVBatch2Number,
    data.HPVBatch2Expiry,
    data.HPVBatch2Balance,
    data.DPTBatch1Number,
    data.DPTBatch1Expiry,
    data.DPTBatch1Balance,
    data.DPTBatch2Number,
    data.DPTBatch2Expiry,
    data.DPTBatch2Balance,
    data.CheckedBy
  ];

  sheet.appendRow(row);

  return ContentService
    .createTextOutput(JSON.stringify({ status: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}
