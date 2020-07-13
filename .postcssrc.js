// https://github.com/michael-ciniawsky/postcss-load-config
module.exports = {
  "plugins": {
    "cssnano": {
      "preset": "default"
    },
    "postcss-preset-env": {
      "stage": 0,
      "browsers": [
        "Android >= 4.1",
        "iOS >= 7"
      ]
    }
  }
}
