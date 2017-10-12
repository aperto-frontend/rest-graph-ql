require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
	if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && (typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (typeof define === 'function' && define.amd) define("index", [], factory);else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["index"] = factory();else root["index"] = root["index"] || {}, root["index"]["index"] = factory();
})(undefined, function () {
	return (/******/function (modules) {
			// webpackBootstrap
			/******/ // The module cache
			/******/var installedModules = {};
			/******/
			/******/ // The require function
			/******/function __webpack_require__(moduleId) {
				/******/
				/******/ // Check if module is in cache
				/******/if (installedModules[moduleId])
					/******/return installedModules[moduleId].exports;
				/******/
				/******/ // Create a new module (and put it into the cache)
				/******/var module = installedModules[moduleId] = {
					/******/exports: {},
					/******/id: moduleId,
					/******/loaded: false
					/******/ };
				/******/
				/******/ // Execute the module function
				/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
				/******/
				/******/ // Flag the module as loaded
				/******/module.loaded = true;
				/******/
				/******/ // Return the exports of the module
				/******/return module.exports;
				/******/
			}
			/******/
			/******/
			/******/ // expose the modules object (__webpack_modules__)
			/******/__webpack_require__.m = modules;
			/******/
			/******/ // expose the module cache
			/******/__webpack_require__.c = installedModules;
			/******/
			/******/ // __webpack_public_path__
			/******/__webpack_require__.p = "";
			/******/
			/******/ // Load entry module and return exports
			/******/return __webpack_require__(0);
			/******/
		}(
		/************************************************************************/
		/******/[
		/* 0 */
		/***/function (module, exports) {

			'use strict';

			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			var VeamsDOM = {
				options: {
					DOM: false
				},
				pluginName: '$',
				initialize: function initialize(Veams, _ref) {
					var DOM = _ref.DOM;

					if (!DOM) {
						console.error('VeamsDOM :: You need to pass an options object with a DOM handler: options.DOM!');
						return;
					}
					if (Veams.$) {
						console.log('VeamsDOM :: It seems that you have already defined a DOM handler. I am overwriting it now for you ;)');
					}

					Veams.$ = this.options.DOM = DOM;
				}
			};

			exports.default = VeamsDOM;
			module.exports = exports['default'];

			/***/
		}
		/******/])
	);
});
;


},{}],2:[function(require,module,exports){
'use strict';

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
	if ((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === 'object' && (typeof module === 'undefined' ? 'undefined' : _typeof2(module)) === 'object') module.exports = factory();else if (typeof define === 'function' && define.amd) define("index", [], factory);else if ((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === 'object') exports["index"] = factory();else root["index"] = root["index"] || {}, root["index"]["index"] = factory();
})(undefined, function () {
	return (/******/function (modules) {
			// webpackBootstrap
			/******/ // The module cache
			/******/var installedModules = {};
			/******/
			/******/ // The require function
			/******/function __webpack_require__(moduleId) {
				/******/
				/******/ // Check if module is in cache
				/******/if (installedModules[moduleId])
					/******/return installedModules[moduleId].exports;
				/******/
				/******/ // Create a new module (and put it into the cache)
				/******/var module = installedModules[moduleId] = {
					/******/exports: {},
					/******/id: moduleId,
					/******/loaded: false
					/******/ };
				/******/
				/******/ // Execute the module function
				/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
				/******/
				/******/ // Flag the module as loaded
				/******/module.loaded = true;
				/******/
				/******/ // Return the exports of the module
				/******/return module.exports;
				/******/
			}
			/******/
			/******/
			/******/ // expose the modules object (__webpack_modules__)
			/******/__webpack_require__.m = modules;
			/******/
			/******/ // expose the module cache
			/******/__webpack_require__.c = installedModules;
			/******/
			/******/ // __webpack_public_path__
			/******/__webpack_require__.p = "";
			/******/
			/******/ // Load entry module and return exports
			/******/return __webpack_require__(0);
			/******/
		}(
		/************************************************************************/
		/******/[
		/* 0 */
		/***/function (module, exports) {

			'use strict';

			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
				return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
			} : function (obj) {
				return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
			};

			var VeamsLogger = {
				pluginName: 'Logger',
				initialize: function initialize(Veams) {
					/**
      * Devmode and logger
      */
					Veams.devmode = false;
					Veams.logger = false;

					if (document.location.search.indexOf('devmode') > -1 || window.sessionStorage && sessionStorage.getItem('devmodeEnabled')) {
						Veams.devmode = true;

						if (window.sessionStorage && !sessionStorage.getItem('devmodeEnabled')) {
							sessionStorage.setItem('devmodeEnabled', true);
						}
					}

					if (document.location.search.indexOf('logger') > -1) {
						Veams.logger = true;
					}

					// hide all warnings and logs if not in devmode
					if (!Veams.devmode) {
						console.log = console.warn = function () {};
					}

					// add console output element (triggered by parameter 'devmode' and 'logger' in url)
					if (Veams.devmode && Veams.logger) {
						var logger = document.createElement('pre');

						logger.setAttribute('id', 'logger');
						document.body.appendChild(logger);

						console.write = function () {
							for (var i = 0; i < arguments.length; i++) {
								if (_typeof(arguments[i]) === 'object') {
									logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(arguments[i], undefined, 2) : arguments[i]) + '<br />';
								} else {
									logger.innerHTML += arguments[i] + '<br />';
								}
							}

							logger.innerHTML += '<br />';
							logger.scrollTop = logger.scrollHeight;
						};

						console.error = function () {
							logger.innerHTML += '[Error]<br />';
							console.write.apply(this, arguments);
						};

						console.warn = function () {
							logger.innerHTML += '[Warn]<br />';
							console.write.apply(this, arguments);
						};

						console.log = function () {
							logger.innerHTML += '[Log]<br />';
							console.write.apply(this, arguments);
						};
					}
				}
			};

			exports.default = VeamsLogger;
			module.exports = exports['default'];

			/***/
		}
		/******/])
	);
});
;


},{}],3:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
	if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && (typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (typeof define === 'function' && define.amd) define("index", [], factory);else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["index"] = factory();else root["index"] = root["index"] || {}, root["index"]["index"] = factory();
})(undefined, function () {
	return (/******/function (modules) {
			// webpackBootstrap
			/******/ // The module cache
			/******/var installedModules = {};
			/******/
			/******/ // The require function
			/******/function __webpack_require__(moduleId) {
				/******/
				/******/ // Check if module is in cache
				/******/if (installedModules[moduleId])
					/******/return installedModules[moduleId].exports;
				/******/
				/******/ // Create a new module (and put it into the cache)
				/******/var module = installedModules[moduleId] = {
					/******/exports: {},
					/******/id: moduleId,
					/******/loaded: false
					/******/ };
				/******/
				/******/ // Execute the module function
				/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
				/******/
				/******/ // Flag the module as loaded
				/******/module.loaded = true;
				/******/
				/******/ // Return the exports of the module
				/******/return module.exports;
				/******/
			}
			/******/
			/******/
			/******/ // expose the modules object (__webpack_modules__)
			/******/__webpack_require__.m = modules;
			/******/
			/******/ // expose the module cache
			/******/__webpack_require__.c = installedModules;
			/******/
			/******/ // __webpack_public_path__
			/******/__webpack_require__.p = "";
			/******/
			/******/ // Load entry module and return exports
			/******/return __webpack_require__(0);
			/******/
		}(
		/************************************************************************/
		/******/[
		/* 0 */
		/***/function (module, exports) {

			'use strict';

			/**
    * Imports
    */

			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			var VeamsMediaQueryHandler = {
				options: {
					mediaQueryProp: 'font-family',
					delay: 300
				},
				pluginName: 'MediaQueryHandler',
				initialize: function initialize(Veams, opts) {
					var _this = this;

					// Media Query
					var head = document.querySelectorAll('head');

					if (opts) {
						this.options = Veams.helpers.extend(this.options, opts || {});
					}

					/**
      * Add current media query to Veams
      */
					Veams.currentMedia = window.getComputedStyle(head[0], null).getPropertyValue(this.options.mediaQueryProp);

					if (!Veams.Vent) {
						console.info('VeamsMediaQueryHandler :: In order to work properly with the VeamsMediaQueryHandler plugin you should add the VeamsVent plugin!');
					}

					// Trigger global resize event
					window.onresize = Veams.helpers.throttle(function (e) {
						var currentMedia = window.getComputedStyle(head[0], null).getPropertyValue(_this.options.mediaQueryProp);
						var width = window.innerWidth;

						if (currentMedia !== Veams.currentMedia) {
							var oldMedia = Veams.currentMedia;

							Veams.currentMedia = currentMedia;

							console.info('VeamsMediaQueryHandler :: Current media is ' + Veams.currentMedia);

							if (Veams.Vent) {
								Veams.Vent.trigger(Veams.EVENTS.mediachange, {
									type: Veams.EVENTS.mediachange,
									currentMedia: currentMedia,
									oldMedia: oldMedia
								});
							}
						}

						Veams.detections.width = width;
						Veams.Vent.trigger(Veams.EVENTS.resize, e);
					}, this.options.delay);
				}
			};

			exports.default = VeamsMediaQueryHandler;
			module.exports = exports['default'];

			/***/
		}
		/******/])
	);
});
;


},{}],4:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
	if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && (typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (typeof define === 'function' && define.amd) define("index", [], factory);else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["index"] = factory();else root["index"] = root["index"] || {}, root["index"]["index"] = factory();
})(undefined, function () {
	return (/******/function (modules) {
			// webpackBootstrap
			/******/ // The module cache
			/******/var installedModules = {};
			/******/
			/******/ // The require function
			/******/function __webpack_require__(moduleId) {
				/******/
				/******/ // Check if module is in cache
				/******/if (installedModules[moduleId])
					/******/return installedModules[moduleId].exports;
				/******/
				/******/ // Create a new module (and put it into the cache)
				/******/var module = installedModules[moduleId] = {
					/******/exports: {},
					/******/id: moduleId,
					/******/loaded: false
					/******/ };
				/******/
				/******/ // Execute the module function
				/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
				/******/
				/******/ // Flag the module as loaded
				/******/module.loaded = true;
				/******/
				/******/ // Return the exports of the module
				/******/return module.exports;
				/******/
			}
			/******/
			/******/
			/******/ // expose the modules object (__webpack_modules__)
			/******/__webpack_require__.m = modules;
			/******/
			/******/ // expose the module cache
			/******/__webpack_require__.c = installedModules;
			/******/
			/******/ // __webpack_public_path__
			/******/__webpack_require__.p = "";
			/******/
			/******/ // Load entry module and return exports
			/******/return __webpack_require__(0);
			/******/
		}(
		/************************************************************************/
		/******/[
		/* 0 */
		/***/function (module, exports) {

			'use strict';

			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			var Veams = {};
			var __cache = [];
			var __register = {
				modulesInRegister: [],
				modulesOnConditions: [],
				modulesOnInit: [],
				modulesInContext: []
			};

			/**
    * TODO: Clean up mutation observer
    */

			/**
    * - Get modules in DOM
    * - Get classes and options from init process
    * - Split up conditional modules from initial modules
    * - Init other modules
    * - Bind events when available from conditional modules
    * -
    */

			var Modules = function () {
				function Modules() {
					var VEAMS = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.Veams;
					var opts = arguments[1];

					_classCallCheck(this, Modules);

					Veams = VEAMS;

					this.options = opts;

					if (!this.options.internalCacheOnly) {
						this._cache = __cache; // Module list
					}

					if (!this.options.internalRegisterOnly) {
						this._register = __register;
					}

					this.initialize();
				}

				_createClass(Modules, [{
					key: 'initialize',
					value: function initialize() {
						this.queryString = '[' + this.options.attrPrefix + '-' + this.options.attrName + ']';
						__register.modulesInContext = Veams.helpers.querySelectorArray(this.queryString);

						if (this.options.useMutationObserver) {
							this.observe(document.body);
						}

						this.bindEvents();
					}
				}, {
					key: 'bindEvents',
					value: function bindEvents() {
						var _this = this;

						if (!Veams.Vent && this.options.useMutationObserver === false) {
							console.info('VeamsModules :: In order to work with the the ajax handling in VeamsModulesHandler ' + 'you need to define "useMutationObserver" or use the VeamsVent plugin!');

							return;
						}

						if (Veams.Vent && this.options.useMutationObserver === false) {
							Veams.Vent.on(Veams.EVENTS.DOMchanged, function (e, context) {
								__register.modulesInContext = _this.getModulesInContext(context);

								if (_this.options.logs) {
									console.info('VeamsModules :: Recording new context. When available new modules will be initialised in: ', context);
								}

								_this.registerAll();
							});
						}
					}

					// ------------------------
					// STATIC CACHE HANDLER
					// ------------------------

					/**
      * Save the module in __cache.
      *
      * @param {Object} module - module metadata object (@see VeamsComponent.metaData())
      * @param {Object} element - module element (this.el)
      * @param {Object} instance - module instance
      * @param {String} namespace - module namespace
      */

				}, {
					key: 'bindConditions',
					value: function bindConditions() {
						var _this2 = this;

						__register.modulesOnConditions.forEach(function (module) {
							if (module.conditionsListenOn && module.conditionsListenOn.length) {
								_this2.bindCondition(module);
							}
						});
					}
				}, {
					key: 'bindCondition',
					value: function bindCondition(module) {
						var _this3 = this;

						var globalEvts = module.conditionsListenOn.join(' ');

						if (Veams.Vent) {
							Veams.Vent.subscribe(globalEvts, function () {
								_this3.registerConditionalModule(module);
							});
						}
					}

					// ------------------------
					// UN/REGISTER HANDLER
					// ------------------------

					/**
      * Split up modules depending on condition check
      */

				}, {
					key: 'splitUpModules',
					value: function splitUpModules() {
						var _this4 = this;

						__register.modulesInRegister.forEach(function (obj) {
							if (_this4.constructor.isCondition(obj)) {
								__register.modulesOnConditions.push(obj);
							} else {
								__register.modulesOnInit.push(obj);
							}
						});
					}

					/**
      * Register multiple modules.
      *
      * @param {Array} arr - Array which contains the modules as object.
      *
      * @public
      */

				}, {
					key: 'register',
					value: function register(arr) {
						if (!Array.isArray(arr)) {
							throw new Error('VeamsModules :: You need to pass an array to register()!');
						}

						__register.modulesInRegister = __register.modulesInRegister.concat(arr);

						this.splitUpModules();
						this.bindConditions();
						this.registerAll();
					}

					/**
      * Register all modules
      */

				}, {
					key: 'registerAll',
					value: function registerAll() {
						if (!__register.modulesInRegister) return;

						this.registerInitialModules();
						this.registerConditionalModules();
					}

					/**
      * Register all initial modules
      */

				}, {
					key: 'registerInitialModules',
					value: function registerInitialModules() {
						var _this5 = this;

						__register.modulesOnInit.forEach(function (obj) {
							_this5.registerOne(obj);
						});
					}

					/**
      * Register conditional modules
      *
      * Therefore we check the condition and
      * when true register the specific module
      * when false unregister the specific module
      */

				}, {
					key: 'registerConditionalModules',
					value: function registerConditionalModules() {
						var _this6 = this;

						__register.modulesOnConditions.forEach(function (obj) {
							_this6.registerConditionalModule(obj);
						});
					}
				}, {
					key: 'registerConditionalModule',
					value: function registerConditionalModule(obj) {
						if (this.constructor.makeConditionCheck(obj)) {
							this.registerOne(obj);
						} else {
							this.unregisterOne(obj);
						}
					}

					/**
      * Register one module and init the elements in the specific context
      *
      * @param {String} namespace - Required: element name in DOM
      * @param {String} domName - Required: element name in DOM
      * @param {Object} module - Required: class which will be used to render your module
      * @param {boolean} [render=true] - Optional: render the class, if false the class will only be initialized
      * @param {function} [cb] - Optional: provide a function which will be executed after initialisation
      * @param {Object} [options] - Optional: You can pass options to the module via JS (Useful for DOMChanged)
      *
      */

				}, {
					key: 'registerOne',
					value: function registerOne(_ref) {
						var namespace = _ref.namespace,
						    domName = _ref.domName,
						    module = _ref.module,
						    render = _ref.render,
						    cb = _ref.cb,
						    options = _ref.options;

						var nameSpace = namespace ? namespace : domName;

						if (!module) throw new Error('VeamsModules :: In order to work with register() you need to define a module!');
						if (!nameSpace) throw new Error('VeamsModules :: In order to work with register() you need to define a module!');

						this.initModules({
							namespace: nameSpace,
							module: module,
							render: render,
							cb: cb,
							options: options
						});
					}
				}, {
					key: 'unregisterOne',
					value: function unregisterOne(_ref2) {
						var namespace = _ref2.namespace;

						if (this.constructor.checkModuleInCache(namespace, 'namespace') === true) {
							this.constructor.removeFromCacheByKey(namespace, 'namespace');
						}
					}

					// ------------------------
					// INIT HANDLER
					// ------------------------

					/**
      * Initialize a module and render it and/or provide a callback function
      *
      * @param {string} namespace - Required: dom name of the element
      * @param {Object} module - Required: class which will be used to render your module
      * @param {boolean} [render=true] - Optional: render the class, if false the class will only be initialized
      * @param {Object} [options] - Optional: You can pass options to the module via JS (Useful for DOMChanged)
      * @param {function} [cb] - Optional: provide a function which will be executed after initialisation
      *
      */

				}, {
					key: 'initModules',
					value: function initModules(_ref3) {
						var _this7 = this;

						var namespace = _ref3.namespace,
						    module = _ref3.module,
						    render = _ref3.render,
						    options = _ref3.options,
						    cb = _ref3.cb;

						Veams.helpers.forEach(__register.modulesInContext, function (i, el) {
							_this7.initModule({
								el: el,
								namespace: namespace,
								options: options,
								module: module,
								render: render,
								cb: cb
							});
						});
					}
				}, {
					key: 'initModule',
					value: function initModule(_ref4) {
						var el = _ref4.el,
						    namespace = _ref4.namespace,
						    options = _ref4.options,
						    module = _ref4.module,
						    render = _ref4.render,
						    cb = _ref4.cb;

						var noRender = el.getAttribute(this.options.attrPrefix + '-no-render') || render === false || false;
						var dataModules = el.getAttribute(this.options.attrPrefix + '-' + this.options.attrName).split(' ');

						if (dataModules.indexOf(namespace) !== -1) {
							// Check init state
							if (this.constructor.checkModuleInCache(el, 'element', namespace) === true) {
								console.info('VeamsModules :: Element is already in cache and initialized: ');
								console.log(el);
								return;
							}

							// Go ahead when condition is true
							var attrs = el.getAttribute(this.options.attrPrefix + '-' + this.options.attrOptions);
							var mergedOptions = Veams.helpers.extend(JSON.parse(attrs), options || {});
							var Module = module;
							var instance = new Module({
								el: el,
								namespace: namespace,
								options: mergedOptions,
								appInstance: Veams
							});

							this.constructor.addToCache({
								element: el,
								module: module,
								instance: instance,
								namespace: namespace
							});

							// Mount process
							if (instance.willMount) instance.willMount();

							// Render after initial module loading
							if (!noRender) instance.render();

							// Provide callback function in which you can use module and options
							if (cb && typeof cb === 'function') cb(module, mergedOptions);

							// Mount process
							if (instance.didMount) instance.didMount();
						}
					}

					/**
      * Add mutation observer to observe new modules.
      *
      * @param {Object} context - Context for the mutation observer
      *
      * TODO: Improve for loops
      */

				}, {
					key: 'observe',
					value: function observe(context) {
						var _this8 = this;

						var observer = new MutationObserver(function (mutations) {
							// look through all mutations that just occured
							for (var i = 0; i < mutations.length; ++i) {
								// look through all added nodes of this mutation

								for (var j = 0; j < mutations[i].addedNodes.length; ++j) {
									var addedNode = mutations[i].addedNodes[j];

									if (addedNode instanceof HTMLElement) {
										if (addedNode.getAttribute(_this8.options.attrPrefix + '-' + _this8.options.attrName)) {
											var namespace = addedNode.getAttribute(_this8.options.attrPrefix + '-' + _this8.options.attrName);

											if (_this8.options.logs) {
												console.info('VeamsModules :: Recording a new module with the namespace ' + namespace + ' at: ', addedNode);
											}

											var _iteratorNormalCompletion = true;
											var _didIteratorError = false;
											var _iteratorError = undefined;

											try {
												for (var _iterator = __register.modulesInRegister[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
													var module = _step.value;

													if (module.namespace === namespace) {
														_this8.initModule({
															el: addedNode,
															module: module.module,
															namespace: module.namespace
														});

														break;
													}
												}
											} catch (err) {
												_didIteratorError = true;
												_iteratorError = err;
											} finally {
												try {
													if (!_iteratorNormalCompletion && _iterator.return) {
														_iterator.return();
													}
												} finally {
													if (_didIteratorError) {
														throw _iteratorError;
													}
												}
											}
										}

										if (_this8.getModulesInContext(addedNode).length) {
											__register.modulesInContext = _this8.getModulesInContext(addedNode);

											if (_this8.options.logs) {
												console.info('VeamsModules :: Recording new context. When available new modules will be initialised in: ', addedNode);
											}

											_this8.registerAll();

											__register.modulesInContext = _this8.getModulesInContext(document);
										}
									}
								}

								for (var _j = 0; _j < mutations[i].removedNodes.length; ++_j) {
									var removedNode = mutations[i].removedNodes[_j];

									if (removedNode instanceof HTMLElement) {
										if (removedNode.getAttribute(_this8.options.attrPrefix + '-' + _this8.options.attrName)) {

											if (_this8.options.logs) {
												console.info('VeamsModules :: Recording deletion of module: ', removedNode);
											}

											_this8.constructor.removeFromCacheByKey(removedNode);

											__register.modulesInContext = _this8.getModulesInContext(document);
										}

										if (_this8.getModulesInContext(removedNode).length) {
											__register.modulesInContext = _this8.getModulesInContext(removedNode);

											if (_this8.options.logs) {
												console.info('VeamsModules :: Recording deletion of DOM element. When available modules will be unbound in ', removedNode);
											}

											__register.modulesInContext.forEach(function (node) {
												_this8.constructor.removeFromCacheByKey(node);
											});

											__register.modulesInContext = _this8.getModulesInContext(document);
										}
									}
								}
							}
						});

						observer.observe(context, {
							childList: true,
							subtree: true
						});
					}

					/**
      * Get Modules in a specific context.
      *
      * @param {Object} context - Context for query specific string
      */

				}, {
					key: 'getModulesInContext',
					value: function getModulesInContext(context) {
						return Veams.helpers.querySelectorArray(this.queryString, context);
					}
				}], [{
					key: 'addToCache',
					value: function addToCache(_ref5) {
						var module = _ref5.module,
						    element = _ref5.element,
						    instance = _ref5.instance,
						    namespace = _ref5.namespace;

						__cache.push({
							module: module,
							element: element,
							instance: instance,
							namespace: namespace
						});

						if (Veams.Vent && Veams.EVENTS.moduleCached) {
							Veams.Vent.trigger(Veams.EVENTS.moduleCached, {
								module: module,
								element: element
							});
						}
					}
				}, {
					key: 'removeFromCacheByKey',
					value: function removeFromCacheByKey(obj) {
						var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'element';

						var deleteIndex = void 0;

						for (var i = 0; i < __cache.length; i++) {
							var cacheItem = __cache[i];

							if (cacheItem[key] === obj) {
								if (cacheItem.instance.willUnmount) cacheItem.instance.willUnmount();
								if (cacheItem.instance.unregisterEvents) cacheItem.instance.unregisterEvents();
								if (cacheItem.instance.didUnmount) cacheItem.instance.didUnmount();

								deleteIndex = i;
							}
						}

						if (deleteIndex) __cache.splice(deleteIndex, 1);
					}
				}, {
					key: 'checkModuleInCache',
					value: function checkModuleInCache(obj) {
						var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'element';
						var namespace = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

						var state = false;

						for (var i = 0; i < __cache.length; i++) {
							var cacheItem = __cache[i];

							state = namespace !== undefined ? cacheItem[key] === obj && cacheItem.namespace === namespace : cacheItem[key] === obj;

							if (state) break;
						}

						return state;
					}

					// ------------------------
					// CONDITIONS HANDLER
					// ------------------------

				}, {
					key: 'isCondition',
					value: function isCondition(_ref6) {
						var conditions = _ref6.conditions;

						return conditions && typeof conditions === 'function';
					}
				}, {
					key: 'makeConditionCheck',
					value: function makeConditionCheck(_ref7) {
						var conditions = _ref7.conditions;

						if (conditions && typeof conditions === 'function') {
							return conditions();
						}
					}
				}]);

				return Modules;
			}();

			/**
    * Plugin object
    */

			var VeamsModules = {
				options: {
					DEBUG: false,
					attrPrefix: 'data-js',
					attrName: 'module',
					attrOptions: 'options',
					logs: false,
					internalCacheOnly: true,
					internalRegisterOnly: false,
					useMutationObserver: false
				},
				pluginName: 'ModulesHandler',
				initialize: function initialize(Veams, opts) {
					this.options = Veams.helpers.extend(this.options, opts || {});
					Veams.modules = Veams.modules || new Modules(Veams, this.options);
				}
			};

			exports.default = VeamsModules;
			exports.Modules = Modules;

			/***/
		}
		/******/])
	);
});
;


},{}],5:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
	if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && (typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (typeof define === 'function' && define.amd) define("index", [], factory);else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["index"] = factory();else root["index"] = root["index"] || {}, root["index"]["index"] = factory();
})(undefined, function () {
	return (/******/function (modules) {
			// webpackBootstrap
			/******/ // The module cache
			/******/var installedModules = {};
			/******/
			/******/ // The require function
			/******/function __webpack_require__(moduleId) {
				/******/
				/******/ // Check if module is in cache
				/******/if (installedModules[moduleId])
					/******/return installedModules[moduleId].exports;
				/******/
				/******/ // Create a new module (and put it into the cache)
				/******/var module = installedModules[moduleId] = {
					/******/exports: {},
					/******/id: moduleId,
					/******/loaded: false
					/******/ };
				/******/
				/******/ // Execute the module function
				/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
				/******/
				/******/ // Flag the module as loaded
				/******/module.loaded = true;
				/******/
				/******/ // Return the exports of the module
				/******/return module.exports;
				/******/
			}
			/******/
			/******/
			/******/ // expose the modules object (__webpack_modules__)
			/******/__webpack_require__.m = modules;
			/******/
			/******/ // expose the module cache
			/******/__webpack_require__.c = installedModules;
			/******/
			/******/ // __webpack_public_path__
			/******/__webpack_require__.p = "";
			/******/
			/******/ // Load entry module and return exports
			/******/return __webpack_require__(0);
			/******/
		}(
		/************************************************************************/
		/******/[
		/* 0 */
		/***/function (module, exports) {

			'use strict';

			/**
    * Represents a Vent plugin which creates an empty object.
    * The object will be used as publish/subscribe plugin.
    *
    * The module extends the default EVENTS object of Veams
    * when you pass the option called 'furtherEvents'.
    *
    * @module VeamsVent
    *
    * @author Sebastian Fitzner
    */

			/**
    * @module EventsHandler
    *
    * Pub/Sub system for Loosely Coupled logic.
    * Based on Peter Higgins' port from Dojo to jQuery
    * https://github.com/phiggins42/bloody-jquery-plugins/blob/master/pubsub.js
    * adopted https://github.com/phiggins42/bloody-jquery-plugins/blob/55e41df9bf08f42378bb08b93efcb28555b61aeb/pubsub.js
    *
    * modified by Sebastian Fitzner
    *
    */

			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			var EventsHandler = function () {
				var cache = {},


				/**
     *    Events.publish
     *    e.g.: Events.publish("/Article/added", {article: article}, this);
     *
     *    @class Events
     *    @method publish
     *    @param topic {String}
     *    @param args    {Object}
     *    @param scope {Object} Optional
     */
				publish = function publish(topic, args, scope) {
					if (cache[topic]) {
						var thisTopic = cache[topic];
						var i = thisTopic.length - 1;

						for (i; i >= 0; i -= 1) {
							thisTopic[i].call(scope || this, args || {});
						}
					}
				},


				/**
     *    Events.subscribe
     *    e.g.: Events.subscribe("/Article/added", Articles.validate)
     *
     *    @class Events
     *    @method subscribe
     *    @param topic {String}
     *    @param callback {Function}
     *    @return Event handler {Array}
     */
				subscribe = function subscribe(topic, callback) {
					var topics = topic.split(' ');

					for (var i = 0; i < topics.length; i++) {
						var _topic = topics[i];

						if (!cache[_topic]) {
							cache[_topic] = [];
						}

						cache[_topic].push(callback);
					}
				},


				/**
     *    Events.unsubscribe
     *    e.g.: var handle = Events.subscribe("/Article/added", Articles.validate);
     *        Events.unsubscribe("/Article/added", Articles.validate);
     *
     *    @class Events
     *    @method unsubscribe
     *    @param topic {String}
     *    @param handle {Function}
     *    @param completly {Boolean}
     */
				unsubscribe = function unsubscribe(topic, handle) {
					var completly = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

					var i = cache[topic].length - 1;

					if (cache[topic]) {
						for (i; i >= 0; i--) {
							if (cache[topic][i] === handle) {
								cache[topic].splice(i, 1);
								if (completly) {
									delete cache[topic];
								}
							}
						}
					}
				};

				return {
					publish: publish,
					subscribe: subscribe,
					unsubscribe: unsubscribe,
					trigger: publish,
					on: subscribe,
					off: unsubscribe
				};
			}();

			var VeamsVent = {
				options: {
					furtherEvents: {}
				},
				pluginName: 'Vent',
				initialize: function initialize(Veams, opts) {
					if (opts) {
						this.options = Veams.helpers.extend(this.options, opts || {});
					}

					Veams.Vent = EventsHandler;
					Veams.EVENTS = Veams.helpers.extend(Veams.EVENTS, this.options.furtherEvents);
				}
			};

			exports.default = VeamsVent;
			module.exports = exports['default'];

			/***/
		}
		/******/])
	);
});
;


},{}],6:[function(require,module,exports){
'use strict';

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
	if ((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === 'object' && (typeof module === 'undefined' ? 'undefined' : _typeof2(module)) === 'object') module.exports = factory();else if (typeof define === 'function' && define.amd) define("veams", [], factory);else if ((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === 'object') exports["veams"] = factory();else root["veams"] = root["veams"] || {}, root["veams"]["veams"] = factory();
})(undefined, function () {
	return (/******/function (modules) {
			// webpackBootstrap
			/******/ // The module cache
			/******/var installedModules = {};
			/******/
			/******/ // The require function
			/******/function __webpack_require__(moduleId) {
				/******/
				/******/ // Check if module is in cache
				/******/if (installedModules[moduleId])
					/******/return installedModules[moduleId].exports;
				/******/
				/******/ // Create a new module (and put it into the cache)
				/******/var module = installedModules[moduleId] = {
					/******/exports: {},
					/******/id: moduleId,
					/******/loaded: false
					/******/ };
				/******/
				/******/ // Execute the module function
				/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
				/******/
				/******/ // Flag the module as loaded
				/******/module.loaded = true;
				/******/
				/******/ // Return the exports of the module
				/******/return module.exports;
				/******/
			}
			/******/
			/******/
			/******/ // expose the modules object (__webpack_modules__)
			/******/__webpack_require__.m = modules;
			/******/
			/******/ // expose the module cache
			/******/__webpack_require__.c = installedModules;
			/******/
			/******/ // __webpack_public_path__
			/******/__webpack_require__.p = "";
			/******/
			/******/ // Load entry module and return exports
			/******/return __webpack_require__(0);
			/******/
		}(
		/************************************************************************/
		/******/[
		/* 0 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			/**
    * Imports
    */

			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			var _starter = __webpack_require__(11);

			var _starter2 = _interopRequireDefault(_starter);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			/**
    * Variables
    */

			exports.default = _starter2.default;
			module.exports = exports['default'];

			/***/
		},,,
		/* 1 */
		/* 2 */
		/* 3 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = mixin;

			var _defaults = __webpack_require__(4);

			var _defaults2 = _interopRequireDefault(_defaults);

			var _methodExtend = __webpack_require__(5);

			var _methodExtend2 = _interopRequireDefault(_methodExtend);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			/**
    * Merge method functions.
    *
    * @param {Object} from - Mixin object which will be merged via Helpers.defaults with the methods of our class
    * @param {Array} methods - Array of method names which will be extended.
    */
			function mixin(from) {
				var methods = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['initialize', 'render'];

				if (from === undefined) {
					console.error('VeamsHelpers : Mixin :: Mixin not found!');

					return;
				}

				var to = this.prototype;

				/** Add those methods which exists on `from` but not on `to` to the latter */
				(0, _defaults2.default)(to, from);

				/** we do the same for events */
				if (to.events) {
					(0, _defaults2.default)(to.events, from.events);
				}

				// Extend to's methods
				methods.forEach(function (method) {
					(0, _methodExtend2.default)(to, from, method);
				});
			};
			module.exports = exports['default'];

			/***/
		},
		/* 4 */
		/***/function (module, exports) {

			'use strict';

			/**
    * Simple extend method, which extends an object.
    *
    * @param {Object} obj - object which will be extended
    *
    * @return {Object} obj - extended object
    */

			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = defaultsHelper;
			function defaultsHelper(obj) {
				[].slice.call(arguments, 1).forEach(function (item) {
					for (var key in item) {
						if (obj[key] === undefined) obj[key] = item[key];
					}
				});
				return obj;
			};
			module.exports = exports['default'];

			/***/
		},
		/* 5 */
		/***/function (module, exports) {

			'use strict';

			/**
    * Helper method to extend an already existing method.
    *
    * @param {Object} to - view which will be extended
    * @param {Object} from - methods which comes from mixin
    * @param {string} methodName - function name
    */

			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = methodExtend;
			function methodExtend(to, from, methodName) {
				function isUndefined(value) {
					return typeof value === 'undefined';
				}

				if (from === undefined) return;

				// if the method is defined on from ...
				if (!isUndefined(from[methodName])) {
					var old = to[methodName];

					// ... we create a new function on to
					to[methodName] = function () {

						// wherein we first call the method which exists on `to`
						var oldReturn = old.apply(this, arguments);

						// and then call the method on `from`
						from[methodName].apply(this, arguments);

						// and then return the expected result,
						// i.e. what the method on `to` returns
						return oldReturn;
					};
				}
			};
			module.exports = exports['default'];

			/***/
		},
		/* 6 */
		/***/function (module, exports) {

			'use strict';

			/**
    * Simple extend method to extend the properties of an object.
    *
    * @param {Object} obj - object which will be extended
    *
    * @return {Object} obj - extended object
    */

			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = extend;
			function extend(obj) {
				[].slice.call(arguments, 1).forEach(function (item) {
					for (var key in item) {
						obj[key] = item[key];
					}
				});
				return obj;
			};
			module.exports = exports['default'];

			/***/
		},
		/* 7 */
		/***/function (module, exports) {

			'use strict';

			/**
    * Generates numeric id.
    *
    * @param {Number} [segments=1] - number of segments of generated id (segments consist of 10 digits, separated by '-').
    *
    * @return {String} - generated id
    */

			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = makeId;
			function makeId() {
				var segments = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

				var crypto = window.crypto || window.msCrypto;
				var array = crypto.getRandomValues(new Uint32Array(segments));
				var id = '';
				var i = 0;

				for (; i < array.length; i++) {
					id += array[i] + '-';
				}

				return id.slice(0, -1);
			};
			module.exports = exports['default'];

			/***/
		},,,,
		/* 8 */
		/* 9 */
		/* 10 */
		/* 11 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			/**
    * Polyfills
    */

			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			__webpack_require__(12);

			var _core = __webpack_require__(13);

			var _core2 = _interopRequireDefault(_core);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			var Veams = {};

			/**
    * Imports
    */

			(function (window, document, undefined) {
				'use strict';

				Veams = new _core2.default({
					namespace: 'Veams',
					addToGlobal: true
				});

				Veams.initialize();
			})(window, document);

			exports.default = Veams;
			module.exports = exports['default'];

			/***/
		},
		/* 12 */
		/***/function (module, exports) {

			'use strict';

			// Polyfill for custom events

			(function () {
				if (typeof window.CustomEvent === 'function') return false;

				function CustomEvent(event, params) {
					var evt = document.createEvent('CustomEvent');

					params = params || { bubbles: false, cancelable: false, detail: undefined };

					evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
					return evt;
				}

				CustomEvent.prototype = window.Event.prototype;

				window.CustomEvent = CustomEvent;
			})();

			/***/
		},
		/* 13 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}(); /**
         * Represents VeamsCore.
         * @module VeamsCore
         *
         * @author Sebastian Fitzner
         */

			__webpack_require__(12);

			var _use = __webpack_require__(14);

			var _use2 = _interopRequireDefault(_use);

			var _events = __webpack_require__(15);

			var _events2 = _interopRequireDefault(_events);

			var _helpers = __webpack_require__(16);

			var _helpers2 = _interopRequireDefault(_helpers);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			var initState = false;

			var VeamsCore = function () {
				function VeamsCore(opts) {
					_classCallCheck(this, VeamsCore);

					this._options = {
						namespace: 'Veams',
						addToGlobal: false
					};

					this.base = {
						name: 'Veams',
						version: '5.0.1'
					};

					this.use = _use2.default.bind(this);
					this.Plugins = {};
					this.EVENTS = _events2.default;
					this.helpers = {};
					this.detections = {
						width: window.innerWidth,
						height: window.innerHeight
					};

					initState = false;

					this.setup(opts);
				}

				_createClass(VeamsCore, [{
					key: 'setup',
					value: function setup(opts) {
						this.use(_helpers2.default);

						this.detections = this.helpers.extend({
							touch: this.helpers.isTouch()
						}, this.detections);

						this.options = opts;
					}
				}, {
					key: 'initialize',
					value: function initialize(opts) {
						if (initState === true) {
							return console.info('Veams :: You already initialized Veams!');
						}

						/**
       * Set global options on initialize
       */
						this.options = opts;

						if (this.options.addToGlobal) {
							if (window && !window[this.options.namespace]) {
								window[this.options.namespace] = this || {};
							}
						}

						initState = true;
					}
				}, {
					key: 'onInitialize',
					value: function onInitialize(cb) {
						if (!cb || typeof cb !== 'function') {
							console.log('Veams :: Callback is not a function!');
							return;
						}

						if (initState === false) {
							this.initialize();
						}

						cb();
					}
				}, {
					key: 'onDOMReady',
					value: function onDOMReady(cb) {
						if (typeof cb !== 'function') {
							console.log('Veams :: Callback is not a function!');
							return;
						}
						document.addEventListener('DOMContentLoaded', cb);
					}
				}, {
					key: 'version',
					set: function set(version) {
						this._version = version;
					},
					get: function get() {
						return this._version;
					}
				}, {
					key: 'initialized',
					set: function set(bool) {
						this._initialized = bool;
					},
					get: function get() {
						return this._initialized;
					}
				}, {
					key: 'options',
					set: function set(options) {
						this._options = this.helpers.extend(this.options, options || {});
					},
					get: function get() {
						return this._options;
					}
				}]);

				return VeamsCore;
			}();

			exports.default = VeamsCore;
			module.exports = exports['default'];

			/***/
		},
		/* 14 */
		/***/function (module, exports) {

			'use strict';

			/**
    * Represents a simple plugin system in which `this` is Veams.
    * @module plugin
    *
    * @author Sebastian Fitzner
    */

			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			exports.default = function (plugin) {
				if (plugin.pluginName) {
					this.Plugins[plugin.pluginName] = plugin;
				}

				for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
					args[_key - 1] = arguments[_key];
				}

				plugin.initialize.apply(plugin, [this].concat(args));
			};

			module.exports = exports['default'];

			/***/
		},
		/* 15 */
		/***/function (module, exports) {

			'use strict';

			/**
    * Const for events (pub/sub)
    *
    * @author: Sebastian Fitzner
    */

			/**
    * Events Global
    */

			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			var EVENTS = {
				blur: 'blur',
				change: 'change',
				click: 'click',
				dblclick: 'dblclick',
				DOMchanged: 'dom:changed',
				DOMredirect: 'dom:redirect',
				hashchange: 'hashchange',
				input: 'input',
				keydown: 'keydown',
				keypress: 'keypress',
				keyup: 'keyup',
				mediachange: 'mediachange',
				moduleCached: 'module:cached',
				mousedown: 'mousedown',
				mouseenter: 'mouseenter',
				mouseleave: 'mouseleave',
				mouseout: 'mouseout',
				mouseover: 'mouseover',
				mouseup: 'mouseup',
				reset: 'reset',
				resize: 'resize',
				scroll: 'scroll',
				submit: 'submit',
				swipe: 'swipe'
			};

			exports.default = EVENTS;
			module.exports = exports['default'];

			/***/
		},
		/* 16 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
				return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
			} : function (obj) {
				return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
			};

			var _extend = __webpack_require__(6);

			var _extend2 = _interopRequireDefault(_extend);

			var _mixin = __webpack_require__(3);

			var _mixin2 = _interopRequireDefault(_mixin);

			var _methodExtend = __webpack_require__(5);

			var _methodExtend2 = _interopRequireDefault(_methodExtend);

			var _isTouch = __webpack_require__(17);

			var _isTouch2 = _interopRequireDefault(_isTouch);

			var _throttle = __webpack_require__(18);

			var _throttle2 = _interopRequireDefault(_throttle);

			var _querySelectorArray = __webpack_require__(19);

			var _querySelectorArray2 = _interopRequireDefault(_querySelectorArray);

			var _forEach = __webpack_require__(20);

			var _forEach2 = _interopRequireDefault(_forEach);

			var _makeId = __webpack_require__(7);

			var _makeId2 = _interopRequireDefault(_makeId);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			var VeamsHelpers = {
				pluginName: 'Helpers',
				initialize: function initialize(Veams) {
					Veams.addHelper = function addHelper() {
						for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
							args[_key] = arguments[_key];
						}

						var params = [].concat(args);

						if (params.length === 1) {
							if (_typeof(params[0]) !== 'object') {
								console.error('VeamsHelpers :: You need to pass an object!');
								return;
							}

							for (var key in params[0]) {
								if (params[0].hasOwnProperty(key)) {
									if (!Veams.helpers[key]) {
										Veams.helpers[key] = params[0][key];
									} else {
										console.info('VeamsHelpers :: The helper ' + key + ' is already defined! Please define a new name for: ', params[0][key]);
									}
								}
							}
						} else if (params.length === 2) {

							if (!Veams.helpers[params[0]]) {
								if (typeof params[0] !== 'string' || typeof params[1] !== 'function') {
									console.error('VeamsHelpers :: You need to pass a string as first argument and the helper function as second one.');
									return;
								}
								Veams.helpers[params[0]] = params[1];
							} else {
								console.info('VeamsHelpers :: The helper ' + params[0] + ' is already defined! Please define a new name for: ', params[1]);
							}
						}
					};

					this.addDefaultHelpers(Veams);
				},

				addDefaultHelpers: function addDefaultHelpers(Veams) {
					Veams.addHelper('querySelectorArray', _querySelectorArray2.default);
					Veams.addHelper('extend', _extend2.default);
					Veams.addHelper('isTouch', _isTouch2.default);
					Veams.addHelper('mixin', _mixin2.default);
					Veams.addHelper('methodExtend', _methodExtend2.default);
					Veams.addHelper('throttle', _throttle2.default);
					Veams.addHelper('forEach', _forEach2.default);
					Veams.addHelper('makeId', _makeId2.default);
				}
			};

			exports.default = VeamsHelpers;
			module.exports = exports['default'];

			/***/
		},
		/* 17 */
		/***/function (module, exports) {

			'use strict';

			/**
    * Touch Detection
    */

			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = isTouch;
			function isTouch() {
				return 'ontouchstart' in window;
			};
			module.exports = exports['default'];

			/***/
		},
		/* 18 */
		/***/function (module, exports) {

			'use strict';

			/**
    * Throttle method for resize events and more
    *
    * @param {function} func - Function which will be executed.
    * @param {number} wait - number to wait in milliseconds.
    * @param {boolean} immediate - execute function immediately.
    */

			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = throttle;
			function throttle(func, wait, immediate) {
				var timeout = void 0;

				return function () {
					var context = this;
					var args = arguments;
					var callNow = immediate && !timeout;
					var later = function later() {
						timeout = null;
						if (!immediate) func.apply(context, args);
					};

					clearTimeout(timeout);

					timeout = setTimeout(later, wait);

					if (callNow) func.apply(context, args);
				};
			};
			module.exports = exports['default'];

			/***/
		},
		/* 19 */
		/***/function (module, exports) {

			'use strict';

			/**
    * Get dom elements in an array
    *
    * @param {String} elem - Required: selector
    * @param {Object} [context] - Optional: context
    *
    * @return {Array}
    */

			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = querySelectorArray;
			function querySelectorArray(elem, context) {
				if (!elem) throw new Error('In order to work with querySelectorArray you need to define an element as string!');
				var el = elem;
				var customContext = context || document;

				return Array.prototype.slice.call(customContext.querySelectorAll(el));
			};
			module.exports = exports['default'];

			/***/
		},
		/* 20 */
		/***/function (module, exports) {

			'use strict';

			/**
    * Simple forEach method
    *
    * @param {Array} array - array of objects
    * @param {function} callback - callback function
    * @param {string} scope - scope of function
    */

			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = forEach;
			function forEach(array, callback, scope) {
				for (var i = 0; i < array.length; i++) {
					callback.call(scope, i, array[i]);
				}
			};
			module.exports = exports['default'];

			/***/
		}
		/******/])
	);
});
;


},{}],7:[function(require,module,exports){
'use strict';var _app=require('./app');console.log('JS initialized in version:',_app.App.version);// Global dependencies
console.log('Veams initialized in version:',_app.Veams.base.version);// Imports
// @INSERTPOINT :: @ref: js-import, @keep: true //
// Initialize modules with Veams
_app.Veams.modules.register([/**
     * Init Slider
     */// {
//     namespace: 'slider',
//     module: Slider
// }
// @INSERTPOINT :: @ref: js-init-v5, @keep: true //
]);// @INSERTPOINT :: @ref: js-init-once-v5, @keep: true //

},{"./app":"app"}],8:[function(require,module,exports){
'use strict';Object.defineProperty(exports,"__esModule",{value:true});/**
 * Const for events (pub/sub)
 *
 * @author: Sebastian Fitzner
 *//**
 * Events Global
 */var EVENTS={};/**
 * Events for Testing
 */EVENTS.testing={eventName:'testing:eventName'};/**
 * Events for Slider
 */EVENTS.slider={slideStart:'slide:start'};/**
 * Events for Slider
 */EVENTS.slider={slideStart:'slide:start'};// @INSERTPOINT :: @ref: js-events
exports.default=EVENTS;

},{}],"app":[function(require,module,exports){
'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.Veams=exports.App=undefined;var _env=require('env');var _jquery=require('jquery');var _jquery2=_interopRequireDefault(_jquery);var _veams=require('veams');var _veams2=_interopRequireDefault(_veams);var _veamsPluginLogger=require('veams-plugin-logger');var _veamsPluginLogger2=_interopRequireDefault(_veamsPluginLogger);var _veamsPluginDom=require('veams-plugin-dom');var _veamsPluginDom2=_interopRequireDefault(_veamsPluginDom);var _veamsPluginVent=require('veams-plugin-vent');var _veamsPluginVent2=_interopRequireDefault(_veamsPluginVent);var _veamsPluginModules=require('veams-plugin-modules');var _veamsPluginModules2=_interopRequireDefault(_veamsPluginModules);var _veamsPluginMediaQueryHandler=require('veams-plugin-media-query-handler');var _veamsPluginMediaQueryHandler2=_interopRequireDefault(_veamsPluginMediaQueryHandler);var _events=require('../../shared/scripts/events');var _events2=_interopRequireDefault(_events);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var App={};// import VeamsStore from 'veams-plugin-store';
// import VeamsTemplater from 'veams-plugin-templater';
// Global dependencies
App.$=_jquery2.default;// Versioning
App.version="0.0.1";// Veams
_veams2.default.onInitialize(function(){/**
	* Veams Plugins
	*/// Dom Plugin
_veams2.default.use(_veamsPluginDom2.default,{DOM:_jquery2.default});// Vent Plugin
_veams2.default.use(_veamsPluginVent2.default,{furtherEvents:_events2.default});// Logger Plugin for devmode and logger
_veams2.default.use(_veamsPluginLogger2.default);// Module System Plugin
_veams2.default.use(_veamsPluginModules2.default,{useMutationObserver:true,internalCacheOnly:false});// Store Plugin
// Veams.use(VeamsStore, {
// 	reducer: rootReducer,
// 	state: INITIAL_STATE,
// 	subjects: subjects
// });
// Media Query Handler Plugin
_veams2.default.use(_veamsPluginMediaQueryHandler2.default);});exports.App=App;exports.Veams=_veams2.default;

},{"../../shared/scripts/events":8,"env":"env","jquery":"jquery","veams":6,"veams-plugin-dom":1,"veams-plugin-logger":2,"veams-plugin-media-query-handler":3,"veams-plugin-modules":4,"veams-plugin-vent":5}],"env":[function(require,module,exports){
'use strict';Object.defineProperty(exports,"__esModule",{value:true});var environment=exports.environment={env:'local'};

},{}]},{},[7])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvdmVhbXMtcGx1Z2luLWRvbS9saWIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvdmVhbXMtcGx1Z2luLWxvZ2dlci9saWIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvdmVhbXMtcGx1Z2luLW1lZGlhLXF1ZXJ5LWhhbmRsZXIvbGliL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3ZlYW1zLXBsdWdpbi1tb2R1bGVzL2xpYi9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy92ZWFtcy1wbHVnaW4tdmVudC9saWIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvdmVhbXMvbGliL3ZlYW1zLmpzIiwic3JjL2NvcmUvYXBwL21haW4uanMiLCJzcmMvc2hhcmVkL3NjcmlwdHMvZXZlbnRzLmpzIiwic3JjL2NvcmUvYXBwL2FwcC5qcyIsImNvbmZpZ3MvZW52aXJvbm1lbnRzL2Vudmlyb25tZW50LmxvY2FsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQ0FBLENBQUMsU0FBUyxnQ0FBVCxDQUEwQyxJQUExQyxFQUFnRCxPQUFoRCxFQUF5RDtBQUN6RCxLQUFHLFFBQU8sT0FBUCx5Q0FBTyxPQUFQLE9BQW1CLFFBQW5CLElBQStCLFFBQU8sTUFBUCx5Q0FBTyxNQUFQLE9BQWtCLFFBQXBELEVBQ0MsT0FBTyxPQUFQLEdBQWlCLFNBQWpCLENBREQsS0FFSyxJQUFHLE9BQU8sTUFBUCxLQUFrQixVQUFsQixJQUFnQyxPQUFPLEdBQTFDLEVBQ0osT0FBTyxPQUFQLEVBQWdCLEVBQWhCLEVBQW9CLE9BQXBCLEVBREksS0FFQSxJQUFHLFFBQU8sT0FBUCx5Q0FBTyxPQUFQLE9BQW1CLFFBQXRCLEVBQ0osUUFBUSxPQUFSLElBQW1CLFNBQW5CLENBREksS0FHSixLQUFLLE9BQUwsSUFBZ0IsS0FBSyxPQUFMLEtBQWlCLEVBQWpDLEVBQXFDLEtBQUssT0FBTCxFQUFjLE9B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V0FBWSxhQURHLENBQWhCLENBSUE7Z0JBRWUsTTs7OzBHQ3RDZix3QkFFQSw4Qiw2Q0FDQSw0QiwyQ0FDQSxzRCxtRUFDQSxnRCw2REFDQSxrRCwrREFDQSx3RCxxRUFDQSw4RSx5RkFHQSxtRCxnSUFHQSxHQUFJLEtBQU0sRUFBVixDQUxBO0FBQ0E7QUFYQTtBQWdCQSxJQUFJLENBQUosa0JBRUE7QUFDQSxJQUFJLE9BQUosQ0FBYyxPQUFkLENBRUE7QUFDQSxnQkFBTSxZQUFOLENBQW1CLFVBQU0sQ0FDeEI7O0dBSUE7QUFDQSxnQkFBTSxHQUFOLDBCQUFvQixDQUNuQixvQkFEbUIsQ0FBcEIsRUFJQTtBQUNBLGdCQUFNLEdBQU4sMkJBQXFCLENBQ3BCLDhCQURvQixDQUFyQixFQUlBO0FBQ0EsZ0JBQU0sR0FBTiw4QkFFQTtBQUNBLGdCQUFNLEdBQU4sOEJBQXdCLENBQ3ZCLG9CQUFxQixJQURFLENBRXZCLGtCQUFtQixLQUZJLENBQXhCLEVBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSxnQkFBTSxHQUFOLHlDQUNBLENBakNELEUsUUFtQ1EsRyxDQUFBLEcsU0FBSyxLOzs7c0VDekROLEdBQU0saUNBQWMsQ0FDMUIsSUFBSyxPQURxQixDQUFwQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImluZGV4XCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImluZGV4XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImluZGV4XCJdID0gcm9vdFtcImluZGV4XCJdIHx8IHt9LCByb290W1wiaW5kZXhcIl1bXCJpbmRleFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9LFxuLyoqKioqKi8gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bG9hZGVkOiBmYWxzZVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdFx0dmFsdWU6IHRydWVcblx0fSk7XG5cdHZhciBWZWFtc0RPTSA9IHtcblx0XHRvcHRpb25zOiB7XG5cdFx0XHRET006IGZhbHNlXG5cdFx0fSxcblx0XHRwbHVnaW5OYW1lOiAnJCcsXG5cdFx0aW5pdGlhbGl6ZTogZnVuY3Rpb24gaW5pdGlhbGl6ZShWZWFtcywgX3JlZikge1xuXHRcdFx0dmFyIERPTSA9IF9yZWYuRE9NO1xuXHRcblx0XHRcdGlmICghRE9NKSB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ1ZlYW1zRE9NIDo6IFlvdSBuZWVkIHRvIHBhc3MgYW4gb3B0aW9ucyBvYmplY3Qgd2l0aCBhIERPTSBoYW5kbGVyOiBvcHRpb25zLkRPTSEnKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKFZlYW1zLiQpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ1ZlYW1zRE9NIDo6IEl0IHNlZW1zIHRoYXQgeW91IGhhdmUgYWxyZWFkeSBkZWZpbmVkIGEgRE9NIGhhbmRsZXIuIEkgYW0gb3ZlcndyaXRpbmcgaXQgbm93IGZvciB5b3UgOyknKTtcblx0XHRcdH1cblx0XG5cdFx0XHRWZWFtcy4kID0gdGhpcy5vcHRpb25zLkRPTSA9IERPTTtcblx0XHR9XG5cdH07XG5cdFxuXHRleHBvcnRzLmRlZmF1bHQgPSBWZWFtc0RPTTtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH1cbi8qKioqKiovIF0pXG59KTtcbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiaW5kZXhcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiaW5kZXhcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiaW5kZXhcIl0gPSByb290W1wiaW5kZXhcIl0gfHwge30sIHJvb3RbXCJpbmRleFwiXVtcImluZGV4XCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge30sXG4vKioqKioqLyBcdFx0XHRpZDogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0XHR2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0XG5cdHZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblx0XG5cdHZhciBWZWFtc0xvZ2dlciA9IHtcblx0XHRwbHVnaW5OYW1lOiAnTG9nZ2VyJyxcblx0XHRpbml0aWFsaXplOiBmdW5jdGlvbiBpbml0aWFsaXplKFZlYW1zKSB7XG5cdFx0XHQvKipcblx0ICAgKiBEZXZtb2RlIGFuZCBsb2dnZXJcblx0ICAgKi9cblx0XHRcdFZlYW1zLmRldm1vZGUgPSBmYWxzZTtcblx0XHRcdFZlYW1zLmxvZ2dlciA9IGZhbHNlO1xuXHRcblx0XHRcdGlmIChkb2N1bWVudC5sb2NhdGlvbi5zZWFyY2guaW5kZXhPZignZGV2bW9kZScpID4gLTEgfHwgd2luZG93LnNlc3Npb25TdG9yYWdlICYmIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2Rldm1vZGVFbmFibGVkJykpIHtcblx0XHRcdFx0VmVhbXMuZGV2bW9kZSA9IHRydWU7XG5cdFxuXHRcdFx0XHRpZiAod2luZG93LnNlc3Npb25TdG9yYWdlICYmICFzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdkZXZtb2RlRW5hYmxlZCcpKSB7XG5cdFx0XHRcdFx0c2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnZGV2bW9kZUVuYWJsZWQnLCB0cnVlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcblx0XHRcdGlmIChkb2N1bWVudC5sb2NhdGlvbi5zZWFyY2guaW5kZXhPZignbG9nZ2VyJykgPiAtMSkge1xuXHRcdFx0XHRWZWFtcy5sb2dnZXIgPSB0cnVlO1xuXHRcdFx0fVxuXHRcblx0XHRcdC8vIGhpZGUgYWxsIHdhcm5pbmdzIGFuZCBsb2dzIGlmIG5vdCBpbiBkZXZtb2RlXG5cdFx0XHRpZiAoIVZlYW1zLmRldm1vZGUpIHtcblx0XHRcdFx0Y29uc29sZS5sb2cgPSBjb25zb2xlLndhcm4gPSBmdW5jdGlvbiAoKSB7fTtcblx0XHRcdH1cblx0XG5cdFx0XHQvLyBhZGQgY29uc29sZSBvdXRwdXQgZWxlbWVudCAodHJpZ2dlcmVkIGJ5IHBhcmFtZXRlciAnZGV2bW9kZScgYW5kICdsb2dnZXInIGluIHVybClcblx0XHRcdGlmIChWZWFtcy5kZXZtb2RlICYmIFZlYW1zLmxvZ2dlcikge1xuXHRcdFx0XHR2YXIgbG9nZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncHJlJyk7XG5cdFxuXHRcdFx0XHRsb2dnZXIuc2V0QXR0cmlidXRlKCdpZCcsICdsb2dnZXInKTtcblx0XHRcdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsb2dnZXIpO1xuXHRcblx0XHRcdFx0Y29uc29sZS53cml0ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0aWYgKF90eXBlb2YoYXJndW1lbnRzW2ldKSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0XHRcdFx0bG9nZ2VyLmlubmVySFRNTCArPSAoSlNPTiAmJiBKU09OLnN0cmluZ2lmeSA/IEpTT04uc3RyaW5naWZ5KGFyZ3VtZW50c1tpXSwgdW5kZWZpbmVkLCAyKSA6IGFyZ3VtZW50c1tpXSkgKyAnPGJyIC8+Jztcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGxvZ2dlci5pbm5lckhUTUwgKz0gYXJndW1lbnRzW2ldICsgJzxiciAvPic7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcblx0XHRcdFx0XHRsb2dnZXIuaW5uZXJIVE1MICs9ICc8YnIgLz4nO1xuXHRcdFx0XHRcdGxvZ2dlci5zY3JvbGxUb3AgPSBsb2dnZXIuc2Nyb2xsSGVpZ2h0O1xuXHRcdFx0XHR9O1xuXHRcblx0XHRcdFx0Y29uc29sZS5lcnJvciA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRsb2dnZXIuaW5uZXJIVE1MICs9ICdbRXJyb3JdPGJyIC8+Jztcblx0XHRcdFx0XHRjb25zb2xlLndyaXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0XHRcdH07XG5cdFxuXHRcdFx0XHRjb25zb2xlLndhcm4gPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0bG9nZ2VyLmlubmVySFRNTCArPSAnW1dhcm5dPGJyIC8+Jztcblx0XHRcdFx0XHRjb25zb2xlLndyaXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0XHRcdH07XG5cdFxuXHRcdFx0XHRjb25zb2xlLmxvZyA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRsb2dnZXIuaW5uZXJIVE1MICs9ICdbTG9nXTxiciAvPic7XG5cdFx0XHRcdFx0Y29uc29sZS53cml0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0XG5cdGV4cG9ydHMuZGVmYXVsdCA9IFZlYW1zTG9nZ2VyO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfVxuLyoqKioqKi8gXSlcbn0pO1xuO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJpbmRleFwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJpbmRleFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJpbmRleFwiXSA9IHJvb3RbXCJpbmRleFwiXSB8fCB7fSwgcm9vdFtcImluZGV4XCJdW1wiaW5kZXhcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fSxcbi8qKioqKiovIFx0XHRcdGlkOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGxvYWRlZDogZmFsc2Vcbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdC8qKlxuXHQgKiBJbXBvcnRzXG5cdCAqL1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdFx0dmFsdWU6IHRydWVcblx0fSk7XG5cdHZhciBWZWFtc01lZGlhUXVlcnlIYW5kbGVyID0ge1xuXHRcdG9wdGlvbnM6IHtcblx0XHRcdG1lZGlhUXVlcnlQcm9wOiAnZm9udC1mYW1pbHknLFxuXHRcdFx0ZGVsYXk6IDMwMFxuXHRcdH0sXG5cdFx0cGx1Z2luTmFtZTogJ01lZGlhUXVlcnlIYW5kbGVyJyxcblx0XHRpbml0aWFsaXplOiBmdW5jdGlvbiBpbml0aWFsaXplKFZlYW1zLCBvcHRzKSB7XG5cdFx0XHR2YXIgX3RoaXMgPSB0aGlzO1xuXHRcblx0XHRcdC8vIE1lZGlhIFF1ZXJ5XG5cdFx0XHR2YXIgaGVhZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2hlYWQnKTtcblx0XG5cdFx0XHRpZiAob3B0cykge1xuXHRcdFx0XHR0aGlzLm9wdGlvbnMgPSBWZWFtcy5oZWxwZXJzLmV4dGVuZCh0aGlzLm9wdGlvbnMsIG9wdHMgfHwge30pO1xuXHRcdFx0fVxuXHRcblx0XHRcdC8qKlxuXHQgICAqIEFkZCBjdXJyZW50IG1lZGlhIHF1ZXJ5IHRvIFZlYW1zXG5cdCAgICovXG5cdFx0XHRWZWFtcy5jdXJyZW50TWVkaWEgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShoZWFkWzBdLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKHRoaXMub3B0aW9ucy5tZWRpYVF1ZXJ5UHJvcCk7XG5cdFxuXHRcdFx0aWYgKCFWZWFtcy5WZW50KSB7XG5cdFx0XHRcdGNvbnNvbGUuaW5mbygnVmVhbXNNZWRpYVF1ZXJ5SGFuZGxlciA6OiBJbiBvcmRlciB0byB3b3JrIHByb3Blcmx5IHdpdGggdGhlIFZlYW1zTWVkaWFRdWVyeUhhbmRsZXIgcGx1Z2luIHlvdSBzaG91bGQgYWRkIHRoZSBWZWFtc1ZlbnQgcGx1Z2luIScpO1xuXHRcdFx0fVxuXHRcblx0XHRcdC8vIFRyaWdnZXIgZ2xvYmFsIHJlc2l6ZSBldmVudFxuXHRcdFx0d2luZG93Lm9ucmVzaXplID0gVmVhbXMuaGVscGVycy50aHJvdHRsZShmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHR2YXIgY3VycmVudE1lZGlhID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoaGVhZFswXSwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZShfdGhpcy5vcHRpb25zLm1lZGlhUXVlcnlQcm9wKTtcblx0XHRcdFx0dmFyIHdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5cdFxuXHRcdFx0XHRpZiAoY3VycmVudE1lZGlhICE9PSBWZWFtcy5jdXJyZW50TWVkaWEpIHtcblx0XHRcdFx0XHR2YXIgb2xkTWVkaWEgPSBWZWFtcy5jdXJyZW50TWVkaWE7XG5cdFxuXHRcdFx0XHRcdFZlYW1zLmN1cnJlbnRNZWRpYSA9IGN1cnJlbnRNZWRpYTtcblx0XG5cdFx0XHRcdFx0Y29uc29sZS5pbmZvKCdWZWFtc01lZGlhUXVlcnlIYW5kbGVyIDo6IEN1cnJlbnQgbWVkaWEgaXMgJyArIFZlYW1zLmN1cnJlbnRNZWRpYSk7XG5cdFxuXHRcdFx0XHRcdGlmIChWZWFtcy5WZW50KSB7XG5cdFx0XHRcdFx0XHRWZWFtcy5WZW50LnRyaWdnZXIoVmVhbXMuRVZFTlRTLm1lZGlhY2hhbmdlLCB7XG5cdFx0XHRcdFx0XHRcdHR5cGU6IFZlYW1zLkVWRU5UUy5tZWRpYWNoYW5nZSxcblx0XHRcdFx0XHRcdFx0Y3VycmVudE1lZGlhOiBjdXJyZW50TWVkaWEsXG5cdFx0XHRcdFx0XHRcdG9sZE1lZGlhOiBvbGRNZWRpYVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFxuXHRcdFx0XHRWZWFtcy5kZXRlY3Rpb25zLndpZHRoID0gd2lkdGg7XG5cdFx0XHRcdFZlYW1zLlZlbnQudHJpZ2dlcihWZWFtcy5FVkVOVFMucmVzaXplLCBlKTtcblx0XHRcdH0sIHRoaXMub3B0aW9ucy5kZWxheSk7XG5cdFx0fVxuXHR9O1xuXHRcblx0ZXhwb3J0cy5kZWZhdWx0ID0gVmVhbXNNZWRpYVF1ZXJ5SGFuZGxlcjtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH1cbi8qKioqKiovIF0pXG59KTtcbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiaW5kZXhcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiaW5kZXhcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiaW5kZXhcIl0gPSByb290W1wiaW5kZXhcIl0gfHwge30sIHJvb3RbXCJpbmRleFwiXVtcImluZGV4XCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge30sXG4vKioqKioqLyBcdFx0XHRpZDogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0XHR2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0XG5cdHZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cdFxuXHRmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXHRcblx0dmFyIFZlYW1zID0ge307XG5cdHZhciBfX2NhY2hlID0gW107XG5cdHZhciBfX3JlZ2lzdGVyID0ge1xuXHRcdG1vZHVsZXNJblJlZ2lzdGVyOiBbXSxcblx0XHRtb2R1bGVzT25Db25kaXRpb25zOiBbXSxcblx0XHRtb2R1bGVzT25Jbml0OiBbXSxcblx0XHRtb2R1bGVzSW5Db250ZXh0OiBbXVxuXHR9O1xuXHRcblx0LyoqXG5cdCAqIFRPRE86IENsZWFuIHVwIG11dGF0aW9uIG9ic2VydmVyXG5cdCAqL1xuXHRcblx0LyoqXG5cdCAqIC0gR2V0IG1vZHVsZXMgaW4gRE9NXG5cdCAqIC0gR2V0IGNsYXNzZXMgYW5kIG9wdGlvbnMgZnJvbSBpbml0IHByb2Nlc3Ncblx0ICogLSBTcGxpdCB1cCBjb25kaXRpb25hbCBtb2R1bGVzIGZyb20gaW5pdGlhbCBtb2R1bGVzXG5cdCAqIC0gSW5pdCBvdGhlciBtb2R1bGVzXG5cdCAqIC0gQmluZCBldmVudHMgd2hlbiBhdmFpbGFibGUgZnJvbSBjb25kaXRpb25hbCBtb2R1bGVzXG5cdCAqIC1cblx0ICovXG5cdFxuXHR2YXIgTW9kdWxlcyA9IGZ1bmN0aW9uICgpIHtcblx0XHRmdW5jdGlvbiBNb2R1bGVzKCkge1xuXHRcdFx0dmFyIFZFQU1TID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB3aW5kb3cuVmVhbXM7XG5cdFx0XHR2YXIgb3B0cyA9IGFyZ3VtZW50c1sxXTtcblx0XG5cdFx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgTW9kdWxlcyk7XG5cdFxuXHRcdFx0VmVhbXMgPSBWRUFNUztcblx0XG5cdFx0XHR0aGlzLm9wdGlvbnMgPSBvcHRzO1xuXHRcblx0XHRcdGlmICghdGhpcy5vcHRpb25zLmludGVybmFsQ2FjaGVPbmx5KSB7XG5cdFx0XHRcdHRoaXMuX2NhY2hlID0gX19jYWNoZTsgLy8gTW9kdWxlIGxpc3Rcblx0XHRcdH1cblx0XG5cdFx0XHRpZiAoIXRoaXMub3B0aW9ucy5pbnRlcm5hbFJlZ2lzdGVyT25seSkge1xuXHRcdFx0XHR0aGlzLl9yZWdpc3RlciA9IF9fcmVnaXN0ZXI7XG5cdFx0XHR9XG5cdFxuXHRcdFx0dGhpcy5pbml0aWFsaXplKCk7XG5cdFx0fVxuXHRcblx0XHRfY3JlYXRlQ2xhc3MoTW9kdWxlcywgW3tcblx0XHRcdGtleTogJ2luaXRpYWxpemUnLFxuXHRcdFx0dmFsdWU6IGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XG5cdFx0XHRcdHRoaXMucXVlcnlTdHJpbmcgPSAnWycgKyB0aGlzLm9wdGlvbnMuYXR0clByZWZpeCArICctJyArIHRoaXMub3B0aW9ucy5hdHRyTmFtZSArICddJztcblx0XHRcdFx0X19yZWdpc3Rlci5tb2R1bGVzSW5Db250ZXh0ID0gVmVhbXMuaGVscGVycy5xdWVyeVNlbGVjdG9yQXJyYXkodGhpcy5xdWVyeVN0cmluZyk7XG5cdFxuXHRcdFx0XHRpZiAodGhpcy5vcHRpb25zLnVzZU11dGF0aW9uT2JzZXJ2ZXIpIHtcblx0XHRcdFx0XHR0aGlzLm9ic2VydmUoZG9jdW1lbnQuYm9keSk7XG5cdFx0XHRcdH1cblx0XG5cdFx0XHRcdHRoaXMuYmluZEV2ZW50cygpO1xuXHRcdFx0fVxuXHRcdH0sIHtcblx0XHRcdGtleTogJ2JpbmRFdmVudHMnLFxuXHRcdFx0dmFsdWU6IGZ1bmN0aW9uIGJpbmRFdmVudHMoKSB7XG5cdFx0XHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cdFxuXHRcdFx0XHRpZiAoIVZlYW1zLlZlbnQgJiYgdGhpcy5vcHRpb25zLnVzZU11dGF0aW9uT2JzZXJ2ZXIgPT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5pbmZvKCdWZWFtc01vZHVsZXMgOjogSW4gb3JkZXIgdG8gd29yayB3aXRoIHRoZSB0aGUgYWpheCBoYW5kbGluZyBpbiBWZWFtc01vZHVsZXNIYW5kbGVyICcgKyAneW91IG5lZWQgdG8gZGVmaW5lIFwidXNlTXV0YXRpb25PYnNlcnZlclwiIG9yIHVzZSB0aGUgVmVhbXNWZW50IHBsdWdpbiEnKTtcblx0XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFxuXHRcdFx0XHRpZiAoVmVhbXMuVmVudCAmJiB0aGlzLm9wdGlvbnMudXNlTXV0YXRpb25PYnNlcnZlciA9PT0gZmFsc2UpIHtcblx0XHRcdFx0XHRWZWFtcy5WZW50Lm9uKFZlYW1zLkVWRU5UUy5ET01jaGFuZ2VkLCBmdW5jdGlvbiAoZSwgY29udGV4dCkge1xuXHRcdFx0XHRcdFx0X19yZWdpc3Rlci5tb2R1bGVzSW5Db250ZXh0ID0gX3RoaXMuZ2V0TW9kdWxlc0luQ29udGV4dChjb250ZXh0KTtcblx0XG5cdFx0XHRcdFx0XHRpZiAoX3RoaXMub3B0aW9ucy5sb2dzKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUuaW5mbygnVmVhbXNNb2R1bGVzIDo6IFJlY29yZGluZyBuZXcgY29udGV4dC4gV2hlbiBhdmFpbGFibGUgbmV3IG1vZHVsZXMgd2lsbCBiZSBpbml0aWFsaXNlZCBpbjogJywgY29udGV4dCk7XG5cdFx0XHRcdFx0XHR9XG5cdFxuXHRcdFx0XHRcdFx0X3RoaXMucmVnaXN0ZXJBbGwoKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcblx0XHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdFx0Ly8gU1RBVElDIENBQ0hFIEhBTkRMRVJcblx0XHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcblx0XHRcdC8qKlxuXHQgICAqIFNhdmUgdGhlIG1vZHVsZSBpbiBfX2NhY2hlLlxuXHQgICAqXG5cdCAgICogQHBhcmFtIHtPYmplY3R9IG1vZHVsZSAtIG1vZHVsZSBtZXRhZGF0YSBvYmplY3QgKEBzZWUgVmVhbXNDb21wb25lbnQubWV0YURhdGEoKSlcblx0ICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCAtIG1vZHVsZSBlbGVtZW50ICh0aGlzLmVsKVxuXHQgICAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YW5jZSAtIG1vZHVsZSBpbnN0YW5jZVxuXHQgICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2UgLSBtb2R1bGUgbmFtZXNwYWNlXG5cdCAgICovXG5cdFxuXHRcdH0sIHtcblx0XHRcdGtleTogJ2JpbmRDb25kaXRpb25zJyxcblx0XHRcdHZhbHVlOiBmdW5jdGlvbiBiaW5kQ29uZGl0aW9ucygpIHtcblx0XHRcdFx0dmFyIF90aGlzMiA9IHRoaXM7XG5cdFxuXHRcdFx0XHRfX3JlZ2lzdGVyLm1vZHVsZXNPbkNvbmRpdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAobW9kdWxlKSB7XG5cdFx0XHRcdFx0aWYgKG1vZHVsZS5jb25kaXRpb25zTGlzdGVuT24gJiYgbW9kdWxlLmNvbmRpdGlvbnNMaXN0ZW5Pbi5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdF90aGlzMi5iaW5kQ29uZGl0aW9uKG1vZHVsZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9LCB7XG5cdFx0XHRrZXk6ICdiaW5kQ29uZGl0aW9uJyxcblx0XHRcdHZhbHVlOiBmdW5jdGlvbiBiaW5kQ29uZGl0aW9uKG1vZHVsZSkge1xuXHRcdFx0XHR2YXIgX3RoaXMzID0gdGhpcztcblx0XG5cdFx0XHRcdHZhciBnbG9iYWxFdnRzID0gbW9kdWxlLmNvbmRpdGlvbnNMaXN0ZW5Pbi5qb2luKCcgJyk7XG5cdFxuXHRcdFx0XHRpZiAoVmVhbXMuVmVudCkge1xuXHRcdFx0XHRcdFZlYW1zLlZlbnQuc3Vic2NyaWJlKGdsb2JhbEV2dHMsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdF90aGlzMy5yZWdpc3RlckNvbmRpdGlvbmFsTW9kdWxlKG1vZHVsZSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XG5cdFx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHRcdC8vIFVOL1JFR0lTVEVSIEhBTkRMRVJcblx0XHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcblx0XHRcdC8qKlxuXHQgICAqIFNwbGl0IHVwIG1vZHVsZXMgZGVwZW5kaW5nIG9uIGNvbmRpdGlvbiBjaGVja1xuXHQgICAqL1xuXHRcblx0XHR9LCB7XG5cdFx0XHRrZXk6ICdzcGxpdFVwTW9kdWxlcycsXG5cdFx0XHR2YWx1ZTogZnVuY3Rpb24gc3BsaXRVcE1vZHVsZXMoKSB7XG5cdFx0XHRcdHZhciBfdGhpczQgPSB0aGlzO1xuXHRcblx0XHRcdFx0X19yZWdpc3Rlci5tb2R1bGVzSW5SZWdpc3Rlci5mb3JFYWNoKGZ1bmN0aW9uIChvYmopIHtcblx0XHRcdFx0XHRpZiAoX3RoaXM0LmNvbnN0cnVjdG9yLmlzQ29uZGl0aW9uKG9iaikpIHtcblx0XHRcdFx0XHRcdF9fcmVnaXN0ZXIubW9kdWxlc09uQ29uZGl0aW9ucy5wdXNoKG9iaik7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdF9fcmVnaXN0ZXIubW9kdWxlc09uSW5pdC5wdXNoKG9iaik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XG5cdFx0XHQvKipcblx0ICAgKiBSZWdpc3RlciBtdWx0aXBsZSBtb2R1bGVzLlxuXHQgICAqXG5cdCAgICogQHBhcmFtIHtBcnJheX0gYXJyIC0gQXJyYXkgd2hpY2ggY29udGFpbnMgdGhlIG1vZHVsZXMgYXMgb2JqZWN0LlxuXHQgICAqXG5cdCAgICogQHB1YmxpY1xuXHQgICAqL1xuXHRcblx0XHR9LCB7XG5cdFx0XHRrZXk6ICdyZWdpc3RlcicsXG5cdFx0XHR2YWx1ZTogZnVuY3Rpb24gcmVnaXN0ZXIoYXJyKSB7XG5cdFx0XHRcdGlmICghQXJyYXkuaXNBcnJheShhcnIpKSB7XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdWZWFtc01vZHVsZXMgOjogWW91IG5lZWQgdG8gcGFzcyBhbiBhcnJheSB0byByZWdpc3RlcigpIScpO1xuXHRcdFx0XHR9XG5cdFxuXHRcdFx0XHRfX3JlZ2lzdGVyLm1vZHVsZXNJblJlZ2lzdGVyID0gX19yZWdpc3Rlci5tb2R1bGVzSW5SZWdpc3Rlci5jb25jYXQoYXJyKTtcblx0XG5cdFx0XHRcdHRoaXMuc3BsaXRVcE1vZHVsZXMoKTtcblx0XHRcdFx0dGhpcy5iaW5kQ29uZGl0aW9ucygpO1xuXHRcdFx0XHR0aGlzLnJlZ2lzdGVyQWxsKCk7XG5cdFx0XHR9XG5cdFxuXHRcdFx0LyoqXG5cdCAgICogUmVnaXN0ZXIgYWxsIG1vZHVsZXNcblx0ICAgKi9cblx0XG5cdFx0fSwge1xuXHRcdFx0a2V5OiAncmVnaXN0ZXJBbGwnLFxuXHRcdFx0dmFsdWU6IGZ1bmN0aW9uIHJlZ2lzdGVyQWxsKCkge1xuXHRcdFx0XHRpZiAoIV9fcmVnaXN0ZXIubW9kdWxlc0luUmVnaXN0ZXIpIHJldHVybjtcblx0XG5cdFx0XHRcdHRoaXMucmVnaXN0ZXJJbml0aWFsTW9kdWxlcygpO1xuXHRcdFx0XHR0aGlzLnJlZ2lzdGVyQ29uZGl0aW9uYWxNb2R1bGVzKCk7XG5cdFx0XHR9XG5cdFxuXHRcdFx0LyoqXG5cdCAgICogUmVnaXN0ZXIgYWxsIGluaXRpYWwgbW9kdWxlc1xuXHQgICAqL1xuXHRcblx0XHR9LCB7XG5cdFx0XHRrZXk6ICdyZWdpc3RlckluaXRpYWxNb2R1bGVzJyxcblx0XHRcdHZhbHVlOiBmdW5jdGlvbiByZWdpc3RlckluaXRpYWxNb2R1bGVzKCkge1xuXHRcdFx0XHR2YXIgX3RoaXM1ID0gdGhpcztcblx0XG5cdFx0XHRcdF9fcmVnaXN0ZXIubW9kdWxlc09uSW5pdC5mb3JFYWNoKGZ1bmN0aW9uIChvYmopIHtcblx0XHRcdFx0XHRfdGhpczUucmVnaXN0ZXJPbmUob2JqKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFxuXHRcdFx0LyoqXG5cdCAgICogUmVnaXN0ZXIgY29uZGl0aW9uYWwgbW9kdWxlc1xuXHQgICAqXG5cdCAgICogVGhlcmVmb3JlIHdlIGNoZWNrIHRoZSBjb25kaXRpb24gYW5kXG5cdCAgICogd2hlbiB0cnVlIHJlZ2lzdGVyIHRoZSBzcGVjaWZpYyBtb2R1bGVcblx0ICAgKiB3aGVuIGZhbHNlIHVucmVnaXN0ZXIgdGhlIHNwZWNpZmljIG1vZHVsZVxuXHQgICAqL1xuXHRcblx0XHR9LCB7XG5cdFx0XHRrZXk6ICdyZWdpc3RlckNvbmRpdGlvbmFsTW9kdWxlcycsXG5cdFx0XHR2YWx1ZTogZnVuY3Rpb24gcmVnaXN0ZXJDb25kaXRpb25hbE1vZHVsZXMoKSB7XG5cdFx0XHRcdHZhciBfdGhpczYgPSB0aGlzO1xuXHRcblx0XHRcdFx0X19yZWdpc3Rlci5tb2R1bGVzT25Db25kaXRpb25zLmZvckVhY2goZnVuY3Rpb24gKG9iaikge1xuXHRcdFx0XHRcdF90aGlzNi5yZWdpc3RlckNvbmRpdGlvbmFsTW9kdWxlKG9iaik7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0sIHtcblx0XHRcdGtleTogJ3JlZ2lzdGVyQ29uZGl0aW9uYWxNb2R1bGUnLFxuXHRcdFx0dmFsdWU6IGZ1bmN0aW9uIHJlZ2lzdGVyQ29uZGl0aW9uYWxNb2R1bGUob2JqKSB7XG5cdFx0XHRcdGlmICh0aGlzLmNvbnN0cnVjdG9yLm1ha2VDb25kaXRpb25DaGVjayhvYmopKSB7XG5cdFx0XHRcdFx0dGhpcy5yZWdpc3Rlck9uZShvYmopO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMudW5yZWdpc3Rlck9uZShvYmopO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFxuXHRcdFx0LyoqXG5cdCAgICogUmVnaXN0ZXIgb25lIG1vZHVsZSBhbmQgaW5pdCB0aGUgZWxlbWVudHMgaW4gdGhlIHNwZWNpZmljIGNvbnRleHRcblx0ICAgKlxuXHQgICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2UgLSBSZXF1aXJlZDogZWxlbWVudCBuYW1lIGluIERPTVxuXHQgICAqIEBwYXJhbSB7U3RyaW5nfSBkb21OYW1lIC0gUmVxdWlyZWQ6IGVsZW1lbnQgbmFtZSBpbiBET01cblx0ICAgKiBAcGFyYW0ge09iamVjdH0gbW9kdWxlIC0gUmVxdWlyZWQ6IGNsYXNzIHdoaWNoIHdpbGwgYmUgdXNlZCB0byByZW5kZXIgeW91ciBtb2R1bGVcblx0ICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtyZW5kZXI9dHJ1ZV0gLSBPcHRpb25hbDogcmVuZGVyIHRoZSBjbGFzcywgaWYgZmFsc2UgdGhlIGNsYXNzIHdpbGwgb25seSBiZSBpbml0aWFsaXplZFxuXHQgICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtjYl0gLSBPcHRpb25hbDogcHJvdmlkZSBhIGZ1bmN0aW9uIHdoaWNoIHdpbGwgYmUgZXhlY3V0ZWQgYWZ0ZXIgaW5pdGlhbGlzYXRpb25cblx0ICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gT3B0aW9uYWw6IFlvdSBjYW4gcGFzcyBvcHRpb25zIHRvIHRoZSBtb2R1bGUgdmlhIEpTIChVc2VmdWwgZm9yIERPTUNoYW5nZWQpXG5cdCAgICpcblx0ICAgKi9cblx0XG5cdFx0fSwge1xuXHRcdFx0a2V5OiAncmVnaXN0ZXJPbmUnLFxuXHRcdFx0dmFsdWU6IGZ1bmN0aW9uIHJlZ2lzdGVyT25lKF9yZWYpIHtcblx0XHRcdFx0dmFyIG5hbWVzcGFjZSA9IF9yZWYubmFtZXNwYWNlLFxuXHRcdFx0XHQgICAgZG9tTmFtZSA9IF9yZWYuZG9tTmFtZSxcblx0XHRcdFx0ICAgIG1vZHVsZSA9IF9yZWYubW9kdWxlLFxuXHRcdFx0XHQgICAgcmVuZGVyID0gX3JlZi5yZW5kZXIsXG5cdFx0XHRcdCAgICBjYiA9IF9yZWYuY2IsXG5cdFx0XHRcdCAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zO1xuXHRcblx0XHRcdFx0dmFyIG5hbWVTcGFjZSA9IG5hbWVzcGFjZSA/IG5hbWVzcGFjZSA6IGRvbU5hbWU7XG5cdFxuXHRcdFx0XHRpZiAoIW1vZHVsZSkgdGhyb3cgbmV3IEVycm9yKCdWZWFtc01vZHVsZXMgOjogSW4gb3JkZXIgdG8gd29yayB3aXRoIHJlZ2lzdGVyKCkgeW91IG5lZWQgdG8gZGVmaW5lIGEgbW9kdWxlIScpO1xuXHRcdFx0XHRpZiAoIW5hbWVTcGFjZSkgdGhyb3cgbmV3IEVycm9yKCdWZWFtc01vZHVsZXMgOjogSW4gb3JkZXIgdG8gd29yayB3aXRoIHJlZ2lzdGVyKCkgeW91IG5lZWQgdG8gZGVmaW5lIGEgbW9kdWxlIScpO1xuXHRcblx0XHRcdFx0dGhpcy5pbml0TW9kdWxlcyh7XG5cdFx0XHRcdFx0bmFtZXNwYWNlOiBuYW1lU3BhY2UsXG5cdFx0XHRcdFx0bW9kdWxlOiBtb2R1bGUsXG5cdFx0XHRcdFx0cmVuZGVyOiByZW5kZXIsXG5cdFx0XHRcdFx0Y2I6IGNiLFxuXHRcdFx0XHRcdG9wdGlvbnM6IG9wdGlvbnNcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSwge1xuXHRcdFx0a2V5OiAndW5yZWdpc3Rlck9uZScsXG5cdFx0XHR2YWx1ZTogZnVuY3Rpb24gdW5yZWdpc3Rlck9uZShfcmVmMikge1xuXHRcdFx0XHR2YXIgbmFtZXNwYWNlID0gX3JlZjIubmFtZXNwYWNlO1xuXHRcblx0XHRcdFx0aWYgKHRoaXMuY29uc3RydWN0b3IuY2hlY2tNb2R1bGVJbkNhY2hlKG5hbWVzcGFjZSwgJ25hbWVzcGFjZScpID09PSB0cnVlKSB7XG5cdFx0XHRcdFx0dGhpcy5jb25zdHJ1Y3Rvci5yZW1vdmVGcm9tQ2FjaGVCeUtleShuYW1lc3BhY2UsICduYW1lc3BhY2UnKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcblx0XHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdFx0Ly8gSU5JVCBIQU5ETEVSXG5cdFx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XG5cdFx0XHQvKipcblx0ICAgKiBJbml0aWFsaXplIGEgbW9kdWxlIGFuZCByZW5kZXIgaXQgYW5kL29yIHByb3ZpZGUgYSBjYWxsYmFjayBmdW5jdGlvblxuXHQgICAqXG5cdCAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVzcGFjZSAtIFJlcXVpcmVkOiBkb20gbmFtZSBvZiB0aGUgZWxlbWVudFxuXHQgICAqIEBwYXJhbSB7T2JqZWN0fSBtb2R1bGUgLSBSZXF1aXJlZDogY2xhc3Mgd2hpY2ggd2lsbCBiZSB1c2VkIHRvIHJlbmRlciB5b3VyIG1vZHVsZVxuXHQgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3JlbmRlcj10cnVlXSAtIE9wdGlvbmFsOiByZW5kZXIgdGhlIGNsYXNzLCBpZiBmYWxzZSB0aGUgY2xhc3Mgd2lsbCBvbmx5IGJlIGluaXRpYWxpemVkXG5cdCAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIE9wdGlvbmFsOiBZb3UgY2FuIHBhc3Mgb3B0aW9ucyB0byB0aGUgbW9kdWxlIHZpYSBKUyAoVXNlZnVsIGZvciBET01DaGFuZ2VkKVxuXHQgICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtjYl0gLSBPcHRpb25hbDogcHJvdmlkZSBhIGZ1bmN0aW9uIHdoaWNoIHdpbGwgYmUgZXhlY3V0ZWQgYWZ0ZXIgaW5pdGlhbGlzYXRpb25cblx0ICAgKlxuXHQgICAqL1xuXHRcblx0XHR9LCB7XG5cdFx0XHRrZXk6ICdpbml0TW9kdWxlcycsXG5cdFx0XHR2YWx1ZTogZnVuY3Rpb24gaW5pdE1vZHVsZXMoX3JlZjMpIHtcblx0XHRcdFx0dmFyIF90aGlzNyA9IHRoaXM7XG5cdFxuXHRcdFx0XHR2YXIgbmFtZXNwYWNlID0gX3JlZjMubmFtZXNwYWNlLFxuXHRcdFx0XHQgICAgbW9kdWxlID0gX3JlZjMubW9kdWxlLFxuXHRcdFx0XHQgICAgcmVuZGVyID0gX3JlZjMucmVuZGVyLFxuXHRcdFx0XHQgICAgb3B0aW9ucyA9IF9yZWYzLm9wdGlvbnMsXG5cdFx0XHRcdCAgICBjYiA9IF9yZWYzLmNiO1xuXHRcblx0XHRcdFx0VmVhbXMuaGVscGVycy5mb3JFYWNoKF9fcmVnaXN0ZXIubW9kdWxlc0luQ29udGV4dCwgZnVuY3Rpb24gKGksIGVsKSB7XG5cdFx0XHRcdFx0X3RoaXM3LmluaXRNb2R1bGUoe1xuXHRcdFx0XHRcdFx0ZWw6IGVsLFxuXHRcdFx0XHRcdFx0bmFtZXNwYWNlOiBuYW1lc3BhY2UsXG5cdFx0XHRcdFx0XHRvcHRpb25zOiBvcHRpb25zLFxuXHRcdFx0XHRcdFx0bW9kdWxlOiBtb2R1bGUsXG5cdFx0XHRcdFx0XHRyZW5kZXI6IHJlbmRlcixcblx0XHRcdFx0XHRcdGNiOiBjYlxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9LCB7XG5cdFx0XHRrZXk6ICdpbml0TW9kdWxlJyxcblx0XHRcdHZhbHVlOiBmdW5jdGlvbiBpbml0TW9kdWxlKF9yZWY0KSB7XG5cdFx0XHRcdHZhciBlbCA9IF9yZWY0LmVsLFxuXHRcdFx0XHQgICAgbmFtZXNwYWNlID0gX3JlZjQubmFtZXNwYWNlLFxuXHRcdFx0XHQgICAgb3B0aW9ucyA9IF9yZWY0Lm9wdGlvbnMsXG5cdFx0XHRcdCAgICBtb2R1bGUgPSBfcmVmNC5tb2R1bGUsXG5cdFx0XHRcdCAgICByZW5kZXIgPSBfcmVmNC5yZW5kZXIsXG5cdFx0XHRcdCAgICBjYiA9IF9yZWY0LmNiO1xuXHRcblx0XHRcdFx0dmFyIG5vUmVuZGVyID0gZWwuZ2V0QXR0cmlidXRlKHRoaXMub3B0aW9ucy5hdHRyUHJlZml4ICsgJy1uby1yZW5kZXInKSB8fCByZW5kZXIgPT09IGZhbHNlIHx8IGZhbHNlO1xuXHRcdFx0XHR2YXIgZGF0YU1vZHVsZXMgPSBlbC5nZXRBdHRyaWJ1dGUodGhpcy5vcHRpb25zLmF0dHJQcmVmaXggKyAnLScgKyB0aGlzLm9wdGlvbnMuYXR0ck5hbWUpLnNwbGl0KCcgJyk7XG5cdFxuXHRcdFx0XHRpZiAoZGF0YU1vZHVsZXMuaW5kZXhPZihuYW1lc3BhY2UpICE9PSAtMSkge1xuXHRcdFx0XHRcdC8vIENoZWNrIGluaXQgc3RhdGVcblx0XHRcdFx0XHRpZiAodGhpcy5jb25zdHJ1Y3Rvci5jaGVja01vZHVsZUluQ2FjaGUoZWwsICdlbGVtZW50JywgbmFtZXNwYWNlKSA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5pbmZvKCdWZWFtc01vZHVsZXMgOjogRWxlbWVudCBpcyBhbHJlYWR5IGluIGNhY2hlIGFuZCBpbml0aWFsaXplZDogJyk7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhlbCk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcblx0XHRcdFx0XHQvLyBHbyBhaGVhZCB3aGVuIGNvbmRpdGlvbiBpcyB0cnVlXG5cdFx0XHRcdFx0dmFyIGF0dHJzID0gZWwuZ2V0QXR0cmlidXRlKHRoaXMub3B0aW9ucy5hdHRyUHJlZml4ICsgJy0nICsgdGhpcy5vcHRpb25zLmF0dHJPcHRpb25zKTtcblx0XHRcdFx0XHR2YXIgbWVyZ2VkT3B0aW9ucyA9IFZlYW1zLmhlbHBlcnMuZXh0ZW5kKEpTT04ucGFyc2UoYXR0cnMpLCBvcHRpb25zIHx8IHt9KTtcblx0XHRcdFx0XHR2YXIgTW9kdWxlID0gbW9kdWxlO1xuXHRcdFx0XHRcdHZhciBpbnN0YW5jZSA9IG5ldyBNb2R1bGUoe1xuXHRcdFx0XHRcdFx0ZWw6IGVsLFxuXHRcdFx0XHRcdFx0bmFtZXNwYWNlOiBuYW1lc3BhY2UsXG5cdFx0XHRcdFx0XHRvcHRpb25zOiBtZXJnZWRPcHRpb25zLFxuXHRcdFx0XHRcdFx0YXBwSW5zdGFuY2U6IFZlYW1zXG5cdFx0XHRcdFx0fSk7XG5cdFxuXHRcdFx0XHRcdHRoaXMuY29uc3RydWN0b3IuYWRkVG9DYWNoZSh7XG5cdFx0XHRcdFx0XHRlbGVtZW50OiBlbCxcblx0XHRcdFx0XHRcdG1vZHVsZTogbW9kdWxlLFxuXHRcdFx0XHRcdFx0aW5zdGFuY2U6IGluc3RhbmNlLFxuXHRcdFx0XHRcdFx0bmFtZXNwYWNlOiBuYW1lc3BhY2Vcblx0XHRcdFx0XHR9KTtcblx0XG5cdFx0XHRcdFx0Ly8gTW91bnQgcHJvY2Vzc1xuXHRcdFx0XHRcdGlmIChpbnN0YW5jZS53aWxsTW91bnQpIGluc3RhbmNlLndpbGxNb3VudCgpO1xuXHRcblx0XHRcdFx0XHQvLyBSZW5kZXIgYWZ0ZXIgaW5pdGlhbCBtb2R1bGUgbG9hZGluZ1xuXHRcdFx0XHRcdGlmICghbm9SZW5kZXIpIGluc3RhbmNlLnJlbmRlcigpO1xuXHRcblx0XHRcdFx0XHQvLyBQcm92aWRlIGNhbGxiYWNrIGZ1bmN0aW9uIGluIHdoaWNoIHlvdSBjYW4gdXNlIG1vZHVsZSBhbmQgb3B0aW9uc1xuXHRcdFx0XHRcdGlmIChjYiAmJiB0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKG1vZHVsZSwgbWVyZ2VkT3B0aW9ucyk7XG5cdFxuXHRcdFx0XHRcdC8vIE1vdW50IHByb2Nlc3Ncblx0XHRcdFx0XHRpZiAoaW5zdGFuY2UuZGlkTW91bnQpIGluc3RhbmNlLmRpZE1vdW50KCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XG5cdFx0XHQvKipcblx0ICAgKiBBZGQgbXV0YXRpb24gb2JzZXJ2ZXIgdG8gb2JzZXJ2ZSBuZXcgbW9kdWxlcy5cblx0ICAgKlxuXHQgICAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0IC0gQ29udGV4dCBmb3IgdGhlIG11dGF0aW9uIG9ic2VydmVyXG5cdCAgICpcblx0ICAgKiBUT0RPOiBJbXByb3ZlIGZvciBsb29wc1xuXHQgICAqL1xuXHRcblx0XHR9LCB7XG5cdFx0XHRrZXk6ICdvYnNlcnZlJyxcblx0XHRcdHZhbHVlOiBmdW5jdGlvbiBvYnNlcnZlKGNvbnRleHQpIHtcblx0XHRcdFx0dmFyIF90aGlzOCA9IHRoaXM7XG5cdFxuXHRcdFx0XHR2YXIgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAobXV0YXRpb25zKSB7XG5cdFx0XHRcdFx0Ly8gbG9vayB0aHJvdWdoIGFsbCBtdXRhdGlvbnMgdGhhdCBqdXN0IG9jY3VyZWRcblx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG11dGF0aW9ucy5sZW5ndGg7ICsraSkge1xuXHRcdFx0XHRcdFx0Ly8gbG9vayB0aHJvdWdoIGFsbCBhZGRlZCBub2RlcyBvZiB0aGlzIG11dGF0aW9uXG5cdFxuXHRcdFx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBtdXRhdGlvbnNbaV0uYWRkZWROb2Rlcy5sZW5ndGg7ICsraikge1xuXHRcdFx0XHRcdFx0XHR2YXIgYWRkZWROb2RlID0gbXV0YXRpb25zW2ldLmFkZGVkTm9kZXNbal07XG5cdFxuXHRcdFx0XHRcdFx0XHRpZiAoYWRkZWROb2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoYWRkZWROb2RlLmdldEF0dHJpYnV0ZShfdGhpczgub3B0aW9ucy5hdHRyUHJlZml4ICsgJy0nICsgX3RoaXM4Lm9wdGlvbnMuYXR0ck5hbWUpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgbmFtZXNwYWNlID0gYWRkZWROb2RlLmdldEF0dHJpYnV0ZShfdGhpczgub3B0aW9ucy5hdHRyUHJlZml4ICsgJy0nICsgX3RoaXM4Lm9wdGlvbnMuYXR0ck5hbWUpO1xuXHRcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChfdGhpczgub3B0aW9ucy5sb2dzKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUuaW5mbygnVmVhbXNNb2R1bGVzIDo6IFJlY29yZGluZyBhIG5ldyBtb2R1bGUgd2l0aCB0aGUgbmFtZXNwYWNlICcgKyBuYW1lc3BhY2UgKyAnIGF0OiAnLCBhZGRlZE5vZGUpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcblx0XHRcdFx0XHRcdFx0XHRcdHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0XHRcdHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuXHRcblx0XHRcdFx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZvciAodmFyIF9pdGVyYXRvciA9IF9fcmVnaXN0ZXIubW9kdWxlc0luUmVnaXN0ZXJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyIG1vZHVsZSA9IF9zdGVwLnZhbHVlO1xuXHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAobW9kdWxlLm5hbWVzcGFjZSA9PT0gbmFtZXNwYWNlKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfdGhpczguaW5pdE1vZHVsZSh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVsOiBhZGRlZE5vZGUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZTogbW9kdWxlLm1vZHVsZSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZXNwYWNlOiBtb2R1bGUubmFtZXNwYWNlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdF9pdGVyYXRvckVycm9yID0gZXJyO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSBmaW5hbGx5IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybikge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0X2l0ZXJhdG9yLnJldHVybigpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0fSBmaW5hbGx5IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRocm93IF9pdGVyYXRvckVycm9yO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XG5cdFx0XHRcdFx0XHRcdFx0aWYgKF90aGlzOC5nZXRNb2R1bGVzSW5Db250ZXh0KGFkZGVkTm9kZSkubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRfX3JlZ2lzdGVyLm1vZHVsZXNJbkNvbnRleHQgPSBfdGhpczguZ2V0TW9kdWxlc0luQ29udGV4dChhZGRlZE5vZGUpO1xuXHRcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChfdGhpczgub3B0aW9ucy5sb2dzKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUuaW5mbygnVmVhbXNNb2R1bGVzIDo6IFJlY29yZGluZyBuZXcgY29udGV4dC4gV2hlbiBhdmFpbGFibGUgbmV3IG1vZHVsZXMgd2lsbCBiZSBpbml0aWFsaXNlZCBpbjogJywgYWRkZWROb2RlKTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XG5cdFx0XHRcdFx0XHRcdFx0XHRfdGhpczgucmVnaXN0ZXJBbGwoKTtcblx0XG5cdFx0XHRcdFx0XHRcdFx0XHRfX3JlZ2lzdGVyLm1vZHVsZXNJbkNvbnRleHQgPSBfdGhpczguZ2V0TW9kdWxlc0luQ29udGV4dChkb2N1bWVudCk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFxuXHRcdFx0XHRcdFx0Zm9yICh2YXIgX2ogPSAwOyBfaiA8IG11dGF0aW9uc1tpXS5yZW1vdmVkTm9kZXMubGVuZ3RoOyArK19qKSB7XG5cdFx0XHRcdFx0XHRcdHZhciByZW1vdmVkTm9kZSA9IG11dGF0aW9uc1tpXS5yZW1vdmVkTm9kZXNbX2pdO1xuXHRcblx0XHRcdFx0XHRcdFx0aWYgKHJlbW92ZWROb2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAocmVtb3ZlZE5vZGUuZ2V0QXR0cmlidXRlKF90aGlzOC5vcHRpb25zLmF0dHJQcmVmaXggKyAnLScgKyBfdGhpczgub3B0aW9ucy5hdHRyTmFtZSkpIHtcblx0XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoX3RoaXM4Lm9wdGlvbnMubG9ncykge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmluZm8oJ1ZlYW1zTW9kdWxlcyA6OiBSZWNvcmRpbmcgZGVsZXRpb24gb2YgbW9kdWxlOiAnLCByZW1vdmVkTm9kZSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFxuXHRcdFx0XHRcdFx0XHRcdFx0X3RoaXM4LmNvbnN0cnVjdG9yLnJlbW92ZUZyb21DYWNoZUJ5S2V5KHJlbW92ZWROb2RlKTtcblx0XG5cdFx0XHRcdFx0XHRcdFx0XHRfX3JlZ2lzdGVyLm1vZHVsZXNJbkNvbnRleHQgPSBfdGhpczguZ2V0TW9kdWxlc0luQ29udGV4dChkb2N1bWVudCk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcblx0XHRcdFx0XHRcdFx0XHRpZiAoX3RoaXM4LmdldE1vZHVsZXNJbkNvbnRleHQocmVtb3ZlZE5vZGUpLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0X19yZWdpc3Rlci5tb2R1bGVzSW5Db250ZXh0ID0gX3RoaXM4LmdldE1vZHVsZXNJbkNvbnRleHQocmVtb3ZlZE5vZGUpO1xuXHRcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChfdGhpczgub3B0aW9ucy5sb2dzKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUuaW5mbygnVmVhbXNNb2R1bGVzIDo6IFJlY29yZGluZyBkZWxldGlvbiBvZiBET00gZWxlbWVudC4gV2hlbiBhdmFpbGFibGUgbW9kdWxlcyB3aWxsIGJlIHVuYm91bmQgaW4gJywgcmVtb3ZlZE5vZGUpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcblx0XHRcdFx0XHRcdFx0XHRcdF9fcmVnaXN0ZXIubW9kdWxlc0luQ29udGV4dC5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdF90aGlzOC5jb25zdHJ1Y3Rvci5yZW1vdmVGcm9tQ2FjaGVCeUtleShub2RlKTtcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcblx0XHRcdFx0XHRcdFx0XHRcdF9fcmVnaXN0ZXIubW9kdWxlc0luQ29udGV4dCA9IF90aGlzOC5nZXRNb2R1bGVzSW5Db250ZXh0KGRvY3VtZW50KTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcblx0XHRcdFx0b2JzZXJ2ZXIub2JzZXJ2ZShjb250ZXh0LCB7XG5cdFx0XHRcdFx0Y2hpbGRMaXN0OiB0cnVlLFxuXHRcdFx0XHRcdHN1YnRyZWU6IHRydWVcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFxuXHRcdFx0LyoqXG5cdCAgICogR2V0IE1vZHVsZXMgaW4gYSBzcGVjaWZpYyBjb250ZXh0LlxuXHQgICAqXG5cdCAgICogQHBhcmFtIHtPYmplY3R9IGNvbnRleHQgLSBDb250ZXh0IGZvciBxdWVyeSBzcGVjaWZpYyBzdHJpbmdcblx0ICAgKi9cblx0XG5cdFx0fSwge1xuXHRcdFx0a2V5OiAnZ2V0TW9kdWxlc0luQ29udGV4dCcsXG5cdFx0XHR2YWx1ZTogZnVuY3Rpb24gZ2V0TW9kdWxlc0luQ29udGV4dChjb250ZXh0KSB7XG5cdFx0XHRcdHJldHVybiBWZWFtcy5oZWxwZXJzLnF1ZXJ5U2VsZWN0b3JBcnJheSh0aGlzLnF1ZXJ5U3RyaW5nLCBjb250ZXh0KTtcblx0XHRcdH1cblx0XHR9XSwgW3tcblx0XHRcdGtleTogJ2FkZFRvQ2FjaGUnLFxuXHRcdFx0dmFsdWU6IGZ1bmN0aW9uIGFkZFRvQ2FjaGUoX3JlZjUpIHtcblx0XHRcdFx0dmFyIG1vZHVsZSA9IF9yZWY1Lm1vZHVsZSxcblx0XHRcdFx0ICAgIGVsZW1lbnQgPSBfcmVmNS5lbGVtZW50LFxuXHRcdFx0XHQgICAgaW5zdGFuY2UgPSBfcmVmNS5pbnN0YW5jZSxcblx0XHRcdFx0ICAgIG5hbWVzcGFjZSA9IF9yZWY1Lm5hbWVzcGFjZTtcblx0XG5cdFx0XHRcdF9fY2FjaGUucHVzaCh7XG5cdFx0XHRcdFx0bW9kdWxlOiBtb2R1bGUsXG5cdFx0XHRcdFx0ZWxlbWVudDogZWxlbWVudCxcblx0XHRcdFx0XHRpbnN0YW5jZTogaW5zdGFuY2UsXG5cdFx0XHRcdFx0bmFtZXNwYWNlOiBuYW1lc3BhY2Vcblx0XHRcdFx0fSk7XG5cdFxuXHRcdFx0XHRpZiAoVmVhbXMuVmVudCAmJiBWZWFtcy5FVkVOVFMubW9kdWxlQ2FjaGVkKSB7XG5cdFx0XHRcdFx0VmVhbXMuVmVudC50cmlnZ2VyKFZlYW1zLkVWRU5UUy5tb2R1bGVDYWNoZWQsIHtcblx0XHRcdFx0XHRcdG1vZHVsZTogbW9kdWxlLFxuXHRcdFx0XHRcdFx0ZWxlbWVudDogZWxlbWVudFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSwge1xuXHRcdFx0a2V5OiAncmVtb3ZlRnJvbUNhY2hlQnlLZXknLFxuXHRcdFx0dmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUZyb21DYWNoZUJ5S2V5KG9iaikge1xuXHRcdFx0XHR2YXIga2V5ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAnZWxlbWVudCc7XG5cdFxuXHRcdFx0XHR2YXIgZGVsZXRlSW5kZXggPSB2b2lkIDA7XG5cdFxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IF9fY2FjaGUubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHR2YXIgY2FjaGVJdGVtID0gX19jYWNoZVtpXTtcblx0XG5cdFx0XHRcdFx0aWYgKGNhY2hlSXRlbVtrZXldID09PSBvYmopIHtcblx0XHRcdFx0XHRcdGlmIChjYWNoZUl0ZW0uaW5zdGFuY2Uud2lsbFVubW91bnQpIGNhY2hlSXRlbS5pbnN0YW5jZS53aWxsVW5tb3VudCgpO1xuXHRcdFx0XHRcdFx0aWYgKGNhY2hlSXRlbS5pbnN0YW5jZS51bnJlZ2lzdGVyRXZlbnRzKSBjYWNoZUl0ZW0uaW5zdGFuY2UudW5yZWdpc3RlckV2ZW50cygpO1xuXHRcdFx0XHRcdFx0aWYgKGNhY2hlSXRlbS5pbnN0YW5jZS5kaWRVbm1vdW50KSBjYWNoZUl0ZW0uaW5zdGFuY2UuZGlkVW5tb3VudCgpO1xuXHRcblx0XHRcdFx0XHRcdGRlbGV0ZUluZGV4ID0gaTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XG5cdFx0XHRcdGlmIChkZWxldGVJbmRleCkgX19jYWNoZS5zcGxpY2UoZGVsZXRlSW5kZXgsIDEpO1xuXHRcdFx0fVxuXHRcdH0sIHtcblx0XHRcdGtleTogJ2NoZWNrTW9kdWxlSW5DYWNoZScsXG5cdFx0XHR2YWx1ZTogZnVuY3Rpb24gY2hlY2tNb2R1bGVJbkNhY2hlKG9iaikge1xuXHRcdFx0XHR2YXIga2V5ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAnZWxlbWVudCc7XG5cdFx0XHRcdHZhciBuYW1lc3BhY2UgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZDtcblx0XG5cdFx0XHRcdHZhciBzdGF0ZSA9IGZhbHNlO1xuXHRcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBfX2NhY2hlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0dmFyIGNhY2hlSXRlbSA9IF9fY2FjaGVbaV07XG5cdFxuXHRcdFx0XHRcdHN0YXRlID0gbmFtZXNwYWNlICE9PSB1bmRlZmluZWQgPyBjYWNoZUl0ZW1ba2V5XSA9PT0gb2JqICYmIGNhY2hlSXRlbS5uYW1lc3BhY2UgPT09IG5hbWVzcGFjZSA6IGNhY2hlSXRlbVtrZXldID09PSBvYmo7XG5cdFxuXHRcdFx0XHRcdGlmIChzdGF0ZSkgYnJlYWs7XG5cdFx0XHRcdH1cblx0XG5cdFx0XHRcdHJldHVybiBzdGF0ZTtcblx0XHRcdH1cblx0XG5cdFx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHRcdC8vIENPTkRJVElPTlMgSEFORExFUlxuXHRcdFx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFxuXHRcdH0sIHtcblx0XHRcdGtleTogJ2lzQ29uZGl0aW9uJyxcblx0XHRcdHZhbHVlOiBmdW5jdGlvbiBpc0NvbmRpdGlvbihfcmVmNikge1xuXHRcdFx0XHR2YXIgY29uZGl0aW9ucyA9IF9yZWY2LmNvbmRpdGlvbnM7XG5cdFxuXHRcdFx0XHRyZXR1cm4gY29uZGl0aW9ucyAmJiB0eXBlb2YgY29uZGl0aW9ucyA9PT0gJ2Z1bmN0aW9uJztcblx0XHRcdH1cblx0XHR9LCB7XG5cdFx0XHRrZXk6ICdtYWtlQ29uZGl0aW9uQ2hlY2snLFxuXHRcdFx0dmFsdWU6IGZ1bmN0aW9uIG1ha2VDb25kaXRpb25DaGVjayhfcmVmNykge1xuXHRcdFx0XHR2YXIgY29uZGl0aW9ucyA9IF9yZWY3LmNvbmRpdGlvbnM7XG5cdFxuXHRcdFx0XHRpZiAoY29uZGl0aW9ucyAmJiB0eXBlb2YgY29uZGl0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdHJldHVybiBjb25kaXRpb25zKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XSk7XG5cdFxuXHRcdHJldHVybiBNb2R1bGVzO1xuXHR9KCk7XG5cdFxuXHQvKipcblx0ICogUGx1Z2luIG9iamVjdFxuXHQgKi9cblx0XG5cdFxuXHR2YXIgVmVhbXNNb2R1bGVzID0ge1xuXHRcdG9wdGlvbnM6IHtcblx0XHRcdERFQlVHOiBmYWxzZSxcblx0XHRcdGF0dHJQcmVmaXg6ICdkYXRhLWpzJyxcblx0XHRcdGF0dHJOYW1lOiAnbW9kdWxlJyxcblx0XHRcdGF0dHJPcHRpb25zOiAnb3B0aW9ucycsXG5cdFx0XHRsb2dzOiBmYWxzZSxcblx0XHRcdGludGVybmFsQ2FjaGVPbmx5OiB0cnVlLFxuXHRcdFx0aW50ZXJuYWxSZWdpc3Rlck9ubHk6IGZhbHNlLFxuXHRcdFx0dXNlTXV0YXRpb25PYnNlcnZlcjogZmFsc2Vcblx0XHR9LFxuXHRcdHBsdWdpbk5hbWU6ICdNb2R1bGVzSGFuZGxlcicsXG5cdFx0aW5pdGlhbGl6ZTogZnVuY3Rpb24gaW5pdGlhbGl6ZShWZWFtcywgb3B0cykge1xuXHRcdFx0dGhpcy5vcHRpb25zID0gVmVhbXMuaGVscGVycy5leHRlbmQodGhpcy5vcHRpb25zLCBvcHRzIHx8IHt9KTtcblx0XHRcdFZlYW1zLm1vZHVsZXMgPSBWZWFtcy5tb2R1bGVzIHx8IG5ldyBNb2R1bGVzKFZlYW1zLCB0aGlzLm9wdGlvbnMpO1xuXHRcdH1cblx0fTtcblx0XG5cdGV4cG9ydHMuZGVmYXVsdCA9IFZlYW1zTW9kdWxlcztcblx0ZXhwb3J0cy5Nb2R1bGVzID0gTW9kdWxlcztcblxuLyoqKi8gfVxuLyoqKioqKi8gXSlcbn0pO1xuO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJpbmRleFwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJpbmRleFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJpbmRleFwiXSA9IHJvb3RbXCJpbmRleFwiXSB8fCB7fSwgcm9vdFtcImluZGV4XCJdW1wiaW5kZXhcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fSxcbi8qKioqKiovIFx0XHRcdGlkOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGxvYWRlZDogZmFsc2Vcbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdC8qKlxuXHQgKiBSZXByZXNlbnRzIGEgVmVudCBwbHVnaW4gd2hpY2ggY3JlYXRlcyBhbiBlbXB0eSBvYmplY3QuXG5cdCAqIFRoZSBvYmplY3Qgd2lsbCBiZSB1c2VkIGFzIHB1Ymxpc2gvc3Vic2NyaWJlIHBsdWdpbi5cblx0ICpcblx0ICogVGhlIG1vZHVsZSBleHRlbmRzIHRoZSBkZWZhdWx0IEVWRU5UUyBvYmplY3Qgb2YgVmVhbXNcblx0ICogd2hlbiB5b3UgcGFzcyB0aGUgb3B0aW9uIGNhbGxlZCAnZnVydGhlckV2ZW50cycuXG5cdCAqXG5cdCAqIEBtb2R1bGUgVmVhbXNWZW50XG5cdCAqXG5cdCAqIEBhdXRob3IgU2ViYXN0aWFuIEZpdHpuZXJcblx0ICovXG5cdFxuXHQvKipcblx0ICogQG1vZHVsZSBFdmVudHNIYW5kbGVyXG5cdCAqXG5cdCAqIFB1Yi9TdWIgc3lzdGVtIGZvciBMb29zZWx5IENvdXBsZWQgbG9naWMuXG5cdCAqIEJhc2VkIG9uIFBldGVyIEhpZ2dpbnMnIHBvcnQgZnJvbSBEb2pvIHRvIGpRdWVyeVxuXHQgKiBodHRwczovL2dpdGh1Yi5jb20vcGhpZ2dpbnM0Mi9ibG9vZHktanF1ZXJ5LXBsdWdpbnMvYmxvYi9tYXN0ZXIvcHVic3ViLmpzXG5cdCAqIGFkb3B0ZWQgaHR0cHM6Ly9naXRodWIuY29tL3BoaWdnaW5zNDIvYmxvb2R5LWpxdWVyeS1wbHVnaW5zL2Jsb2IvNTVlNDFkZjliZjA4ZjQyMzc4YmIwOGI5M2VmY2IyODU1NWI2MWFlYi9wdWJzdWIuanNcblx0ICpcblx0ICogbW9kaWZpZWQgYnkgU2ViYXN0aWFuIEZpdHpuZXJcblx0ICpcblx0ICovXG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0XHR2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0dmFyIEV2ZW50c0hhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIGNhY2hlID0ge30sXG5cdFxuXHRcdC8qKlxuXHQgICogICAgRXZlbnRzLnB1Ymxpc2hcblx0ICAqICAgIGUuZy46IEV2ZW50cy5wdWJsaXNoKFwiL0FydGljbGUvYWRkZWRcIiwge2FydGljbGU6IGFydGljbGV9LCB0aGlzKTtcblx0ICAqXG5cdCAgKiAgICBAY2xhc3MgRXZlbnRzXG5cdCAgKiAgICBAbWV0aG9kIHB1Ymxpc2hcblx0ICAqICAgIEBwYXJhbSB0b3BpYyB7U3RyaW5nfVxuXHQgICogICAgQHBhcmFtIGFyZ3MgICAge09iamVjdH1cblx0ICAqICAgIEBwYXJhbSBzY29wZSB7T2JqZWN0fSBPcHRpb25hbFxuXHQgICovXG5cdFx0cHVibGlzaCA9IGZ1bmN0aW9uIHB1Ymxpc2godG9waWMsIGFyZ3MsIHNjb3BlKSB7XG5cdFx0XHRpZiAoY2FjaGVbdG9waWNdKSB7XG5cdFx0XHRcdHZhciB0aGlzVG9waWMgPSBjYWNoZVt0b3BpY107XG5cdFx0XHRcdHZhciBpID0gdGhpc1RvcGljLmxlbmd0aCAtIDE7XG5cdFxuXHRcdFx0XHRmb3IgKGk7IGkgPj0gMDsgaSAtPSAxKSB7XG5cdFx0XHRcdFx0dGhpc1RvcGljW2ldLmNhbGwoc2NvcGUgfHwgdGhpcywgYXJncyB8fCB7fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcblx0XHQvKipcblx0ICAqICAgIEV2ZW50cy5zdWJzY3JpYmVcblx0ICAqICAgIGUuZy46IEV2ZW50cy5zdWJzY3JpYmUoXCIvQXJ0aWNsZS9hZGRlZFwiLCBBcnRpY2xlcy52YWxpZGF0ZSlcblx0ICAqXG5cdCAgKiAgICBAY2xhc3MgRXZlbnRzXG5cdCAgKiAgICBAbWV0aG9kIHN1YnNjcmliZVxuXHQgICogICAgQHBhcmFtIHRvcGljIHtTdHJpbmd9XG5cdCAgKiAgICBAcGFyYW0gY2FsbGJhY2sge0Z1bmN0aW9ufVxuXHQgICogICAgQHJldHVybiBFdmVudCBoYW5kbGVyIHtBcnJheX1cblx0ICAqL1xuXHRcdHN1YnNjcmliZSA9IGZ1bmN0aW9uIHN1YnNjcmliZSh0b3BpYywgY2FsbGJhY2spIHtcblx0XHRcdHZhciB0b3BpY3MgPSB0b3BpYy5zcGxpdCgnICcpO1xuXHRcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdG9waWNzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBfdG9waWMgPSB0b3BpY3NbaV07XG5cdFxuXHRcdFx0XHRpZiAoIWNhY2hlW190b3BpY10pIHtcblx0XHRcdFx0XHRjYWNoZVtfdG9waWNdID0gW107XG5cdFx0XHRcdH1cblx0XG5cdFx0XHRcdGNhY2hlW190b3BpY10ucHVzaChjYWxsYmFjayk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XG5cdFxuXHRcdC8qKlxuXHQgICogICAgRXZlbnRzLnVuc3Vic2NyaWJlXG5cdCAgKiAgICBlLmcuOiB2YXIgaGFuZGxlID0gRXZlbnRzLnN1YnNjcmliZShcIi9BcnRpY2xlL2FkZGVkXCIsIEFydGljbGVzLnZhbGlkYXRlKTtcblx0ICAqICAgICAgICBFdmVudHMudW5zdWJzY3JpYmUoXCIvQXJ0aWNsZS9hZGRlZFwiLCBBcnRpY2xlcy52YWxpZGF0ZSk7XG5cdCAgKlxuXHQgICogICAgQGNsYXNzIEV2ZW50c1xuXHQgICogICAgQG1ldGhvZCB1bnN1YnNjcmliZVxuXHQgICogICAgQHBhcmFtIHRvcGljIHtTdHJpbmd9XG5cdCAgKiAgICBAcGFyYW0gaGFuZGxlIHtGdW5jdGlvbn1cblx0ICAqICAgIEBwYXJhbSBjb21wbGV0bHkge0Jvb2xlYW59XG5cdCAgKi9cblx0XHR1bnN1YnNjcmliZSA9IGZ1bmN0aW9uIHVuc3Vic2NyaWJlKHRvcGljLCBoYW5kbGUpIHtcblx0XHRcdHZhciBjb21wbGV0bHkgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IGZhbHNlO1xuXHRcblx0XHRcdHZhciBpID0gY2FjaGVbdG9waWNdLmxlbmd0aCAtIDE7XG5cdFxuXHRcdFx0aWYgKGNhY2hlW3RvcGljXSkge1xuXHRcdFx0XHRmb3IgKGk7IGkgPj0gMDsgaS0tKSB7XG5cdFx0XHRcdFx0aWYgKGNhY2hlW3RvcGljXVtpXSA9PT0gaGFuZGxlKSB7XG5cdFx0XHRcdFx0XHRjYWNoZVt0b3BpY10uc3BsaWNlKGksIDEpO1xuXHRcdFx0XHRcdFx0aWYgKGNvbXBsZXRseSkge1xuXHRcdFx0XHRcdFx0XHRkZWxldGUgY2FjaGVbdG9waWNdO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cdFxuXHRcdHJldHVybiB7XG5cdFx0XHRwdWJsaXNoOiBwdWJsaXNoLFxuXHRcdFx0c3Vic2NyaWJlOiBzdWJzY3JpYmUsXG5cdFx0XHR1bnN1YnNjcmliZTogdW5zdWJzY3JpYmUsXG5cdFx0XHR0cmlnZ2VyOiBwdWJsaXNoLFxuXHRcdFx0b246IHN1YnNjcmliZSxcblx0XHRcdG9mZjogdW5zdWJzY3JpYmVcblx0XHR9O1xuXHR9KCk7XG5cdFxuXHR2YXIgVmVhbXNWZW50ID0ge1xuXHRcdG9wdGlvbnM6IHtcblx0XHRcdGZ1cnRoZXJFdmVudHM6IHt9XG5cdFx0fSxcblx0XHRwbHVnaW5OYW1lOiAnVmVudCcsXG5cdFx0aW5pdGlhbGl6ZTogZnVuY3Rpb24gaW5pdGlhbGl6ZShWZWFtcywgb3B0cykge1xuXHRcdFx0aWYgKG9wdHMpIHtcblx0XHRcdFx0dGhpcy5vcHRpb25zID0gVmVhbXMuaGVscGVycy5leHRlbmQodGhpcy5vcHRpb25zLCBvcHRzIHx8IHt9KTtcblx0XHRcdH1cblx0XG5cdFx0XHRWZWFtcy5WZW50ID0gRXZlbnRzSGFuZGxlcjtcblx0XHRcdFZlYW1zLkVWRU5UUyA9IFZlYW1zLmhlbHBlcnMuZXh0ZW5kKFZlYW1zLkVWRU5UUywgdGhpcy5vcHRpb25zLmZ1cnRoZXJFdmVudHMpO1xuXHRcdH1cblx0fTtcblx0XG5cdGV4cG9ydHMuZGVmYXVsdCA9IFZlYW1zVmVudDtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH1cbi8qKioqKiovIF0pXG59KTtcbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwidmVhbXNcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1widmVhbXNcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1widmVhbXNcIl0gPSByb290W1widmVhbXNcIl0gfHwge30sIHJvb3RbXCJ2ZWFtc1wiXVtcInZlYW1zXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge30sXG4vKioqKioqLyBcdFx0XHRpZDogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHQvKipcblx0ICogSW1wb3J0c1xuXHQgKi9cblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHQgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRcblx0dmFyIF9zdGFydGVyID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSk7XG5cdFxuXHR2YXIgX3N0YXJ0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RhcnRlcik7XG5cdFxuXHRmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXHRcblx0LyoqXG5cdCAqIFZhcmlhYmxlc1xuXHQgKi9cblxuXHRleHBvcnRzLmRlZmF1bHQgPSBfc3RhcnRlcjIuZGVmYXVsdDtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiAxICovLFxuLyogMiAqLyxcbi8qIDMgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHRcdHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRleHBvcnRzLmRlZmF1bHQgPSBtaXhpbjtcblx0XG5cdHZhciBfZGVmYXVsdHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xuXHRcblx0dmFyIF9kZWZhdWx0czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZhdWx0cyk7XG5cdFxuXHR2YXIgX21ldGhvZEV4dGVuZCA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cdFxuXHR2YXIgX21ldGhvZEV4dGVuZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tZXRob2RFeHRlbmQpO1xuXHRcblx0ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblx0XG5cdC8qKlxuXHQgKiBNZXJnZSBtZXRob2QgZnVuY3Rpb25zLlxuXHQgKlxuXHQgKiBAcGFyYW0ge09iamVjdH0gZnJvbSAtIE1peGluIG9iamVjdCB3aGljaCB3aWxsIGJlIG1lcmdlZCB2aWEgSGVscGVycy5kZWZhdWx0cyB3aXRoIHRoZSBtZXRob2RzIG9mIG91ciBjbGFzc1xuXHQgKiBAcGFyYW0ge0FycmF5fSBtZXRob2RzIC0gQXJyYXkgb2YgbWV0aG9kIG5hbWVzIHdoaWNoIHdpbGwgYmUgZXh0ZW5kZWQuXG5cdCAqL1xuXHRmdW5jdGlvbiBtaXhpbihmcm9tKSB7XG5cdFx0dmFyIG1ldGhvZHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IFsnaW5pdGlhbGl6ZScsICdyZW5kZXInXTtcblx0XG5cdFx0aWYgKGZyb20gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Y29uc29sZS5lcnJvcignVmVhbXNIZWxwZXJzIDogTWl4aW4gOjogTWl4aW4gbm90IGZvdW5kIScpO1xuXHRcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFxuXHRcdHZhciB0byA9IHRoaXMucHJvdG90eXBlO1xuXHRcblx0XHQvKiogQWRkIHRob3NlIG1ldGhvZHMgd2hpY2ggZXhpc3RzIG9uIGBmcm9tYCBidXQgbm90IG9uIGB0b2AgdG8gdGhlIGxhdHRlciAqL1xuXHRcdCgwLCBfZGVmYXVsdHMyLmRlZmF1bHQpKHRvLCBmcm9tKTtcblx0XG5cdFx0LyoqIHdlIGRvIHRoZSBzYW1lIGZvciBldmVudHMgKi9cblx0XHRpZiAodG8uZXZlbnRzKSB7XG5cdFx0XHQoMCwgX2RlZmF1bHRzMi5kZWZhdWx0KSh0by5ldmVudHMsIGZyb20uZXZlbnRzKTtcblx0XHR9XG5cdFxuXHRcdC8vIEV4dGVuZCB0bydzIG1ldGhvZHNcblx0XHRtZXRob2RzLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuXHRcdFx0KDAsIF9tZXRob2RFeHRlbmQyLmRlZmF1bHQpKHRvLCBmcm9tLCBtZXRob2QpO1xuXHRcdH0pO1xuXHR9O1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDQgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdC8qKlxuXHQgKiBTaW1wbGUgZXh0ZW5kIG1ldGhvZCwgd2hpY2ggZXh0ZW5kcyBhbiBvYmplY3QuXG5cdCAqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBvYmogLSBvYmplY3Qgd2hpY2ggd2lsbCBiZSBleHRlbmRlZFxuXHQgKlxuXHQgKiBAcmV0dXJuIHtPYmplY3R9IG9iaiAtIGV4dGVuZGVkIG9iamVjdFxuXHQgKi9cblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHQgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRleHBvcnRzLmRlZmF1bHQgPSBkZWZhdWx0c0hlbHBlcjtcblx0ZnVuY3Rpb24gZGVmYXVsdHNIZWxwZXIob2JqKSB7XG5cdCAgW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcblx0ICAgIGZvciAodmFyIGtleSBpbiBpdGVtKSB7XG5cdCAgICAgIGlmIChvYmpba2V5XSA9PT0gdW5kZWZpbmVkKSBvYmpba2V5XSA9IGl0ZW1ba2V5XTtcblx0ICAgIH1cblx0ICB9KTtcblx0ICByZXR1cm4gb2JqO1xuXHR9O1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDUgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdC8qKlxuXHQgKiBIZWxwZXIgbWV0aG9kIHRvIGV4dGVuZCBhbiBhbHJlYWR5IGV4aXN0aW5nIG1ldGhvZC5cblx0ICpcblx0ICogQHBhcmFtIHtPYmplY3R9IHRvIC0gdmlldyB3aGljaCB3aWxsIGJlIGV4dGVuZGVkXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBmcm9tIC0gbWV0aG9kcyB3aGljaCBjb21lcyBmcm9tIG1peGluXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2ROYW1lIC0gZnVuY3Rpb24gbmFtZVxuXHQgKi9cblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHRcdHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRleHBvcnRzLmRlZmF1bHQgPSBtZXRob2RFeHRlbmQ7XG5cdGZ1bmN0aW9uIG1ldGhvZEV4dGVuZCh0bywgZnJvbSwgbWV0aG9kTmFtZSkge1xuXHRcdGZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbHVlKSB7XG5cdFx0XHRyZXR1cm4gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJztcblx0XHR9XG5cdFxuXHRcdGlmIChmcm9tID09PSB1bmRlZmluZWQpIHJldHVybjtcblx0XG5cdFx0Ly8gaWYgdGhlIG1ldGhvZCBpcyBkZWZpbmVkIG9uIGZyb20gLi4uXG5cdFx0aWYgKCFpc1VuZGVmaW5lZChmcm9tW21ldGhvZE5hbWVdKSkge1xuXHRcdFx0dmFyIG9sZCA9IHRvW21ldGhvZE5hbWVdO1xuXHRcblx0XHRcdC8vIC4uLiB3ZSBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb24gdG9cblx0XHRcdHRvW21ldGhvZE5hbWVdID0gZnVuY3Rpb24gKCkge1xuXHRcblx0XHRcdFx0Ly8gd2hlcmVpbiB3ZSBmaXJzdCBjYWxsIHRoZSBtZXRob2Qgd2hpY2ggZXhpc3RzIG9uIGB0b2Bcblx0XHRcdFx0dmFyIG9sZFJldHVybiA9IG9sZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcblx0XHRcdFx0Ly8gYW5kIHRoZW4gY2FsbCB0aGUgbWV0aG9kIG9uIGBmcm9tYFxuXHRcdFx0XHRmcm9tW21ldGhvZE5hbWVdLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFxuXHRcdFx0XHQvLyBhbmQgdGhlbiByZXR1cm4gdGhlIGV4cGVjdGVkIHJlc3VsdCxcblx0XHRcdFx0Ly8gaS5lLiB3aGF0IHRoZSBtZXRob2Qgb24gYHRvYCByZXR1cm5zXG5cdFx0XHRcdHJldHVybiBvbGRSZXR1cm47XG5cdFx0XHR9O1xuXHRcdH1cblx0fTtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiA2ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHQvKipcblx0ICogU2ltcGxlIGV4dGVuZCBtZXRob2QgdG8gZXh0ZW5kIHRoZSBwcm9wZXJ0aWVzIG9mIGFuIG9iamVjdC5cblx0ICpcblx0ICogQHBhcmFtIHtPYmplY3R9IG9iaiAtIG9iamVjdCB3aGljaCB3aWxsIGJlIGV4dGVuZGVkXG5cdCAqXG5cdCAqIEByZXR1cm4ge09iamVjdH0gb2JqIC0gZXh0ZW5kZWQgb2JqZWN0XG5cdCAqL1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdCAgdmFsdWU6IHRydWVcblx0fSk7XG5cdGV4cG9ydHMuZGVmYXVsdCA9IGV4dGVuZDtcblx0ZnVuY3Rpb24gZXh0ZW5kKG9iaikge1xuXHQgIFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG5cdCAgICBmb3IgKHZhciBrZXkgaW4gaXRlbSkge1xuXHQgICAgICBvYmpba2V5XSA9IGl0ZW1ba2V5XTtcblx0ICAgIH1cblx0ICB9KTtcblx0ICByZXR1cm4gb2JqO1xuXHR9O1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDcgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdC8qKlxuXHQgKiBHZW5lcmF0ZXMgbnVtZXJpYyBpZC5cblx0ICpcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtzZWdtZW50cz0xXSAtIG51bWJlciBvZiBzZWdtZW50cyBvZiBnZW5lcmF0ZWQgaWQgKHNlZ21lbnRzIGNvbnNpc3Qgb2YgMTAgZGlnaXRzLCBzZXBhcmF0ZWQgYnkgJy0nKS5cblx0ICpcblx0ICogQHJldHVybiB7U3RyaW5nfSAtIGdlbmVyYXRlZCBpZFxuXHQgKi9cblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHRcdHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRleHBvcnRzLmRlZmF1bHQgPSBtYWtlSWQ7XG5cdGZ1bmN0aW9uIG1ha2VJZCgpIHtcblx0XHR2YXIgc2VnbWVudHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDE7XG5cdFxuXHRcdHZhciBjcnlwdG8gPSB3aW5kb3cuY3J5cHRvIHx8IHdpbmRvdy5tc0NyeXB0bztcblx0XHR2YXIgYXJyYXkgPSBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50MzJBcnJheShzZWdtZW50cykpO1xuXHRcdHZhciBpZCA9ICcnO1xuXHRcdHZhciBpID0gMDtcblx0XG5cdFx0Zm9yICg7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWQgKz0gYXJyYXlbaV0gKyAnLSc7XG5cdFx0fVxuXHRcblx0XHRyZXR1cm4gaWQuc2xpY2UoMCwgLTEpO1xuXHR9O1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDggKi8sXG4vKiA5ICovLFxuLyogMTAgKi8sXG4vKiAxMSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0LyoqXG5cdCAqIFBvbHlmaWxsc1xuXHQgKi9cblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHRcdHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxMik7XG5cdFxuXHR2YXIgX2NvcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEzKTtcblx0XG5cdHZhciBfY29yZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb3JlKTtcblx0XG5cdGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cdFxuXHR2YXIgVmVhbXMgPSB7fTtcblx0XG5cdC8qKlxuXHQgKiBJbXBvcnRzXG5cdCAqL1xuXHRcblx0XG5cdChmdW5jdGlvbiAod2luZG93LCBkb2N1bWVudCwgdW5kZWZpbmVkKSB7XG5cdFx0J3VzZSBzdHJpY3QnO1xuXHRcblx0XHRWZWFtcyA9IG5ldyBfY29yZTIuZGVmYXVsdCh7XG5cdFx0XHRuYW1lc3BhY2U6ICdWZWFtcycsXG5cdFx0XHRhZGRUb0dsb2JhbDogdHJ1ZVxuXHRcdH0pO1xuXHRcblx0XHRWZWFtcy5pbml0aWFsaXplKCk7XG5cdH0pKHdpbmRvdywgZG9jdW1lbnQpO1xuXHRcblx0ZXhwb3J0cy5kZWZhdWx0ID0gVmVhbXM7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9LFxuLyogMTIgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdC8vIFBvbHlmaWxsIGZvciBjdXN0b20gZXZlbnRzXG5cdChmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cuQ3VzdG9tRXZlbnQgPT09ICdmdW5jdGlvbicpIHJldHVybiBmYWxzZTtcblx0XG5cdFx0ZnVuY3Rpb24gQ3VzdG9tRXZlbnQoZXZlbnQsIHBhcmFtcykge1xuXHRcdFx0dmFyIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuXHRcblx0XHRcdHBhcmFtcyA9IHBhcmFtcyB8fCB7IGJ1YmJsZXM6IGZhbHNlLCBjYW5jZWxhYmxlOiBmYWxzZSwgZGV0YWlsOiB1bmRlZmluZWQgfTtcblx0XG5cdFx0XHRldnQuaW5pdEN1c3RvbUV2ZW50KGV2ZW50LCBwYXJhbXMuYnViYmxlcywgcGFyYW1zLmNhbmNlbGFibGUsIHBhcmFtcy5kZXRhaWwpO1xuXHRcdFx0cmV0dXJuIGV2dDtcblx0XHR9XG5cdFxuXHRcdEN1c3RvbUV2ZW50LnByb3RvdHlwZSA9IHdpbmRvdy5FdmVudC5wcm90b3R5cGU7XG5cdFxuXHRcdHdpbmRvdy5DdXN0b21FdmVudCA9IEN1c3RvbUV2ZW50O1xuXHR9KSgpO1xuXG4vKioqLyB9LFxuLyogMTMgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHRcdHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRcblx0dmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTsgLyoqXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBSZXByZXNlbnRzIFZlYW1zQ29yZS5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBtb2R1bGUgVmVhbXNDb3JlXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQGF1dGhvciBTZWJhc3RpYW4gRml0em5lclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cdFxuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxMik7XG5cdFxuXHR2YXIgX3VzZSA9IF9fd2VicGFja19yZXF1aXJlX18oMTQpO1xuXHRcblx0dmFyIF91c2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXNlKTtcblx0XG5cdHZhciBfZXZlbnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNSk7XG5cdFxuXHR2YXIgX2V2ZW50czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ldmVudHMpO1xuXHRcblx0dmFyIF9oZWxwZXJzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNik7XG5cdFxuXHR2YXIgX2hlbHBlcnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGVscGVycyk7XG5cdFxuXHRmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXHRcblx0ZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblx0XG5cdHZhciBpbml0U3RhdGUgPSBmYWxzZTtcblx0XG5cdHZhciBWZWFtc0NvcmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0ZnVuY3Rpb24gVmVhbXNDb3JlKG9wdHMpIHtcblx0XHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBWZWFtc0NvcmUpO1xuXHRcblx0XHRcdHRoaXMuX29wdGlvbnMgPSB7XG5cdFx0XHRcdG5hbWVzcGFjZTogJ1ZlYW1zJyxcblx0XHRcdFx0YWRkVG9HbG9iYWw6IGZhbHNlXG5cdFx0XHR9O1xuXHRcblx0XHRcdHRoaXMuYmFzZSA9IHtcblx0XHRcdFx0bmFtZTogJ1ZlYW1zJyxcblx0XHRcdFx0dmVyc2lvbjogJzUuMC4xJ1xuXHRcdFx0fTtcblx0XG5cdFx0XHR0aGlzLnVzZSA9IF91c2UyLmRlZmF1bHQuYmluZCh0aGlzKTtcblx0XHRcdHRoaXMuUGx1Z2lucyA9IHt9O1xuXHRcdFx0dGhpcy5FVkVOVFMgPSBfZXZlbnRzMi5kZWZhdWx0O1xuXHRcdFx0dGhpcy5oZWxwZXJzID0ge307XG5cdFx0XHR0aGlzLmRldGVjdGlvbnMgPSB7XG5cdFx0XHRcdHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcblx0XHRcdFx0aGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHRcblx0XHRcdH07XG5cdFxuXHRcdFx0aW5pdFN0YXRlID0gZmFsc2U7XG5cdFxuXHRcdFx0dGhpcy5zZXR1cChvcHRzKTtcblx0XHR9XG5cdFxuXHRcdF9jcmVhdGVDbGFzcyhWZWFtc0NvcmUsIFt7XG5cdFx0XHRrZXk6ICdzZXR1cCcsXG5cdFx0XHR2YWx1ZTogZnVuY3Rpb24gc2V0dXAob3B0cykge1xuXHRcdFx0XHR0aGlzLnVzZShfaGVscGVyczIuZGVmYXVsdCk7XG5cdFxuXHRcdFx0XHR0aGlzLmRldGVjdGlvbnMgPSB0aGlzLmhlbHBlcnMuZXh0ZW5kKHtcblx0XHRcdFx0XHR0b3VjaDogdGhpcy5oZWxwZXJzLmlzVG91Y2goKVxuXHRcdFx0XHR9LCB0aGlzLmRldGVjdGlvbnMpO1xuXHRcblx0XHRcdFx0dGhpcy5vcHRpb25zID0gb3B0cztcblx0XHRcdH1cblx0XHR9LCB7XG5cdFx0XHRrZXk6ICdpbml0aWFsaXplJyxcblx0XHRcdHZhbHVlOiBmdW5jdGlvbiBpbml0aWFsaXplKG9wdHMpIHtcblx0XHRcdFx0aWYgKGluaXRTdGF0ZSA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRcdHJldHVybiBjb25zb2xlLmluZm8oJ1ZlYW1zIDo6IFlvdSBhbHJlYWR5IGluaXRpYWxpemVkIFZlYW1zIScpO1xuXHRcdFx0XHR9XG5cdFxuXHRcdFx0XHQvKipcblx0ICAgICogU2V0IGdsb2JhbCBvcHRpb25zIG9uIGluaXRpYWxpemVcblx0ICAgICovXG5cdFx0XHRcdHRoaXMub3B0aW9ucyA9IG9wdHM7XG5cdFxuXHRcdFx0XHRpZiAodGhpcy5vcHRpb25zLmFkZFRvR2xvYmFsKSB7XG5cdFx0XHRcdFx0aWYgKHdpbmRvdyAmJiAhd2luZG93W3RoaXMub3B0aW9ucy5uYW1lc3BhY2VdKSB7XG5cdFx0XHRcdFx0XHR3aW5kb3dbdGhpcy5vcHRpb25zLm5hbWVzcGFjZV0gPSB0aGlzIHx8IHt9O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcblx0XHRcdFx0aW5pdFN0YXRlID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9LCB7XG5cdFx0XHRrZXk6ICdvbkluaXRpYWxpemUnLFxuXHRcdFx0dmFsdWU6IGZ1bmN0aW9uIG9uSW5pdGlhbGl6ZShjYikge1xuXHRcdFx0XHRpZiAoIWNiIHx8IHR5cGVvZiBjYiAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdWZWFtcyA6OiBDYWxsYmFjayBpcyBub3QgYSBmdW5jdGlvbiEnKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XG5cdFx0XHRcdGlmIChpbml0U3RhdGUgPT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0dGhpcy5pbml0aWFsaXplKCk7XG5cdFx0XHRcdH1cblx0XG5cdFx0XHRcdGNiKCk7XG5cdFx0XHR9XG5cdFx0fSwge1xuXHRcdFx0a2V5OiAnb25ET01SZWFkeScsXG5cdFx0XHR2YWx1ZTogZnVuY3Rpb24gb25ET01SZWFkeShjYikge1xuXHRcdFx0XHRpZiAodHlwZW9mIGNiICE9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ1ZlYW1zIDo6IENhbGxiYWNrIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgY2IpO1xuXHRcdFx0fVxuXHRcdH0sIHtcblx0XHRcdGtleTogJ3ZlcnNpb24nLFxuXHRcdFx0c2V0OiBmdW5jdGlvbiBzZXQodmVyc2lvbikge1xuXHRcdFx0XHR0aGlzLl92ZXJzaW9uID0gdmVyc2lvbjtcblx0XHRcdH0sXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX3ZlcnNpb247XG5cdFx0XHR9XG5cdFx0fSwge1xuXHRcdFx0a2V5OiAnaW5pdGlhbGl6ZWQnLFxuXHRcdFx0c2V0OiBmdW5jdGlvbiBzZXQoYm9vbCkge1xuXHRcdFx0XHR0aGlzLl9pbml0aWFsaXplZCA9IGJvb2w7XG5cdFx0XHR9LFxuXHRcdFx0Z2V0OiBmdW5jdGlvbiBnZXQoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLl9pbml0aWFsaXplZDtcblx0XHRcdH1cblx0XHR9LCB7XG5cdFx0XHRrZXk6ICdvcHRpb25zJyxcblx0XHRcdHNldDogZnVuY3Rpb24gc2V0KG9wdGlvbnMpIHtcblx0XHRcdFx0dGhpcy5fb3B0aW9ucyA9IHRoaXMuaGVscGVycy5leHRlbmQodGhpcy5vcHRpb25zLCBvcHRpb25zIHx8IHt9KTtcblx0XHRcdH0sXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX29wdGlvbnM7XG5cdFx0XHR9XG5cdFx0fV0pO1xuXHRcblx0XHRyZXR1cm4gVmVhbXNDb3JlO1xuXHR9KCk7XG5cdFxuXHRleHBvcnRzLmRlZmF1bHQgPSBWZWFtc0NvcmU7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9LFxuLyogMTQgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdC8qKlxuXHQgKiBSZXByZXNlbnRzIGEgc2ltcGxlIHBsdWdpbiBzeXN0ZW0gaW4gd2hpY2ggYHRoaXNgIGlzIFZlYW1zLlxuXHQgKiBAbW9kdWxlIHBsdWdpblxuXHQgKlxuXHQgKiBAYXV0aG9yIFNlYmFzdGlhbiBGaXR6bmVyXG5cdCAqL1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdCAgdmFsdWU6IHRydWVcblx0fSk7XG5cdFxuXHRleHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAocGx1Z2luKSB7XG5cdCAgaWYgKHBsdWdpbi5wbHVnaW5OYW1lKSB7XG5cdCAgICB0aGlzLlBsdWdpbnNbcGx1Z2luLnBsdWdpbk5hbWVdID0gcGx1Z2luO1xuXHQgIH1cblx0XG5cdCAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG5cdCAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcblx0ICB9XG5cdFxuXHQgIHBsdWdpbi5pbml0aWFsaXplLmFwcGx5KHBsdWdpbiwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG5cdH07XG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDE1ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHQvKipcblx0ICogQ29uc3QgZm9yIGV2ZW50cyAocHViL3N1Yilcblx0ICpcblx0ICogQGF1dGhvcjogU2ViYXN0aWFuIEZpdHpuZXJcblx0ICovXG5cdFxuXHQvKipcblx0ICogRXZlbnRzIEdsb2JhbFxuXHQgKi9cblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHRcdHZhbHVlOiB0cnVlXG5cdH0pO1xuXHR2YXIgRVZFTlRTID0ge1xuXHRcdGJsdXI6ICdibHVyJyxcblx0XHRjaGFuZ2U6ICdjaGFuZ2UnLFxuXHRcdGNsaWNrOiAnY2xpY2snLFxuXHRcdGRibGNsaWNrOiAnZGJsY2xpY2snLFxuXHRcdERPTWNoYW5nZWQ6ICdkb206Y2hhbmdlZCcsXG5cdFx0RE9NcmVkaXJlY3Q6ICdkb206cmVkaXJlY3QnLFxuXHRcdGhhc2hjaGFuZ2U6ICdoYXNoY2hhbmdlJyxcblx0XHRpbnB1dDogJ2lucHV0Jyxcblx0XHRrZXlkb3duOiAna2V5ZG93bicsXG5cdFx0a2V5cHJlc3M6ICdrZXlwcmVzcycsXG5cdFx0a2V5dXA6ICdrZXl1cCcsXG5cdFx0bWVkaWFjaGFuZ2U6ICdtZWRpYWNoYW5nZScsXG5cdFx0bW9kdWxlQ2FjaGVkOiAnbW9kdWxlOmNhY2hlZCcsXG5cdFx0bW91c2Vkb3duOiAnbW91c2Vkb3duJyxcblx0XHRtb3VzZWVudGVyOiAnbW91c2VlbnRlcicsXG5cdFx0bW91c2VsZWF2ZTogJ21vdXNlbGVhdmUnLFxuXHRcdG1vdXNlb3V0OiAnbW91c2VvdXQnLFxuXHRcdG1vdXNlb3ZlcjogJ21vdXNlb3ZlcicsXG5cdFx0bW91c2V1cDogJ21vdXNldXAnLFxuXHRcdHJlc2V0OiAncmVzZXQnLFxuXHRcdHJlc2l6ZTogJ3Jlc2l6ZScsXG5cdFx0c2Nyb2xsOiAnc2Nyb2xsJyxcblx0XHRzdWJtaXQ6ICdzdWJtaXQnLFxuXHRcdHN3aXBlOiAnc3dpcGUnXG5cdH07XG5cdFxuXHRleHBvcnRzLmRlZmF1bHQgPSBFVkVOVFM7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9LFxuLyogMTYgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHRcdHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRcblx0dmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXHRcblx0dmFyIF9leHRlbmQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXHRcblx0dmFyIF9leHRlbmQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kKTtcblx0XG5cdHZhciBfbWl4aW4gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuXHRcblx0dmFyIF9taXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9taXhpbik7XG5cdFxuXHR2YXIgX21ldGhvZEV4dGVuZCA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cdFxuXHR2YXIgX21ldGhvZEV4dGVuZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tZXRob2RFeHRlbmQpO1xuXHRcblx0dmFyIF9pc1RvdWNoID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNyk7XG5cdFxuXHR2YXIgX2lzVG91Y2gyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNUb3VjaCk7XG5cdFxuXHR2YXIgX3Rocm90dGxlID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOCk7XG5cdFxuXHR2YXIgX3Rocm90dGxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Rocm90dGxlKTtcblx0XG5cdHZhciBfcXVlcnlTZWxlY3RvckFycmF5ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOSk7XG5cdFxuXHR2YXIgX3F1ZXJ5U2VsZWN0b3JBcnJheTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9xdWVyeVNlbGVjdG9yQXJyYXkpO1xuXHRcblx0dmFyIF9mb3JFYWNoID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMCk7XG5cdFxuXHR2YXIgX2ZvckVhY2gyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZm9yRWFjaCk7XG5cdFxuXHR2YXIgX21ha2VJZCA9IF9fd2VicGFja19yZXF1aXJlX18oNyk7XG5cdFxuXHR2YXIgX21ha2VJZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tYWtlSWQpO1xuXHRcblx0ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblx0XG5cdHZhciBWZWFtc0hlbHBlcnMgPSB7XG5cdFx0cGx1Z2luTmFtZTogJ0hlbHBlcnMnLFxuXHRcdGluaXRpYWxpemU6IGZ1bmN0aW9uIGluaXRpYWxpemUoVmVhbXMpIHtcblx0XHRcdFZlYW1zLmFkZEhlbHBlciA9IGZ1bmN0aW9uIGFkZEhlbHBlcigpIHtcblx0XHRcdFx0Zm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcblx0XHRcdFx0XHRhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuXHRcdFx0XHR9XG5cdFxuXHRcdFx0XHR2YXIgcGFyYW1zID0gW10uY29uY2F0KGFyZ3MpO1xuXHRcblx0XHRcdFx0aWYgKHBhcmFtcy5sZW5ndGggPT09IDEpIHtcblx0XHRcdFx0XHRpZiAoX3R5cGVvZihwYXJhbXNbMF0pICE9PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcignVmVhbXNIZWxwZXJzIDo6IFlvdSBuZWVkIHRvIHBhc3MgYW4gb2JqZWN0IScpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XG5cdFx0XHRcdFx0Zm9yICh2YXIga2V5IGluIHBhcmFtc1swXSkge1xuXHRcdFx0XHRcdFx0aWYgKHBhcmFtc1swXS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cdFx0XHRcdFx0XHRcdGlmICghVmVhbXMuaGVscGVyc1trZXldKSB7XG5cdFx0XHRcdFx0XHRcdFx0VmVhbXMuaGVscGVyc1trZXldID0gcGFyYW1zWzBdW2tleV07XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5pbmZvKCdWZWFtc0hlbHBlcnMgOjogVGhlIGhlbHBlciAnICsga2V5ICsgJyBpcyBhbHJlYWR5IGRlZmluZWQhIFBsZWFzZSBkZWZpbmUgYSBuZXcgbmFtZSBmb3I6ICcsIHBhcmFtc1swXVtrZXldKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIGlmIChwYXJhbXMubGVuZ3RoID09PSAyKSB7XG5cdFxuXHRcdFx0XHRcdGlmICghVmVhbXMuaGVscGVyc1twYXJhbXNbMF1dKSB7XG5cdFx0XHRcdFx0XHRpZiAodHlwZW9mIHBhcmFtc1swXSAhPT0gJ3N0cmluZycgfHwgdHlwZW9mIHBhcmFtc1sxXSAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKCdWZWFtc0hlbHBlcnMgOjogWW91IG5lZWQgdG8gcGFzcyBhIHN0cmluZyBhcyBmaXJzdCBhcmd1bWVudCBhbmQgdGhlIGhlbHBlciBmdW5jdGlvbiBhcyBzZWNvbmQgb25lLicpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRWZWFtcy5oZWxwZXJzW3BhcmFtc1swXV0gPSBwYXJhbXNbMV07XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUuaW5mbygnVmVhbXNIZWxwZXJzIDo6IFRoZSBoZWxwZXIgJyArIHBhcmFtc1swXSArICcgaXMgYWxyZWFkeSBkZWZpbmVkISBQbGVhc2UgZGVmaW5lIGEgbmV3IG5hbWUgZm9yOiAnLCBwYXJhbXNbMV0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XG5cdFx0XHR0aGlzLmFkZERlZmF1bHRIZWxwZXJzKFZlYW1zKTtcblx0XHR9LFxuXHRcblx0XHRhZGREZWZhdWx0SGVscGVyczogZnVuY3Rpb24gYWRkRGVmYXVsdEhlbHBlcnMoVmVhbXMpIHtcblx0XHRcdFZlYW1zLmFkZEhlbHBlcigncXVlcnlTZWxlY3RvckFycmF5JywgX3F1ZXJ5U2VsZWN0b3JBcnJheTIuZGVmYXVsdCk7XG5cdFx0XHRWZWFtcy5hZGRIZWxwZXIoJ2V4dGVuZCcsIF9leHRlbmQyLmRlZmF1bHQpO1xuXHRcdFx0VmVhbXMuYWRkSGVscGVyKCdpc1RvdWNoJywgX2lzVG91Y2gyLmRlZmF1bHQpO1xuXHRcdFx0VmVhbXMuYWRkSGVscGVyKCdtaXhpbicsIF9taXhpbjIuZGVmYXVsdCk7XG5cdFx0XHRWZWFtcy5hZGRIZWxwZXIoJ21ldGhvZEV4dGVuZCcsIF9tZXRob2RFeHRlbmQyLmRlZmF1bHQpO1xuXHRcdFx0VmVhbXMuYWRkSGVscGVyKCd0aHJvdHRsZScsIF90aHJvdHRsZTIuZGVmYXVsdCk7XG5cdFx0XHRWZWFtcy5hZGRIZWxwZXIoJ2ZvckVhY2gnLCBfZm9yRWFjaDIuZGVmYXVsdCk7XG5cdFx0XHRWZWFtcy5hZGRIZWxwZXIoJ21ha2VJZCcsIF9tYWtlSWQyLmRlZmF1bHQpO1xuXHRcdH1cblx0fTtcblx0XG5cdGV4cG9ydHMuZGVmYXVsdCA9IFZlYW1zSGVscGVycztcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiAxNyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0LyoqXG5cdCAqIFRvdWNoIERldGVjdGlvblxuXHQgKi9cblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHQgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRleHBvcnRzLmRlZmF1bHQgPSBpc1RvdWNoO1xuXHRmdW5jdGlvbiBpc1RvdWNoKCkge1xuXHQgIHJldHVybiAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3c7XG5cdH07XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9LFxuLyogMTggKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdC8qKlxuXHQgKiBUaHJvdHRsZSBtZXRob2QgZm9yIHJlc2l6ZSBldmVudHMgYW5kIG1vcmVcblx0ICpcblx0ICogQHBhcmFtIHtmdW5jdGlvbn0gZnVuYyAtIEZ1bmN0aW9uIHdoaWNoIHdpbGwgYmUgZXhlY3V0ZWQuXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB3YWl0IC0gbnVtYmVyIHRvIHdhaXQgaW4gbWlsbGlzZWNvbmRzLlxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IGltbWVkaWF0ZSAtIGV4ZWN1dGUgZnVuY3Rpb24gaW1tZWRpYXRlbHkuXG5cdCAqL1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdFx0dmFsdWU6IHRydWVcblx0fSk7XG5cdGV4cG9ydHMuZGVmYXVsdCA9IHRocm90dGxlO1xuXHRmdW5jdGlvbiB0aHJvdHRsZShmdW5jLCB3YWl0LCBpbW1lZGlhdGUpIHtcblx0XHR2YXIgdGltZW91dCA9IHZvaWQgMDtcblx0XG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRcdHZhciBjb250ZXh0ID0gdGhpcztcblx0XHRcdHZhciBhcmdzID0gYXJndW1lbnRzO1xuXHRcdFx0dmFyIGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXQ7XG5cdFx0XHR2YXIgbGF0ZXIgPSBmdW5jdGlvbiBsYXRlcigpIHtcblx0XHRcdFx0dGltZW91dCA9IG51bGw7XG5cdFx0XHRcdGlmICghaW1tZWRpYXRlKSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuXHRcdFx0fTtcblx0XG5cdFx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFxuXHRcdFx0dGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuXHRcblx0XHRcdGlmIChjYWxsTm93KSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuXHRcdH07XG5cdH07XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9LFxuLyogMTkgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdC8qKlxuXHQgKiBHZXQgZG9tIGVsZW1lbnRzIGluIGFuIGFycmF5XG5cdCAqXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBlbGVtIC0gUmVxdWlyZWQ6IHNlbGVjdG9yXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBbY29udGV4dF0gLSBPcHRpb25hbDogY29udGV4dFxuXHQgKlxuXHQgKiBAcmV0dXJuIHtBcnJheX1cblx0ICovXG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0ICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0ZXhwb3J0cy5kZWZhdWx0ID0gcXVlcnlTZWxlY3RvckFycmF5O1xuXHRmdW5jdGlvbiBxdWVyeVNlbGVjdG9yQXJyYXkoZWxlbSwgY29udGV4dCkge1xuXHQgIGlmICghZWxlbSkgdGhyb3cgbmV3IEVycm9yKCdJbiBvcmRlciB0byB3b3JrIHdpdGggcXVlcnlTZWxlY3RvckFycmF5IHlvdSBuZWVkIHRvIGRlZmluZSBhbiBlbGVtZW50IGFzIHN0cmluZyEnKTtcblx0ICB2YXIgZWwgPSBlbGVtO1xuXHQgIHZhciBjdXN0b21Db250ZXh0ID0gY29udGV4dCB8fCBkb2N1bWVudDtcblx0XG5cdCAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGN1c3RvbUNvbnRleHQucXVlcnlTZWxlY3RvckFsbChlbCkpO1xuXHR9O1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDIwICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHQvKipcblx0ICogU2ltcGxlIGZvckVhY2ggbWV0aG9kXG5cdCAqXG5cdCAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IC0gYXJyYXkgb2Ygb2JqZWN0c1xuXHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIGNhbGxiYWNrIGZ1bmN0aW9uXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzY29wZSAtIHNjb3BlIG9mIGZ1bmN0aW9uXG5cdCAqL1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdCAgdmFsdWU6IHRydWVcblx0fSk7XG5cdGV4cG9ydHMuZGVmYXVsdCA9IGZvckVhY2g7XG5cdGZ1bmN0aW9uIGZvckVhY2goYXJyYXksIGNhbGxiYWNrLCBzY29wZSkge1xuXHQgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcblx0ICAgIGNhbGxiYWNrLmNhbGwoc2NvcGUsIGksIGFycmF5W2ldKTtcblx0ICB9XG5cdH07XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9XG4vKioqKioqLyBdKVxufSk7XG47XG4vLyMgc291cmNlTWFwcGluZ1VSTD12ZWFtcy5qcy5tYXAiLCIvLyBHbG9iYWwgZGVwZW5kZW5jaWVzXG5pbXBvcnQge0FwcCwgVmVhbXN9IGZyb20gJy4vYXBwJztcblxuY29uc29sZS5sb2coJ0pTIGluaXRpYWxpemVkIGluIHZlcnNpb246JywgQXBwLnZlcnNpb24pO1xuY29uc29sZS5sb2coJ1ZlYW1zIGluaXRpYWxpemVkIGluIHZlcnNpb246JywgVmVhbXMuYmFzZS52ZXJzaW9uKTtcblxuLy8gSW1wb3J0c1xuLy8gQElOU0VSVFBPSU5UIDo6IEByZWY6IGpzLWltcG9ydCwgQGtlZXA6IHRydWUgLy9cblxuLy8gSW5pdGlhbGl6ZSBtb2R1bGVzIHdpdGggVmVhbXNcblZlYW1zLm1vZHVsZXMucmVnaXN0ZXIoW1xuICAgIC8qKlxuICAgICAqIEluaXQgU2xpZGVyXG4gICAgICovXG4gICAgLy8ge1xuICAgIC8vICAgICBuYW1lc3BhY2U6ICdzbGlkZXInLFxuICAgIC8vICAgICBtb2R1bGU6IFNsaWRlclxuICAgIC8vIH1cbiAgICAvLyBASU5TRVJUUE9JTlQgOjogQHJlZjoganMtaW5pdC12NSwgQGtlZXA6IHRydWUgLy9cbl0pO1xuXG4vLyBASU5TRVJUUE9JTlQgOjogQHJlZjoganMtaW5pdC1vbmNlLXY1LCBAa2VlcDogdHJ1ZSAvL1xuIiwiLyoqXG4gKiBDb25zdCBmb3IgZXZlbnRzIChwdWIvc3ViKVxuICpcbiAqIEBhdXRob3I6IFNlYmFzdGlhbiBGaXR6bmVyXG4gKi9cblxuLyoqXG4gKiBFdmVudHMgR2xvYmFsXG4gKi9cblxuY29uc3QgRVZFTlRTID0ge307XG5cblxuXG4vKipcbiAqIEV2ZW50cyBmb3IgVGVzdGluZ1xuICovXG5FVkVOVFMudGVzdGluZyA9IHtcblx0ZXZlbnROYW1lOiAndGVzdGluZzpldmVudE5hbWUnXG59O1xuXG5cbi8qKlxuICogRXZlbnRzIGZvciBTbGlkZXJcbiAqL1xuRVZFTlRTLnNsaWRlciA9IHtcblx0c2xpZGVTdGFydDogJ3NsaWRlOnN0YXJ0J1xufTtcblxuXG4vKipcbiAqIEV2ZW50cyBmb3IgU2xpZGVyXG4gKi9cbkVWRU5UUy5zbGlkZXIgPSB7XG5cdHNsaWRlU3RhcnQ6ICdzbGlkZTpzdGFydCdcbn07XG5cbi8vIEBJTlNFUlRQT0lOVCA6OiBAcmVmOiBqcy1ldmVudHNcblxuZXhwb3J0IGRlZmF1bHQgRVZFTlRTOyIsIi8vIEdsb2JhbCBkZXBlbmRlbmNpZXNcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnZW52JztcblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBWZWFtcyBmcm9tICd2ZWFtcyc7XG5pbXBvcnQgVmVhbXNMb2dnZXIgZnJvbSAndmVhbXMtcGx1Z2luLWxvZ2dlcic7XG5pbXBvcnQgVmVhbXNET00gZnJvbSAndmVhbXMtcGx1Z2luLWRvbSc7XG5pbXBvcnQgVmVhbXNWZW50IGZyb20gJ3ZlYW1zLXBsdWdpbi12ZW50JztcbmltcG9ydCBWZWFtc01vZHVsZXMgZnJvbSAndmVhbXMtcGx1Z2luLW1vZHVsZXMnO1xuaW1wb3J0IFZlYW1zTWVkaWFRdWVyeUhhbmRsZXIgZnJvbSAndmVhbXMtcGx1Z2luLW1lZGlhLXF1ZXJ5LWhhbmRsZXInO1xuLy8gaW1wb3J0IFZlYW1zU3RvcmUgZnJvbSAndmVhbXMtcGx1Z2luLXN0b3JlJztcbi8vIGltcG9ydCBWZWFtc1RlbXBsYXRlciBmcm9tICd2ZWFtcy1wbHVnaW4tdGVtcGxhdGVyJztcbmltcG9ydCBFVkVOVFMgZnJvbSAnLi4vLi4vc2hhcmVkL3NjcmlwdHMvZXZlbnRzJztcblxuXG5sZXQgQXBwID0ge307XG5BcHAuJCA9ICQ7XG5cbi8vIFZlcnNpb25pbmdcbkFwcC52ZXJzaW9uID0gXCIwLjAuMVwiO1xuXG4vLyBWZWFtc1xuVmVhbXMub25Jbml0aWFsaXplKCgpID0+IHtcblx0LyoqXG5cdCogVmVhbXMgUGx1Z2luc1xuXHQqL1xuXG5cdC8vIERvbSBQbHVnaW5cblx0VmVhbXMudXNlKFZlYW1zRE9NLCB7XG5cdFx0RE9NOiAkXG5cdH0pO1xuXG5cdC8vIFZlbnQgUGx1Z2luXG5cdFZlYW1zLnVzZShWZWFtc1ZlbnQsIHtcblx0XHRmdXJ0aGVyRXZlbnRzOiBFVkVOVFNcblx0fSk7XG5cblx0Ly8gTG9nZ2VyIFBsdWdpbiBmb3IgZGV2bW9kZSBhbmQgbG9nZ2VyXG5cdFZlYW1zLnVzZShWZWFtc0xvZ2dlcik7XG5cblx0Ly8gTW9kdWxlIFN5c3RlbSBQbHVnaW5cblx0VmVhbXMudXNlKFZlYW1zTW9kdWxlcywge1xuXHRcdHVzZU11dGF0aW9uT2JzZXJ2ZXI6IHRydWUsXG5cdFx0aW50ZXJuYWxDYWNoZU9ubHk6IGZhbHNlXG5cdH0pO1xuXG5cdC8vIFN0b3JlIFBsdWdpblxuXHQvLyBWZWFtcy51c2UoVmVhbXNTdG9yZSwge1xuXHQvLyBcdHJlZHVjZXI6IHJvb3RSZWR1Y2VyLFxuXHQvLyBcdHN0YXRlOiBJTklUSUFMX1NUQVRFLFxuXHQvLyBcdHN1YmplY3RzOiBzdWJqZWN0c1xuXHQvLyB9KTtcblxuXHQvLyBNZWRpYSBRdWVyeSBIYW5kbGVyIFBsdWdpblxuXHRWZWFtcy51c2UoVmVhbXNNZWRpYVF1ZXJ5SGFuZGxlcik7XG59KTtcblxuZXhwb3J0IHtBcHAsIFZlYW1zfTsiLCJleHBvcnQgY29uc3QgZW52aXJvbm1lbnQgPSB7XG5cdGVudjogJ2xvY2FsJ1xufTsiXX0=
