import App from './App'

const root = document.querySelector('#root')
root.innerHTML = App()

module.hot && module.hot.accept()
