import * as groupImporter from './importers/groupImporter';
import $ from 'jquery';

$('#addGroups').on('click', () => {
    var groupTimes = document.querySelector('#groupTimes').value;
    var validToken = document.querySelector('#token').value;
    groupImporter.importGroups(validToken, groupTimes);
});