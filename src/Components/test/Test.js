import '@testing-library/jest-dom'
import axios from 'axios'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import { render, screen } from '@testing-library/react';
import Home from '../../Routes/Home';
import App from '../../App'

const fetchData = () => axios.get("https://jsonplaceholder.typicode.com/users")


test('Dentist name id 1', async() => {
    return fetchData().then(data => {
        expect(data.data[0].name).toBe('Leanne Graham')
    })
})


test("Home path", async () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    )
    const h1 = await screen.findByText("Clinica Odontologica")
    expect(h1.textContent).toBe("Clinica Odontologica")
  })
  
  test('Render App', async()=> {
    render(<App />)
    const card = await screen.findByTitle('Leanne Graham');
    expect(card).toBeInTheDocument();
  })
