module.exports = {
	options: {
		sassRoot: '<%= paths.src %>/core/app',
		source: 'main.scss',
		output: 'main.tmp.scss'
	},
	dev: {
		options: {
			watch: true
		}
	},
	dist: {
		options: {
			watch: false
		}
	}
};