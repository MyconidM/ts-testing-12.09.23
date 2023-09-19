//Oppg A

// const genders = ['male', 'female', 'other']
// const firstName = "Marius"
// const age = 38
// const gender = genders[0]
// const hasKids = true
// const data = { name: firstName, age, gender }

type person = {
    firstName: string
    age: number
    gender: string
    hasKid: boolean
}

//Oppg B
type items = {
    id: number
    name: string
}

const items = [{
	id: 1,
	name: "Sara"
}]

function run(doc: items[]) {
	return doc.length > 0
}

run(items)
