import Header from './components/Header'
import Nav from './components/Nav'
import About from './components/About'
import Experience from './components/Experience'
import Contatct from './components/Contact'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Nav />
        <About />
        <Experience />
        <Portfolio />
        <Contatct />
      </div>
      <Footer />
    </>

  )
}

export default App
