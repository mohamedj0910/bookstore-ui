import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'
import Header from './components/Header'
import Footer from './components/Footer'
function App() {

  return (
    <>
      <Header />
      <main>
        <Cards />
      </main>
      <Footer />
    </>
  )
}

export default App
