module.exports = {
  plugins: [
    require('precss'),
    require('postcss-mixins'),
    require('autoprefixer')({overrideBrowserslist: ['> 0.15% in CN']}), // 自动添加css前缀
    require('postcss-flexbugs-fixes'),
  ],
}