// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  configureWebpack: {
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true
    },
    module: {
      rules: [
        {
          test: /\.tsx$/,
          exclude: /node_modules/,
          use: [
              {
                  loader: 'ts-loader',
                  options: {
                      appendTsSuffixTo: [/\.vue$/],
                      transpileOnly: true
                  },
              }
          ],
        },
        {
          resourceQuery: /blockType=i18n/,
          type: 'javascript/auto',
          loader: '@intlify/vue-i18n-loader'
        }
      ],
    }
  },
  pages: {
    index: {
      entry: 'src/main.ts',
      title: 'translation-test'
    }
  }
};
