const presets = [
    [
        "@babel/preset-env",
        {
            targets:{
                edge: "17",
                firefox: "60",
                chrome: "67",
                safari: "11.1",
            },
        },
    ],
];

const plugins = [["@babel/plugin-transform-jscript"],
                ["@babel/plugin-external-helpers"],
                ["@babel/plugin-transform-strict-mode"]];

module.exports = { presets };
module.exports = { plugins };