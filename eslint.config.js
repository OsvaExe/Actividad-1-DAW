const js = require('@eslint/js');

module.exports = [
    //Reglas para la verificacion del codigo
    //Reglas base de ESlint (JavaScript)
    js.configs.recommended, {
        languageOptions : {
            ecmaVersion: 2022,
            sourceType: 'commonjs',
            globals: {
                require: 'readonly',
                module: 'writable',
                exports: 'writable',
                __dirname: 'readonly'
            }
        },
        rules: {
            'no-unused-vars': 'warn'
        }
    },
        //Configuracion adicional (Solo aplica a lo archivos de tests.)
    {
        files: ['tests/**/*.js'],
            languageOptions: {
            globals: {
                require: 'readonly',
                module: 'writable',
                exports: 'writable',
                describe: 'readonly',
                test:'readonly',
                expect:'readonly',
                beforeEach:'readonly',
                jest:'readonly'
            }
        }
    },
    //Exclusiones globales (Carpetas o archivos qie ESlint no debe analizar)
    {
        ignores: ['node_modules/', 'logs/']
    }

];