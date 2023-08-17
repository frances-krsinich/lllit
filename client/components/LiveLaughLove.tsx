interface Props {
  liveLaughLoveString: string
  image?: string
}

export default function LiveLaughLove(props: Props) {
  return (
    <section>
      <h3>{props.liveLaughLoveString}</h3>
    </section>
  )
}