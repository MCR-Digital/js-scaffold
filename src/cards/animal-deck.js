import { animals } from './animal.js'
import AnimalCard from './animal-card.js'

class AnimalDeck {
  constructor() {
    this.cards = []
    for (let animal in animals) {
      this.cards.push(new AnimalCard(animal))
      this.cards.push(new AnimalCard(animal))
    }
  }
  getCards() {
    let result = new Array(this.cards.length)
    for (let i = 0; i < this.cards.length; i++) {
      let card = this.cards[i]
      result[i] = card.toString()
    }
    return result
  }

  shuffle() {
    for (let i = 0; i < this.cards.length; i++) {
      let indexA = Math.floor(Math.random() * i)
      let indexB = i
  
      let valueA = this.cards[indexA]
      let valueB = this.cards[indexB]
  
      this.cards[indexA] = valueB
      this.cards[indexB] = valueA
    }
  }

  deal() {
    let card = this.cards.splice(0, 1)[0]
    return card
  }
}

export default AnimalDeck