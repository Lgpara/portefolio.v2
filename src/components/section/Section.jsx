import "./section.css"



export default function Section(props){
    
    const content = props.content
    const id = props.id
    return(
        <section className="animSectionIn" id={id}>
            {content}
        </section>
    )
}