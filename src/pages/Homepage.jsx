import {useContext} from 'react'
import { CatContext } from '../context/CatContext'

export default function Homepage() {
  const {catFact, setAllowFetch} = useContext(CatContext)

  return (
    <>
  <h1>Cat Fact of the Day</h1>
  <div className='card'>{catFact}</div>
  <button onClick={()=>setAllowFetch(true)}>New Fact</button>
    </>
  )
}



