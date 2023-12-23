import { useEffect, useState } from "react"
import "./section.css"
import { useParams } from "react-router"



export default function Section(props){
    const [anim, setAnim] = useState(false)
    const content = props.content
    const id = props.id
    const url = useParams()
    useEffect(()=>{
        console.log("hello")
    },[url])
    return(
        <section className="animationSectionIn" id={id}>
            {content}
        </section>
    )
}