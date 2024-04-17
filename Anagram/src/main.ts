export type Anagrams = {
  first_anagram: string,
  second_anagram: string
}
export class Anagram {
  word: string

  constructor(word: string) {
    this.word = word
  }

  getAnagram(): Anagrams {
    let first_anagram = this.word
    let second_anagram = this.word
    return {
      first_anagram, 
      second_anagram
    }
  }
}