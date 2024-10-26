import './App.css'
import Grid from './components/Grid/grid.component'

function App() {

  return (
    <div className='flex flex-col justify-center h-dvh text-center'>
      <div className='text-4xl font-semibold'>Memory Game</div>
      <Grid gridSize={4} />
    </div>
  )
}

export default App
