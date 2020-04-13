module.exports = {
    entry: {
        student: "./js/studentIndex.js",
        staff: "./js/staffIndex.js",
    },
    watch: true,
    output: {
        filename: "[name]/static/main.js",
        path: __dirname,
    },
    externals: {
        react: "React",
        "react-dom": "ReactDOM",
        "react-bootstrap": "ReactBootstrap",
        gapi: "gapi",
        fernet: "fernet",
        MathJax: "MathJax",
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: ["@babel/react"],
                },
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
                options: {
                    emitError: false,
                    emitWarning: true,
                },
            },
        ],
    },
};
