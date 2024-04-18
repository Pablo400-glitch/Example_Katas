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
    let scrambledWord = []
    const wordLength = wordArray.length

    for (let i = 0; i <= wordLength; i++) {
      let randomPos = Math.floor(Math.random() * (wordArray.length));
      scrambledWord[i] = wordArray[randomPos]
      wordArray.splice(randomPos, 1);
    }

    return scrambledWord.join('')
  }
}