const { build } = require("esbuild");
const linaria = require("@linaria/esbuild/lib/index").default;
const { dependencies, peerDependencies } = require("./package.json");

const shared = {
    entryPoints: ["src/index.ts"],
    bundle: true,
    minify: true,
    plugins: [
        linaria({
            sourceMap: true,
        }),
    ],
    external: Object.keys(dependencies).concat(Object.keys(peerDependencies)),
};

build({
    ...shared,
    outfile: "dist/cjs/index.js",
});

build({
    ...shared,
    outfile: "dist/js/index.js",
    format: "esm",
});
