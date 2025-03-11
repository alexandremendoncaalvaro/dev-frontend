#  Poke Learning

## Descrição do Projeto

**Poke Learning** é um projeto desenvolvido para cumprir o desafio de **Dev Front-End**.
A aplicação permite que o treinador selecione um Pokémon desejado e treine-o até que ele evolua, utilizando **Machine Learning**.

## Instruções para Rodar

1. Abra o terminal do **VS Code** e navegue até a pasta correta:
   ```sh
   cd pokemon-training
   ```
<br>

2. Instale as dependências do projeto:
   ```sh
   npm install
   ```
<br>

3. Execute o comando para iniciar a aplicação:

   ```sh
   npm run dev
   ```

## Escolhas no Desenvolvimento

### Interface do Usuário

A UI do projeto foi inspirada nas cores e no estilo dos jogos e animes de **Pokémon**. O objetivo foi criar uma experiência visual que remeta ao universo da franquia.

Para a construção da interface, foram utilizadas as seguintes tecnologias:

- **Material UI**: Para facilitar a montagem e estilização dos componentes.
- **Styled-components**: Para maior flexibilidade na personalização do design final.

### Consumo de API

Para as requisições à API, optei pelo **Axios**, pois essa biblioteca facilita o gerenciamento de estados e torna o código mais organizado e legível em comparação com um simples `fetch`.

Além disso, utilizei o **React Router** para gerenciar a navegação entre páginas e otimizar a troca de informações, evitando consultas desnecessárias à API.

### Animação do Treinamento

Como queria trazer uma abordagem mais **gamificada** para a UI, implementei animações para representar o processo de treino do Pokémon, mesmo com a API retornando a resposta instantaneamente. Essas animações proporcionam uma experiência mais imersiva e envolvente para o usuário.


