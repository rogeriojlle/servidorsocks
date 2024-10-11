var socks = require('socksv5');
const PORT = 5000;
const ENDERECO = '0.0.0.0';

//constroi um servidor SOCKS5
const srv = socks.createServer(function (info, accept, deny) {
  // info: { srcAddr, srcPort, dstAddr, dstPort }
  // accept(): aceita a conexão
  // deny(): rejeita a conexão
  console.log(
    `[${new Date().toLocaleString()}] Conectado de ${info.srcAddr}:${info.srcPort} para ${info.dstAddr}:${info.dstPort}`
  );
  accept();
});

srv.listen(PORT, ENDERECO, function () {
  console.log(`SOCKS server ouvindo no endereço ${ENDERECO}, porta ${PORT}`);
});

// habilita autenticacao, é preciso escolher algum metodo
// nesse caso nenhum
srv.useAuth(socks.auth.None());
