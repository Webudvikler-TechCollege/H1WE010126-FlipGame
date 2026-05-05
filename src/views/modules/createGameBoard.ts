import type { Goal } from "../../types/goal";
import { createElement, createImage } from "../atoms";

export const createGameBoard = (arrCards: Goal[]):HTMLElement => {
    const section = createElement('div', 'grid grid-rows-6 grid-cols-6 gap-[2px] [perspective: 1000px] h-screen aspect-square')

    arrCards.forEach(item => {
        const card = createElement('div', 'border border-black relative shadow-md')

        const image = createImage(item.image, item.title, 'absolute')
        card.append(image)
        section.append(card)

    })

    return section
    
}