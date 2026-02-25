export default function htmlAssets() {
  // ...
  return {
    name: 'html-assets',
    configureWebpack() {
      return {
        module: {
          rules: [
            {
              test: /\.html$/i,
              type: 'asset/resource',
              generator: {
                filename: 'assets/files/[name]-[hash][ext]',
              },
            },
          ],
        },
      };
    },
  };
}
