import assert from 'node:assert/strict';
import test from 'node:test';
import {readFileSync} from 'node:fs';

const base = new URL('../messages/', import.meta.url);
const read = locale => JSON.parse(readFileSync(new URL(`${locale}.json`, base), 'utf8'));
function keys(value, prefix = '') {
  return Object.entries(value).flatMap(([name, content]) => {
    const path = prefix ? `${prefix}.${name}` : name;
    return typeof content === 'string' ? [path] : keys(content, path);
  }).sort();
}

test('all locales have exactly the same translation keys', () => {
  const reference = keys(read('sv'));
  for (const locale of ['en', 'ar']) assert.deepEqual(keys(read(locale)), reference);
});

test('translations are nonempty', () => {
  for (const locale of ['sv', 'en', 'ar']) {
    for (const value of Object.values(read(locale).Home.features)) assert.ok(value.trim());
  }
});
