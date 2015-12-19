System.config({
    baseURL: "/",
    defaultJSExtensions: true,
    transpiler: "typescript",
    paths: {
        "npm:*": "node_modules/*"
    },

    map: {
        "angular": "npm:angular/angular.js",
        "typescript": "npm:typescript/lib/typescript.js"
    },
    meta: {
        'angular': {
            format: 'global',
            exports: 'angular'
        },
    }
});