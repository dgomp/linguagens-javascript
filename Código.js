// Questão 01 - AS VARIÁVEIS LOCAIS SÃO ALOCADAS ESTÁTICA OU DINAMICAMENTE?	

function teste() {
    let variavelLocal = "Olá, Mundo!";
    console.log(variavelLocal);
}

teste();

    // Ou seja, ao ser executada a função teste, é definida a “variavelLocal”. Posteriormente, ela é mostrada e, ao fim, desalocada.


// Questão 02 - DEFINIÇÕES DE SUBPROGRAMA PODEM APARECER EM OUTRAS DEFINIÇÕES DE SUBPROGRAMA (ANINHADOS)?

function Subprogama(){
    function Test(){
        console.log('ola')
    }
    Test()
}
Subprogama()

    
// Questão 03 - QUAL MÉTODO (OU MÉTODOS) DE PASSAGEM DE PARÂMETROS É USADO?

    // Exemplo Valor

    function alterarValor(x) {
        x = 10;
        console.log("Dentro da função: " + x);
    }
    let a = 5;
    console.log("Antes da função: " + a);
    alterarValor(a);
    console.log("Depois da função: " + a);
        // Cópia do valor é passada para a função, de modo que modificações que possam vir a ocorrer dentro da função não afetem a variável original, ou seja, antes o valor era “5”. Durante a função, ficou “10” e depois da função, continua sendo “5”.
    

    // Exemplo Referência

    function alterarProp(obj) {
        obj.valor = 20;
        console.log("Dentro da função: " + obj.valor);
    }
    let meuObj = { valor: 5 };
    console.log("Antes da função: " + meuObj.valor);
    alterarProp(meuObj);
    console.log("Depois da função: " + meuObj.valor);

        // No início da função, o “obj.valor” é definido como “20”, logo, exibe o valor “20”. Ocorre que, antes da função, ele era “5” (let meuObj). Depois que ocorre a alteração na função, ele passa a ser “20”.
    
    
// Questão 04 - OS TIPOS DOS PARÂMETROS SÃO VERIFICADOS EM RELAÇÃO AOS TIPOS DOS PARÂMETROS FORMAIS?

function add(a, b) {
    return a + b;
}
console.log(add(1, 2));
console.log(add("1", "2"));

    // No primeiro caso, a resposta será “3”, ao passo que, no segundo, será “12”, ou seja, enquanto um trata de soma de números, o outro trata de soma de strings.


// Questão 05 - SÃO PERMITIDOS EFEITOS COLATERAIS FUNCIONAIS?

function incrementarGlobal() {
    globalVar++;
    console.log(globalVar);
  }
  globalVar = 10;
  incrementarGlobal();
  console.log(globalVar);

    // A variável global “globalVar” começa como “10”, todavia, ao rodar a função “incrementarGlobal()”, é somado “1” ao valor, tornando-se “11”.


// Questão 06 - QUAIS TIPOS DE VALORES PODEM SER RETORNADOS DE FUNÇÕES?

    // Exemplo (tipos primitivo)

    function add(a, b) {
    return a + b;
    }
    const result = add(1, 2);
    console.log(result);
  
        // Vai somar as variáveis “a” e “b”, resultando em “3”.


    // Exemplo (strings)

    function add(a, b) {
        return a + b;
        }
        const resultad0 = add("Ol", "á");
        console.log(resultad0);

        // Vai juntar “Ol” e “á”, formando “Olá”.


    // Exemplo (objetos)

    function criarPessoa(nome, idade) {
        return {
          nome: nome,
          idade: idade
        };
      }
      const pessoa = criarPessoa("João", 30);
      console.log(pessoa);

        // Ao executar a função “criarPessoa()” retornará um objeto com as propriedades “nome” e “idade”. Posteriormente, será dito que o nome será “João” e a idade será “30”, logo, ao exibir a variável pessoa, será exibido “nome: João, idade: 30”.


// Questão 07 - SE SUBPROGRAMAS PODEM SER PASSADOS COMO PARÂMETROS E PODEM SER ANINHADOS, QUAL É O AMBIENTE DE REFERENCIAMENTO DE UM SUBPROGRAMA PASSADO?

function criarContador(inicial) {
    let contador = inicial;
    function incrementar() {
        contador++;
        console.log("Contador: " + contador);
    }
    return incrementar;
}
function executarIncremento(funcaoIncremento) {
    funcaoIncremento();
    funcaoIncremento();
}
let meuContador = criarContador(10);
executarIncremento(meuContador);

    // O exemplo demonstra uma função em JavaScript sendo passada como parâmetro para outra função, mantendo acesso ao seu ambiente de referenciamento original graças aos closures. Com base nisso, é possível que a função passada continue a operar corretamente, acessando as variáveis do escopo em que foi criada, mesmo sendo executada em um contexto diferente.


// Questão 08 - QUANTOS VALORES PODEM SER RETORNADOS DE FUNÇÕES?

    // Exemplo (tipos primitivos)
    function add(a, b) {
        return a + b;
        }
    const resultado = add(1, 2);
    console.log(resultado);

        // Todavia, como pode ser um objeto ou array, dentro deste pode ter múltiplos valores.

    // Exemplo (objeto)

    function retornaObjeto() {
        return { x: 1, y: 2, z: 3 };
      }
      const { x, y, z } = retornaObjeto();
      console.log(x);
      console.log(y);
      console.log(z);
    

// Questão 09 - OS SUBPROGRAMAS PODEM SER SOBRECARREGADOS?

function sobrecarregar(a, b) {
    if (typeof b === 'undefined') {
      console.log('Um argumento: ' + a);
    } else {
      console.log('Dois argumentos: ' + a + ' e ' + b);
    }
  }
  sobrecarregar(5);
  sobrecarregar(5, 10);

    // É verificado, por meio da função “sobrecarregar” se o segundo argumento b é “undefined”. A depender do número de argumentos fornecidos, ela executa diferentes blocos de código, simulando a sobrecarga de funções, existente em outras linguagens, como Java e C++.


// Questão 10 - OS SUBPROGRAMAS PODEM SER GENÉRICOS?

function identidade(valor) {
    return valor;
  }
  
  console.log(identidade(5));
  console.log(identidade('Olá'));
  console.log(identidade([1, 2, 3]));
  console.log(identidade({a: 1}));

    // Veja, no exemplo acima, é possível retornar tanto um número, quanto uma string, array ou objeto.


// Questão 11 - SE A LINGUAGEM PERMITE SUBPROGRAMAS ANINHADOS, FECHAMENTOS SÃO SUPORTADOS (A LINGUAGEM DE PROGRAMAÇÃO PERMITE QUE OS SUBPROGRAMAS ANINHADOS TAMBÉM CAPTUREM VARIÁVEIS DO ESCOPO EM QUE FORAM DEFINIDOS)?

function contador() {
    let count = 0;
    function incrementar() {
      count++;
      console.log(count);
    }
    return incrementar;
  }
  const contar = contador();
  contar();
  contar();
  contar();

    // A função “contador” é uma variável local que está em um escopo externo. Já a função “incrementar”, é aninhada e acessa a variável “count”, portanto, acessa uma variável de escopo externo. Posteriormente, a função aninhada é retornada, através do “return”. Após, definimos “contar” como “contador()”. Dito isto, mesmo a função “contador()” tendo terminado, a função aninhada “contar” continua conseguindo acessar a variável “count”.