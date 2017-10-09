module.exports = {
	options: {
		outputStyle: 'nested',
		sourceMap: true
	},
	dev: {
		files: {
			'<%= paths.app %>/css/styles.css': '<%= paths.src %>/core/app/main.tmp.scss'
		}
	},
	universal: {
		files: {
			'<%= paths.app %>/css/universal.css': '<%= paths.src %>/core/main/universal.scss'
		}
	},
	docs: {
		files: {
			'<%= paths.app %>/css/docs.css': '<%= paths.src %>/shared/layouts/docs/docs.scss'
		}
	}
};