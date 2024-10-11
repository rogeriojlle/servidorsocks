# servidorsocks

Várias pessoas me consultam quando precisam usar o gerenciador de pacotes ou fazer download quando estão conectadas em máquinas com restrição de navegação, segue.

Você vai precisar de um servidor de proxy socks ou http, aqui vamos usar o socks. porque foi o mais simples de construir, deve haver alternativas, mas o Nodejs está na lista de softwares homologados e não precisa de permissões administrativas pra usar.

## servidor SOCKS 

Do modo como ele está, ele escuta em todas os endereços disponives, na porta 5000. as variaveis PORT e ENDERECO no arquivo index.json definem isso.

Como já mencionado, ele é executado com Nodejs, mas acredito que com Bun também funcione, não testei, Bun não está na tal lista.

não precisa nenhum parâmetro, um "node index.js" já é o suficiente. Sugiro deixar isso num console à parte.

## conexão SSH

```
ssh -R 5000:127.0.0.1:5000 fulano@computador
```
o "-R" diz que:

Será aberta lá com computador destino na porta 5000, que é primeiro número do parametro -R, e tudo que acessar lá é automagicamnte desviado, a partir da minha máquina para o endereço e porta indicado no restante dos parâmetros, no caso 127.0.0.1 que é minha própria máquina, na porta 5000 que é a porta que o servidor socks está ouvindo.

## exportando as variáveis

uma vez conectado exporte as variáveis com os comandos:

```
export all_proxy=socks5h://127.0.0.1:5000
export http_proxy=socks5h://127.0.0.1:5000
```

Nesse caso o 5000 tem que casar com o primeiro número definido do parâmetro -R.

Lembrando que essas variáveis só valem para o usuário e terminal logados, para fazer o apt / dnf / yum funcionar, se tornem root antes.
curl também funciona, e wget creio que sim, esse não testei. Mas todas essas ferramentes tem opção de linha de comando ou arquivos de configuração para tal, caso elas ignorem o que foi exportado.

Divirtam-se!
