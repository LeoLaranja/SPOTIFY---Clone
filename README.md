# Web Interface do Spotify (Clone)

## **Introdução:**

Este projeto é um clone da interface web do Spotify. Ele foi desenvolvido usando as seguintes tecnologias:

[![My Skills](https://skillicons.dev/icons?i=js,html,css)](https://skillicons.dev)

## **Objetivo:**

O objetivo deste projeto é criar uma interface web que seja semelhante à interface web do Spotify. A interface deve permitir que os usuários reproduzam músicas, criem playlists e acessem suas listas de reprodução.

## **Desenvolvimento:**

*Uso de arquivo JSON:*
O arquivo JSON foi usado para armazenar os dados dos artistas. O arquivo JSON contém um array de objetos, cada objeto representando um artista/banda. Cada objeto contém as seguintes propriedades:

* Nome do artista/ banda.
* Gênero da música.
* Imagem da capa do album.

O arquivo JSON foi carregado do servidor usando o método `fetch()` do JavaScript. O evento `input` foi usado para detectar quando o usuário altera o valor da caixa de texto. Quando o evento `input` é disparado, o valor da caixa de texto é usado para pesquisar no arquivo JSON por artista/banda.



