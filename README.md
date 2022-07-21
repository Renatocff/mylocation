<b>Mylocation</b>

![image](https://user-images.githubusercontent.com/15160225/180199604-9da72d94-1f5c-4b4b-90f6-3230b44e52fd.png)

<b>Libs utilizadas</b>

- styled-components
- axios
- react-icons
- react-loader-spinner
- typescript

<b>Estruturação</b>

O app foi resenvolvido pelos padrões de estrutura normalmente utilizados, dentro da raiz do projeto, foi criado o diretório src que contém toda a lógica estrutura/lógica funcional do app. Tais estruturas são, components, styles, services, pages, interfaces, images.
Cada pasta contendo seus arquivos e suas responsabilidades. Deixando o projeto legível e de fácil compreensão.

<b>Página Home</b>

A página home é a principal do projeto, na mesma foi criado um useCallback <b>getWheatherData</b> responsável por fazer a chamada no backend passando as coordenadas extraídas do location.
  
Foi usado um try catch de forma mais genérica, somente verificando se foi sucesso ou não para fazer suas tratativas. Poderia ser tratado o erro de uma forma mais abrangente...mas preferi por dar mais enfase nas prioridades da funcionalidade.
  Se a chamada dos dados for positivo, o retorno da chamada que por padrão é uma variável <b>data</> foi passado para uma nova variábel chamada <b>wheatherResponse</b>, essa alimenta o useState <b>setWheatherData</b>.
  
  O estado <b>wheatherData</b> foi tipado com uma interface informando as propriedades que uso e os tipos dela.
  
  Caso a chamada dê erro, retorno uma mensagem customizada através de um componente <b>CustomErrorMessage</b>.
  
  A renderização da index tem uma condicional, um state Booleano com o nome de "loading".
  é verificado se o loading é true, ele é setado como true assim que a função <b>getWheatherData</b> é chamada...informando que há uma ação em andamento para carregar os dados..enquanto o loading for true, a renderização carrega o spinner. Caso seja falso, é chamado um useMemo com o nome de <b>handleWeather</b>.

essa função <b>handleWeather</b> verifica se há dados consumidos do back, se sim...carrega o componente <b>Weather</b>, passando como props o <b>#wheatherData</b> e <b>getWheatherData</b>.

o componente <b>Weather</b> recebe as propriedades que tem sua interface definida para as propriedades, o mesmo renderiza os dados unido os estilos criados com o styled componente e os dados que devem ser informados na interface.
