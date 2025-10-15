# scripts/

This folder contains small, site-specific JavaScript used by the static pages in this repository.

## Files

- `ui.js` — Sidebar and small UI helpers

### `ui.js` responsibilities
- Toggle the sidebar open/closed on small screens
- Toggle `aria-expanded` on the menu button
- Show/hide the `.sidebar-overlay` to dim content
- Close the sidebar on `Escape` key

## Usage
Each page includes the script via:

```html
<script src="/scripts/ui.js" defer></script>
```

If you move the script file or serve the site from a subpath, update the `src` accordingly.

## CSP and security
- Prefer referencing this script from the same origin (`'self'`) so you can use a strict Content Security Policy.
- If you want to enforce a strict CSP that disallows inline scripts, keep this file external (as it is) and remove any remaining inline scripts.

Recommended CSP header for this site (example):

```
Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self'; font-src 'self';
```

Notes:
- If you move CSS into external files (recommended), you can remove `'unsafe-inline'` from `style-src`.

## Accessibility notes
- The script toggles `aria-expanded` on the menu button and closes the sidebar on `Escape`. Consider adding a focus trap to restrict tabbing to the sidebar while it's open.

## Extending
- If you'd like to add animations or a focus trap, consider a small utility library or a minimal custom implementation inside `ui.js`.
- For versioning or cache-busting, consider adding a query string (e.g., `/scripts/ui.js?v=1`) during deployments.

## License
This script follows the repository license (see `LICENSE`).
