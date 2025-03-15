/*
Introduction to npm
 • npm is a popular package manager which comes bundled with Node.js.
 • It is a CLI tool used to install, update, and remove external packages.
 • You can also create your own package and publish it on npmjs.com registry.
 • Do not confuse npm CLI with npmjs.com as it’s a registry where most of the  packages of Node.js are saved.
 • There are alternative Node.js package managers registry like JSR.
Fun facts:
 • npm shouldn’t be written in capitalized form unless you have everything as capital.
 • npm doesn’t stand for Node Package Manager even though many people refer to it as that. It is a recursive bacronymic abbreviation for "npm is not an acronym“
*/

/*
npm commands
 • Before following these commands, make sure you initialized your project.
 • npm install <package-name>
 • Alternatively, you can use npm i
 • After installation, you will notice a node_modules folder and package-lock.json
 • node_modules is what stores all the installed packages. It’s usually heavy, so make sure to include it in .gitignore so that it won’t get pushed on version control and avoid it while sharing with others.
 • You will notice that there are some packages which you didn’t install, it’s because the package that you installed depend on those third-party packages.
 • package-lock.json includes exact version of all packages that you install. It makes sure to prevent breaking changes in newer versions of package.
 • Now, you can use the package by importing normally as you do with core modules.
 • While importing, first Node.js checks for core modules, then files or folders, and at last looks inside node_modules.
*/

/*
npm commands
 npm install
 • Even if you delete node_modules, you can use this command to install all of them again. It uses version specified in package-lock.json or package.json
 npm list
 • Because of symbols, the versions specified in package.json might not be installed. 
 • To see the exact versions of all packages installed in your project.
 • Use -a flag to see whole list.
 npm view <package-name>
 • To see details of a package that you installed including version, license, author, and so on.
 npm view <package-name> <package.json-property>
 • Example: npm view express version
 • You can use it to view any property from package.json of a package that you installed.
 npm view <package-name> versions
 • You can use it to see all versions of a package
*/

//Semantic Versioning System ✓✓✓✓✓✓

/*
npm install <package-name>@<version>
 Examples:
 • npm install express@4.0.0 // ^4.0.0
 • npm install express@4.0.0 --save-exact // To install exact version.
 • npm install express@~4.0.0
 • npm install express@4.2.x
 You can use any symbols while specifying version.
npm outdated
 • It shows outdated packages in your project.
 • Current: The version of the package currently installed in your project.
 • Wanted: The latest version that satisfies the version range defined in your package.json. It basically uses the symbols to get it.
 • Latest: Absolute latest version of the package.
npm remove <package-name
*/

/*
npm update
 • This updates all the packages in your project, but it follows the range defined in package.json. It doesn’t update to absolute latest version.
npx npm-check-updates
 • npx is a CLI tool that comes with npm.
 • It is used to execute a package without requiring you to install globally or locally.
 • It is useful for temporary usage of a package.
 • npm-check-updates is a package which you can use to upgrade your packages to absolute latest versions.
 • Use -u flag at the end to update the packages after reviewing.
 • This only updates package.json, then you can use npm install to update the packages.
*/

/*
Global packages
 • Up until now, we have been installing packages locally.
To install package globally,
 • npm install -g npm-check-updates
 • On Linux, and macOS, you might have to prefix it with sudo
 • This package gets installed globally, and you can access from anywhere.
 • You can try running npm-check-updates command anywhere in any projects without using npx.
 • npm-check-updates also have an alias named ncu, which you can also use.
Fun fact: npm is itself a global package which means if you need to update npm, you will do: npm install -g npm
npm outdated -g
 • To see outdated global packages.
npm update –g <package-name>
npm remove -g <package-name>
*/

/*
Development dependencies are the packages that aren’t needed for functioning of your project in production.
 • This can be for formatting, linting, testing, and so on.
 • If you use npm install --production, those packages won’t be installed, but they will be installed if you don’t use production flag.
npm install -D eslint
 • This will install eslint as a development dependency.
 • You will see it in separate property inside package.json named “devDependencies”
*/

// V8- For Synchronous Tasks
// Libuz- For Asynchronous Tasks- event loop, thread pool