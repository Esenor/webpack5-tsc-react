import React from 'react'
import ReactDomClient from 'react-dom/client'
import Counter from './Counter'

const App = (): React.ReactElement => {
  console.log('Hello World from react !')
  return <div><h1>Hello World from react !</h1><Counter/></div>
}

const container: Element = document.getElementById('app') ?? document.body
const root: ReactDomClient.Root = ReactDomClient.createRoot(container)
root.render(<App />)
