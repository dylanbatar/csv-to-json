const fs = require('fs');
const path = require('path');

// 1.Leer un csv X
// 2.Tomar un csv desde postman X
// 3. convertir csv en json
// 3.crear un plan con el csv subido

const readCSV = (fileName) => {
  let jsonArray = [];

  return new Promise((resolve, reject) => {
    fs.readFile(
      path.join(__dirname, `../uploads/${fileName}`),
      { encoding: 'utf8' },
      (err, data) => {
        if (err) {
          reject(err);
        }
        let rows = [];
        let header = [];
        let row = [];

        rows.push(data.split(/\n/));
        header.push(rows[0][0]);
        header = header[0].split(',');

        for (let i = 1; i < rows[0].length; i++) {
          const element = rows[0][i];
          row.push(element.split(','));
        }

        for (let i = 0; i < row.length; i++) {
          let jsonTemp = {};
          for (let j = 0; j < header.length; j++) {
            jsonTemp[header[j]] = row[i][j];
          }
          jsonArray.push(jsonTemp);
        }

        resolve(jsonArray);
      }
    );
  });
};

const createFile = (filename) => {
  fs.writeFileSync(`${filename}.json`, JSON.stringify(jsonArray));
};

module.exports = { readCSV, createFile };
