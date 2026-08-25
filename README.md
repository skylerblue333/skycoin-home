# Skycoin Home Status Core

**Status: engineering beta.** This repository now provides a small, reusable capability/status registry for the SKYCOIN4444 home surface while preserving the surrounding historical repository files.

## Supported today

- bounded capability identifiers and status details;
- explicit `available`, `unavailable`, and `degraded` states;
- validated timestamps;
- deterministic readiness calculation over required capabilities;
- unknown capabilities fail closed as unavailable;
- `synthetic: false` / `fabricated: false` truth signals;
- strict TypeScript build and native Node tests.

## Not claimed

This component does not make unavailable services work, fabricate market/user/activity data, probe external providers, establish auth/database health, render a complete production homepage, or prove any deployment. Real provider health must be supplied by verified adapters.

## Development

```bash
npm install
npm run check
npm test
```

## Integration

The canonical SKYCOIN4444 home experience can consume `HomeStatusRegistry` to expose honest service availability instead of placeholders or random values. Frontend consolidation and deployment remain separate work.

## License

MIT, subject to the checked-in license and applicable third-party dependency licenses.
