基础框架


```bash
git clone https://github.com/testxin/BaseFramework.git BaseFramework
cd BaseFramework
npm install
npm run gulp 
```

## 特性
- **CSS:** [Sass](http://sass-lang.com/)

- **JS:** Modular ES6 with [Babel](http://babeljs.io/) and [Webpack](http://webpack.github.io/)
  - 异步 requires
  - 多包
  - 分享模块
  - Source Maps
- **React**: 
- **Images:**
  - **SVG Sprites**: Compiles a spritesheet from a folder of SVGs
  - Compression with image-min
- **Fonts:**
  - **Icon Fonts:** Generate from a folder of SVGs
  - Folder and `.sass` mixin for including WebFonts
- **Development Mode:**
  - File Watching and Live Reloading with [BrowserSync](http://www.browsersync.io/)
  - Source Maps
- **Production Builds:**
  - JS and CSS are uglified and minified
  - All filneames are revisioned with an md5 hash, a `rev-manifest.json` file is genrearted and all asset references are updated in html, css, and js
  - File size reporting
  - Local production sever for testing
- **测试:**
  - JS test examples with Karma, Mocha, Chai, Sinon
  - Travis CI integration

  

