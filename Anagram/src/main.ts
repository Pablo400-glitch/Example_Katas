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
    let first_anagram = this.word
    let second_anagram = this.word

    return {
      first_anagram, 
      second_anagram
    }
  }

  scrambleWord(word: string): string {
    const wordArray = word.split('')
    let scrambledWord = ['']
    const wordLength = word.length - 1

    for (let i = 0; i <= wordLength + 1; i++) {
      let randomPos = Math.floor(Math.random() * (wordArray.length));
      scrambledWord[i] = wordArray[randomPos]
      wordArray.splice(randomPos, 1);
    }

    console.log(scrambledWord.join(''))

    return scrambledWord.join('')
  }
}