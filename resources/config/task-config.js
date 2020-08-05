module.exports = {
    html: true,
    images: true,
    fonts: true,
    static: true,
    svgSprite: true,
    ghPages: true,
    stylesheets: true,

    javascripts: {
        entry: {
            // files paths are relative to
            // javascripts.dest in path-config.json
            index: ['./app.js'],

        },
        publicPath: "/assets/js",
        provide: {
            $: 'jquery', jQuery: "jquery"
        },
        loaders: [
            {test: /\.css$/, loader: "style-loader!css-loader"}
        ]
    },

    browserSync: {
        proxy: {
            target: "www.baidu.com"
        },
        files: ["../public/assets"]
        // server: {
        //   // should match `dest` in
        //   // path-config.json
        //   baseDir: 'public'
        // }
    },

    production: {
        rev: true
    }
}
