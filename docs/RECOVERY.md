# Recovery

How to restore this project if something breaks, a machine is lost, or the site
goes down. Work top to bottom.

---

## Where the project lives

- **GitHub (source of truth):** https://github.com/CleverCloverStudio/cleverclover-studio
- **Vercel (hosting):** auto-deploys the `main` branch
- **Local working copy:** `C:\Users\bryan\cleverclover-studio`
- **Separate local backup:** a copy of the repo kept outside the working folder
  (e.g. an external drive or a second local folder), refreshed after major work

The full history is on GitHub. As long as `main` is intact there, the project
can always be rebuilt.

---

## Restore the code on a new machine

1. Install Node.js (v24+) and Git.
2. Clone the repo:
   `git clone https://github.com/CleverCloverStudio/cleverclover-studio.git`
3. `cd cleverclover-studio`
4. `npm install`
5. Recreate `.env.local` from the private backup copy (it is not in the repo).
6. `npm run dev` → open http://localhost:3000 to confirm it runs.

---

## Undo a bad change

- **Not pushed yet:** `git restore .` to discard local changes, or
  `git checkout <file>` for a single file.
- **Pushed and live but wrong:** `git revert <commit>` then `git push` — Vercel
  redeploys the corrected state in ~30 seconds. Prefer `revert` over deleting
  history.
- **See what changed:** `git log --oneline` for history, `git diff` for pending
  edits.

---

## Site is down / deploy failed

1. Check the Vercel dashboard → Deployments for the failing build's error log.
2. If it's a transient infrastructure error, redeploy the last good commit.
3. If it's a code error, fix locally, confirm `npm run build` succeeds, then push.
4. DNS and SSL are managed automatically (domain at the registrar, certs by
   Vercel) — don't change DNS records to fix a build problem.

---

## Secrets

Environment variables live in **Vercel project settings** and a local
`.env.local` that is never committed. Keep one private copy of `.env.local`
outside the repo. If a key is exposed, rotate it at the provider and update both
places.
