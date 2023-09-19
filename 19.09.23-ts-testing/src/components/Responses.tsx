import { response } from "msw";
import ResponseItem from "./ResponseItem";

import { createResponses } from "@/features/responses/createResponse";
import { ReactNode } from "react";

export default function Responses({children}: {children: ReactNode}) {
    // const responses = Array.from(createResponses({count: 10, faker }).values())
    // console.log(responses)
    // const alternative = {
    //     id: "1",
    //     answer: "My answer",
    //     score: 22,
    //     category: "one",
    //     questionId: "123",
    //   }
    return (
      <div className="relative mx-auto mt-4 max-w-2xl overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Answere
              </th>
              <th scope="col" className="px-6 py-3">
                Score
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Question
              </th>
            </tr>
          </thead>
          <tbody>
            {children}
            {/* {responses.map(response => (
                <ResponseItem key={response.id} {...response} />
            ))} */}
            {/* <ResponseItem {...alternative}/> */}
          </tbody>
        </table>
      </div>
    )
  }