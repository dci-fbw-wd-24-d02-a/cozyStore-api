import { Product } from "../models/productModel.js";

const getOne = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    product ? res.status(200).json(product) : res.sendStatus(404);
  } catch (e) {
    next(e);
  }
};

const getMany = async (req, res) => {
  try {
    const products = await Product.findById(req.params.id);
    res.status(200).json(products);
  } catch (e) {
    next(e);
  }
};

const postOne = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(201).json(product);
  } catch (e) {
    next(e);
  }
};

const udpateOne = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    product ? res.status(200).json(product) : res.sendStatus(404);
  } catch (e) {
    next(e);
  }
};

const deleteOne = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    product ? res.status(200).json(product) : res.sendStatus(404);
  } catch (e) {
    next(e);
  }
};

export const send = {
  getOne: getOne,
  getMany: getMany,
  postOne: postOne,
  updateOne: udpateOne,
  deleteOne: deleteOne,
};
