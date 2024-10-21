const path = require('path');

module.exports = {
  webpack: (config) => {
    config.output = {
      ...config.output,
      path: path.resolve(__dirname, '../backend'), // Replace with your desired directory
    };
    return config;
  },
};
