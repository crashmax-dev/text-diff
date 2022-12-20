import { Languages } from './types'

export const flags: Record<Languages, string> = {
  en: '🇺🇸',
  ru: '🇷🇺'
}

export const langRegexps: Record<Languages, RegExp> = {
  en: /[a-zA-Z]/,
  ru: /[А-Яа-я]/
}
