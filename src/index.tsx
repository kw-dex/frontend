import { configure } from "mobx"
import { Suspense } from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import "./index.scss"
import App from "@/app/App"

configure({
  enforceActions: "never"
})

ReactDOM.createRoot(document.getElementById("root") as HTMLDivElement).render(
  <Suspense>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Suspense>
)
