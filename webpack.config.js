const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Autoprefixer = require("autoprefixer");


module.exports = {

	entry: [
		'./src/bundle.js',
		"./src/App.scss"
	],

	output: {

		path: __dirname + '/build',

		filename: 'bundle.js'
	},

	devServer: {
		port: 3000
	},

	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					{ loader: MiniCssExtractPlugin.loader },
					{ 	loader: 'css-loader',
						options: {
							url: false,
					  	} 
					},
					{ 	loader: "postcss-loader",
						options: { 
							config: {
							  path: './postcss.config.js'
							}
					 	 }
					},
					{ loader: 'sass-loader' },
				],
			},
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			minify: {
				collapseWhitespace: true
			}
		}),
		new MiniCssExtractPlugin({
			filename: 'bundle.css'
		}),
		new CopyWebpackPlugin({//=)
			patterns: [
				{
					from: './src/fonts',
					to: './fonts'
				},
				{
					from: './src/image',
					to: './image'
				}
			]
		}),
	]
}