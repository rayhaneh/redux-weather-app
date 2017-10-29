import React, { Component } from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';


export default (props) => {
  return (
    <div>
      <Sparklines height={120} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type='avg' />
      </Sparklines>
      <div>{_.round(_.sum(props.data) / props.data.length)} {props.units}</div>
    </div>
  )
}