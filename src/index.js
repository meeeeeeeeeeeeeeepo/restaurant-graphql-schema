import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));

/** The raw GraphQL SDL as a string — consumed by the backend server. */
export const typeDefs = readFileSync(join(here, '..', 'schema.graphql'), 'utf8');

export default typeDefs;
