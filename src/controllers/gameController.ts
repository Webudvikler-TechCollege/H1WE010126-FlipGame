import { gameModel } from "../models/gameModel"
import type { Goal, GoalResponse } from "../types/goal"
import { createGameBoard } from "../views/modules/createGameBoard";

class GameController {
    private readonly numCards: number = 10

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
        el.classList.add('active')
        console.log(el);
        
    }
}

export const gameController = new GameController