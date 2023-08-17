import { useState } from 'react'
import RandomizeBtn from './RandomizeBtn.tsx'
import LiveLaughLove from './LiveLaughLove.tsx'

const LIVE_LAUGH_LOVE = 'Live, Laugh, Love'

function App() {
  const [randomWords, setRandomWords] = useState(['these', 'are', 'some', 'boilerplate', 'strings', 'REPLACE_ME!', 'l8r'])
  const [liveLoveLaugh, setLiveLaughLove] = useState(LIVE_LAUGH_LOVE)

  return (
    <main>
      <h1>Live it, Laugh it, Love it</h1>
      <h2>Your not-yet-personalized LLIT generator</h2>
      <LiveLaughLove liveLaughLoveString={liveLoveLaugh} />
      <RandomizeBtn liveLaughLoveSetter={setLiveLaughLove} randomWords={randomWords}/>
    </main>
  )
}

export default App
