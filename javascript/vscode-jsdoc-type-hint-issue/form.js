// Type(s)
/**
 * @typedef {import('./types').PersonVariant1} PersonVariant1 // Not working
 * @typedef {import('./types').PersonVariant2} PersonVariant2 // Working
 * @typedef {import('./types').PersonVariant3} PersonVariant3 // Working
 * @typedef {import('./types').PersonVariant4} PersonVariant4 // Working
 * @typedef {import('./types').PersonVariant5} PersonVariant5 // Working
 */

/**
 * Add person
 * @param {PersonVariant2} person
 */
export function addPerson(person) {
  // Autocomplete/Intellisense is not working properly for `Person` and `DayMonthYear` type.
  const firstName = person.firstName;
  const dobMonth = person.dob.month;
}
