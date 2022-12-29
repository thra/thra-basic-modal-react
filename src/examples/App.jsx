import './App.scss'
import { useState } from 'react'
import Modal from '../lib'

const App = () => {
  const [modalIsDisplayed, setModalIsDisplayed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setModalIsDisplayed(true)
  }

  return (
    <section className="container">
      <h1 className="title">Thra Basic Modal React</h1>
      <form onSubmit={handleSubmit}>
        <button>Submit</button>
      </form>
      <Modal
        isDisplayed={modalIsDisplayed}
        onCloseModal={() => setModalIsDisplayed(false)}
        content={
          <div id="confirmation" className="modal">
            This is a modal
          </div>
        }
      />
    </section>
  )
}

export default App
