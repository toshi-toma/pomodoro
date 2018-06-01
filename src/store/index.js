import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'

const middleware = []
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(() => {}, applyMiddleware(...middleware))

export default store
