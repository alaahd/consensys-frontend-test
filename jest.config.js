module.exports = {
     "testPathIgnorePatterns": [
     "/node_modules/",
     "/jspm_packages"
   ],
   transform: {'^.+\\.js$': 'babel-jest'},
    setupFiles: ['<rootDir>/test/setup.js']
}