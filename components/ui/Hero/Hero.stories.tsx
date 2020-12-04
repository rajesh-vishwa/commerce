import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Hero from './Hero'

storiesOf('Hero', module).add('default', () => {
  return <Hero headline="headline" description="a dummy description" />
})
