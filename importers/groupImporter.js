import request from 'superagent';
import * as config from '../config';
import { forEach } from 'lodash';
import logger from '../helpers/logger';
import groupCreater from '../payloads/group';
import setflagsCreater from '../payloads/setflags';
import $ from 'jquery';

var addedGroups = [];

export const importGroups = (token, times) => {
    if (token && times) {
        let groups = [];
        _.times(times, () => {
            groups.push(groupCreater());
        });
        add(groups, groups.length, 0, token);
    } else {
        logger("No token or times!");
    }
};

const add = (groups, amount, count, token) => {
    if (count <= amount && groups[count]) {
        request.post(config.addgroup)
            .set('Content-Type', 'application/json')
            .set('Rezi-Api-Version', '1.0')
            .set('Authorization', 'Bearer ' + token)
            .send(groupCreater())
            .end((err, {
                body
            }) => {
                addedGroups.push(body.GroupId);
                count++;
                setFlags(token, body.GroupId);
                add(groups, amount, count, token);
            });
    } else {
        logger(`${amount} groups added!`);
        addSearchingRoles(addedGroups, token);
    }
};

export const setFlags = (token, groupId) => {
    request.put(config.setflags(groupId))
        .set('Content-Type', 'application/json')
        .set('Rezi-Api-Version', '1.0')
        .set('Authorization', 'Bearer ' + token)
        .send(setflagsCreater())
        .end((err, { body }) => {
            logger('Random group flags set!');
        });
}

export const addSearchingRoles = (groupIds, token) => {
    groupIds = groupIds ? groupIds : config.groupIds;
    forEach(groupIds, (id) => {
        request.post(config.addSalesSearch(id))
            .set('Content-Type', 'application/json')
            .set('Rezi-Api-Version', '1.0')
            .set('Authorization', 'Bearer ' + token)
            .send(config.groupSearchPayLoad)
            .end((err, { body }) => {
                logger('Group Searching roles added!');
            });
    });
};
