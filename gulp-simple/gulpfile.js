// 引入 gulp及组件
var gulp=require('gulp'),  //gulp基础库
    px2rem=require('gulp-px2rem-plugin'), //px2rem
    autoprefix=require('gulp-autoprefixer'), //css兼容
    minifycss=require('gulp-minify-css'),   //css压缩
    uglify=require('gulp-uglify'),   //js压缩
    rename=require('gulp-rename'),   //文件重命名
    plumber=require('gulp-plumber'),
    babel=require('gulp-babel'),
    notify=require('gulp-notify');   //提示

gulp.task('default',function(){
    gulp.start('minifycss','minifyjs');
});

var config={
  src_js: './src/index.js',
  src_css: './src/index.css',
  dist: './dist'
};

gulp.task('watch',function(){
    gulp.watch(config.src_css, ['minifycss']);
    gulp.watch(config.src_js, ['minifyjs']);
});

//css处理
gulp.task('minifycss',function(){
   return gulp.src(config.src_css)      //设置css
       .pipe(plumber())
       .pipe(px2rem({
         'width_design': 375,
         'ignore_px': [1]
       })) // px2rem
       .pipe(autoprefix({ //通过autoprefix自动添加兼容各大浏览器的样式前缀，例如-webkit-，-o-
            browsers: ['last 2 versions'], //兼容最新2个版本
            cascade: true
        }))
       .pipe(gulp.dest('./dist/styles'))           //设置输出路径
       .pipe(rename({suffix:'.min'}))         //修改文件名
       .pipe(minifycss())                    //压缩文件
       .pipe(gulp.dest('./dist/styles'))            //输出文件目录
       .pipe(notify({message:'css task ok'}));   //提示成功
});

//JS处理
gulp.task('minifyjs',function(){
   return gulp.src(config.src_js)  //选择合并的JS
       .pipe(plumber())
       .pipe(babel({
            presets: ['env']
        }))
       .pipe(gulp.dest('./dist/js'))         //输出
       .pipe(rename({suffix:'.min'}))     //重命名
       .pipe(uglify())                    //压缩
       .pipe(gulp.dest('./dist/js'))            //输出
       .pipe(notify({message:"js task ok"}));    //提示
});
