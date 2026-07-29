# Handoff

For the person who owns this site but doesn't live in the code. This explains
how the system works, how to make changes safely, and what to do when something
feels wrong — without needing to be a developer.

---

## What you actually own

A fast, self-contained website with no monthly platform bill. The site's entire
history lives on GitHub (a versioned backup in the cloud), and it publishes
itself to the internet whenever a change is saved there. You don't manage
servers. You don't manage a CMS. You direct changes; the system carries them out
and records them.

Three things make this durable:

1. **A source of truth** — `docs/PROJECT_BIBLE.md` describes the whole project.
2. **Version control** — every change is saved on GitHub and can be undone.
3. **These instructions** — so anyone can pick it up without starting over.

---

## How to make a change

You describe what you want in plain language. Claude Code — the AI development
assistant configured for this project — reads `CLAUDE.md` and the Project Bible
first, so it changes the site *inside the existing system* instead of guessing.

A normal request sounds like:

> "Add a new package called X for $Y to the packages page, matching the existing
> cards, and link its button to the booking page."

Claude Code makes the change, you review it in the browser, and once it looks
right it's committed to GitHub and goes live automatically.

**The rule:** review before it's published. Always look at the change on the
local preview or the live site before considering it done.

---

## How changes go live

1. A change is made and saved.
2. It's committed to GitHub (the permanent record).
3. Vercel automatically publishes it to cleverclover.studio within about 30
   seconds.

Nothing goes live by accident from just editing — it publishes when the change
is committed and pushed.

---

## If something looks broken

1. Don't panic and don't start deleting things.
2. Every previous version is saved on GitHub. Any change can be reversed.
3. Ask Claude Code to **revert the last change** — it will restore the previous
   working version and the site will fix itself on the next publish.
4. For a deeper problem, see `docs/RECOVERY.md`.

---

## What NOT to touch without help

- Domain / DNS settings (registrar)
- Environment variables and API keys (Vercel settings)
- Payment links (Stripe) and form settings (Formspree)
- The build configuration files

These rarely need changing, and changing them blindly is how a working site
breaks. When in doubt, ask before touching.

---

## The short version

Describe what you want → review it → it's saved and published → and if you don't
like it, it can always be undone. The site is built to keep working, keep a
record of itself, and survive being handed to someone new.
