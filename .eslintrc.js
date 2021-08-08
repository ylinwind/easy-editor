module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  globals: {
    initSense: 'readonly',
    React: false,
  },
  env: {
    browser: true,
    node: true,
    // es2021: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {},
      alias: {
        map: [['@', './src']],
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
    },
  },
  extends: [
    'plugin:security/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/prettier',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    'no-return-await': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/destructuring-assignment': 'off',
    'react/no-danger': 'off',
    'jsx-a11y/aria-role': 'off',
    'no-console': 'off',
    'react/jsx-curly-brace-presence': 'off',
    'no-else-return': 'off',
    'react/jsx-props-no-spreading': 'off',
    // 1. 不允许使用 console.log，但是允许 console.warn 和 console.error
    // 2. 允许引入 devDependencies 中的包，比如 webpack 相关的文件，这一个规则并不合理
    'import/no-extraneous-dependencies': 'off',
    // 3. 不限制 ++ 这种写法
    'no-plusplus': 'off',
    // 4. 允许使用断路（&& 或 ||）或三元运算的方式代替 if else
    'no-unused-expressions': [
      'error',
      { allowShortCircuit: true, allowTernary: true },
    ],
    // 5. 不严格要求使用全等，因为现存代码中有大量的 ==，贸然改为 === 可能会导致 BUG。而且 == 有他的适用场景
    eqeqeq: 'off',
    // 6. 没有必要限制使用解构还是直接取值
    'prefer-destructuring': 'off',
    // 7. 限制 _foo 这种标识符意义不大
    'no-underscore-dangle': 'off',
    // 8. 这个规则要求 import { someNamed } from 'someModule' 时 someModule 里有 “export someNamed” 的导出
    // 但是我们项目可以用这种方式引入 export default 出来的对象里面的某个属性，所以不做限制
    'import/named': 'off',
    // 9. airbnb-base 中推荐 class 中的普通方法都必须使用过 this，如果没有使用 this 就改为静态方法，这个我们暂不做要求
    'class-methods-use-this': 'off',
    // 10. 关闭 “不修改函数的参数”，这种情况在我们的项目中很多，暂时不做要求
    'no-param-reassign': 'off',
    // 11. 关闭 “函数要保证任何情况下都有返回值”，这种情况在我们的项目中很多，贸然加 return 可能会导致 BUG
    'consistent-return': 'off',
    // 12. 关闭 “switch 语句必须要有 default”
    'default-case': 'off',
    // 13. 关闭 “a 标签必须要有 href 属性”，有些人用 a 标签纯粹是为了让文字有主题色
    'jsx-a11y/anchor-is-valid': 'off',
    // 14. airbnb-base 中对 for in，for of，with 等语法做了严格限制
    'no-restricted-syntax': 'off',
    // 15. 同上
    'no-continue': 'off',

    // 16. Header_ 这种组件名不符合 React 对于组件需要使用 PascalCase 或 SCREAMING_SNAKE_CASE 方式命名的要求，但这里我们先不去限制这点
    'react/jsx-pascal-case': 'off',
    // 17. 关闭 "不允许嵌套三元运算"，基本都是两个三元运算叠加在一起，并不是非常难以阅读，暂时不做要求
    'no-nested-ternary': 'off',
    // 18. 关闭 “一个文件中不允许出现的多个 class“，有现存代码这么写，不便于调整，暂时不改
    'max-classes-per-file': 'off',
    // 19. 暂时不改
    'import/prefer-default-export': 'off',
    // 20. 同上
    'no-return-assign': 'off',
    // 21. 同上
    'no-shadow': 'off',
    // 22. 同上
    'no-case-declarations': 'off',
    // 23. 同上
    'import/no-cycle': 'off',
    // 24. airbnb-base 中不推荐使用 void，但是 void 0 代替 undefined 有他的好处
    'no-void': 'off',
    // 25. 意义不大，反而在解构多个对象属性时使得代码变得难看
    'prefer-const': 'off',
    // 26. 允许 jsx 中使用 globals 中指定的全局变量，比如 React.Fragment
    'react/jsx-no-undef': ['error', { allowGlobals: true }],
    // 27. 存量问题，贸然改动可能导致 BUG
    'guard-for-in': 'off',
    // 28. 同上，这是一个应该开启的规则，但无奈有很多处这种写法，如果改动会涉及到逻辑，风险很大
    'react/no-direct-mutation-state': 'off',
    // 29. 允许使用位运算
    'no-bitwise': 'off',
    // 30. 引入 JS 或 TS 等文件时不需要填写指定后缀，省略就可以了
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        tsx: 'never',
        ts: 'never',
        jsx: 'never',
        js: 'never',
      },
    ],
    // 32. 这个要求有时候会导致逻辑看起来不直接
    'no-lonely-if': 'off',
    // 33. isNaN 和 Number.isNaN 是不一样的，这里会有坑
    'no-restricted-properties': 'off',
    // 34. JSX 中没有内容的自定义组件自动改为单标签，但原始的 html 标签不自动闭合
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: false,
      },
    ],
    // 35. 检查 Hook 规则（1、不在循环，条件或嵌套函数中调用 Hook 2、不在普通的 JavaScript 函数中调用 Hook）
    'react-hooks/rules-of-hooks': 'error',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx', '.jsx'] }],
    '@typescript-eslint/no-shadow': ['warn'],
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react/prop-types': 'off',
    'typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'react/display-name': 'off',
    'react/jsx-no-target-blank': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'import/first': 'error',
    'import/no-mutable-exports': 'error',
    '@typescript-eslint/no-empty-function': 'off',
    radix: 'off',
    'no-restricted-globals': 'off',
    'func-names': 'off',
    camelcase: 'off',
    'react/no-array-index-key': 'off',
    'no-async-promise-executor': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react/require-default-props': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'security/detect-object-injection': 'off',
    'security/detect-non-literal-fs-filename': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'import/order': [
      'error',
      {
        pathGroups: [
          {
            pattern: '@/**',
            group: 'external',
            position: 'after',
          },
        ],
        groups: ['builtin', 'external', 'parent', 'index', 'sibling'],
      },
    ],
  },
};
