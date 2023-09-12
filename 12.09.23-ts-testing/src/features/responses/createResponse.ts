import { CreateResponses, Faker, Response } from "./types"

const fakeAnswers: string[] = [
  "GlitterGlo Lipstick",
  "QuantumQuench Energy Drink",
  "StellarScent Perfume",
  "PurrfectPillow Pet Bed",
]

const fakeScores: number[] = [3, 2, 1]

const fakeCategories: string[] = ["Math", "Code", "Science"]

const getRandomItem = <T>(items: T[]) => { //<T> for å definere en generic
  return items[Math.floor(Math.random() * items.length)]
}

export const getRandomId = () => {
  return Math.random().toString(36).slice(2)
}

// TODO: Oppgave 1 - løst
const faker: Faker = {
  id: () => getRandomId(),
  answer: () => getRandomItem<string>(fakeAnswers), //<string> det som er <T> over
  score: () => getRandomItem<number>(fakeScores),
  category: () => getRandomItem<string>(fakeCategories),
}

// TODO: Oppgave 1 - Not implemented
const createResponses: CreateResponses = ({
  existingResponses,
  count,
  faker,
}) => {
  const responses = new Map(existingResponses);
  if ()
  for (let i = 0; i < count; i++) {
    const response = {
      id: faker.id(),
      answer: faker.,
      score: number,
      category: string,
      questionId: string
    }
  }
  return responses
}

// TODO: Oppgave 3 - Not implemented
const calcAverageScore = (responses: Map<string, Response>) => {
  return 0
}

export { createResponses }
