import React, { Fragment, useEffect } from 'react'
import {observer} from 'mobx-react'
import './style.scss';

import {useStore} from '@/hooks/store'

const Index = (props: any) => {
  const {testStore} = useStore()
  const testClick = async () => {
    const res = await testStore.min()
    console.log(res,'testStore');
  }
  return (
    <Fragment>
      <div className="index">count: {testStore.count}</div>
      <div className="index">count1: {testStore.count1}</div>
      <div className="index">count2: {testStore.count2}</div>
      <div className="button" onClick={()=>{testStore.add()}}>add</div>
      <div className="button" onClick={testClick}>min</div>
    </Fragment>
  )
}

export default observer(Index)
