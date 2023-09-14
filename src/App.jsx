import "./App.css";
import { useState} from "react";
import ContactList from "./components/ContactList";
import SelectedContact from "./components/selectedContact";
import ContactRow from "./components/ContactRow";

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  return (
    <>
      {selectedContactId ? (
          <SelectedContact selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId}/>
        ) : (
          <ContactList setSelectedContactId={setSelectedContactId} />
        )}
    </>
  )
}

export default App
