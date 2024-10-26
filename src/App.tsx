import './App.css'
import Grid from './components/Grid/grid.component'
import Btn from './components/Btn/btn.component'

function App() {

  return (
    <div className='flex flex-col justify-center h-dvh text-center'>
      <div className='text-4xl font-semibold'>Memory Game</div>
      <Grid />
      <Btn>Reset Game</Btn>
    </div>
  )
}

export default App
