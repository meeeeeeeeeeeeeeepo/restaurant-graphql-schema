import { buildSchema } from 'graphql';
import { typeDefs } from '../src/index.js';

const schema = buildSchema(typeDefs);
const q = schema.getQueryType();
const m = schema.getMutationType();
if (!q) throw new Error('schema is missing a Query type');
if (!m) throw new Error('schema is missing a Mutation type');
console.log('schema OK — Query fields:', Object.keys(q.getFields()).join(', '));
console.log('              Mutation fields:', Object.keys(m.getFields()).join(', '));
