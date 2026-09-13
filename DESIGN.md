# Loja Ana — Design System (Baseline v1)

Documentação dos tokens e padrões visuais aplicados no MVP. Fonte: handoff Visual Design v1.

## Posicionamento

Boutique editorial feminina e sensorial — revista de beleza encontra atelier de autocuidado. Papel quente, blush suave, tipografia refinada. Nunca marketplace barulhento nem estética rústica/scrapbook.

## Tipografia

| Papel | Família | Uso |
|-------|---------|-----|
| Display | **Cormorant Garamond** | Hero, títulos de página, nomes de produto, seções |
| UI / corpo | **DM Sans** | Navegação, preços, parágrafos, labels, botões |

Carregamento via Google Fonts (`preconnect` + stylesheet) no `BaseLayout.astro`.

## Tokens (`src/styles/tokens.css`)

### Cores

| Token | Hex | Uso |
|-------|-----|-----|
| `--color-paper` | `#F7F3EE` | Fundo da página |
| `--color-paper-elevated` | `#FFFCF8` | Cards, sheets |
| `--color-mist` | `#EDE6DE` | Seções sutis |
| `--color-blush` | `#E8C4C0` | Lavagens de destaque |
| `--color-rose` / `--color-rose-deep` | `#C9898A` / `#A66B6D` | Acentos, hover |
| `--color-ink` / muted / soft | `#2C2421` / `#6B5E58` / `#9A8B84` | Tipografia |
| `--color-champagne` / soft | `#C4A574` / `#E8D9C0` | Regras, foco, destaques |
| `--color-border` | `#E0D6CC` | Hairlines |
| `--color-focus` | `#C4A574` | Anel de foco teclado |

**CTA primário:** fill `--color-ink` + texto paper-elevated (nunca laranja/verde de marketplace).

### Escala tipográfica (mobile-first)

Display XL/L/M/S, Body L/Body/Body S, Label, Price — ver `tokens.css`.  
Breakpoint `768px`: Display XL → `3.5rem`, L → `2.75rem`, M → `1.75rem`.

### Espaçamento

Base 8px: `--space-1` … `--space-12`. Layout max `72rem`, prose `40rem`.

### Raios e sombra

`--radius-card: 12px`, `--shadow-card: 0 8px 24px rgba(44,36,33,0.06)`.

## Padrões de UI

- **Hero:** campo paper, headline Cormorant PT-BR, subline DM Sans muted, vinheta blush opcional, CTA “Explorar”.
- **ProductCard:** retrato ~3:4, radius 12px, borda ou sombra suave, título Cormorant, preço DM Sans, ações Ver produto / Comprar.
- **Footer:** esparso, hairline champagne, disclosure afiliados em `text-body-s` ink-muted.
- **Motivos:** apenas esparsos — grain/paper sutil ou uma vinheta aquarela; nunca rústico.

## Arquivos CSS

| Arquivo | Função |
|---------|--------|
| `src/styles/tokens.css` | Variáveis e bumps de breakpoint |
| `src/styles/base.css` | Reset, body, tipografia, foco |
| `src/styles/layout.css` | Header, grid, footer, containers |
| `src/styles/components.css` | Cards, botões, chips |
| `src/styles/pages.css` | Hero, PDP, about, contact |

Componentes devem referenciar **apenas** variáveis CSS — sem hex soltos.
