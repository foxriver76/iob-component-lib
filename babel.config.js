module.exports = {
    plugins: ['ignore-html-and-css-imports'],
    presets: ['@babel/preset-env', '@babel/preset-typescript', ['@babel/preset-react', { runtime: 'automatic' }]]
};
