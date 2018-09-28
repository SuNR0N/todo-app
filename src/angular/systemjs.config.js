System.config({
  transpiler: 'typescript',
  typescriptOptions: {
    emitDecoratorMetadata: true,
    experimentalDecorators: true
  },
  packages: {
    '.': { defaultExtension: 'ts' },
  },
});

System.config({
  map: {
    'main': 'main.js',

    '@angular/core': 'https://unpkg.com/@angular/core/bundles/core.umd.js',
    '@angular/common': 'https://unpkg.com/@angular/common/bundles/common.umd.js',
    '@angular/compiler': 'https://unpkg.com/@angular/compiler/bundles/compiler.umd.js',
    '@angular/forms': 'https://unpkg.com/@angular/forms/bundles/forms.umd.js',
    '@angular/platform-browser': 'https://unpkg.com/@angular/platform-browser/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic': 'https://unpkg.com/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',

    'rxjs': 'https://unpkg.com/rxjs',
    'tslib': 'https://unpkg.com/tslib',
  },
  packages: {
    'rxjs': { main: 'index' },
    'rxjs/operators': { main: 'index' },
  },
});