export const createFragment = (): DocumentFragment => document.createDocumentFragment();

export const createElement = (
    tag: keyof HTMLElementTagNameMap = 'div',
    className: string = ''
): HTMLElement => {
  const el = document.createElement(tag);
  el.className = className;
  return el;
}

export const createHeading = (
    level:number = 1,
    text: string,
    className: string = ''
): HTMLElement => {
    const safeLevel:number = Math.min(Math.max(level, 1), 6);
    const el = document.createElement(`h${safeLevel}`) as HTMLElement;
    el.textContent = text;
    el.className = className;
    return el;
}

export const createLink = (
    to: string,
    className: string = ''
): HTMLElement => {
    const el = document.createElement('a')
    el.href = to
    el.className = className
    return el
}

export const createImage = (
    src: string,
    alt: string,
    className: string = ''
): HTMLElement => {
    const el = document.createElement('img')
    el.src = src
    el.alt = alt
    el.className = className
    return el
}

export const createForm = (
    method: string = 'GET',
    className: string = ''
): HTMLFormElement => {
    const el = document.createElement('form')
    el.method = method
    el.className = className
    return el
}

export const createLabel = (
    title: string,
    id: string,
    className: string = ''
): HTMLLabelElement => {
    const el = document.createElement('label')
    el.htmlFor = id
    el.className = className
    el.textContent = title
    return el
}

export const createInput = (
    type: string = 'text',
    name: string = '',
    placeholder: string = '',
    value: any,
    className: string = ''
): HTMLInputElement => {
    const el = document.createElement('input')
    el.type = type
    el.name = name
    el.placeholder = placeholder
    el.value = value
    el.className = className
    return el
}

export const createButton = (
    title: string,
    type: 'button' | 'submit' | 'reset' = 'submit',
    className = 'text-white text-base border border-slate-400 px-2 py-1 rounded-md bg-slate-500 hover:bg-slate-800 inset-shadow-sm mr-2'
): HTMLButtonElement => {
    const el = document.createElement('button')
    el.type = type
    el.textContent = title
    el.className = className
    return el
}