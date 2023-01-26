import React from 'react'
import Header from './header/index'
import Footer from './footer/index'
import { TYPE_LAYOUT } from '../../enum/ui-layout.enum'

interface MainLayoutProps {
  type: TYPE_LAYOUT
  renderProps?: () => JSX.Element
}

const MainLayout = (props: MainLayoutProps) => {
  switch (props.type) {
    case TYPE_LAYOUT.ALL:
      return (
        <section className="column-flex">
          <Header />
          <>{props?.renderProps!()}</>
          <Footer />
        </section>
      )
    case TYPE_LAYOUT.JUST_HEADER:
      return (
        <section className="column-flex">
          <Header />
        </section>
      )
    case TYPE_LAYOUT.JUST_FOOTER:
      return (
        <>
          <Footer />
        </>
      )
    case TYPE_LAYOUT.JUST_CHILDREN:
      return <>{props.renderProps!()}</>
    default:
      return (
        <>
          <Header />
          <>{props?.renderProps!()}</>
          <Footer />
        </>
      )
  }
}
export default MainLayout
