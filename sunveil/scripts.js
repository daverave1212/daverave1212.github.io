const QUESTS_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ3W6Me42z9yeWeoeIGrGtNlqcoybwIa4wCp0SrjTKQ_rXkNGCvRlGMOdNjlAoskJA0NpheVfyLCnqT/pub?output=csv";

async function fetchCsvRowsAsync(url) {
    const response = await fetch(url + (url.includes("?") ? "&" : "?") + "_=" + Date.now());

    if (!response.ok) {
        throw new Error(`Failed to fetch CSV (${response.status})`);
    }

    const text = await response.text();

    const rows = [];
    let row = [];
    let value = "";
    let inQuotes = false;

    for (let i = 0; i < text.length; i++) {
        const c = text[i];

        if (c === '"') {
            // Escaped quote ("")
            if (inQuotes && text[i + 1] === '"') {
                value += '"';
                i++;
            } else {
                inQuotes = !inQuotes;
            }
        }
        else if (c === ',' && !inQuotes) {
            row.push(value);
            value = "";
        }
        else if ((c === '\n' || c === '\r') && !inQuotes) {
            // Handle Windows line endings
            if (c === '\r' && text[i + 1] === '\n') {
                i++;
            }

            row.push(value);

            // Ignore completely empty rows
            if (row.some(cell => cell !== "")) {
                rows.push(row);
            }

            row = [];
            value = "";
        }
        else {
            value += c;
        }
    }

    // Last row
    if (value.length > 0 || row.length > 0) {
        row.push(value);
        if (row.some(cell => cell !== "")) {
            rows.push(row);
        }
    }

    return rows;
}

function dom(htmlString) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString.trim(), 'text/html');
  
  // doc.body.firstElementChild retrieves the top-level element with all its children
  return doc.body.firstElementChild;
}

window.QUESTS_URL = QUESTS_URL
window.fetchCsvRowsAsync = fetchCsvRowsAsync