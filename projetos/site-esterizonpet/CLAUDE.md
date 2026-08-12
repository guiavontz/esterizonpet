# Site profissional Esterizon

> Projeto criado em 2026-08-12. Pasta dedicada — instruções aqui sobrescrevem as da raiz quando relevantes.

## Sobre

Substituir o site atual (esterizon.com.br, básico) por um site premium com animações, no nível de valor percebido de apple.com.br, com cara de petshop.

## Tipo

Projeto interno

## Entregas previstas

- Site completo (hero animado + demais seções, conforme evoluir)

## Onde salvar o que

- Briefing e contexto: nessa pasta na raiz (`briefing.md`)
- Código do site: nessa mesma pasta (`projetos/site-esterizonpet/`)

## Contexto que herda da raiz

Esse projeto herda automaticamente o tom de voz, marca e contexto do negócio definidos em `_memoria/` e `identidade/` da raiz. Não duplicar essas informações aqui.

## Específico desse projeto

- Paleta: fundo **branco** + azul de destaque (revisado em 2026-08-12 — era escuro antes, ver `identidade/design-guide.md`)
- Intro do hero: overlay em tela cheia com a logo grande + "Esterizon" se formando letra a letra (`#intro` em `index.html`, lógica em `js/main.js`). Quando o usuário mandar o vídeo da logo, trocar o bloco `.intro__mark` por um `<video autoplay muted playsinline>` apontando pra `assets/video/`, mantendo a chamada de `finishIntro()` no fim (via evento `ended` do vídeo em vez do `setTimeout`)
- Fotos reais dos equipamentos ainda não disponíveis — usuário vai mandar conforme as sessões forem feitas
- Seção Galeria foi removida a pedido do usuário em 2026-08-12 (nav, CSS `.gallery-grid` e a seção em si, na home e nas 6 páginas de produto). As fotos ficaram salvas em `assets/galeria/` sem uso — não recriar essa seção sem pedido explícito
- Depoimentos (`#depoimentos`) são exemplos de placeholder, marcados como tal na tela — trocar por avaliações reais assim que tiver
- Formulário de contato (`#contato`) já funciona: em vez de backend, ao enviar ele monta uma mensagem com os dados preenchidos e abre o WhatsApp da Esterizon. Número confirmado pelo usuário em 2026-08-12: `5511919040777` (+55 11 91904-0777) — é o correto pra receber leads, não o "11 2618-4578" que aparece nas fotos dos produtos
- Conteúdo de produtos, ciência (5 razões) e a fala do fundador (João B. Neto) vieram de panfletos reais que o usuário mandou em 2026-08-12 — não são mais placeholder
- Fotos reais dos produtos: usuário vai salvar os arquivos em `assets/produtos/` (não consigo extrair imagens coladas no chat diretamente). Nomes esperados: `g3d-digital`, `g3a-analogico`, `aqua`, `esterilizador-ambientes`, `oleos`, `equinos` — quando chegarem, trocar os placeholders "Foto em breve" pelas tags `<img>` correspondentes em `index.html`
- `assets/hero-dog.jpg` já é a foto real (o usuário mandou em PNG 2,2MB — convertido pra JPG ~211KB em 2026-08-12). Hero agora é layout dividido: texto à esquerda (`.hero__inner` grid), foto retrato 4:5 à direita com blob decorativo atrás (`.hero__media`/`.hero__blob`)
- `assets/banner-dog.jpg` ainda é placeholder (placedog.net) — trocar pela foto real (golden retriever de língua de fora) quando o usuário salvar
- Ao receber imagens novas do usuário: sempre checar formato/peso (PNG de foto = didca de arquivo pesado) e converter pra JPG comprimido via PowerShell (`System.Drawing` + `EncoderParameter Quality`) antes de usar
- Tentativa de seção "Por dentro" (toggle montado/exploded pro Esterizon Aqua) foi revertida a pedido do usuário em 2026-08-12 — "ficou tudo errado". Ele quer deixar essa parte (animação de montagem do equipamento) pro final do projeto, é a mais difícil. Não reintroduzir sem pedido explícito
- Padrão aprendido: pra "peças se montando/voando" de verdade, só é viável com imagens de cada peça já recortadas (fundo transparente) — duas fotos chapadas (montada + exploded/legendada) só dão pra crossfade/toggle, não pra animação de peças individuais se movendo
- Depoimentos (`#depoimentos`) — carrossel com 10 itens: 2 reais com nome (Cinara Bastos, Viviane Menezes), 5 reais por tema sem nome atribuído (Pet shop/banho e tosa, água ozonizada, atendimento e instalação, suporte pós-venda, experiência geral — texto mandado pelo usuário em 2026-08-12, citados como "Cliente Esterizon — [tema]") e 3 exemplos genéricos claramente marcados como placeholder
- Barra de estatísticas (`.stats-bar`) não tem mais ícones (removidos a pedido do usuário em 2026-08-12) — só label + número grande com gradiente de texto, e o card ganhou efeito vidro de verdade (`backdrop-filter: blur` + dois reflexos diagonais via `::before`/`::after`, inspirado numa referência de cartão de vidro que o usuário mandou)
- Todas as 6 páginas de produto usam `<body class="product-page">` — layout mais compacto (menos padding em `.section`, `.product-hero`, `.product-cta`) e com animações extra (zoom na foto do hero ao passar o mouse, hover nas linhas da ficha técnica, lift nos usage-cards). Regras em `css/style.css` sob "Páginas de produto: layout mais compacto e animado"
- Ícones de texto (O₃, Nano, ↓, ✓, 1-6) que ainda restavam nas páginas de produto foram trocados pelos mesmos SVGs premium da home, reaproveitados por conceito igual (G3D/G3A = mesmos 4 de Diferenciais; Aqua = mesmos 5 de Ciência; Óleos/Equinos = mesmos 4 de Diferenciais; Ambientes = 6 novos ícones específicos)
- Barra de estatísticas (`.stats-bar`, logo abaixo do hero): Projetos 200+, Clientes 300+, Produtos 40+, Propriedade intelectual 80+ — números fornecidos pelo usuário
- Páginas de detalhe de produto criadas em 2026-08-12, uma por equipamento, na raiz do projeto (não em subpasta, pra manter os caminhos relativos simples): `produto-g3d.html`, `produto-g3a.html`, `produto-aqua.html`, `produto-ambientes.html`, `produto-oleos.html`, `produto-equinos.html`. Template compartilhado: breadcrumb, hero de produto (`.product-hero`), specs (`.spec-table`), benefícios (reusa `.feature-grid`), CTA final (`.product-cta`). Conteúdo do Esterilizador de Ambientes é baseado na página antiga (esterizon.com.br/ozonizadordeambientes/), os outros vieram dos panfletos que o usuário mandou. Cards da seção Produtos na home linkam pra essas páginas via "Ver detalhes →"
- `js/main.js` foi refatorado pra ser defensivo (checa se cada elemento existe antes de usar) porque as páginas de produto não têm intro nem formulário de contato — sem isso o script quebraria nessas páginas. Manter esse padrão ao adicionar novas páginas que reusam o mesmo JS
- Fotos reais dos 6 equipamentos foram salvas pelo usuário em 2026-08-12 (PNGs de 2-2.7MB cada, direto em `assets/`) e convertidas/redimensionadas pra JPG (~130-195KB cada) em `assets/produtos/`: `g3d.jpg`, `g3a.jpg`, `aqua.jpg`, `ambientes.jpg`, `equinos.jpg`, `oleos.jpg`. Já conectadas nos cards da home e no hero de cada página de produto. Identifiquei cada uma pelo texto/rótulo visível na própria foto (G3D 10g O3/h, G3A 10g O3/h, Água Esterizon 5GO3/h = Aqua, Esterilizador de Ambientes, G3E Equinos 10g O3/h)
- **Discrepância não resolvida:** sobrou um arquivo `assets/aguabanhopet.png` — foto real de um equipamento "Água BanhoPet Esterizon" mas com selo de **5GO3/h**, o que não bate com G3D nem G3A (ambos anunciados como 10g O3/h). Não usei essa foto em lugar nenhum ainda — perguntar ao usuário o que esse produto é antes de decidir onde encaixar
- **Discrepância corrigida com o usuário pendente de confirmação:** a foto real dos óleos (`assets/alecrim.png`, usada como `assets/produtos/oleos.jpg`) mostra os sabores **Alecrim, Bambu, Cúrcuma, Girassol, Maracujá, Andiroba** sob a marca "Essência PET ZEO" — diferente do que está escrito no site hoje (Alecrim, Babosa, Cúrcuma, Girassol, Maracujá, Semente de Abóbora), que veio de uma foto mais borrada lida antes. Ainda não atualizei o texto (index.html card + produto-oleos.html) — fazer isso quando o usuário confirmar. Discutir esse limite com o usuário antes de construir algo, não só depois
- `identidade/logo.png` foi redimensionado de 1536x1024 (1,28MB) pra 640x427 (~165KB) em 2026-08-12 — pesado demais pro tamanho usado no site. Original preservado em `identidade/logo-original.png` caso precise de alta resolução pra impressão/material gráfico
- Fotos dos 3 cards de "Como funciona" (`assets/como-funciona/passo-1.jpg` a `passo-3.jpg`) já são reais desde 2026-08-12 — vieram de `assets/diagnostico.png`, `instalacao.png`, `acompanhamento.png` (retrato, ~4:5), convertidas pra JPG. Por isso `.step__media` usa `aspect-ratio: 4/5` (não mais 4/3)
- Bug corrigido em 2026-08-12: `.step h3` (títulos dos cards do "Como funciona") não tinha `color` definido, então herdava o branco de `.section--brand` — texto branco em card branco, invisível. Cuidado com esse padrão em outros lugares onde um card claro fica dentro de uma seção com `color` claro definido no container
- Sistema de ícones revisado em 2026-08-12: o usuário achou os badges coloridos (azul/verde/amarelo/vermelho) "de criança, parecendo hospital". Removida toda rotação de cor (`--green`/`--yellow`/`--red` nos ícones) — agora todo ícone de badge é azul sólido (`var(--accent)`) com SVG branco dentro, um sistema só. Trocados os textos/abreviações (O₃, Nano, PJ, CL, 1/2/3/4/5) por ícones SVG line-art de verdade, feitos à mão (sem biblioteca externa)
- Barra de estatísticas (`.stats-bar__value[data-count]`) agora anima contando de 0 até o número real quando entra na tela (`js/main.js`, IntersectionObserver + requestAnimationFrame)
- Banner "momento" ganhou 3 badges premium (Certificado UNICAMP / 100% nacional / Suporte contínuo) sobre a foto, estilo cartão translúcido escuro com ícone azul sólido — inspirado numa referência visual que o usuário mandou, adaptado pra paleta da Esterizon (preto/branco/azul, uma cor só)
- Seção Sobre: já usa a foto real do fundador (`assets/fundador.jpg`) no bloco `.about-visual`, salva pelo usuário em 2026-08-12
