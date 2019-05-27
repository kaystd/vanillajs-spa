export default (): HTMLElement => {
    const element = document.createElement('div')

    element.innerHTML = 'Hello, World!'

    return element
}
