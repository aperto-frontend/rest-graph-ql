module.exports = {
	options: {
		notify: false,
		host: "localhost",
		proxy: 'localhost:<%= ports.app %>',
		watchTask: true,
		ghostMode: {
			clicks: true,
			scroll: true,
			forms: true
		}
	},
	bsFiles: {
		src: [
			'<%= paths.app %>/css/styles.css', 
			'<%= paths.app %>/scripts/**/*.js',
			'<%= paths.app %>/**/*.html'
		]
	}
};