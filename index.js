import * as groupImporter from './importers/groupImporter';
import * as propertyImporter from './importers/propertyImporter';
import $ from 'jquery';

$('#addGroups').on('click', () => {
    var groupTimes = document.querySelector('#groupTimes').value;
    var validToken = document.querySelector('#token').value;
    groupImporter.importGroups(validToken, groupTimes);
});



$('#addProperties').on('click', () => {
    var groupTimes = document.querySelector('#propertyTimes').value;
    var validToken = document.querySelector('#token').value;
    propertyImporter.importProperties(validToken, groupTimes);
});