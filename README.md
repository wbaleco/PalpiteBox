

[![HitCount](https://hits.dwyl.com/tuliofaria/tuliofaria/tuliofariadev.svg)](https://hits.dwyl.com/tuliofaria/tuliofaria/tuliofariadev)

# PalpiteBox

## *Instruções e objetivos* 

Criar um projeto para uma pesquisa online sobre estabelecimentos comerciais com as tecnologias NextJS, React e Tailwind. 
Usuário acessa o aplicativo faz sua crítica ou sugestão e ainda ganha por isso.

### Pré-requisitos:

Você precisa do NodeJS e do NPM instalado em sua máquina.

```
npm install
npm run dev
```

## Layout:

Criamos o layout utilizando o Figma. Você pode encontrar o arquivo [aqui](https://www.figma.com/file/9bUM0ZS9hzXS9eh9VMXEbc/resume?node-id=0%3A1).

### Início do projeto
    Crie uma pasta para o projeto
    Abra esta pasta no terminal e execute o seguinte comando: npm init -y
    Instale o next, react e react-dom executando o seguinte comando: npm install next react react-dom

### Configuração no arquivo package.json
```
"scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  }
  ```

### Criar pasta com o nome pages
    dentro de pages crie um arquivo chamado index.js e adicione o seguinte código: 
```
function HomePage() {
  return <div>Welcome to Next.js!</div>
}

export default HomePage
```

### Execute o projeto 
```
npm run dev
```
    Abra seu navegador e digite: http://localhost:3000
    A primeira página será apresentada

    ### Adicionando novas rotas
   
        Crie uma nova página chamada sobre.js dentro da pasta pages
        Na página index.js adicione o seguinte import:
        import Link from 'next/link'
        Na página index.js adicione o seguinte trecho de código:
        <Link href="/sobre"> //página de destino
        <a>Sobre</a> //Texto que ficará visivel
         </Link>
        Ao clicar no link será direcionado para a página sobre.js


## Para melhorar o visual de nossas páginas precisamos adicionar um estilo css e um ótimo framework para isso é o Tailwindcss.
### Instalar Tailwind via npm
	Para a maioria dos projetos (e para tirar proveito dos recursos de personalização do Tailwind), convém instalar o Tailwind via npm.
### Execute o seguinte comando no terminal:
```
 npm install tailwindcss
``` 
	Feito isso, crie uma pasta com o nome css
	Dentro desta pasta crie um arquivo style.css por exemplo. 
### Adicione o seguinte código: 
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

### Crie seu arquivo de configuração Tailwind(opcional)
    Se você desejar personalizar sua instalação do Tailwind, poderá gerar um arquivo de configuração para o seu projeto usando o utilitário da CLI Tailwind incluído ao instalar o tailwindcss pacote npm: l) 
### Execute o seguinte comando:  
```
npx tailwindcss init
```
### Instale o postcss-import com o seguinte comando: 
```
npm install postcss-import
```
### Instale o autoprefixer com o seguinte comando: 
```
npm install autoprefixer
```
Crie um arquivo postcss.config.js na raiz do projeto e adicione o seguinte código: 
```
module.exports = {
    plugins: [
        'postcss-import',  'tailwindcss',
        'autoprefixer'
    ]
}
```
