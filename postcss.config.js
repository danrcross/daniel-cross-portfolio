module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-preset-env": {
      stage: 1,
      features: {
        "nesting-rules": true,
      },
    },
    "postcss-calc": {
      precision: 10,
      exclude: ["./node_modules/@radix-ui/themes/styles.css"],
    },
    autoprefixer: {},
    cssnano: {
      preset: "default",
    },
  },
};
