-- Run this in Supabase SQL Editor to create the feedback table.
-- Table: public.feedback

create table if not exists public.feedback (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  message text not null,
  rating integer not null check (rating >= 1 and rating <= 5),
  created_at timestamptz not null default now()
);

-- Allow anonymous inserts and selects (adjust RLS as needed for production)
alter table public.feedback enable row level security;

create policy "Allow anonymous insert"
  on public.feedback for insert
  with check (true);

create policy "Allow anonymous select"
  on public.feedback for select
  using (true);

-- Optional: enable realtime for the table (required for live updates)
alter publication supabase_realtime add table public.feedback;
