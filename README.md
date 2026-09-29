# restaurant-graphql-schema

The **single source of truth** for the restaurant delivery platform's GraphQL API.

This repo holds the GraphQL SDL (`schema.graphql`). It is consumed by:

- [`restaurant-delivery-backend`](https://github.com/meeeeeeeeeeeeeeepo/restaurant-delivery-backend) — implements the schema (graphql-yoga).
- [`restaurant-delivery-frontend`](https://github.com/meeeeeeeeeeeeeeepo/restaurant-delivery-frontend) — generates typed GraphQL operations from it (graphql-codegen).

## Published artifacts

| Artifact | Where | How |
|---|---|---|
| npm package `@meeeeeeeeeeeeeeepo/restaurant-schema` | GitHub Packages | `Publish` workflow on release |
| `schema.graphql` SDL | GitHub Release asset | attached on release |
| `schema.graphql` | GitHub Actions artifact | every CI run |

## Consume it

```bash
# .npmrc (consumers)
@meeeeeeeeeeeeeeepo:registry=https://npm.pkg.github.com
npm install @meeeeeeeeeeeeeeepo/restaurant-schema
```

```js
import { typeDefs } from '@meeeeeeeeeeeeeeepo/restaurant-schema';
```

## Develop

```bash
npm install
npm run validate   # parse + sanity-check the SDL
npm test
```
