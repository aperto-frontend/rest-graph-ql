'use strict';

const config = require('../../veams-cli');

const externalLibs = [ 
	'jquery',
	'handlebars',
	'picturefill',
	'lazysizes'
];

const internalLibs = [
	`./${config.paths.src}/core/app/app.js:app`,
	// `./${config.paths.src}/core/store/store.js:store`,
	`./${config.paths.config}/environments/environment.${process.env.NODE_ENV}.js:env`,
];

module.exports = {
	options: {
		transform: [
			['babelify',
				{
					compact: true,
					// ignore: [
					// 	'<%= paths.app %>/scripts/vendor/'
					// ],
					presets: ['es2015', 'stage-0', ['env', {
						targets: {
							browsers: ['last 2 versions', 'ie >= 11', 'iOS >= 10', 'Android >= 6']
						},
						useBuiltIns: false
					}]],
				}
			],
			['aliasify',
				{
					aliases: {},
					global: true,
					verbose: true
				}
			]
		],
		ignore: []
	},
	vendor: {
		src: ['.'],
		dest: '<%= paths.app %>/scripts/libs.js',
		options: {
			debug: false,
			alias: externalLibs
		}
	},
	dev: {
		options: {
			alias: internalLibs,
			external: externalLibs,
			browserifyOptions: {
				debug: true
			},
			watch: true
		},
		files: {
			'<%= paths.app %>/scripts/main.bundle.js': '<%= paths.src %>/core/app/main.js'
		}
	},
	dist: {
		options: {
			alias: internalLibs,
			external: externalLibs
		},
		files: {
			'<%= paths.app %>/scripts/main.bundle.js': '<%= paths.src %>/core/app/main.js'
		}
	}
};