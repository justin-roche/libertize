const bundleScss = require('bundle-scss');
const colors = require('colors');

function ScssBundlePlugin(options) {
  options.paths.forEach(v => {
    const bundle = async () => {
      await bundleScss(options.glob, v, options.scss);
    };
    bundle().then(() => {
      console.log(colors.green('Main scss prepared with success.' + colors.rainbow("It's time to be beautiful !")));
    });
  });
}

new ScssBundlePlugin({
  glob: './projects/libertize/src/**/*.scss',
  paths: ['./dist/@justin-roche/libertize/libertize.scss'],
  scss: ['colors']
});
