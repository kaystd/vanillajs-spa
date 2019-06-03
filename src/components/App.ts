import Authorization from './Authorization'
import Registration from './Registration'
import { Route, State } from '../data/interfaces'

export default (state: State): string => {
    switch (state.route) {
        case Route.Authorization: return Authorization(state)
        case Route.Registration: return Registration(state)
        default: return ''
    }
}
