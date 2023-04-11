import Header from "./Header"
import Footer from "./Footer"
import Banner from "./Banner"
import MainSection from "./MainSection"
import GallerySection from "./GallerySection"
import dalle1 from "./assets/dall-e1.png"
import dalle2 from "./assets/dall-e2.png"
import dalle3 from "./assets/dall-e3.png"
import dalle4 from "./assets/dall-e4.png"
import dalle5 from "./assets/dall-e5.png"

const dalleImages = [
  {
    name: 'Cosmic Elephant Dreamscape',
    img: dalle1,
    prompt: 'Create a surreal image of an elephant flying in space. The elephant should have an unreal appearance, with colorful wings and a body that glows in the dark. The space should be dark, with bright stars and nebulae in the background. Make sure the image is vibrant and full of surprising tones.',
  },
  {
    name: 'Serenity in Abstraction',
    img: dalle2,
    prompt: 'Create an abstract image with a soft and relaxing color palette. Use organic and rounded shapes to create a sense of tranquility and harmony.',
  },
  {
    name: 'Ethereal Smoke Dreams',
    img: dalle3,
    prompt: 'Create an abstract image that looks like a soft and ethereal cloud of smoke. Use soft and diffused tones to create a relaxing and calming appearance.',
  },
  {
    name: "Cosmic Singularity: A Black Hole's Journey Through the Galaxy",
    img: dalle4,
    prompt: 'Create an image of a black hole in space surrounded by swirling galaxies and stars. The black hole should have a dark and ominous appearance, with a visible accretion disk and jets of energy shooting out from the poles. The galaxies and stars should be arranged in a spiral pattern around the black hole, creating a sense of motion and energy. Make sure the image is highly detailed and captures the awe-inspiring nature of the cosmos.',
  },
  {
    name: 'Enchanted Forest Reverie',
    img: dalle5,
    prompt: 'Generate an abstract image that looks like a dreamy forest. Use a soft green and blue color palette, with organic shapes that resemble branches and leaves.',
  }
]

function App() {
  return (
    <div className="App">
      < Header />
      < Banner />
      < MainSection />
      < GallerySection dalleImages={dalleImages} />
      < Footer />
    </div>
  )
}

export default App
