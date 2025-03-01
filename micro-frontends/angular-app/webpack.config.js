import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { AngularWebpackPlugin } from '@ngtools/webpack';
import webpack from 'webpack';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';
import displayPorts from '../../shared/utils/ports-display.js';

const require = createRequire(import.meta.url);
const { ModuleFederationPlugin } = webpack.container;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    mode: 'development',
    entry: ['./src/polyfills.ts', './src/main.ts'],
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: '@ngtools/webpack',
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            },
            {
                test: /\.css$/,
                use: ['to-string-loader', 'css-loader']
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: 'http://localhost:4201/',
        uniqueName: 'angularApp'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'angularApp',
            filename: 'remoteEntry.js',
            exposes: {
                './AngularComponent': './src/app/components/angular-component/angular-component.component',
                './Module': './src/app/app.module'
            },
            shared: {
                '@angular/core': { singleton: true, strictVersion: true, requiredVersion: '15.2.10', eager: true },
                '@angular/common': { singleton: true, strictVersion: true, requiredVersion: '15.2.10', eager: true },
                '@angular/router': { singleton: true, strictVersion: true, requiredVersion: '15.2.10', eager: true },
                '@angular/platform-browser-dynamic': { singleton: true, strictVersion: true, requiredVersion: '15.2.10', eager: true },
                '@angular/platform-browser': { singleton: true, strictVersion: true, requiredVersion: '15.2.10', eager: true },
                '@angular/compiler': { singleton: true, strictVersion: true, requiredVersion: '15.2.10', eager: true },
                'zone.js': { singleton: true, eager: true }
            }
        }),
        new AngularWebpackPlugin({
            tsconfig: path.resolve(__dirname, 'tsconfig.json'),
            entryModule: path.resolve(__dirname, 'src/app/app.module#AppModule'),
            sourceMap: true
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        {
            apply: (compiler) => {
                compiler.hooks.done.tap('PortsDisplay', () => {
                    displayPorts('Angular App');
                });
            }
        }
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist')
        },
        port: 4201,
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
        historyApiFallback: true
    }
}