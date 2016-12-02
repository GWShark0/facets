import { capitalize, flow, join, map, words } from 'lodash/fp';

// concatenates an array of words into a space-delimited sentence
// ex. ['lorem', 'ipsum'] => "lorem ipsum"
export const sentence = join(' ');

// converts a string to proper case (first letter of every word capitalized)
// ex. "lorem ipsum" => "Lorem Ipsum"
export const properCase = flow(words, map(capitalize), sentence);
