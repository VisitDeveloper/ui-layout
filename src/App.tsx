import MainLayout from './components/ui-layout/index'
import { TYPE_LAYOUT } from './enum/ui-layout.enum'
import React from 'react'
import { Fragment } from 'react'

function App() {
  return (
    <Fragment>
      <MainLayout
        type={TYPE_LAYOUT.ALL}
        renderProps={() => {
          return <>a element in child </>
        }}
      />
    </Fragment>
  )
}

export default App
