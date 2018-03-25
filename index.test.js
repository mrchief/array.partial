import test from 'ava'

import partial from '.'

test('returns true when some elements match the filter', t => {
  const sample = [{ id: 'a1', checked: true }, { id: 'a2', checked: false }, { id: 'a3', checked: true }, { id: 'a4', checked: true }]
  t.true(partial(sample, x => x.checked))
})

test('returns false when all elements match the filter', t => {
  const sample = [{ id: 'a1', checked: true }, { id: 'a2', checked: true }, { id: 'a3', checked: true }, { id: 'a4', checked: true }]
  t.false(partial(sample, x => x.checked))
})

test('returns false when no elements match the filter', t => {
  const sample = [{ id: 'a1', checked: false }, { id: 'a2', checked: false }, { id: 'a3', checked: false }, { id: 'a4', checked: false }]
  t.false(partial(sample, x => x.checked))
})
