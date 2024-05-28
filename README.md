# TRABALHO - LINGUAGES (JAVASCRIPT)
por Diego Parente e Lucas Muniz, para a cadeira de "Linguagens de Programação", da professora Neusa Liberato Evangelista (Uni7).


## 1. AS VARIÁVEIS LOCAIS SÃO ALOCADAS ESTÁTICA OU DINAMICAMENTE?	

> São alocadas dinamicamente, ou seja, a memória para as variáveis fica alocada em tempo de execução, e não, em tempo de compilação.


## 2. DEFINIÇÕES DE SUBPROGRAMA PODEM APARECER EM OUTRAS DEFINIÇÕES DE SUBPROGRAMA (ANINHADOS)?

> Sim, isso é possível no JavaScript, ou seja, uma função poderá ser definida dentro de outra, ofertando possibilidades de organização e encapsulamento de código.


## 3. QUAL MÉTODO (OU MÉTODOS) DE PASSAGEM DE PARÂMETROS É USADO?

> Em tipos primitivos (números, strings, booleanos), a passagem é feita por valor. Já para objetos (array e funções), é feita por referência.


## 4. OS TIPOS DOS PARÂMETROS SÃO VERIFICADOS EM RELAÇÃO AOS TIPOS DOS PARÂMETROS FORMAIS?

> Automaticamente, não, pois JavaScript trata-se de uma linguagem de tipagem dinâmica e fraca, logo, qualquer tipo de argumento poderá ser recebido pelas funções. A verificação ocorrerá somente em tempo de execução.


## 5. SÃO PERMITIDOS EFEITOS COLATERAIS FUNCIONAIS?
  
> Sim, são permitidos, ou seja, uma função pode interagir fora de seu escopo e alterar variáveis ou outros dados. Dentre eles, podem ser alteradas variáveis globais, conteúdos de objetos e/ou arrays que tenham sido passados como argumentos, interação com DOM etc.


## 6. QUAIS TIPOS DE VALORES PODEM SER RETORNADOS DE FUNÇÕES?
  
> Qualquer tipo de valor, ou seja, tipos primitivos, objetos arrays, outras funções e até “undefined”.


## 7. SE SUBPROGRAMAS PODEM SER PASSADOS COMO PARÂMETROS E PODEM SER ANINHADOS, QUAL É O AMBIENTE DE REFERENCIAMENTO DE UM SUBPROGRAMA PASSADO?

> Sim, os subprogramas podem ser passados como parâmetro e também podem ser aninhados. Dito isto, ele aplica o ambiente de referenciamento léxico, ou seja, funções mantêm o escopo no qual foram definidas originalmente, independentemente de onde são chamadas.


## 8. QUANTOS VALORES PODEM SER RETORNADOS DE FUNÇÕES?

> Retorna apenas um valor, todavia, como pode ser um objeto ou array, dentro deste pode ter múltiplos valores.


## 9. OS SUBPROGRAMAS PODEM SER SOBRECARREGADOS?

> Em regra, não, ou seja, não é possível criar funções com o mesmo nome e parâmetros diferentes na mesma definição. Isso ocorre porque o JavaScript busca ser simples e flexível.
No entanto, há como fazer sobrecarga de funções através de verificações de tipos, bem como de números de argumentos dentro da mesma função.


## 10. OS SUBPROGRAMAS PODEM SER GENÉRICOS?

> Sim, o JavaScript consegue suporte à programação genérica através de tipos genéricos, bem como templates de funções. Essa funcionalidade permite criar funções que podem trabalhar com diferentes tipos de dados.


## 11. SE A LINGUAGEM PERMITE SUBPROGRAMAS ANINHADOS, FECHAMENTOS SÃO SUPORTADOS (A LINGUAGEM DE PROGRAMAÇÃO PERMITE QUE OS SUBPROGRAMAS ANINHADOS TAMBÉM CAPTUREM VARIÁVEIS DO ESCOPO EM QUE FORAM DEFINIDOS)?

> Sim, é possível termos subprogramas aninhados e suporte a closures (fechamentos), ou seja, que funções internas acessem variáveis do escopo em que foram definidas, mesmo que o escopo externo não esteja mais ativo, ou seja, tenha sido encerrado.
