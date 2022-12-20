import { useState } from 'react'
import {
  Container,
  Group,
  Mark,
  SegmentedControl,
  Text,
  Textarea
} from '@mantine/core'
import { useInputState } from '@mantine/hooks'
import { flags } from './constants'
import { find } from './find'
import { useStyles } from './styles'
import { Languages } from './types'

export function App() {
  const { classes } = useStyles()
  const [textValue, setTextValue] = useInputState('')
  const [lang, setLang] = useState<Languages>('en')

  return (
    <Container
      size="sm"
      className={classes.wrapper}
    >
      <Group position="right">
        <SegmentedControl
          size="lg"
          value={lang}
          onChange={(value) => setLang(value as Languages)}
          data={Object.entries(flags).map(([value, label]) => ({
            label,
            value
          }))}
        />
      </Group>
      <Textarea
        autoFocus
        onChange={setTextValue}
        mt="lg"
        radius="xs"
        size="lg"
        autosize
      />
      <Text
        mt="lg"
        fz="lg"
      >
        {find(textValue, lang)}
      </Text>
    </Container>
  )
}
