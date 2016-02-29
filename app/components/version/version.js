'use strict';

angular.module('myApp.version', [
  'informedCitizen.version.interpolate-filter',
  'informedCitizen.version.version-directive'
])

.value('version', '0.1');
