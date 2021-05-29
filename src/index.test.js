
import test from 'ava'

import { getLang } from './index.js'


test('get lang', t => {
  t.is(getLang('es').name, 'Español')
})
