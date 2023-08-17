interface Props {
  liveLaughLoveSetter: (val: string) => void
  randomWords: string[]
}

export default function RandomizeBtn(props: Props) {
  const setLLL = () => props.liveLaughLoveSetter(props.randomWords[0])

  return <button onClick={setLLL}>Randomize</button>
}