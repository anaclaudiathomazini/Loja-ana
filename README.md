# Loja Ana

Boutique editorial estática (MVP) — curadoria sensorial de sabonetes, banho e corpo e presentes.  
Stack: **Astro** (output static) + CSS próprio + JS mínimo. Textos de interface em **pt-BR**.

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera dist/
npm run preview  # pré-visualiza o build
```

Requisitos: Node.js 18.17+ / 20.3+ (testado com Node 20).

## Estrutura principal

```
src/
  data/products.json      # produtos (fonte da verdade)
  data/categories.json    # categorias
  components/             # Header, Footer, ProductCard, …
  layouts/BaseLayout.astro
  pages/                  # rotas (/, /catalogo, /produto/[slug], …)
  styles/                 # tokens + base + layout + components + pages
public/                   # favicon, robots.txt, SVG placeholders
.github/workflows/deploy.yml  # GitHub Pages
DESIGN.md                 # tokens e padrões visuais
```

## Editar produtos e links de afiliado

1. Abra `src/data/products.json`.
2. Para cada item, atualize (há comentários `_comment` de orientação):
   - `name`, `brand`, `shortDescription`, `fullDescription`
   - `fragrance`, `characteristics`, `priceRange`, `tags`
   - **`affiliateUrl`** — URL real do parceiro (o botão **Comprar** usa só este campo)
   - `image` — caminho para foto própria em `public/images/…` (retrato ~3:4)
   - `featured`, `curatorRating`, `slug` (slug estável = URL)
3. Categorias em `src/data/categories.json` (`id` estável; `label` em pt-BR).
4. Rode `npm run build` para validar.

**Importante:** nunca hardcode URL de compra nos templates — sempre `product.affiliateUrl`.

## Assets de produção (o que substituir)

| Placeholder | Substituir por |
|-------------|----------------|
| `public/images/placeholders/*.svg` | Fotos próprias ou licenciadas |
| Marcas demo (`Ateliê Lumière`, etc.) | Nomes reais com direitos |
| `https://example.com/affiliate/…` | Links afiliados reais |
| E-mail/redes em `/contato` | Canais oficiais |
| `site` em `astro.config.mjs` | URL final do GitHub Pages |
| `Sitemap:` em `public/robots.txt` | Mesma URL do site |

Sem logos de marca ou fotos protegidas sem autorização.

## Deploy no GitHub Pages

1. Em `astro.config.mjs`, ajuste:
   - **Site de usuário/organização** (`username.github.io`):  
     `site: 'https://username.github.io'`, `base: '/'`
   - **Site de projeto** (`username.github.io/Loja-ana/`):  
     `site: 'https://username.github.io'`, `base: '/Loja-ana/'`
2. Atualize o sitemap em `public/robots.txt`.
3. No repositório GitHub: **Settings → Pages → Source = GitHub Actions**.
4. Faça push da branch `main`. O workflow `.github/workflows/deploy.yml` faz build e publica `dist/`.

Não é necessário `gh-pages` branch manual — o artifact Pages é usado.

## SEO e tracking

- Titles, meta descriptions e Open Graph por página (`Seo.astro`).
- `robots.txt` + sitemap via `@astrojs/sitemap`.
- Schema.org `Product` nas páginas de produto.
- Atributos `data-track="buy-click"` / `data-product` nos CTAs afiliados (pronto para GA futuro; sem ID real no MVP).

## Design

Ver [DESIGN.md](./DESIGN.md) — tokens (paper/blush/ink/champagne), Cormorant Garamond + DM Sans, padrões de hero/card/footer.

## Licença

ISC — conteúdo e marca Loja Ana a critério do proprietário.
