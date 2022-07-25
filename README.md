<b>Mylocation</b>

![app](https://user-images.githubusercontent.com/15160225/180617682-ed379ea2-61cd-4370-bfba-02a0b01338ad.gif)

<b>Libs utilizadas</b>

- styled-components
- axios
- react-icons
- react-loader-spinner
- typescript
- moment
- ApiContext

<b>Estruturação</b>

O app foi desenvolvido pelos padrões de estrutura normalmente utilizados, dentro da raiz do projeto foi criado o diretório src que contém toda a lógica estrutural /funcional do app. Tais estruturas são, components, styles, services, pages, interfaces, images.
Cada pasta contendo seus arquivos e suas responsabilidades. Deixando o projeto legível e de fácil compreensão.

<b>Página Home</b>

A página home é a principal do projeto, na mesma foi criado um useCallback <b>getWheatherData</b> responsável por fazer a chamada no backend, passando as coordenadas extraídas do location.
  
Foi usado um try catch de forma mais genérica, somente verificando se foi sucesso ou não para fazer suas tratativas. Poderia ser tratado o erro de uma forma mais abrangente mas preferi por dar mais enfase nas prioridades da funcionalidade.

A função faz duas chamadas asyncronas na API, por conta de algo bem específico explicado abaixo. 

- O endpoit que contem os dados de meteorologia do dia e e as previões da semana, não vem com o nome da cidade.

Por conta desse detalhe, precisei fazer uma primeira chamada em um endpoint mais simples, somente para extrair o nome da cidade via spread e montar um objecto contendo o restante das informações no segundo endpoint.

  Se a chamada dos dados for positivo, é criada a variável <b>weatherData</b> e feito o spread para junção dos dados que serão utilizados e em seguinda alimentar o state <b>setWeather</b>.
  
  O estado <b>weather</b> foi tipado com uma interface informando as propriedades que uso e os tipos dela. A mesma esta sendo extraída pelo hook criado para o contexto dos dados. Esse hook evita o prop drilling entre os componentes e facilita a extração direta dos dados para quem precisar dentro da aplicação.
  
  Caso a chamada dê erro, retorno uma mensagem customizada através de um componente <b>CustomErrorMessage</b>.
  
  A renderização da index tem uma condicional, um state Booleano com o nome de "loading".
  É verificado se o loading for true assim que a função <b>getWheatherData</b> é chamada, informando que há uma ação em andamento para carregar os dados e enquanto o loading for true, a renderização carrega o spinner. Caso seja falso, é chamado um useMemo com o nome de <b>handleWeather</b>.

Essa função <b>handleWeather</b> verifica se há dados consumidos do endpoint, se sim, carrega o componente <b>Weather</b>, passando como props o <b>getWheatherData</b>.

o componente <b>Weather</b> recebe as propriedades que tem sua própria interface, o mesmo renderiza os dados unindo os estilos criados com o styled componente e os dados que devem ser informados na interface.

O componente Weather devido ao tamanho e lógica, foi dividido em mais dois componentes, que são eles <b>GeneralInfos</b> e <b>BoxDailys</b>, os mesmos pegam o estado <b>weather</b> através do hook <b>useWeather</b>

Por último detalhe funcional, tem a forma como o <b>BoxDailys</b> é renderizado. O mesmo percorre um map que equivale aos dias de previsões da semana, foi criada uma condicional que só renderiza do indice 1 ao 4, explicação abaixo.

- o Indice 0 já tem os dados sendo exibidos na box principal <b>GeneralInfos</b>
- Foi escolhida renderização apenas dos próximos quatro dias por escolha própria e de layout.

<b>NOTA</b>

Para rodar a aplicação, é necessário criar um arquivo .env na raiz do projeto contento as seguintes variáveis:

REACT_APP_API=https://api.openweathermap.org/data/2.5

REACT_APP_APISECRET=b2325924e4596c88cd3a0de1f3aa0c48

OBS: essa chave criei para testar o projeto, ele roda com ela. Caso queira usar a sua própria é só alterar a mesma no REACT_APP_APISECRET

<b>Considerações Finais</b>

O projeto iniciou com a primeira versão mais simples, depois notei que poderia incrementar mais informações, melhorar processos, layout e fui fazendo diversas atualizações até chegar nesta versão final, pensando nas boas práticas e código limpo.
