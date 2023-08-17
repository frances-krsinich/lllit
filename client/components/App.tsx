import { useState } from 'react'
import RandomizeBtn from './RandomizeBtn.tsx'
import LiveLaughLove from './LiveLaughLove.tsx'
import words from '../data/words.ts'
import images from '../data/images.ts'

const LIVE_LAUGH_LOVE = 'Live, Laugh, Love'

function App() {
  const [randomWords, setRandomWords] = useState(words)
  const [liveLoveLaugh, setLiveLaughLove] = useState(LIVE_LAUGH_LOVE)
  const [image, setImage] = useState(images[17])

  return (
    <main>
      <h1>Live it, Laugh it, Love it</h1>
      <h2>Your not-yet-personalized LLLIT generator</h2>
      <LiveLaughLove liveLaughLoveString={liveLoveLaugh} image={image}/>
      <RandomizeBtn
        liveLaughLoveSetter={setLiveLaughLove}
        randomWords={randomWords}
      />
    </main>
  )
}

export default App
