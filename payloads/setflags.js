var faker = require('faker/locale/en_GB');

var setFlags = () => {
    return [
        {
            "InterestFlag": {
                "Id": 107,
                "Name": "Sales Applicant",
                "SystemName": "SalesApplicant"
            },
            "Enabled": faker.random.boolean(),
            "NegotiatorId": 103
        },
        {
            "InterestFlag": {
                "Id": 108,
                "Name": "Lettings Applicant",
                "SystemName": "LettingsApplicant"
            },
            "Enabled": faker.random.boolean(),
            "NegotiatorId": 103
        },
        {
            "InterestFlag": {
                "Id": 109,
                "Name": "Vendor",
                "SystemName": "Vendor"
            },
            "Enabled": faker.random.boolean(),
            "NegotiatorId": 103
        },
        {
            "InterestFlag": {
                "Id": 110,
                "Name": "Landlord",
                "SystemName": "Landlord"
            },
            "Enabled": faker.random.boolean(),
            "NegotiatorId": 103
        }
    ];
}

export default setFlags

