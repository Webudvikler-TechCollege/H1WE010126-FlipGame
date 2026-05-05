import { gameModel } from "../models/gameModel"
import type { Goal, GoalResponse } from "../types/goal"
import { createGameBoard } from "../views/modules/createGameBoard";

class GameController {
    private readonly numCards: number = 2
    private arrFlipped: HTMLElement[] = []
    private pairs: number = 0
    private isChecking: boolean = false

    public async initGame(): Promise<HTMLElement> {
        const data: GoalResponse = await gameModel.getList()
        const cards = this.prepareArray(data.items);
        const viewHtml = createGameBoard(cards)

        const cardElms = viewHtml.querySelectorAll<HTMLElement>('.flipcard-back')
        cardElms.forEach(card => {
            card.addEventListener('click', (e: MouseEvent) => {
                const target = e.target
                if(target instanceof HTMLElement) {
                    const parent = target.parentElement
                    if(parent) {
                        this.flipCard(parent)
                    }                    
                }
            })
        })

        return viewHtml
    }

    private prepareArray(arrCards: Goal[]): Goal[] {
        let preparedArray = [...arrCards].sort(() => Math.random() - 0.5)
        preparedArray = preparedArray.slice(0, this.numCards)
        preparedArray = preparedArray.concat(preparedArray)
        preparedArray = preparedArray.sort(() => Math.random() - 0.5)
        return preparedArray
    }

    private flipCard(el: HTMLElement):void {
        if(this.isChecking || el.classList.contains('active')) {
            return
        }

        el.classList.add('active')
        this.arrFlipped.push(el)
        
        if(this.arrFlipped.length === 2) {
            this.isChecking = true
            if(this.arrFlipped[0].innerHTML === this.arrFlipped[1].innerHTML) {
                this.pairs++
                this.arrFlipped = []    
                this.isChecking = false            
                if(this.pairs === this.numCards) {
                    console.log('Game over');
                    
                }
            } else {
                setTimeout(() => {
                  this.arrFlipped.forEach(item => item.classList.remove('active'))  
                  this.arrFlipped = []
                  this.isChecking = false
                }, 1400)
            }
        }
        
    }
}

export const gameController = new GameController