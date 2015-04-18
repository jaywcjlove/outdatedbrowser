// 包装函数
module.exports = function(grunt) {
    // 任务配置,所有插件的配置信息
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // uglify插件的配置信息
        uglify: {
            options: {
                // banner: '/*! http://JSLite.io - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */'
                // beautify: true,
                // mangle: false, //不混淆变量名
                // compress:true,//打开或关闭使用默认选项源压缩。
            },
            app_task: {
                files: {
                    // 'build/JSLite.min.js': ['src/ie.js', 'src/JSLite.js']
                }
            }
        },
        stylus:{
            build: {
                options: {
                    linenos: false,
                    compress: false,
                    banner: '\/** \n * <%= pkg.name %> - <%= pkg.description %>\n * version <%= pkg.version %> \n * author <%= pkg.author %>  \n**/\n'
                    //<%= grunt.template.today() %>时间
                },
                files: [{
                    'outdatedbrowser.css': 'outdatedbrowser.styl'
                }]
            }
        },
        // watch插件的配置信息
        watch: {
            another: {
                files: ['outdatedbrowser.css','outdatedbrowser.styl'],
                tasks: ['stylus'],
                options: {
                    // Start another live reload server on port 1337
                    livereload: 1337
                }
            }
        }
    });
    // 告诉grunt我们将使用插件
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    // 告诉grunt当我们在终端中输入grunt时需要做些什么
    grunt.registerTask('default', ['watch']);
 
};