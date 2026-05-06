import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import TimeLine from '../TimeLine.vue'

describe('TimeLine', () => {
  it('renders properly', () => {
    const wrapper = mount(TimeLine, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
