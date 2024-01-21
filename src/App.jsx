import { Header } from "./components/Header"
import { Main } from "./components/Main"
import { Footer } from "./components/Footer"

const linksObj = [
  {
    name: 'Home',
    link: '/home'
  },
  {
    name: 'Products',
    link: '/products'
  },
  {
    name: 'Reviews',
    link: '/reviews'
  },
  {
    name: 'Contacts',
    link: '/contacts'
  },
]

export const App = () => {
  return (
    <>
    <Header links={linksObj} />
    <Main />
    <Footer />
    </>
  )
}

