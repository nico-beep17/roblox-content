/**
 * Roblox Content Machine – Analytics Dashboard Auto-Formatter
 * 
 * HOW TO INSTALL:
 * 1. Open your Google Sheet → Extensions → Apps Script
 * 2. Paste this entire file → Save → Run "setupDashboard"
 * 3. Authorize when prompted
 * 4. It will:
 *    - Create the "Analytics" tab if missing
 *    - Add headers with formatting
 *    - Apply conditional formatting (green/yellow/red tiers)
 *    - Set up an auto-refresh trigger that reformats daily
 */

function setupDashboard() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  
  // Create Analytics tab if it doesn't exist
  let sheet = ss.getSheetByName("Analytics");
  if (!sheet) {
    sheet = ss.insertSheet("Analytics");
  }
  
  // Set headers
  const headers = [
    "Date", "File Code Name", "Total Views", "YT Views", "TT Views",
    "IG Views", "FB Views", "Likes", "Comments", "Shares",
    "Engagement Rate", "Top Platform", "Tier"
  ];
  
  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setValues([headers]);
  headerRange.setFontWeight("bold");
  headerRange.setBackground("#1a1a2e");
  headerRange.setFontColor("#ffffff");
  headerRange.setHorizontalAlignment("center");
  
  // Column widths
  sheet.setColumnWidth(1, 100);   // Date
  sheet.setColumnWidth(2, 200);   // File Code Name
  sheet.setColumnWidth(3, 110);   // Total Views
  sheet.setColumnWidth(4, 90);    // YT
  sheet.setColumnWidth(5, 90);    // TT
  sheet.setColumnWidth(6, 90);    // IG
  sheet.setColumnWidth(7, 90);    // FB
  sheet.setColumnWidth(8, 80);    // Likes
  sheet.setColumnWidth(9, 90);    // Comments
  sheet.setColumnWidth(10, 80);   // Shares
  sheet.setColumnWidth(11, 120);  // Engagement Rate
  sheet.setColumnWidth(12, 110);  // Top Platform
  sheet.setColumnWidth(13, 100);  // Tier
  
  // Freeze header row
  sheet.setFrozenRows(1);
  
  // Apply conditional formatting to Total Views column (C)
  applyTierFormatting(sheet);
  
  // Create Error Log tab if missing
  let errorSheet = ss.getSheetByName("Error Log");
  if (!errorSheet) {
    errorSheet = ss.insertSheet("Error Log");
    const errorHeaders = ["Timestamp", "Workflow", "Failed Node", "Error Message", "Execution URL"];
    const errorHeaderRange = errorSheet.getRange(1, 1, 1, errorHeaders.length);
    errorHeaderRange.setValues([errorHeaders]);
    errorHeaderRange.setFontWeight("bold");
    errorHeaderRange.setBackground("#8B0000");
    errorHeaderRange.setFontColor("#ffffff");
    errorSheet.setFrozenRows(1);
    errorSheet.setColumnWidth(1, 160);
    errorSheet.setColumnWidth(2, 200);
    errorSheet.setColumnWidth(3, 200);
    errorSheet.setColumnWidth(4, 400);
    errorSheet.setColumnWidth(5, 300);
  }
  
  // Create Prompt Log tab if missing (for Phase 2.3 AI Memory)
  let promptSheet = ss.getSheetByName("Prompt Log");
  if (!promptSheet) {
    promptSheet = ss.insertSheet("Prompt Log");
    const promptHeaders = ["Date", "Prompt Version", "Top 3 Context", "Concept Generated", "Result Tier"];
    const promptHeaderRange = promptSheet.getRange(1, 1, 1, promptHeaders.length);
    promptHeaderRange.setValues([promptHeaders]);
    promptHeaderRange.setFontWeight("bold");
    promptHeaderRange.setBackground("#0f3460");
    promptHeaderRange.setFontColor("#ffffff");
    promptSheet.setFrozenRows(1);
    promptSheet.setColumnWidth(1, 100);
    promptSheet.setColumnWidth(2, 120);
    promptSheet.setColumnWidth(3, 400);
    promptSheet.setColumnWidth(4, 300);
    promptSheet.setColumnWidth(5, 100);
  }
  
  // Set up daily auto-format trigger
  const triggers = ScriptApp.getProjectTriggers();
  const existing = triggers.find(t => t.getHandlerFunction() === "autoFormat");
  if (!existing) {
    ScriptApp.newTrigger("autoFormat")
      .timeBased()
      .everyHours(6)
      .create();
  }
  
  SpreadsheetApp.getUi().alert(
    "✅ Dashboard Setup Complete!\n\n" +
    "Created tabs: Analytics, Error Log, Prompt Log\n" +
    "Applied conditional formatting\n" +
    "Auto-format runs every 6 hours"
  );
}

function applyTierFormatting(sheet) {
  // Clear existing conditional format rules on this sheet
  sheet.clearConditionalFormatRules();
  
  const lastRow = Math.max(sheet.getLastRow(), 100);
  const tierRange = sheet.getRange("M2:M" + lastRow); // Tier column
  const viewsRange = sheet.getRange("C2:C" + lastRow); // Total Views column
  
  const rules = [];
  
  // Tier column: green for VIRAL
  rules.push(
    SpreadsheetApp.newConditionalFormatRule()
      .whenTextContains("VIRAL")
      .setBackground("#1b5e20")
      .setFontColor("#ffffff")
      .setRanges([tierRange])
      .build()
  );
  
  // Tier column: yellow for DECENT
  rules.push(
    SpreadsheetApp.newConditionalFormatRule()
      .whenTextContains("DECENT")
      .setBackground("#f57f17")
      .setFontColor("#000000")
      .setRanges([tierRange])
      .build()
  );
  
  // Tier column: red for LOW
  rules.push(
    SpreadsheetApp.newConditionalFormatRule()
      .whenTextContains("LOW")
      .setBackground("#b71c1c")
      .setFontColor("#ffffff")
      .setRanges([tierRange])
      .build()
  );
  
  // Total Views column: green gradient for high views
  rules.push(
    SpreadsheetApp.newConditionalFormatRule()
      .whenNumberGreaterThanOrEqualTo(100000)
      .setBackground("#c8e6c9")
      .setRanges([viewsRange])
      .build()
  );
  
  rules.push(
    SpreadsheetApp.newConditionalFormatRule()
      .whenNumberBetween(10000, 99999)
      .setBackground("#fff9c4")
      .setRanges([viewsRange])
      .build()
  );
  
  rules.push(
    SpreadsheetApp.newConditionalFormatRule()
      .whenNumberLessThan(10000)
      .setBackground("#ffcdd2")
      .setRanges([viewsRange])
      .build()
  );
  
  sheet.setConditionalFormatRules(rules);
}

function autoFormat() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("Analytics");
  if (sheet) {
    applyTierFormatting(sheet);
    
    // Auto-sort by Date descending (newest first)
    const lastRow = sheet.getLastRow();
    if (lastRow > 1) {
      sheet.getRange(2, 1, lastRow - 1, 13).sort({ column: 1, ascending: false });
    }
  }
}

/**
 * Helper: Get top N performing videos from Analytics sheet
 * Used by the AI Memory system (Phase 2.3)
 * Call from n8n via Google Apps Script API or read directly from sheet
 */
function getTopPerformers(days, count) {
  days = days || 7;
  count = count || 3;
  
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("Analytics");
  if (!sheet || sheet.getLastRow() <= 1) return [];
  
  const data = sheet.getDataRange().getValues();
  const headers = data[0];
  const rows = data.slice(1);
  
  // Filter to last N days
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - days);
  
  const recent = rows.filter(row => new Date(row[0]) >= cutoff);
  
  // Sort by Total Views descending
  recent.sort((a, b) => (b[2] || 0) - (a[2] || 0));
  
  // Return top N as objects
  return recent.slice(0, count).map(row => {
    const obj = {};
    headers.forEach((h, i) => obj[h] = row[i]);
    return obj;
  });
}
