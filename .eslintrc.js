module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,  // 讓eslint認得 module.exports 語法
    },
    "extends": "eslint:recommended",
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
    },
    "globals": {
        gsap: 'readonly', // 讓eslint認得由cdn載入的gsap
        ScrollTrigger: 'readonly',
        TextPlugin: 'readonly',
        CustomEase: 'readonly',
    }
}
