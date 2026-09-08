# Guia Passo a Passo: Deploy Gratuito no Cloudflare Pages

Este documento detalha como colocar seu novo portfólio no ar com custo zero perpétuo, certificado SSL automático e suporte ao domínio `leoisaac.com.br`.

---

## 1. Subir o Projeto para o seu GitHub

No terminal, dentro da pasta do projeto (`portfolio-leoisaac`):

```bash
# 1. Verificar os arquivos alterados
git add .

# 2. Criar o commit inicial
git commit -m "feat: portfolio refactor - Next.js 15, Tailwind, Supabase and Cloudflare"

# 3. Criar um novo repositório no seu GitHub (ex: portfolio-leoisaac)
# e vincular com os comandos:
git remote add origin https://github.com/leoisf/portfolio-leoisaac.git
git branch -M main
git push -u origin main
```

---

## 2. Configurar o Cloudflare Pages

1. Acesse o painel da [Cloudflare](https://dash.cloudflare.com) e faça login gratuito.
2. No menu lateral esquerdo, clique em **Compute (Workers & Pages)** > **Pages**.
3. Clique em **Connect to Git** (Conectar ao Git) e selecione sua conta do GitHub.
4. Escolha o repositório `portfolio-leoisaac`.
5. Preencha as configurações de Build:
   * **Framework preset**: `None` ou `Next.js (Static HTML Export)`
   * **Build command**: `npm run build`
   * **Build output directory**: `out`
6. *(Opcional)* Se já tiver criado o Supabase, adicione as variáveis de ambiente em **Environment variables**:
   * `NEXT_PUBLIC_SUPABASE_URL`
   * `NEXT_PUBLIC_SUPABASE_ANON_KEY`
7. Clique em **Save and Deploy**. Em menos de 1 minuto seu site estará publicado em um domínio provisório como `portfolio-leoisaac.pages.dev`.

---

## 3. Apontar o Domínio `leoisaac.com.br`

Na Cloudflare Pages:
1. Dentro do seu projeto na Cloudflare Pages, vá na aba **Custom domains**.
2. Clique em **Set up a custom domain**.
3. Digite `leoisaac.com.br` (e também `www.leoisaac.com.br`).
4. A Cloudflare informará o registro CNAME ou orientará a apontar os Nameservers no Registro.br:
   * No painel do [Registro.br](https://registro.br), basta atualizar os servidores DNS para os indicados pela Cloudflare (ex: `ns1.cloudflare.com` e `ns2.cloudflare.com`).
5. A Cloudflare emitirá e renovará o certificado SSL (HTTPS) automaticamente sem nenhum custo.

---

## 4. Conectar o Banco de Dados Supabase (Opcional & Recomendado)

O site foi construído para funcionar imediatamente mesmo sem o Supabase configurado (com os dados já pré-carregados). Quando desejar ativar o banco dinâmico e o upload em tempo real:

1. Crie uma conta gratuita no [Supabase](https://supabase.com).
2. Crie um novo projeto (ex: `leoisaac-portfolio`).
3. Vá no menu **SQL Editor** do Supabase, copie o conteúdo do arquivo `supabase/schema.sql` e clique em **Run**.
4. No menu **Storage**, crie dois buckets públicos:
   * `media` (para prints e fotos)
   * `docs` (para o currículo em PDF)
5. Copie a **URL** e a **chave anon** em *Project Settings > API* e adicione no arquivo `.env.local` e nas variáveis da Cloudflare Pages.
