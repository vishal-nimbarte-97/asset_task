const Asset = require('../models/assetModel');

const create = async (assetData) => {
  try {
    return await Asset.create(assetData);
  } catch (error) {
    console.error('Error in repository:', error);
    throw new Error('Failed to create asset');
  }
};

const findAll = async () => {
  try {
    return await Asset.findAll();
  } catch (error) {
    console.error('Error in repository:', error);
    throw new Error('Failed to retrieve assets');
  }
};

const findById = async (id) => {
  try {
    return await Asset.findByPk(id);
  } catch (error) {
    console.error('Error in repository:', error);
    throw new Error('Failed to retrieve asset');
  }
};

const update = async (id, assetData) => {
  try {
    const asset = await Asset.findByPk(id);
    if (asset) {
      return await asset.update(assetData);
    }
    return null;
  } catch (error) {
    console.error('Error in repository:', error);
    throw new Error('Failed to update asset');
  }
};

const remove = async (id) => {
  try {
    const asset = await Asset.findByPk(id);
    if (asset) {
      await asset.destroy();
      return true;
    }
    return false;
  } catch (error) {
    console.error('Error in repository:', error);
    throw new Error('Failed to delete asset');
  }
};

module.exports = {
  create,
  findAll,
  findById,
  update,
  remove
};
