import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';
import displayPorts from '../shared/utils/ports-display.js';

const require = createRequire(import.meta.url);
const { ModuleFederationPlugin } = webpack.container;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const deps = require('./package.json').dependencies;

export default {
    mode: 'development',
    devtool: 'source-map',
    entry: path.resolve(__dirname, './src/index.tsx'),
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: 'auto'
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                            '@babel/preset-typescript'
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js']
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                reactApp: 'reactApp@http://localhost:3001/remoteEntry.js',
                angularApp: 'angularApp@http://localhost:4201/remoteEntry.js'
            },
            shared: {
                ...deps,
                react: { singleton: true, requiredVersion: '^18.2.0' },
                'react-dom': { singleton: true, requiredVersion: '^18.2.0' },
                '@angular/core': { singleton: true },
                '@angular/common': { singleton: true }
            }
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html')
        }),
        {
            apply: (compiler) => {
                compiler.hooks.done.tap('PortsDisplay', () => {
                    displayPorts('Container App');
                });
            }
        }
    ],
    devServer: {
        port: 3000,
        historyApiFallback: true,
        hot: 'only',
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    }
};