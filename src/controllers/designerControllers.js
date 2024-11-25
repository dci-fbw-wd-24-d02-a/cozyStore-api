import { Designer } from "../models/designerModel.js";

const getOne = async (req, res) => {
  try {
    const designer = await Designer.findById(req.params.id);
    designer ? res.status(200).json(designer) : res.sendStatus(404);
  } catch (e) {
    next(e);
  }
};

const getMany = async (req, res) => {
  try {
    const designers = await Designer.findById(req.params.id);
    res.status(200).json(designers);
  } catch (e) {
    next(e);
  }
};

const postOne = async (req, res) => {
  try {
    const designer = await Designer.findById(req.params.id);
    res.status(201).json(designer);
  } catch (e) {
    next(e);
  }
};

const udpateOne = async (req, res) => {
  try {
    const designer = await Designer.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    designer ? res.status(200).json(designer) : res.sendStatus(404);
  } catch (e) {
    next(e);
  }
};

const deleteOne = async (req, res) => {
  try {
    const designer = await Designer.findByIdAndDelete(req.params.id);
    designer ? res.status(200).json(designer) : res.sendStatus(404);
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
