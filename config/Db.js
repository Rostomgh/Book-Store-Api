const express=require('express')
const mongoose=require('mongoose')

const conectiondb=(url)=>{
  return mongoose.connect(url)
}
module.exports=conectiondb

