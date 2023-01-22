const express = require('express');
const app = express();

const productos = [
  {
      "id": 1,
      "nombre": "SET MATTEOLI",
      "precio": 10000,
      "cantidad": 3,
  },
  {
      "id": 2,
      "nombre": "IMPERIAL 925 CREAM",
      "precio": 2850,
      "cantidad": 8,
  },
  {
      "id": 3,
      "nombre": "IMPERIAL 925 BLANCO",
      "precio": 2600,
      "cantidad": 15,
  },
  {
      "id": 4,
      "nombre": "IMPERIAL ROSALIA",
      "precio": 2500,
      "cantidad": 10,
  },
  {
      "id": 5,
      "nombre": "TORPEDO BEIGE",
      "precio": 2200,
      "cantidad": 22,
  },
  {
      "id": 6,
      "nombre": "IMPERIAL BLANCO",
      "precio": 2500,
      "cantidad": 7,
  },
  {
      "id": 7,
      "nombre": "CAMIONERO CREAM",
      "precio": 2300,
      "cantidad": 18,
  },
  {
      "id": 8,
      "nombre": "IMPERIAL NEGRO",
      "precio": 2500,
      "cantidad": 1,
  },
  {
      "id": 9,
      "nombre": "BOMBILLA ALPACA",
      "precio": 1900,
      "cantidad": 23,
  },
  {
      "id": 10,
      "nombre": "BOMBILLA ACERO",
      "precio": 1500,
      "cantidad": 40,
  }
];


app.get('/productos', (req, res) => {
    res.json(productos);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
