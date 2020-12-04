import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Grid from './Grid'

storiesOf('Grid', module)
  .add('with default layout A', () => {
    return (
      <Grid>
        {['Item-A', 'Item-B', 'Item-C', 'Item-E', 'Item-F'].map((el) => (
          <div key={el}>{el}</div>
        ))}
      </Grid>
    )
  })
  .add('with layout B', () => {
    return (
      <Grid layout="B">
        {['Item-A', 'Item-B', 'Item-C', 'Item-E', 'Item-F'].map((el) => (
          <div key={el}>{el}</div>
        ))}
      </Grid>
    )
  })
  .add('with layout C', () => {
    return (
      <Grid layout="C">
        {['Item-A', 'Item-B', 'Item-C', 'Item-E', 'Item-F'].map((el) => (
          <div key={el}>{el}</div>
        ))}
      </Grid>
    )
  })
  .add('with variant filled', () => {
    return (
      <Grid variant="filled">
        {['Item-A', 'Item-B', 'Item-C', 'Item-E', 'Item-F'].map((el) => (
          <div key={el}>{el}</div>
        ))}
      </Grid>
    )
  })
