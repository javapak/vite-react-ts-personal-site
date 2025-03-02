import { MantineProvider } from '@mantine/core'
import Home from './Home'
import '@mantine/core/styles.css'

function App() {

  return (
    <MantineProvider defaultColorScheme='dark'>
      <Home/>
    </MantineProvider>
  )
}

export default App
