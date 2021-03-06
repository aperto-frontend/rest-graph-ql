// Global dependencies
import {App, Veams} from './app';

console.log('JS initialized in version:', App.version);
console.log('Veams initialized in version:', Veams.base.version);

// Imports
// @INSERTPOINT :: @ref: js-import, @keep: true //

// Initialize modules with Veams
Veams.modules.register([
    /**
     * Init Slider
     */
    // {
    //     namespace: 'slider',
    //     module: Slider
    // }
    // @INSERTPOINT :: @ref: js-init-v5, @keep: true //
]);

// @INSERTPOINT :: @ref: js-init-once-v5, @keep: true //
