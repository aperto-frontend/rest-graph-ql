// Global dependencies
import { environment } from 'env';

import $ from 'jquery';
import Veams from 'veams';
import VeamsLogger from 'veams-plugin-logger';
import VeamsDOM from 'veams-plugin-dom';
import VeamsVent from 'veams-plugin-vent';
import VeamsModules from 'veams-plugin-modules';
import VeamsMediaQueryHandler from 'veams-plugin-media-query-handler';
// import VeamsStore from 'veams-plugin-store';
// import VeamsTemplater from 'veams-plugin-templater';
import EVENTS from '../../shared/scripts/events';


let App = {};
App.$ = $;

// Versioning
App.version = "0.0.1";

// Veams
Veams.onInitialize(() => {
	/**
	* Veams Plugins
	*/

	// Dom Plugin
	Veams.use(VeamsDOM, {
		DOM: $
	});

	// Vent Plugin
	Veams.use(VeamsVent, {
		furtherEvents: EVENTS
	});

	// Logger Plugin for devmode and logger
	Veams.use(VeamsLogger);

	// Module System Plugin
	Veams.use(VeamsModules, {
		useMutationObserver: true,
		internalCacheOnly: false
	});

	// Store Plugin
	// Veams.use(VeamsStore, {
	// 	reducer: rootReducer,
	// 	state: INITIAL_STATE,
	// 	subjects: subjects
	// });

	// Media Query Handler Plugin
	Veams.use(VeamsMediaQueryHandler);
});

export {App, Veams};