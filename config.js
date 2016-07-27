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

const addSalesSearch = (id) => {
    return `https://localapi.dezrez.com/api/group/${id}/savesalessearch`
}

export {
addSalesSearch,
groupSearchPayLoad,
addgroup
};
