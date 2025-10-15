import gulp from 'gulp';
import nunjucksRender from 'gulp-nunjucks-render';
import plumber from 'gulp-plumber';
import browserSync from 'browser-sync';
import del from 'del'; // ✅ corrected import

const bs = browserSync.create();

// ✅ Define folder paths
const paths = {
  templates: {
    src: 'src/templates/*.njk',
    watch: 'src/templates/**/*.njk',
    dest: 'dist/',
  },
  assets: {
    src: 'src/assets/**/*',       
    watch: 'src/assets/**/*',     
    dest: 'dist/assets/',
  },
};

// 🧹 Clean dist folder
export async function clean() {
  return del(['dist']); // ✅ use del() directly
}

// 🧩 Render Nunjucks templates to HTML
export function templates() {
  return gulp
    .src(paths.templates.src)
    .pipe(plumber())
    .pipe(
      nunjucksRender({
        path: ['src/templates', 'src/templates/partials'],
      })
    )
    .pipe(gulp.dest(paths.templates.dest))
    .pipe(bs.stream());
}

// 📁 Copy all static assets
export function copyAssets() {
  return gulp
    .src(paths.assets.src, { encoding: false })
    .pipe(gulp.dest(paths.assets.dest))
    .pipe(bs.stream());
}

// 🌐 Start local server with BrowserSync
export function serve() {
  bs.init({
    server: { baseDir: 'dist' },
    port: 3000,
    notify: false,
  });

  gulp.watch(paths.templates.watch, templates);
  gulp.watch(paths.assets.watch, copyAssets);
}

// 🏗️ Build task
export const build = gulp.series(clean, gulp.parallel(templates, copyAssets));

// 🚀 Default task
export default gulp.series(build, serve);
