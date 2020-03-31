// Not working
/**
 * @typedef {Object<string, any>} DayMonthYearVariant1
 * @property {number} day
 * @property {number} month
 * @property {number} year
 */

// Working
/**
 * @typedef DayMonthYearVariant2
 * @property {number} day
 * @property {number} month
 * @property {number} year
 */

// Not working when providing type inside @typedef
// /**
//  * PersonVariant1
//  * @typedef {Object<string, any>} PersonVariant1
//  * @property {string} firstName
//  * @property {string} lastName
//  * @property {DayMonthYearVariant1} dateOfBirth
//  */

// Working
/**
 * PersonVariant2
 * @typedef PersonVariant2
 * @property {string} firstName
 * @property {string} lastName
 * @property {DayMonthYearVariant2} dateOfBirth
 */

// Working
/**
 * PersonVariant3
 * @typedef PersonVariant3
 * @type Object
 * @property {string} firstName
 * @property {string} lastName
 * @property {DayMonthYearVariant2} dateOfBirth
 */

// Working
/**
 * PersonVariant4
 * @typedef {{ firstName: string, lastName: string, dateOfBirth: DayMonthYearVariant2 }} PersonVariant4
 */

// Ensure this file is a module.
export {};
