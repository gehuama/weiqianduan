const packageName = "app-vue";
module.exports = {
    devServer: {
        port: 4000,
        headers:{"Access-Control-Allow-Origin": "*"},
        // proxy: 'http://localhost:8080'
    },
    publicPath: "/vue/",
    assetsDir: "static",
    configureWebpack: config => {
        config.output.library= `app-vue`;
        config.output.libraryTarget= 'umd';
        config.output.jsonpFunction=`webpackJsonp_app-vue`;
    }
}