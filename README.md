# Intranet Empetur.

Página inicial dos usuários da rede EMPETUR desenvolvida em Next.js.

## Depoloy realizado através do [Dockerfile](./Dockerfile).

Usando a imagem alpine do node-lts, a porta 3000 é exposta para a aplicação rodar, entretanto, no momento da criação do container é passado o parâmetro
```-p 80:3000``` para traduzir a porta padrão da aplicação no container para a porta 80 do host.

logo após, todo o conteúdo da pasta é copiado para dentro da pasta de trabalho do container (ignorando os arquivos e diretórios listados no [.dockerignore](./.dockerginore)).

E por fim as dependências são instaladas usando o ```npm install``` e a aplicação roda através do ```npm run dev```.

## Layout da página

[![ ](./public/midia/print.jpg) ]

---

No canto superior direito da página, estão localizados os menus principais, [Início](#inicio), [Sobre](#sobre), [Contato](#contato) e [Galeria](#galeria).

#### Início {#inicio}

Retorna para a página inicial.

#### Sobre {#sobre}

Mostra algumas informações sobre a empresa.

#### Contato {#contato}

Abre uma agenda telefônica com todos os ramais da empresa.

#### Galeria {#galeria}

Página ainda em desenvolvimento de uma galeria com fotos de eventos.

---

Na parte central da página ficam os links para os serviços mais usados, **SEI**, **Expresso** e **GLPI**.
Logo abaixo fica um pequeno *slideshow* com imagens de avisos.
