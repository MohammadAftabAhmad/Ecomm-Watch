import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { store,  } from "../src/redux/store"
import { Provider } from 'react-redux'

import { RouterProvider } from 'react-router-dom'
import Router from "./Routes/index";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
  <RouterProvider router={Router}/>
  </Provider>

  </StrictMode>,
)
