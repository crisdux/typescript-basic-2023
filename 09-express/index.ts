// const express = require('express')
import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json({
    ok:true,
    mensaje: "hola mundi"
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})