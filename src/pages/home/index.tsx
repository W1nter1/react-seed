import React, { Fragment, useEffect, useState } from 'react'
import { useRouteMatch, useLocation, useHistory, useParams } from 'react-router-dom'
import './style.scss';

import { trackView, trackClick } from '@/utils'

import BackTop from '@/components/backTop'

const Index = (props: any) => {
  const testClick = () => {
    console.log('click');
  }
  const his = useParams()
  console.log(his);
  
  return (
    <Fragment>
      <div className="index">index</div>
      <div className="button" onClick={testClick}>button</div>
      <BackTop />
    </Fragment>
  )
}

export default Index
