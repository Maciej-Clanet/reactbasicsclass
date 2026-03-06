import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Tag from './components/Tag/Tag'

function App() {

  return (
    <>
      <Header />
      <div className="categories">
        <Tag text="Best Sellers" isSpecial />
        <Tag text="New Releases" isSpecial />
        <Tag text="Fashion" />
        <Tag text="Tech" />
        <Tag text="Books" />
        <Tag text="Indie Crafts" />
        <Tag text="Home & Garden" />
      </div>
      <div className="main-content">
        stuff
      </div>
      <Footer />

    </>
  )
}

export default App
