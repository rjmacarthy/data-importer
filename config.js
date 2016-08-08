const groupSearchPayLoad = {
    "OwningTeamId": 3,
    "Criteria": {
        "BudgetFrom": "0",
        "BudgetTo": "5000000",
        "MustHave":
        {
            "PropertyTypes": [],
            "PropertyTags": [],
            "Regions": []
        },
        "ShouldNotHave": {
            "PropertyTypes": [],
            "PropertyTags": []
        },
        "MustNotHave": { "Regions": [] }
    },
    "Grade": {},
    "Origin": {},
    "FinancialStatus": {}
}


const addgroup = 'https://localapi.dezrez.com/api/group/addgroup';
const addproperty = 'https://localapi.dezrez.com/api/property/add';
const getallgroups = "https://localapi.dezrez.com/api/globalsearch/groups?pageSize=25&pageNumber=1&term=*&excludeDeleted=true&GroupTypes=Groups";
const recordval = "https://localapi.dezrez.com/api/property/recordvaluation?branchId=1";
const instruct = "https://localapi.dezrez.com/api/progression/sales/instructtosell";
const addPropertyToGroupUrl = (id) => {
    return `https://localapi.dezrez.com/api/property/${id}/addgrouptoproperty`
}
const addSalesSearch = (id) => {
    return `https://localapi.dezrez.com/api/group/${id}/savesalessearch`
}

export {
addSalesSearch,
groupSearchPayLoad,
addgroup,
addproperty,
getallgroups,
addPropertyToGroupUrl,
instruct,
recordval
};
