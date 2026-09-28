import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildSchema } from 'graphql';
import { typeDefs } from '../src/index.js';

test('SDL parses into a valid schema', () => {
  const schema = buildSchema(typeDefs);
  assert.ok(schema.getQueryType(), 'has Query');
  assert.ok(schema.getMutationType(), 'has Mutation');
});

test('core types are present', () => {
  const schema = buildSchema(typeDefs);
  for (const t of ['MenuItem', 'Order', 'PlaceOrderInput', 'Category']) {
    assert.ok(schema.getType(t), `type ${t} exists`);
  }
});
