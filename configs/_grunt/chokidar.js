module.exports = {
	express: {
		files: [
			'./server/**/*.js'
		],
		tasks: ['express:dev'],
		options: {
			spawn: false
		}
	},
	ajax: {
		files: 'server/ajax/**/*.{json,html}',
		tasks: 'sync:ajax'
	},
	assets: {
		files: [
			'<%= paths.src %>/assets/**/*'
			],
		tasks: 'sync:assets'
	},
	scss: {
		files: [
			'<%= paths.src %>/core/app/**/*.scss',
			'<%= paths.src %>/shared/styles/**/*.scss',
			'<%= paths.src %>/shared/components/**/scss/**/*.scss',
			'<%= paths.src %>/shared/utilities/**/scss/**/*.scss',
			'<%= paths.src %>/shared/layouts/**/scss/**/*.scss'
		],
		tasks: [
			'sass:dev'
		],
	    options: {
			spawn: false
		}
	},
	universal: {
		files: '<%= paths.src %>/core/app/universal.scss',
		tasks: 'sass:universal'
	},
	scssDocs: {
		files: '<%= paths.src %>/shared/layouts/docs/*',
		tasks: 'sass:docs'
	}
};