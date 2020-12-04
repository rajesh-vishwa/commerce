import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Button from './Button'

storiesOf('Button', module)
  .add('default', () => {
    return <Button>Default</Button>
  })
  .add('with variant slim', () => {
    return <Button variant="slim">Slim</Button>
  })
  .add('with loading', () => {
    return <Button loading={true}>Button</Button>
  })
  .add('with disabled', () => {
    return <Button disabled={true}>Diabled</Button>
  })
