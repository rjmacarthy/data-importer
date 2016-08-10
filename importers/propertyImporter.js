import { forEach } from 'lodash';
import * as config from '../config';
import $ from 'jquery';
import addGroupToPropertyCreater from '../payloads/addgrouptoproperty';
import instructCreater from '../payloads/instructosell';
import logger from '../helpers/logger';
import propertyCreater from '../payloads/property';
import recordValuationCreater from '../payloads/recordvaluation';
import request from 'superagent';

var allGroups;

export const importProperties = (token, times) => {
    if (token && times) {
        request.get(config.getallgroups)
            .set('Content-Type', 'application/json')
            .set('Rezi-Api-Version', '1.0')
            .set('Authorization', 'Bearer ' + token).end((err, {
                body
            }) => {
                allGroups = body;
            });

        let properties = [];
        _.times(times, () => {
            properties.push(propertyCreater());
        });
        add(properties, properties.length, 0, token);
    } else {
        logger("No token or times!");
    }
};

const add = (properties, amount, count, token) => {
    if (count <= amount && properties[count]) {
        request.post(config.addproperty)
            .set('Content-Type', 'application/json')
            .set('Rezi-Api-Version', '1.0')
            .set('Authorization', 'Bearer ' + token)
            .send(propertyCreater())
            .end((err, {
                body
            }) => {
                logger(`property added`);
                count++;
                assignGroup(body.Id, token);
                add(properties, amount, count, token);
            });
    } else {
        logger(`${amount} properties added!`);
    }
};

const assignGroup = (propertyId, token) => {
    var url = config.addPropertyToGroupUrl(propertyId);
    var payload = addGroupToPropertyCreater(allGroups.Collection[_.random(allGroups.Collection.length)]);
    request.put(url)
        .set('Content-Type', 'application/json')
        .set('Rezi-Api-Version', '1.0')
        .set('Authorization', 'Bearer ' + token)
        .send(payload)
        .end((err, {
            body
        }) => {
            recordValuation(propertyId, token);
            logger("Group assigned to property!");
        });
}

const recordValuation = (propertyId, token) => {
    var payload = recordValuationCreater(propertyId);
    var url = config.recordval;
    request.post(url)
        .set('Content-Type', 'application/json')
        .set('Rezi-Api-Version', '1.0')
        .set('Authorization', 'Bearer ' + token)
        .send(payload)
        .end((err, {
            body
        }) => {
            instructProperty(body.RoleId, token);
            logger("Val recorded!");
        });
}


const instructProperty =  (roleId, token) => {
    var payload = instructCreater(roleId);
    var url = config.instruct;
    request.post(url)
        .set('Content-Type', 'application/json')
        .set('Rezi-Api-Version', '1.0')
        .set('Authorization', 'Bearer ' + token)
        .send(payload)
        .end((err, {
            body
        }) => {
            logger("Property instructed!");
        });
}