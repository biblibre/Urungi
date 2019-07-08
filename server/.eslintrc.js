module.exports = {
    env: {
        node: true,
    },
    plugins: ['node'],
    extends: ['plugin:node/recommended'],
    globals: {
        // defined in server/config/mongoose.js
        connection: false,
    },
};
