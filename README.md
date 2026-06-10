# Portfólio (Selena Menezes)

Site estático para apresentar projetos e experiências em **análise de dados**, **automação** e **engenharia de dados**.

## Visão geral
- Página única com navegação por âncoras.
- Seções principais:
  - **Sobre**: apresentação profissional e stack.
  - **Projetos**: cards com descrições e links para repositórios.
  - **Contato**: links para GitHub, LinkedIn, e-mail e WhatsApp.
- Visual com tema dark e componentes reutilizáveis (cards, botões, badges).

## Tecnologias usadas
- **HTML5** (layout e conteúdo)
- **CSS3** (estilos e responsividade)
- **JavaScript** (pequena interação na página)

## Como executar
Como é um projeto estático, basta abrir o arquivo no navegador.

1. Abra `index.html` no navegador (duplo clique) ou via live server.

> Dica: se abrir diretamente e algum recurso não carregar, rode um servidor local (ex.: Live Server no VSCode) para evitar problemas de caminho.

## Estrutura do projeto
- `index.html` — conteúdo do site (seções e layout)
- `styles.css` — estilos, tokens de design e responsividade
- `script.js` — lógica de interação (ex.: ano atual e comportamento dos cards)
- `favicon.svg` — ícone do site

## Funcionamento do JavaScript
No `script.js`:
- Atualiza automaticamente o ano no rodapé (`#year`).
- Existe suporte para alternar detalhes por card quando houver elementos específicos (ex.: botões/área com classes/atributos esperados).

## Responsividade
O layout se adapta a diferentes telas com **media queries**:
- Em larguras menores, a navegação é ocultada e as grades passam a ser de 1 coluna.

## Contato
Links presentes no site:
- GitHub: https://github.com/selenamenezes
- LinkedIn: https://www.linkedin.com/in/selena-menezes/
- E-mail: selenamenezes18@gmail.com
- WhatsApp: https://wa.me/5581993997730

## Licença
Este projeto está **sem licença definida**. Se você quiser usar/adaptar o código, entre em contato com a autora para combinar os termos.
