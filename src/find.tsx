import { Mark } from '@mantine/core'
import { langRegexps } from './constants'
import { Languages } from './types'

export function find(text: string, lang: Languages) {
  const regExp = langRegexps[lang]

  return text.split('').map((value, key) => {
    const result = value.match(regExp)

    if (result && result.length) {
      return <Mark key={key}>{value}</Mark>
    }

    return value
  })
}
