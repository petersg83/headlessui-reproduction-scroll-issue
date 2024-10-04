import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { useState } from 'react'

const people = Array(60).fill().map((_, i) => ({
  id: i,
  name: `name-${i}`
}))

function App() {
  const [selectedPerson, setSelectedPerson] = useState(people[0])
  const isInIframe = window.self !== window.top;
  console.log(isInIframe)

  return (
    <div>
      <Listbox value={selectedPerson} onChange={setSelectedPerson}>
        <ListboxButton>Select that  {isInIframe ? 'cannot' : 'can'} scroll</ListboxButton>
        <ListboxOptions anchor="bottom">
          {people.map((person) => (
            <ListboxOption key={person.id} value={person} className="data-[focus]:bg-blue-100">
              {person.name}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>

      {!isInIframe && <iframe title="title" src="http://localhost:3000" width="100%" marginheight="0" frameborder="0" height="1500px"></iframe>}
    </div>
  
  )
}

export default App;