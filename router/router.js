const router = require('express').Router();
const path = require('path');
const { moveFile } = require('../utils/moveFile');
const { readCSV } = require('../utils/readFile');

router.post('/upload', (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    res.json({
      ok: false,
      data: null,
      message: 'No has subido ningun archivo',
    });
  }

  let { file } = req.files;

  moveFile(file);

  readCSV(file.name).then(() => {
    res.download(path.join(__dirname, `../uploads/${file.name}`));
  });
});

router.get('/download/:filename', (req, res) => {
  const { filename } = req.params;
  res.download(path.join(__dirname, `../uploads/${filename}`));
});

module.exports = router;
