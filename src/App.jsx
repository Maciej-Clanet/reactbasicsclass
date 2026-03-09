import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Tag from './components/Tag/Tag'
import ProductCard from './components/ProductCard/ProductCard'

function App() {

  return (
    <>
      <Header />
      <div className="categories">
        <Tag text="Best Sellers" isSpecial />
        <Tag text="New Releases" isSpecial />
        <Tag text="Fashion" />
        <Tag text="Tech" />
      </div>
      <div className="main-content">
        <section className="product-group">
          <ProductCard
            title="Some product"
            description="some description"
            link="/"
            image="https://cdn.thewirecutter.com/wp-content/media/2025/09/BG-IPHONE-2048px_IPHONE-17-PRO-MAX_BACK.jpg?auto=webp&quality=75&width=1024"
          />
          <ProductCard
            title="Some product"
            description="some description"
            link="/"
            image="https://upload.wikimedia.org/wikipedia/commons/0/07/Geneva_MotorShow_2013_-_Lamborghini_Veneno_1.jpg"
          />
          <ProductCard
            title="Some product"
            description="some description"
            link="/"
            image="https://digitalcontent.api.tesco.com/v2/media/ghs/593e6f55-8c25-4306-99da-95db7c4be421/8b37f268-f9cb-40aa-b4bc-25d1788f5da7_1045240234.jpeg?h=960&w=960"
          />
          <ProductCard
            title="Some product"
            description="some description"
            link="/"
            image="https://cdn.thewirecutter.com/wp-content/media/2025/09/BG-IPHONE-2048px_IPHONE-17-PRO-MAX_BACK.jpg?auto=webp&quality=75&width=1024"
          >
          </ProductCard>
        </section>
      </div>
      <Footer />

    </>
  )
}

export default App
