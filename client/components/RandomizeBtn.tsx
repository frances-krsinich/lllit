interface Props {
  liveLaughLoveSetter: () => void
  randomWords: string[]
}

export default function RandomizeBtn(props: Props) {
  return <button onClick={props.liveLaughLoveSetter}>Live, Laugh...???</button>
}
