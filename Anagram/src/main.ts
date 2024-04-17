export type Anagrams = {
  first_anagram: string,
  second_anagram: string
}

export class Anagram {
  word: string

  constructor(word: string) {
    this.word = word
  }

  getAnagram() {
    return this.word
  }
}