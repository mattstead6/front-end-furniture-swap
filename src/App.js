import Home from './Home'
import './App.css';

function App() {
  return (
    <Home/>
  )
}

export default App;


// # POST NOTES

// # - inside of config.ru; use Rack::JSONBodyParser (ewceives something with body and parses it out to make it easier to read on the controller)
// # - post "/items" do
// #   binding.pry
// # end
// # - then go on postman
// # - go to body and add some data and run it -> look up params on vscode
// # - then Item.create(params)
// # - put that where binding.pry is above ^^^ and add.to_json
// # post "/items" do
// #   Item.create(params).to_json
// # end

// # .to_json is to send to the frontend


// # # Adding a form to add items





// # import {useState, useEffect} from 'react'
// # function App(){

// # const [items, setItems] = useState([])
// # const [formState, setFormState] = useState({
// #   name:'',
// #   age: 0,
// #   #put stuff from both tables
// # })

// # useEffect(() => {
// #   fetch('http://localhost:9292/items')
// #   .then(res => res.json())
// #   .then(data => setItems(data))
// # }, [])

// # const renderItems = items.map(item => {
// #   return <p>{item.description}</p>
// # })

// # function handleSubmit(e) {
// #   e.preventDefault()
// #   fetch('http://localhost:9292/users', {
// #     method: "POST",
// #     headers: {
// #       "Content-Type": 'application/json',

// #     },
// #     body: JSON.stringify({
// #       item: {
// #         name: formState.name,
// #         description: formState.description
// #       }
// #     })
// #   })
// #   .then(res =>res.json())
// #   .then(console.log)
// # }

// # return (

// # {renderItems}

// # <form onSubmit={handleSubmit}>
// # <input name="name" value={formState.name} onChange={e => setFormState(prev => {...prev, name: e.target.value})}/>
// # <input type = "number"name="age" value={formState.age} />


// # </form>

// # )

// # }
// # export default App;