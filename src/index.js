/* Automatic generated by './build/bin/build-entry.js' */

import Button from '../packages/button/index.js'
import Icon from '../packages/icon/index.js'

const components = [
  Button,
  Icon
]

const install = function (Vue, opts = {}) {
  /* istanbul ignore if */
  if (install.installed) return

  components.map(component => {
    Vue.component(component.name, component)
  })
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '0.0.0',
  install,
  Button,
  Icon
}
