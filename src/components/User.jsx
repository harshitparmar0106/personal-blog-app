import React from "react"
import { useParams } from "react-router-dom"

export default function User () {

    const {userid} = useParams()

    return (
        <div className="text-center text-4xl h-[50vh] flex flex-col item-center justify-center">
            User:{userid} <br/>
            for dynamic routing
        </div>
    )
}