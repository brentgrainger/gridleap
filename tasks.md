# 📋 GridLeap — MVP Task List (Dependency-Ordered)

## 🚩 Foundational Setup

- [x] Set up Remix (Vite) project structure
- [x] Configure TailwindCSS and ShadCN UI kit
- [x] Integrate Zustand or TanStack Store for state
- [ ] Set up Supabase project and connect to app
- [ ] Define DB tables: `users`, `apps`, `schemas`, `ui_configs`, `data_rows`
- [ ] Enforce Row-Level Security (RLS) for all tables
- [ ] Integrate Clerk for OAuth and email magic link
- [ ] Link Supabase Auth to Clerk user ID
- [ ] Implement Supabase Storage for uploaded sheets
- [ ] Configure OpenAI API access for agent chain

---

## 🖼 Frontend & Routing

- [x] Implement routes: `/upload`, `/preview`, `/editor`, `/dashboard`
- [ ] Add empty state and CTA for new users
- [x] Landing page with “Start Free” CTA
- [ ] Sign up flow (Google/email via Clerk)
- [ ] Dashboard with empty state and “Create New App”

---

## 1. Upload & Connect

- [ ] Implement `.xlsx` file uploader (SheetJS)
- [ ] Build Google Sheets OAuth connector
- [ ] Create spreadsheet preview UI before processing

---

## 2. AI Agent Chain

- [ ] Agent 1: Extract schema (columns, types, formulas, relationships)
- [ ] Agent 2: Generate logical app schema from extracted data
- [ ] Agent 3: Plan UI components and layout (table, chart, form, kanban)
- [ ] Agent 4: Generate renderer config for dynamic React layout

---

## 3. App Rendering

- [ ] Build dynamic layout engine (ShadCN UI + Grid)
- [ ] Implement live preview environment (`/preview`)
- [ ] Integrate deploy-to-Netlify with subdomain provisioning

---

## 4. Auth & Account Management

- [x] Create dashboard route (`/dashboard`) with app list
- [ ] Implement user roles (viewer, editor) — (future)
- [ ] Dashboard app listing

---

## 🔒 Security & Privacy

- [ ] Scope all data and apps by user
- [ ] Enforce RLS on every table
- [ ] Ensure Google Sheets connector is read-only
- [ ] Prevent external sharing of uploaded sheets

---

## 👤 User Flow (End-to-End)

- [ ] Upload/connect spreadsheet
- [ ] Spreadsheet preview and confirmation
- [ ] AI agent processing pipeline
- [ ] Live app preview (`/preview`)
- [ ] Deploy and get public subdomain
- [ ] Return to dashboard to see app listed for future edits

---

## 🧪 MVP Validation

- [ ] Test with 10+ sample spreadsheets (varied schema/formulas)
- [ ] Ensure agent chain completes in <10s
- [ ] Validate rendered config with non-dev users
- [ ] Conduct usability testing

---

## 📈 Future Considerations

- [ ] App version control
- [ ] Drag-and-drop layout editing
- [ ] Export to downloadable React/Next.js codebase
- [ ] Public API for auto-generating CRUD apps from CSVs
