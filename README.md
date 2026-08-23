# Skycoin Home

Landing-page / home-surface component for the SKYCOIN4444 ecosystem.

## Current repository evidence

- Public TypeScript repository on `main`.
- 27 tracked files were observed in the current audit snapshot.
- `package.json`, Docker configuration, Docker Compose configuration, and GitHub Actions CI configuration are present.
- No test-related file was identified by the current filename-based audit.

## Ecosystem role

**Frontend → Core Platform Home / Landing Surface**

This repository can provide the public/home experience or reusable frontend patterns for the canonical SKYCOIN4444 platform. It should not become a separate backend or duplicate platform service.

## Truthful status

- Source/configuration: **present**
- Canonical frontend integration: **pending comparison with the other SKYCOIN4444 frontend repositories**
- Automated tests: **not established by the current repository evidence**
- Production deployment: **not verified**

The current `package.json` contains placeholder validation scripts and a build command that suppresses TypeScript failures. These commands are not treated as proof that tests, linting, or builds pass. They are technical debt to replace with real validation before promotion.

## Consolidation approach

Preserve the existing UI and configuration. Compare this repository with `skycoin-mobile`, the larger frontend repositories, and the canonical platform before introducing another home-page implementation. Promote the strongest verified UI and shared components into the canonical frontend boundary rather than maintaining duplicate landing surfaces.

If a genuine frontend capability is missing, prefer established open-source projects with compatible licenses instead of reinventing mature primitives. Preserve required attribution and license notices when adapting third-party code.

## Production requirements

Before production promotion, establish a real frontend build, real tests, strict TypeScript validation, accessibility checks, dependency/security checks, reproducible CI, environment configuration, and an end-to-end deployment check against the canonical platform.

## License

MIT, subject to the checked-in license and applicable third-party dependency licenses.
