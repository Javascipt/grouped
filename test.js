import fs from 'fs';
import test from 'ava';
import m from './';

test(t => {
	t.true(m.adjectives.length > 0);
	t.true(fs.statSync(m.adjectives).size > 1000);
	t.true(m.adverbs.length > 0);
	t.true(fs.statSync(m.adverbs).size > 1000);
	t.true(m.nouns.length > 0);
	t.true(fs.statSync(m.nouns).size > 1000);
	t.true(m.verbs.length > 0);
	t.true(fs.statSync(m.verbs).size > 1000);
});
