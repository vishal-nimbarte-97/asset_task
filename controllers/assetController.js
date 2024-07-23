const Asset = require('../models/assetModel');

const createAsset = async (req, res) => {
  try {
    const asset = await Asset.create(req.body);
    res.status(201).json(asset);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllAssets = async (req, res) => {
  try {
    const assets = await Asset.findAll();
    res.status(200).json(assets);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAssetById = async (req, res) => {
  try {
    const asset = await Asset.findByPk(req.params.id);
    if (!asset) {
      return res.status(404).json({ error: 'Asset not found' });
    }
    res.status(200).json(asset);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateAsset = async (req, res) => {
  try {
    const [updated] = await Asset.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedAsset = await Asset.findByPk(req.params.id);
      res.status(200).json(updatedAsset);
    } else {
      res.status(404).json({ error: 'Asset not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteAsset = async (req, res) => {
  try {
    const deleted = await Asset.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Asset not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createAsset,
  getAllAssets,
  getAssetById,
  updateAsset,
  deleteAsset
};
