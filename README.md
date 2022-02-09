# blockchain.payments.processor
microservicio encargado de procesar pagos y manejar saldos de cada cuenta asociada a una wallet

## Puntos de interes

### Que es la Binance Smart Chain?
Binance Smart Chain (BSC) representa la segunda generación de tecnología blockchain.
Binance Smart Chain es una plataforma blockchain generalista lista para implementar contratos inteligentes. Estas piezas de código automatizadas pueden codificar cualquier lógica que se necesite, incluidos los servicios bancarios tradicionales: intercambios y préstamos. A nivel técnico, el desarrollo de contratos inteligentes de BSC es posible gracias a EVM (Ethereum Virtual Machine). Debido a la naturaleza descentralizada, un EVM debe funcionar como una computadora descentralizada, ejecutando contratos inteligentes dispersos en miles de computadoras: nodos de red.
Debido a este legado de EVM compartido, BSC puede admitir fácilmente contratos inteligentes escritos en otras blockchains compatibles con EVM.
A través de la API de Binance, los desarrolladores se conectan a los servidores de Binance para codificar contratos inteligentes en cualquier cantidad de lenguajes de programación: GO, Java, JavaScript, C++, C#, Python o Swift.

### Como instalar y configurar Metamask
MetaMask es una de las carteras Ethereum más populares para almacenar tokens y usar aplicaciones descentralizadas.
Puede usar MetaMask para almacenar Ethereum, tokens ERC-20, tokens ERC-721 (criptocoleccionables) y acceder a dapps.
MetaMask está disponible en navegadores web, iOS y Android. Puede instalar la extensión MetaMask en Chrome, Firefox, Brave y Edge.

1. Visite Chrome (Web)[https://chrome.google.com/webstore/category/extensions?hl=es] Store y busque MetaMask o haga clic en (este enlace)[https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en] para agregar la extensión a su navegador. Simplemente puede hacer clic en el botón «agregar a Chrome».

Una vez que haya agregado la extensión MetaMask a su navegador, haga clic en el botón «Comenzar»/«Get Started» para comenzar a configurar su billetera.

2. Para crear la primera billetera MetaMask, haga clic en el botón «Crear una Billetera»/«Create a Wallet». Si tiene otra billetera, también puede importarla a MetaMask.

3. Debe elegir una contraseña segura para su cuenta MetaMask.

Solo usará esta contraseña para iniciar sesión en su billetera MetaMask. Si olvida la contraseña, puede importar su billetera usando la frase inicial que se mostrará en el siguiente paso.

4. Revelear las palabras secretas (frase de respaldo) y escríbirla en una hoja de papel. La seguridad de esta frase de respaldo debe ser de suma importancia. Cualquiera que tenga acceso a su frase de respaldo puede transferir sus monedas a diferentes billeteras.

5. Ingresar las palabras secretas para confirmar su frase de respaldo.

En este punto ya esta creada la billetera.

### Como agregar la red de BSC a metamask
Metamask inicialmente tiene la red de Ethereum por defecto, para agregar otras redes como la BSC, seguir el siguiente tutorial directamente de (Binance)[https://academy.binance.com/es/articles/connecting-metamask-to-binance-smart-chain].
Es recomendable agregar la red Mainnet (es la red de produccion) y tambien la red Testnet (usada para pruebas, no impacta en billeteras reales).

### Crear cuenta en bscscan y obtener el API Key