# thra-basic-modal-react

A simple and basic reusable modal component using react

<a href="https://www.npmjs.com/package/thra-basic-modal-react"><img alt="npm" src="https://img.shields.io/npm/dw/thra-basic-modal-react"></a>
<a href="https://www.npmjs.com/package/thra-basic-modal-react"><img alt="npm" src="https://img.shields.io/npm/v/thra-basic-modal-react"></a>
<a href="https://www.npmjs.com/package/thra-basic-modal-react"><img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/thra-basic-modal-react"></a>
<a href="https://www.npmjs.com/package/thra-basic-modal-react">
<img alt="Maintenance Status" src="https://img.shields.io/badge/maintenance-active-green.svg" />
</a>

## Installation

```
npm install thra-basic-modal-react
```

## Example

```js
import Modal from 'thra-basic-modal-react'
import { useState } from 'react'
const Example = () => {
  const [modalIsDisplayed, setModalIsDisplayed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setModalIsDisplayed(true)
  }
  return (
    <section className="container">
      <h1 className="title">Example : Thra Basic Modal React</h1>
      <form onSubmit={handleSubmit}>
        <button>Click me</button>
      </form>
      <Modal
        isDisplayed={modalIsDisplayed}
        onCloseModal={() => setModalIsDisplayed(false)}
        content={
          <div id="confirmation" className="modal">
            <p>This is a modal</p>
            <p>Click on 'X' button to close me</p>
          </div>
        }
      />
    </section>
  )
}
export default Example
```