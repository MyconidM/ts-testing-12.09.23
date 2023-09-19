"use client"

import ResponseItem from "@/components/ResponseItem"
import Responses from "@/components/Responses"
import { createResponses, faker } from "@/features/responses/createResponse"
import { useState } from "react"

export default function responsesPage() {
    const [responses, setResponses] = useState(
        Array.from(createResponses({count: 10, faker }).values())
    )
    //const responses = Array.from(createResponses({count: 10, faker }).values())

    const deleteResponseItemHandler = (id: string) => {
        // console.log(id)
        // const filteredContent = responses.filter((response) => response.id !== id)
        // setResponses(filteredContent)
        setResponses((prev) => prev.filter((response) => response.id !== id))
    }

    if (!responses.length) {
        return (
            <div  className="mx-auto w-full max-w-3xl">
                <h1>Ingen responser</h1>
            </div>
        )
    }

    return (
        <Responses>
            {responses.map((response) => 
            <ResponseItem key={response.id} {...response}
            onDelete={deleteResponseItemHandler} />)}
        </Responses>
    )
}