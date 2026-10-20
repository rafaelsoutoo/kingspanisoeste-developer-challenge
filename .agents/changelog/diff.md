# AI Agent Changelog

> This file is written **automatically** by `.agents/hooks/ai-log.sh` (repository hooks for
> Claude Code and Cursor; explicit commands for every other agent — see `AGENTS.md`).
>
> Purpose: let the evaluators distinguish the candidate's own work from work delegated to AI.
>
> - **Append-only.** Never edit, reorder or delete existing entries. This is audited from the git history.
> - **All entries must be written in English.**
> - Never write secrets or personal data here.

---

## Entry format

One block per agent turn, one row per changed file:

```
---
### Turn YYYY-MM-DD HH:MM:SS ±HHMM · <Agent>
- **Source**: hook | command | manual
- **Session**: <agent session id or n/a>
- **Prompt**: <user prompt, truncated, secrets masked>
- **Summary**: <one-line summary written by the agent>

| File | Change | Additions | Removals |
|---|---|---|---|
| `relative/path/to/file` | created / modified / deleted | +N | -N |
```

`Source: manual` is only for entries appended by hand when the logger cannot run.

---

## Change log

<!-- AI agent entries will be inserted below this line -->

---
### Turn 2026-10-19 21:42:19 -0300 · Cursor
- **Source**: command
- **Session**: n/a
- **Prompt**: n/a
- **Summary**: Moved Postgres credentials to env files and parameterized docker-compose

| File | Change | Additions | Removals |
|---|---|---|---|
| `.env.example` | created | +7 | -0 |
| `backend/.env.example` | created | +4 | -0 |
| `docker-compose.yml` | modified | +6 | -6 |

---
### Turn 2026-10-19 22:18:17 -0300 · Cursor
- **Source**: command
- **Session**: n/a
- **Prompt**: n/a
- **Summary**: Explained config/env, repository providers and AppModule wiring without implementing

| File | Change | Additions | Removals |
|---|---|---|---|
| `backend/package-lock.json` | modified | +2 | -0 |
| `backend/package.json` | modified | +2 | -0 |
| `backend/src/config/env/env.dto.ts` | created | +0 | -0 |
| `backend/src/config/env/index.ts` | created | +0 | -0 |
| `backend/src/config/prisma/prisma.module.ts` | created | +8 | -0 |
| `backend/src/config/prisma/prisma.service.ts` | created | +17 | -0 |
| `backend/src/config/prisma/prisma.ts` | created | +12 | -0 |
| `backend/src/providers/repository.provider.ts` | created | +0 | -0 |
| `backend/src/users/repositories/prisma/prisma-user.repository.ts` | deleted | +0 | -3 |
| `backend/src/users/repositories/users.repository.ts` | modified | +3 | -0 |

---
### Turn 2026-10-19 22:23:11 -0300 · Cursor
- **Source**: command
- **Session**: n/a
- **Prompt**: n/a
- **Summary**: Configured @/* path alias in tsconfig with tsc-alias for Nest build/dev

| File | Change | Additions | Removals |
|---|---|---|---|
| `backend/package-lock.json` | modified | +528 | -0 |
| `backend/package.json` | modified | +5 | -4 |
| `backend/src/app.module.ts` | modified | +7 | -6 |
| `backend/src/providers/repository.provider.ts` | modified | +11 | -0 |
| `backend/src/users/repositories/prisma/prisma-users.repository.ts` | modified | +1 | -1 |
| `backend/src/users/users.module.ts` | modified | +12 | -18 |
| `backend/tsconfig.json` | modified | +5 | -0 |

---
### Turn 2026-10-19 22:46:24 -0300 · Cursor
- **Source**: command
- **Session**: n/a
- **Prompt**: n/a
- **Summary**: Diagnosed missing @prisma/client dependency causing Nest startup failure

| File | Change | Additions | Removals |
|---|---|---|---|
| `backend/package-lock.json` | modified | +528 | -0 |
| `backend/package.json` | modified | +1 | -0 |
| `backend/src/users/dtos/create-user.dto.ts` | modified | +27 | -27 |
| `backend/src/users/entities/user.entity.ts` | modified | +5 | -6 |
| `backend/src/users/repositories/prisma/prisma-users.repository.ts` | modified | +16 | -6 |
| `backend/src/users/repositories/users.repository.ts` | modified | +3 | -1 |
| `backend/src/users/use-cases/create-user.use-case.ts` | created | +23 | -0 |
