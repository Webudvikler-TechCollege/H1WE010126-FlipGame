export const render = (
    targetId:string, 
    htmlObj: HTMLElement | DocumentFragment, 
    clearTarget: boolean = false
): void => {
    const el = document.getElementById(targetId)
    if(el && clearTarget) {
        el.innerHTML = ''
    }
    el?.append(htmlObj)
}