import { useState } from 'react'
import { HomeCreateForm } from './ui-components'

function App() {
  const [showForm, setShowForm] = useState(true)

  return (
    {showForm &&
      <HomeCreateForm onSubmit={async (fields) => {
      const response = await fetch("/submit-home-data", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(fields) // Pass in form data
      })

      if (response.status === 200) {
        setShowForm(false) // Hide the form
      }
    }}/>}
  )
}