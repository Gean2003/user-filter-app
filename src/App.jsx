import {  useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import CardUser from './components/CardUser'

function App() {
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
      const URL = "https://randomuser.me/api/?results=30"

      axios.get(URL)
        .then(res => setUsers(res.data.results))
        .catch(err => console.log(err))
  }, [])


  const searcher = (e) =>{
      setSearch(e.target.value)
      console.log(e.target.value)
  }

  let result = []

  if(!search){
    result = users
  }else{
    result = users.filter(user => user.name.first.toLowerCase().includes(search.toLocaleLowerCase()))
  }


  return (
    <div className="App">
       <div className='w-full text-center my-5'>
          <input value={search} onChange={searcher} type="text" placeholder='search' class="form-input px-2 py-2 rounded-xl mx-auto" />
        </div>
      <div className=' max-w-6xl  w-full h-full flex items-center justify-center flex-wrap gap-8 my-3 mx-auto'>

          {
            result?.map(user => (
              <CardUser key={user.login.uuid}
                        user={user} />
            ))
          }
        
      </div>
      
     </div>
  )
}

export default App
