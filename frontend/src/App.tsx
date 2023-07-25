import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './components/Main'
import NotFound from './components/NotFound'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import { GuestRoot, PrivateRoot } from './AuthRoot'
import client from './apolloClient'
import { ApolloProvider } from '@apollo/client'

const App = () => {
  return (
    // ApolloProviderで囲まれたコンポーネントからGraphQLクライアントを使用できるようになる
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<GuestRoot children={<SignIn />} />} />
          <Route path="/signup" element={<GuestRoot children={<SignUp />} />} />
          <Route path="/" element={<PrivateRoot children={<Main />} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
