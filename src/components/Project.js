import React from "react"

export default function Project(props) {
    return <a className="block" href={props.link}>
    <div className="flex flex-row p-2 items-center text-sm hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
            <img className="h-9 md:h-12" src={props.img} alt={props.name + "-icon"}></img>
            <div className="flex flex-col px-5 align-middle">
                <h1 className="font-medium text-sm md:text-base">{props.name}</h1>
                <h2 className="text-xs md:text-sm">{props.desc}</h2>
            </div>
        </div>
    </a>

}