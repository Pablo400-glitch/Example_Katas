import { getRandomValues } from "crypto"

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
    return {
      first_anagram: this.scrambleWord(this.word), 
      second_anagram: this.scrambleWord(this.word)
    }
  }

  scrambleWord(word: string): string {
    const wordArray = word.split('')
    const n = wordArray.length

    for (let i = n - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      const temp = wordArray[i]
      wordArray[i] = wordArray[j];
      wordArray[j] = temp;
    }

    return wordArray.join('')
  }
}