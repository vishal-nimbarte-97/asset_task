const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Asset = sequelize.define('Asset', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  manufacturer: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  model: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  assetImage: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  serialNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  currentOwner: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  assetCondition: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  warrantyExpiryDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  warrantyCard: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  isRented: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  monthlyRent: {
    type: DataTypes.DECIMAL,
    allowNull: true,
  },
  depositAmount: {
    type: DataTypes.DECIMAL,
    allowNull: true,
  }
}, {
  tableName: 'assets',
  timestamps: true,
  hooks: {
    beforeSave: (asset, options) => {
      if (asset.isRented) {
        asset.warrantyExpiryDate = null;
        asset.warrantyCard = null;
        if (!asset.startDate || !asset.endDate || !asset.monthlyRent || !asset.depositAmount) {
          throw new Error('Rental details must be provided if the asset is rented.');
        }
      } else {
        asset.startDate = null;
        asset.endDate = null;
        asset.monthlyRent = null;
        asset.depositAmount = null;
        if (!asset.warrantyExpiryDate || !asset.warrantyCard) {
          throw new Error('Warranty expiry date and warranty card must be provided if the asset is not rented.');
        }
      }
    }
  }
});

module.exports = Asset;
