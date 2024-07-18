/** @type {import("prettier").Config} */
export default {
    singleQuote: true, // 添加这一行以使用单引号
    semi: true,
    plugins: ['prettier-plugin-astro'],
    overrides: [
        {
            files: '*.astro',
            options: {
                parser: 'astro',
            },
        },
    ],
};
