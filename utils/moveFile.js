const path = require('path');

const moveFile = (file) => {
  file.mv(path.join(__dirname, `../uploads/${file.name}`), (err, data) => {
    if (err) {
      throw new Error('No se pudeo mover el archivo', err);
    }
  });
};

module.exports = { moveFile };
