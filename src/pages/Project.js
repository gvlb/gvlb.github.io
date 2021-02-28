import React from "react"

export default function Project(props) {
    return <a className="block" href={props.link}>
    <div className="flex flex-row py-5 align-middle">
            <img className="h-12" src={props.img} alt={props.name + "-icon"}></img>
            <div className="flex flex-col px-5 align-middle">
                <h1 className="font-medium">{props.name}</h1>
                <h2>{props.desc}</h2>
            </div>
        </div>
    </a>

}