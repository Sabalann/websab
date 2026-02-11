# Stashed Pages – Test Design (Dark Liquidglass Theme)

These pages were moved here so they are no longer publicly accessible. The routes `/nl/test-home`, `/en/test-home`, `/nl/test-about`, and `/en/test-about` no longer exist.

## Restore Instructions

To bring these pages back:

1. Copy `stash/test-home/` → `app/[locale]/test-home/`
2. Copy `stash/test-about/` → `app/[locale]/test-about/`
3. Copy `stash/components/NavbarDark.js` → `app/components/NavbarDark.js`

The import paths in the test pages (`../../components/NavbarDark`, `../../components/ScrollAnimation`) are correct for when the files live under `app/[locale]/`.
