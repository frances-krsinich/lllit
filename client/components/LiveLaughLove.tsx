interface Props {
  liveLaughLoveString: string
  image?: string
}

export default function LiveLaughLove(props: Props) {
  return (
    <section>
      <h3>{props.liveLaughLoveString}</h3>
      <img style={{width: '35rem', height: '25rem', objectFit: 'cover'}} src={props.image} alt={props.liveLaughLoveString}/>
    </section>
  )
}