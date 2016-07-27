
import * as groupImporter from './importers/groupImporter';
import $ from 'jquery';

let token;

$('#addGroups').on('click', () => {
    var groupTimes = $('#groupTimes').val();
    token = $('#token').val();
    groupImporter.importGroups(token, groupTimes);
});

