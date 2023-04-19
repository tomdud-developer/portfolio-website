const path = require('path');

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    rules: [
        // ... other rules
        {
            test: /\.(png|jpg|svg|gif)$/,
            use: ['file-loader'],
        },
    ],
    // ... other webpack configurations
};

export {};
