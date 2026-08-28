# 1 - Tecnologias utilizadas

React — biblioteca para construção dos componentes de interface,
Next.js — framework usado via create-next-app, com App Router,
CSS Modules — para estilização,
JavaScript puro — sem TypeScript (essa opção foi descartada na configuração inicial),
ESLint — para linting do código,
Git/GitHub — para versionamento do projeto.

# 2 - Como instalar as dependências

Para iniciar um projeto com React usando Next.js, siga os passos abaixo. Certifique-se de ter o Node.js e o npm instalados em sua máquina.

Rode o comando: npx create-next-app@latest sprint3-web

Ao rodar esse comando, a primeira pergunta oferece três opções. 

Escolha No, customize settings:

Perguntas e Respostas:
Would you like to use the recommended Next.js defaults? → No, customize settings
Would you like to use TypeScript? → No
Which linter would you like to use? → ESLint
Would you like to use React Compiler? → Yes
Would you like to use Tailwind CSS? → No
Would you like your code inside a `src/` directory? → No
Would you like to use App Router? (recommended) → Yes
Would you like to customize the import alias (`@/*` by default)? → No
Would you like to include AGENTS.md? → No

# 3 - Como executar o projeto

Depois da instalação, entre na pasta do projeto e inicie o servidor de desenvolvimento:

cd meu-app
npm run dev
Acesse o navegador no endereço http://localhost:3000 para ver a aplicação funcionando.

## PONTO IMPORTANTE
Após a criação do projeto, observe alguns arquivos gerados automaticamente:

package.json – registra dependências e scripts como dev, build e start.
.gitignore – lista arquivos e pastas que não devem ser enviados ao Git.

Os scripts mais utilizados são:

npm run dev – inicia o servidor de desenvolvimento com recarregamento automático.
npm run build – cria uma versão otimizada para produção.
npm run start – executa a aplicação após o build.

# 4 - Onde foi utilizada a IA nesse projeto

Ao longo do desenvolvimento deste projeto, contei com o apoio de uma inteligência artificial principalmente como fonte de auxílio e orientação, e não como uma ferramenta que resolvesse o trabalho por mim. Utilizei a IA sobretudo para esclarecer dúvidas pontuais, buscar explicações mais claras sobre determinados conceitos e obter exemplos práticos de como aplicar certas soluções da maneira correta dentro do contexto do projeto. 

Um dos pontos em que essa ajuda foi mais relevante foi na criação do componente "PassarSlide", onde busquei orientações sobre a melhor forma de estruturar sua lógica e integrá-lo ao restante da aplicação. Além disso, recorri à IA para compreender melhor algumas funcionalidades do React.js que iam um pouco além do básico, o que me ajudou a entender não apenas como implementar soluções um pouco mais complexas, mas também por que elas funcionam daquela forma.

# 5 - Link do Deploy na Vercel

https://sprint3-web-green.vercel.app/tela-inicial
