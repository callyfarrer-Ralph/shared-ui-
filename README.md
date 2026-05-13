# @farrer/shared-ui

Shared React components and design tokens for the Farrer Therapy websites.

## Tokens

- `terracotta`: `#C46A4A`
- `navy`: `#1C2A3A`
- `sand`: `#F4EFEA`
- `grey`: `#D8D3CE`
- `accentBlue`: `#4A7FBF`

## Local use

From either website repo, install this package from the sibling checkout:

```bash
npm install ../shared-ui-
```

Then import the shared stylesheet once in `app/layout.tsx`:

```tsx
import "@farrer/shared-ui/styles.css";
```
