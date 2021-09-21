import React from "react"

export default function Project(props) {
    return <a className="block" href={props.link}>
    <div className="flex flex-row p-2 my-1 items-center hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
            <img className="h-9 md:h-12" src={props.img} alt={props.name + "-icon"}></img>
            <div className="flex flex-col px-5 align-middle">
                <span className="text-xl text-md">{props.name}</span>
                <span>{props.desc}</span>
            </div>
        </div>
    </a>

}