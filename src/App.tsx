import './App.css'
import Game from './components/Game/game.component'

function App() {
  return (
    <div className='flex flex-col justify-center h-dvh text-center'>
      <div className='text-4xl font-semibold'>Memory Game</div>
      <Game />
    </div>
  )
}

export default App
