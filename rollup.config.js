import typescript from 'rollup-plugin-typescript';
import alias from 'rollup-plugin-alias';
import nodeResolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-js';

export default {
    entry: 'src/app/main.ts',
    dest: 'dist/bundle.es2015.min.js',
    format: 'iife',
    sourceMap: false,
    plugins: [
        typescript(),
        alias({ rxjs: __dirname + '/node_modules/rxjs-es' }),
        nodeResolve({
            jsnext: true,
            main: true
        }),
        uglify({}, minify)
    ],
    // This is how you exclude code from the bundle
    external: [
        '@angular/core',
        '@angular/common',
        '@angular/compiler',
        '@angular/http',
        '@angular/forms',
        '@angular/platform-browser',
        '@angular/platform-browser-dynamic',
        '@angular/upgrade',
        '@angular/router',
        'rxjs/Rx'
    ],
    // This is how you link the referenced module ids to the
    // global variables exposed by the vendor bundle.
    globals: {
        '@angular/core': 'ng.core',
        '@angular/common': 'ng.common',
        '@angular/compiler': 'ng.compiler',
        '@angular/http': 'ng.http',
        '@angular/forms': 'ng.forms',
        '@angular/platform-browser': 'ng.platformBrowser',
        '@angular/platform-browser-dynamic': 'ng.platformBrowserDynamic',
        '@angular/upgrade': 'ng.upgrade',
        '@angular/router': 'ng.router',
        'rxjs/Rx': 'Rx'
    }
}
