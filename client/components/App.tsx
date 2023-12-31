import { useState } from 'react'
import RandomizeBtn from './RandomizeBtn.tsx'
import LiveLaughLove from './LiveLaughLove.tsx'
import words from '../data/words.ts'
import images from '../data/images.ts'
import { getRandomIndex, replaceRandomWord } from '../lib/utils.ts'

const LIVE_LAUGH_LOVE = 'Live, Laugh, Love'

function App() {
  const [randomWords, setRandomWords] = useState(words)
  const [liveLoveLaugh, setLiveLaughLove] = useState(LIVE_LAUGH_LOVE)
  const [image, setImage] = useState(images[17])
  const [userInput, setUserInput] = useState('')

  function setRandomLLL() {
    const wordToUse = userInput || words[getRandomIndex(words)]
    const randomSentence = replaceRandomWord(LIVE_LAUGH_LOVE, ', ', wordToUse)
    const randomImage = images[getRandomIndex(images)]
    setImage(randomImage)
    setLiveLaughLove(randomSentence)
  }

  return (
    <main>
      <h1>Live it, Laugh it, Love it</h1>
      <h2>Your personalized LLLIT generator</h2>
      <br></br>
      <br></br>
      <div id="picture-border">
        <LiveLaughLove liveLaughLoveString={liveLoveLaugh} image={image} />
        <br></br>
        <br></br>
        <br></br>
      </div>
      <br></br>
      <RandomizeBtn
        liveLaughLoveSetter={setRandomLLL}
        randomWords={randomWords}
      />
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Enter optional word"
      />
    </main>
  )
}

export default App
