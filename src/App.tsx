import {Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {FavouritePage} from "./pages/FavouritePage"
import React, {Suspense} from "react";

const Navigation = React.lazy(() => import("./components/Navigation"))

function App() {

  return (
     <Suspense fallback={<div className='text-center'>Loading...</div>}>
       <Navigation />
       <Routes>
         <Route path='/' element={ <HomePage /> } />
         <Route path='/favourites' element={ <FavouritePage /> }/>
       </Routes>
     </Suspense>
  )
}

export default App;
