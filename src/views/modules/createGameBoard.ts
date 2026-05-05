import type { Goal } from "../../types/goal";
import { createElement, createImage } from "../atoms";

export const createGameBoard = (arrCards: Goal[]):HTMLElement => {
    const section = createElement('div', 'gameboard')

    arrCards.forEach(item => {
        const card = createElement('div', 'flipcard')

        const image = createImage(item.image, item.title, 'absolute')
        card.append(image)

        const cardback = createElement('div', 'flipcard-back')
        card.append(cardback)
        section.append(card)

    })

    return section
    
}