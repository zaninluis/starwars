# Star Wars App

Este projeto é um aplicativo móvel desenvolvido em **React Native com Expo**, que consome dados da [API pública de Star Wars (SWAPI)](https://swapi.dev/) para exibir informações sobre personagens, naves e filmes da saga Star Wars. O projeto foi criado como parte de uma atividade avaliativa para a disciplina **Projeto, Design e Engenharia de Processos**.

## Funcionalidades

O aplicativo permite ao usuário:
- Visualizar uma lista com 5 personagens icônicos da saga Star Wars.
- Visualizar detalhes sobre cada personagem, incluindo:
  - Nome
  - Altura
  - Peso
  - Cor do cabelo
  - Cor da pele
  - Cor dos olhos
  - Gênero
- Navegar entre diferentes telas:
  - Tela de Naves (exibe naves associadas ao personagem)
  - Tela de Filmes (exibe filmes em que o personagem aparece)
  - Tela Sobre (informações sobre os desenvolvedores)

## Telas do Aplicativo

### 1. **Tela de Personagens**
- Exibe uma lista com 5 personagens icônicos da saga Star Wars, como Luke Skywalker, Darth Vader, Han Solo, Yoda, e Chewbacca.
- Cada personagem é exibido em um cartão clicável. Ao clicar em um personagem, o usuário é direcionado para a tela de detalhes desse personagem.

### 2. **Tela de Detalhes do Personagem**
- Exibe detalhes completos sobre o personagem selecionado.
- Possui dois botões:
  - **Naves**: Direciona para a tela de naves associadas ao personagem.
  - **Filmes**: Direciona para a tela de filmes em que o personagem aparece.

### 3. **Tela de Naves**
- Exibe uma lista de naves associadas ao personagem selecionado.
- Cada nave exibe seu nome, modelo e número de passageiros.
- Se o personagem não tiver naves associadas, uma mensagem informando "Nenhuma nave disponível" é exibida.

### 4. **Tela de Filmes**
- Exibe uma lista de filmes em que o personagem aparece, com título, diretor e data de lançamento.
- Se o personagem não aparecer em nenhum filme, uma mensagem informando "Nenhum filme disponível" é exibida.

### 5. **Tela Sobre**
- Exibe informações sobre os desenvolvedores do aplicativo.
  - **Nome**: Luis Eduardo Cervo Zanin, RA: 1136493
  - **Nome**: João Inacio Campana Moraes, RA: 1135445

## Tecnologias Utilizadas

- **React Native**: Framework JavaScript para desenvolvimento de aplicativos móveis nativos.
- **Expo**: Plataforma para construir aplicativos React Native sem necessidade de configuração nativa complexa.
- **Axios**: Biblioteca para fazer chamadas HTTP para a API de Star Wars.
- **React Navigation**: Biblioteca para navegação entre telas no aplicativo.
- **SWAPI**: API pública de Star Wars para fornecimento dos dados.

## Como Executar o Projeto

### Pré-requisitos

- Node.js instalado (versão LTS recomendada)
- Expo CLI instalado globalmente
- Um emulador de Android ou iOS configurado (ou um dispositivo físico com Expo Go)

### Passos

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/star-wars-app.git
