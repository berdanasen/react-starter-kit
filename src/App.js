import {SiteContext, AuthContext} from "./context"
import Home from "./Home"


function App () {

  return (
    <SiteContext>
      <AuthContext>
        <Home />
      </AuthContext>
    </SiteContext>
  )
}

export default App;