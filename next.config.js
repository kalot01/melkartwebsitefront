const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withSass = require("@zeit/next-sass");
const withCSS = require('@zeit/next-css');
const webpack = require("webpack");
const path = require("path");

require('dotenv').config();


module.exports = withPlugins([[withSass], [withImages], [withCSS]], {

  env: {
    API_URL: process.env.API_URL
  },


  webpack(config, options) {
    config.resolve.modules.push(path.resolve("./"));
    return config;
  }
});
