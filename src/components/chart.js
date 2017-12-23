import React , { Component } from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines';


export default (props) => {

  return (
    <Sparklines height={120} width={100} data={ props.data }>
      <SparklinesLine color={props.color} />
    </Sparklines>
  )
}
