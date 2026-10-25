import { hero } from './blocks/hero.js'
import { features } from './blocks/features.js'
import { programs } from './blocks/programs.js'
import { steps } from './blocks/steps.js'
import { cta } from './blocks/cta.js'

const registry = { hero, features, programs, steps, cta }

export function renderBlocks(blocks = []) {
  return blocks
    .map((block) => {
      const render = registry[block.type]
      if (!render) {
        console.warn(`Невідомий блок: ${block.type}`)
        return ''
      }
      return render(block)
    })
    .join('')
}
