# desafio-nginx-node

Esse projeto tem a intenção de resolver o desafio Nginx Node da Full Cycle.

A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada na aplicação node.js. Essa aplicação por sua vez adicionará um registro no banco de  dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

### Full Cycle Rocks!

- Lista de nomes cadastrada no banco de dados.

### Considerações:
A aplicação node possui funcionalidades para criar nomes aleatórios e depois salvá-los no banco e sempre que a chamada GET for realizada um nome será gerade e listado em tela.
