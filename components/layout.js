import Footer from './elements/footer'
import Meta from './meta'

import Header from './elements/header'

const Layout = ({ children }) => (
  <div className="bg-sky-100 bg-gradient-to-r from-indigo-200 to-pink-200 text-slate-900">
    <Meta />
    <div className="min-h-screen">
      <Header />
      <main>{children}</main>
    </div>
    <Footer />
  </div>
)

export default Layout
