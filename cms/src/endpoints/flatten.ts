const SKIP = new Set(['id', 'blockName'])

export const clean = (value: unknown): unknown => {
  if (Array.isArray(value)) return value.map(clean)
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>)
        .filter(([key]) => !SKIP.has(key))
        .map(([key, v]) => [key, clean(v)]),
    )
  }
  return value
}

export const flattenBlock = (block: Record<string, unknown>) => {
  const { blockType, ...rest } = block
  return { type: blockType, ...(clean(rest) as Record<string, unknown>) }
}
