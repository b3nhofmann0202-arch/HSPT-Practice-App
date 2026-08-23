-- Run this once in your Supabase project's SQL editor (Project > SQL Editor > New query).

create table if not exists public.profiles (
  id uuid references auth.users on delete cascade primary key,
  name text default 'Student',
  test_date date default (current_date + interval '90 days'),
  streak int default 0,
  last_active date,
  mastery jsonb default '{"verbal":0,"quant":0,"reading":0,"math":0,"language":0}',
  resume_section text,
  mistakes jsonb default '[]',
  created_at timestamptz default now()
);

alter table public.profiles enable row level security;

create policy "Users can view their own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can update their own profile"
  on public.profiles for update
  using (auth.uid() = id);

create policy "Users can insert their own profile"
  on public.profiles for insert
  with check (auth.uid() = id);

-- Automatically create a profile row the moment someone signs up.
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, name)
  values (new.id, coalesce(new.raw_user_meta_data->>'name', 'Student'));
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
