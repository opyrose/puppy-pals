
import { useState } from 'react'
import { puppyList } from './data.js'
import './App.css'

const App = ()=> {
  const [puppies, setPuppies] = useState(puppyList)

return (<div className='App'>
 {puppies.map ((puppy)=>{
  return <p key={puppy.id}>{puppy.name}</p>
})
}
</div>)

}
export default App
