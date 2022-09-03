import { NavbarHome } from './navbar'
import Footer from './footer'

export default function LayoutHome({ children }) {
  return (
    <>
      <NavbarHome />
      <main>{children}</main>
      <Footer />
    </>
  )
}