module.exports = {
    // 单行代码的最大长度 默认80
    printWidth: 100,

    // 使用单引号而不是双引号
    singleQuote: true,

    // 在 JSX 中使用单引号而不是双引号
    jsxSingleQuote: true,

    // 在语句末尾添加分号，默认 none，可选值 none|es5|all
    trailingComma: 'all',

    // 换行符使用 LF
    endOfLine: 'lf',

    // tab 缩进大小,默认为 2
    tabWidth: 4,

    // 在对象、数组括号之间添加空格
    bracketSpacing: true,

    // 在箭头函数参数添加括号
    arrowParens: 'always',

    // HTML 文件的格式化规则
    htmlWhitespaceSensitivity: 'css',

    // Vue 文件的格式化规则
    vueIndentScriptAndStyle: true,

    // 使用分号, 默认 true
    semi: true,

    // 使用单引号, 默认 false(在 jsx 中配置无效, 默认都是双引号)
    singleQuote: true,
    // 箭头函数参数括号 默认avoid 可选 avoid| always
    // avoid 能省略括号的时候就省略 例如 x => x
    // always 总是有括号
    // arrowParens: 'always',
};
