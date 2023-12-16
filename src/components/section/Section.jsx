export default function Section(props){
    const content = props.content
    const id = props.id
    return(
        <section id={id}>
            {content}
        </section>
    )
}