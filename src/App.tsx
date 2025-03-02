import { MantineProvider } from '@mantine/core'
import { SpeedInsights } from "@vercel/speed-insights/react"
import Home from './Home'
import '@mantine/core/styles.css'

function App() {

  return (
    
      <MantineProvider defaultColorScheme='dark'>
        <Home />
        <SpeedInsights />
      </MantineProvider>
  )
}

export default App
