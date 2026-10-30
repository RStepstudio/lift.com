# Lift Website

Lift is a React and Vite website for the Lift Roblox experience. The repository also contains browser UI for community forums and articles, plus the Cloudflare deployment and D1 planning files.

## Local development

Requires Node.js 20 or later.

```powershell
npm install
npm run dev
```

Create a production build with:

```powershell
npm run build
npm run preview
```

## Cloudflare deployment

The GitHub Actions workflow in `.github/workflows/deploy.yml` builds `dist` and deploys it to the Cloudflare Pages project named `rbxlift`. Follow `.github/CLOUDFLARE_DEPLOY.md` to configure GitHub secrets.

Pages does not currently have forum or admin API functions. Adding community data requires Cloudflare D1 setup. Give `.github/D1_SETUP_PROMPT.md` to Cloudflare AI or your implementation assistant as the backend specification.

## Before publishing

- Do not commit API tokens, OAuth secrets, passwords, or `.dev.vars` files.
- Add Cloudflare secrets only in GitHub Actions or the Cloudflare dashboard.
- Configure the deployed domain and its Cloudflare Pages project before adding OAuth or production database bindings.
- Treat every `/admin` or login implementation as server-side code, never as a hidden browser route.

## Repository routes

- `/` - Lift website
- `/forums` - Community forum shell
- `/articles/lift` - Community guide shell
- `/admin` - Secure admin implementation placeholder
- `/privacy` - Privacy and storage details
