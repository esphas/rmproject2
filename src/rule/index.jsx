
import React from 'react'
import { Header, Error, Detail, Loading } from '../component'
import { useAPI } from '../common'
import styles from './index.module.css'

const Rule = ({ rule })=>{
  if (!rule){ return null }
  return <div>
    <h3>{rule.name}</h3>
    <img src={`./media/rule/${rule.image}.jpg`} alt={rule.name} />
    <div><Detail content={rule.detail} /></div>
  </div>
}

const RuleMain = ({ id })=>{
  const rule = useAPI('./api/rule.json')
  return <>
    <Header />
    <div className={styles.body}>
      {rule.state === 'fail' && <Error title="get site fail" error={rule.result} />}
      {rule.state === 'load' && <Loading />}
      {rule.state === 'success' && <Rule rule={rule.result[id]} />}
    </div>
  </>
}

export default ({ id })=>{
  if (!id){ return null }
  return <RuleMain id={id} />
}