var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('scss', function(){
    return gulp.src("sass/*.scss") //jeśli chcemy utworzyć więcej plików scss w tej linii 'main' trzeba zamienić na *. wtedy będzei tworzył wynikowe css do danych plików scss bez _.
        .pipe(sourcemaps.init())
        .pipe(sass({
         errLogToConsole: true, //w konsoli pokaże że w scss jest błąd
         outputStyle: 'expanded', //czy css ma być wyświetlony jako czytelny czy w jednej linii (trudny do odczytania)
         // sourceComments: true, 
        }).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("css")) //tworzy wynikowy css
})

gulp.task('default', ['scss'], function() { 
    gulp.watch('sass/**/*.scss', ['scss'])
});

//npm install gulp --save-dev 
//npm install gulp-sass --save-dev 
//npm install gulp-sourcemaps --save-dev 
/* dodaje pakiety do package.jason wersje modułów gulpa. 
Kopiujemy potem do nowego projektu gitignore, gulpfile, package.jason i folder struktury sass i w konsoli dajemy tylko gulp install i powinien zainstalować moduły dodając folder node-modules */