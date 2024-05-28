# TRABALHO - LINGUAGENS (JAVASCRIPT)
por <a href="https://github.com/dgomp/">Diego Parente</a> e <a href="https://github.com/lucasMunizt/">Lucas Muniz</a>, para a cadeira de "Linguagens de Programação", da professora Neusa Liberato Evangelista (Uni7).


## 1. As variáveis locais são alocadas estática ou dinamicamente?	

> São alocadas dinamicamente, ou seja, a memória para as variáveis fica alocada em tempo de execução, e não, em tempo de compilação.


## 2. Definições de subprograma podem aparecer em outras definições de subprograma (aninhados)?

> Sim, isso é possível no JavaScript, ou seja, uma função poderá ser definida dentro de outra, ofertando possibilidades de organização e encapsulamento de código.


## 3. Qual método (ou métodos) de passagem de parâmetros é usado?

> Em tipos primitivos (números, strings, booleanos), a passagem é feita por valor. Já para objetos (array e funções), é feita por referência.


## 4. Os tipos dos parâmetros são verificados em relação aos tipos dos parâmetros formais?

> Automaticamente, não, pois JavaScript trata-se de uma linguagem de tipagem dinâmica e fraca, logo, qualquer tipo de argumento poderá ser recebido pelas funções. A verificação ocorrerá somente em tempo de execução.


## 5. São permitidos efeitos colaterais funcionais?
  
> Sim, são permitidos, ou seja, uma função pode interagir fora de seu escopo e alterar variáveis ou outros dados. Dentre eles, podem ser alteradas variáveis globais, conteúdos de objetos e/ou arrays que tenham sido passados como argumentos, interação com DOM etc.


## 6. Quais tipos de valores podem ser retornados de funções?
  
> Qualquer tipo de valor, ou seja, tipos primitivos, objetos arrays, outras funções e até “undefined”.


## 7. Se subprogramas podem ser passados como parâmetros e podem ser aninhados, qual é o ambiente de referenciamento de um subprograma passado?

> Sim, os subprogramas podem ser passados como parâmetro e também podem ser aninhados. Dito isto, ele aplica o ambiente de referenciamento léxico, ou seja, funções mantêm o escopo no qual foram definidas originalmente, independentemente de onde são chamadas.


## 8. Quantos valores podem ser retornados de funções?

> Retorna apenas um valor, todavia, como pode ser um objeto ou array, dentro deste pode ter múltiplos valores.


## 9. Os subprogramas podem ser sobrecarregados?

> Em regra, não, ou seja, não é possível criar funções com o mesmo nome e parâmetros diferentes na mesma definição. Isso ocorre porque o JavaScript busca ser simples e flexível.
>
> No entanto, há como fazer sobrecarga de funções através de verificações de tipos, bem como de números de argumentos dentro da mesma função.


## 10. Os subprogramas podem ser genéricos?

> Sim, o JavaScript consegue suporte à programação genérica através de tipos genéricos, bem como templates de funções. Essa funcionalidade permite criar funções que podem trabalhar com diferentes tipos de dados.


## 11. Se a linguagem permite subprogramas aninhados, fechamentos são suportados (a linguagem de programação permite que os subprogramas aninhados também capturem variáveis do escopo em que foram definidos)?

> Sim, é possível termos subprogramas aninhados e suporte a closures (fechamentos), ou seja, que funções internas acessem variáveis do escopo em que foram definidas, mesmo que o escopo externo não esteja mais ativo, ou seja, tenha sido encerrado.
