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
import UserContextProvider from "./context/UserContextProvider"
import Private from "./components/Private"
import Profile from "./components/Profile"
import List from "./components/List"
import Restrictions from "./components/restrictions/Restrictions"
import Toast from "./components/Toast"
import CustomButton from "./components/html/Button"


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

    <UserContextProvider>
      <Container styles={{ padding: 20, borderRadius: 20 }}>
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
        <div>
          <Private isLoggedIn={true} component={Profile}></Private>
        </div>
        <div>
          <List items={[{ id: 1, name: "joy", age: 20 }, { name: 'jisan', age: 30 }, { name: 'sojib', age: 40 }]} onClick={(item) => console.log(`hello ${item}`)}></List>
          <List items={["joy", 'jisan', 'sojib']} onClick={(item) => console.log(`hello ${item}`)}></List>
        </div>
        <div>
          <Restrictions value={10} isPositive></Restrictions>
        </div>

        <Toast position="center"></Toast>
        <CustomButton variant="primary" onClick={() => console.log('button clicked')}>primary button</CustomButton>
      </Container>


    </UserContextProvider>
  )
}

export default App
