import { useState } from 'react'

const LIVE_LAUGH_LOVE = 'Live, Laugh, Love'

function App() {
  const [randomWords, setRandomWords] = useState(['these', 'are', 'some', 'boilerplate', 'strings', 'REPLACE_ME!', 'l8r'])
  const [liveLoveLaugh, setLiveLaughLove] = useState(LIVE_LAUGH_LOVE)

  return (
    <main>
      <h1>App</h1>
      <p>React development has begun!</p>
    </main>
  )
}

export default App
