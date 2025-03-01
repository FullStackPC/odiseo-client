import chalk from 'chalk';
import boxen from 'boxen';

let hasDisplayed = false;

function displayPorts(appName) {
    if (appName === 'Angular App' && !hasDisplayed) {
        hasDisplayed = true;

        const message = `
🚀 Micro-Frontend Apps Running:

${chalk.cyan('Container App:')} ${chalk.green('http://localhost:3000')}
${chalk.yellow('React App:')}    ${chalk.green('http://localhost:3001')}
${chalk.red('Angular App:')}  ${chalk.green('http://localhost:4201')}

${chalk.dim('• Use Container App URL to access all micro-frontends')}
${chalk.dim('• Hot reload is enabled for all applications')}
${chalk.dim('• Access individual apps directly through their URLs for development')}
`;

        console.log(
            boxen(message, {
                padding: 1,
                margin: 1,
                borderStyle: 'double',
                borderColor: 'cyan',
                title: '🎯 Micro-Frontend Development Server',
                titleAlignment: 'center'
            })
        );
    }
}

export default displayPorts;