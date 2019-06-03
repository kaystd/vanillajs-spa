import Authorization from './Authorization'
import Registration from './Registration'
import { State } from '../data/interfaces'

export default (state: State): string => {
    return Registration(state)
}
