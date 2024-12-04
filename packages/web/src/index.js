import { AppRegistry } from 'react-native'

import App from 'components/src/App'

AppRegistry.registerComponent('mealplanner', () => App)
AppRegistry.runApplication('mealplanner', {
  rootTag: document.getElementById('root'),
})
