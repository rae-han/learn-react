import path from 'path';
// import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import webpack from 'webpack';
// import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
// import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const isDevelopment = process.env.NODE_ENV !== 'production';

const config: webpack.Configuration = {
  name: 'sleact',
  mode: isDevelopment ? 'development' : 'production',
  devtool: !isDevelopment ? 'hidden-source-map' : 'eval', // eval 대신 inline-source-map도 가능
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: { // .. 없애는 @, ts뿐 아니라 webpack에서도 반드시 해줘야한다.
      '@hooks': path.resolve(__dirname, 'hooks'),
      '@components': path.resolve(__dirname, 'components'),
      '@layouts': path.resolve(__dirname, 'layouts'),
      '@pages': path.resolve(__dirname, 'pages'),
      '@utils': path.resolve(__dirname, 'utils'),
      '@typings': path.resolve(__dirname, 'typings'),
    },
  },
  entry: {
    app: './client', // main file
  },
  module: { // ts => js 할때 설정
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        options: {
          presets: [ //
            [
              '@babel/preset-env',
              {
                targets: { browsers: ['last 2 chrome versions'] }, // IE11 같은 것도 가능
                debug: isDevelopment,
              },
            ],
            '@babel/preset-react',
            '@babel/preset-typescript',
          ],
          env: {
            // development: {
            //   plugins: [['@emotion', { sourceMap: true }], require.resolve('react-refresh/babel')],
            // },
            // production: {
            //   plugins: ['@emotion'],
            // },
          },
        },
        exclude: path.join(__dirname, 'node_modules'),
      },
      {
        test: /\.css?$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    // new ForkTsCheckerWebpackPlugin({
    //   async: false,
    //   // eslint: {
    //   //   files: "./src/**/*",
    //   // },
    // }),
    new webpack.EnvironmentPlugin({ NODE_ENV: isDevelopment ? 'development' : 'production' }), // NODE_ENV 라는 변수를 사용 가능하게 한다. 원래 process.env 는 노드 런타임에서만 사용 가능하지만 이를 통해 프론트엔드에서도 사용 가능하다.
  ],
  output: {
    path: path.join(__dirname, 'dist'), // alecture에 dist에 결과물을 만들겠다.
    filename: '[name].js', // entry에 있는 키 네임(app)이 [name]에 들어가는 결과물이 나온다.
    publicPath: '/dist/',
  },
  // devServer: {
  //   historyApiFallback: true, // react router
  //   port: 3090,
  //   publicPath: '/dist/',
  //   proxy: {
  //     '/api/': {
  //       target: 'http://localhost:3095',
  //       changeOrigin: true,
  //     },
  //   },
  // },
};

if (isDevelopment && config.plugins) {
  // config.plugins.push(new webpack.HotModuleReplacementPlugin());
  // config.plugins.push(new ReactRefreshWebpackPlugin());
  // config.plugins.push(new BundleAnalyzerPlugin({ analyzerMode: 'server', openAnalyzer: true }));
}
if (!isDevelopment && config.plugins) {
  // config.plugins.push(new webpack.LoaderOptionsPlugin({ minimize: true }));
  // config.plugins.push(new BundleAnalyzerPlugin({ analyzerMode: 'static' }));
}

export default config;
