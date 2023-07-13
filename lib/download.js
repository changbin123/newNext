import { CSVLink } from 'react-csv';

export function downloadCsv(csvData, fileName) {
  return (
    <CSVLink
      data={csvData}
      filename={fileName}
      style={{ display: 'none' }}
    />
  );
}
