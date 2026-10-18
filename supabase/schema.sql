-- ========================================================
-- SCHEMA SQL: PORTFÓLIO LEONARDO ISAAC (leoisaac.com.br)
-- Executar no SQL Editor do Supabase (https://supabase.com/dashboard)
-- ========================================================

-- Habilitar extensão para geração de UUID
create extension if not exists "uuid-ossp";

-- 1. TABELA DE PERFIL
create table if not exists profile_settings (
  id text primary key default 'profile-main',
  full_name text not null default 'Leonardo Isaac',
  headline text not null,
  bio text not null,
  years_experience int default 25,
  people_impacted text default '+7.000',
  cv_url text,
  avatar_url text default '/images/profile/foto_perfil.png',
  whatsapp text,
  email text,
  linkedin text,
  github text,
  location text default 'Ouro Preto - MG, Brasil',
  updated_at timestamptz default now()
);

-- 2. TABELA DE PROJETOS
create table if not exists projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  short_description text not null,
  full_description text,
  technologies text[] not null default '{}',
  image_url text,
  github_url text,
  live_url text,
  category text default 'Full Stack',
  is_featured boolean default false,
  display_order int default 0,
  created_at timestamptz default now()
);

-- 3. TABELA DE CERTIFICADOS
create table if not exists certificates (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  issuer text not null,
  issue_date text,
  hours int,
  credential_url text,
  image_url text not null,
  category text default 'Desenvolvimento',
  is_featured boolean default false,
  display_order int default 0,
  created_at timestamptz default now()
);

-- 4. TABELA DE HABILIDADES (SKILLS)
create table if not exists skills (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  category text not null,
  icon_name text,
  display_order int default 0
);

-- 5. TABELA DE INICIATIVAS SOCIAIS
create table if not exists social_initiatives (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  role text not null,
  period text not null,
  impact_metric text,
  description text not null,
  image_url text,
  achievements text[] not null default '{}',
  display_order int default 0
);

-- 6. TABELA DE MENSAGENS DE CONTATO
-- 6. TABELA DE CLIPPINGS / MATÉRIAS
create table if not exists clippings (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  source text not null,
  date text,
  image_url text not null,
  category text default 'Telecentros',
  display_order int default 0
);

-- 7. TABELA DE MENSAGENS DE CONTATO
create table if not exists contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  subject text,
  message text not null,
  created_at timestamptz default now()
);

-- 8. TABELA DE DEPOIMENTOS / RECOMENDAÇÕES DE TRABALHO
create table if not exists testimonials (
  id text primary key,
  name text not null,
  role text not null,
  company text,
  relationship text not null default 'Colega de Equipe',
  message text not null,
  rating int default 5,
  linkedin_url text,
  is_approved boolean default true,
  is_featured boolean default false,
  created_at timestamptz default now()
);

-- ========================================================
-- POLÍTICAS DE SEGURANÇA (ROW LEVEL SECURITY - RLS)
-- Leitura pública para todos os visitantes
-- Escrita (INSERT, UPDATE, DELETE) apenas para o administrador autenticado
-- ========================================================

alter table profile_settings enable row level security;
alter table projects enable row level security;
alter table certificates enable row level security;
alter table skills enable row level security;
alter table social_initiatives enable row level security;
alter table clippings enable row level security;
alter table contact_messages enable row level security;
alter table testimonials enable row level security;

-- Leitura pública
create policy "Permitir leitura pública no perfil" on profile_settings for select using (true);
create policy "Permitir leitura pública em projetos" on projects for select using (true);
create policy "Permitir leitura pública em certificados" on certificates for select using (true);
create policy "Permitir leitura pública em skills" on skills for select using (true);
create policy "Permitir leitura pública em iniciativas sociais" on social_initiatives for select using (true);
create policy "Permitir leitura pública em clippings" on clippings for select using (true);
create policy "Permitir leitura pública em depoimentos" on testimonials for select using (true);

-- Permitir qualquer pessoa enviar mensagem de contato ou depoimento
create policy "Permitir envio de mensagem de contato" on contact_messages for insert with check (true);
create policy "Permitir envio de depoimento" on testimonials for insert with check (true);

-- Escrita restrita ao usuário logado
create policy "Admin edita perfil" on profile_settings for all using (auth.role() = 'authenticated');
create policy "Admin edita projetos" on projects for all using (auth.role() = 'authenticated');
create policy "Admin edita certificados" on certificates for all using (auth.role() = 'authenticated');
create policy "Admin edita skills" on skills for all using (auth.role() = 'authenticated');
create policy "Admin edita iniciativas sociais" on social_initiatives for all using (auth.role() = 'authenticated');
create policy "Admin edita clippings" on clippings for all using (auth.role() = 'authenticated');
create policy "Admin gerencia mensagens" on contact_messages for select using (auth.role() = 'authenticated');
create policy "Admin gerencia depoimentos" on testimonials for all using (auth.role() = 'authenticated');

-- ========================================================
-- BUCKETS DE ARMAZENAMENTO (STORAGE)
-- Criar no painel Storage do Supabase:
-- 1. 'media' (Público) -> para fotos de projetos e certificados
-- 2. 'docs'  (Público) -> para o currículo PDF
-- ========================================================
