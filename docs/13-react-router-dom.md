# React router dom

The react router dom is a package that allows you to use the routing in your react application. It is a collection of navigational components that compose declaratively with your application.

## Installation
```bash
npm i react-router-dom
```

## Usage

Go to the `main.jsx` file and import the `BrowserRouter` and `Route` components from the `react-router-dom` package.

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
```

You have to create a new folder within the `src` folder called `page`. This folder will contain the components that will be used in the routes. Create 5 different files within the `page` folder.
- `Home.jsx`
    ```jsx
    import React from 'react'

    function Home() {
    return (
        <div>
        
        </div>
    )
    }

    export default Home
    ```
- `ShowBook.jsx`
    ```jsx
    import React from 'react'

    function ShowBook() {
    return (
        <div>
        
        </div>
    )
    }

    export default ShowBook
    ```
- `EditBook.jsx`
    ```jsx
    import React from 'react'

    function EditBook() {
    return (
        <div>
        
        </div>
    )
    }

    export default EditBook
    ```
- `CreateBook.jsx`
    ```jsx
    import React from 'react'

    function CreateBook() {
    return (
        <div>
        
        </div>
    )
    }

    export default CreateBook
    ```
- `DeleteBook.jsx`
    ```jsx
    import React from 'react'

    function DeleteBook() {
    return (
        <div>
        
        </div>
    )
    }

    export default DeleteBook
    ```


Now you have to modify the `App.jsx` file to use the `Route` component.

```jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './page/Home'
import ShowBook from './page/ShowBook'
import EditBook from './page/EditBook'
import NewBook from './page/NewBook'
import CreateBook from './page/CreateBook'
import DeleteBook from './page/DeleteBook'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/books/create' element={ <CreateBook /> } />
      <Route path='/books/details/:id' element={ <ShowBook /> } />
      <Route path='/books/edit/:id' element={ <EditBook /> } />
      <Route path='/books/delete/:id' element={ <DeleteBook /> } />
    </Routes>
  )
}

export default App
```