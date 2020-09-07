// Globally register all base components for convenience, because they
// will be used very frequently. Components are registered using the
// PascalCased version of their file name.

import Vue from 'vue'

// https://webpack.js.org/guides/dependency-management/#require-context
const requireComponent = require.context(
  // Look for files in the current directory
  '@/components/base/',
  // Do look in subdirectories
  true,
  // Only .tsx and .vue files
  /[\w-]+\.(vue|tsx?)$/
)

// For each matching file name...
requireComponent.keys().forEach((fileName) => {
  // Get the component config
  const componentConfig = requireComponent(fileName)
  // Get the PascalCase version of the component name
  const componentFile = fileName.split('/')
    
  const componentName = componentFile
    .slice(-1)
    .join('')
    .replace(/\.(vue|tsx)/, '')
  // Globally register the component
  Vue.component(componentName, componentConfig.default || componentConfig)
})