// Google Apps Script Backend for Watch Collection App

const SHEET_ID = '1c2o-pGvXUZFE-P9639cYjC36nHZHCypAQ6BCd9AA_Ag'; // From your original configuration

function doGet(e) {
  try {
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheets()[0];
    const data = sheet.getDataRange().getValues();
    
    if (data.length === 0) {
      return ContentService.createTextOutput(JSON.stringify([]))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    const headers = data[0];
    const rows = data.slice(1);
    
    const result = rows.map((row, rowIndex) => {
      let obj = {};
      
      // Adding the row index as an ID (adding 2 to account for 0-index and header row)
      obj.row = rowIndex + 2; 
      
      headers.forEach((header, index) => {
        // Ensure string properties if they are dates or numbers
        obj[header] = row[index] instanceof Date ? row[index].toISOString().split('T')[0] : row[index];
      });
      return obj;
    });
    
    return ContentService.createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheets()[0];
    let data;
    
    if (e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else {
      data = e.parameter;
    }
    
    if (data.action === 'add') {
      const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
      const watchData = data.watch || data;
      
      const newRow = headers.map(header => {
        return watchData[header] !== undefined ? watchData[header] : "";
      });
      
      sheet.appendRow(newRow);
      
      return ContentService.createTextOutput(JSON.stringify({
        success: true, 
        message: 'Watch added successfully'
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    if (data.action === 'delete') {
      const rowIndex = parseInt(data.row);
      if (rowIndex > 1) {
        sheet.deleteRow(rowIndex);
        return ContentService.createTextOutput(JSON.stringify({
          success: true, 
          message: 'Watch deleted successfully'
        })).setMimeType(ContentService.MimeType.JSON);
      }
    }
    
    if (data.action === 'edit') {
      const rowIndex = parseInt(data.row);
      const watchData = data.watch || data;
      
      if (rowIndex > 1) {
        const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
        const updatedRow = headers.map(header => {
          return watchData[header] !== undefined ? watchData[header] : "";
        });
        
        sheet.getRange(rowIndex, 1, 1, headers.length).setValues([updatedRow]);
        
        return ContentService.createTextOutput(JSON.stringify({
          success: true, 
          message: 'Watch updated successfully'
        })).setMimeType(ContentService.MimeType.JSON);
      }
    }

    return ContentService.createTextOutput(JSON.stringify({
      success: false, 
      message: 'Unknown action'
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false, 
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
