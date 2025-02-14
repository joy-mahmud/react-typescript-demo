import { useState } from "react"
import Button from "./components/Button"
import Heading from "./components/Heading"
import Input from "./components/Input"
import Person from "./components/Person"
import PersonList from "./components/PersonList"
import Status from "./components/Status"
import Greet from "./components/Greet"
import Container from "./components/Container"
import User from "./components/User"
import Counter from "./components/Counter"


function App() {
  const name = {
    fname: 'joy',
    lname: 'mahmud'
  }
  const login = true
  const personList = [
    { fname: 'joy', lname: 'mahmud' },
    { fname: 'john', lname: 'doe' },
    { fname: 'hasin', lname: 'haidar' },
  ]
  const [val, setVal] = useState('')
  console.log(val)

  return (

    <>
      <Container styles={{ backgroundColor: '#ddd', padding: 20, borderRadius: 20 }}>
        <Heading>This is heading</Heading>
        <Greet name='joy'>
          <Heading>Hello greeting</Heading>
        </Greet>
        <Person name={name} isLoggedIn={login}></Person>
        <PersonList names={personList}></PersonList>
        <Status status="loading"></Status>
        <Input value={val} handleChanges={event => setVal(event.target.value)} />
        <Button handleClick={(event, id) => console.log("button clicked", event, id)}></Button>
        <div>
          <User></User>
        </div>
        <div>
          <Counter></Counter>
        </div>
      </Container>

    </>
  )
}

export default App
