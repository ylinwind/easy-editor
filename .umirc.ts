const path = require('path');
import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig =  {
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/index' },
        { path: '/editor', component: '../pages/editor/index' }
      ]
    }
  ],
  alias: {
    '@editorComponents': path.resolve(__dirname, 'src/pages/editor/components'),
  },
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: false,
      dynamicImport: false,
      title: 'easy-editor',
      dll: false,
      
      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
  ],
  extraPostCSSPlugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

export default config;
