//https://localapi.dezrez.com/api/progression/sales/instructtosell

var instruct = (roleId) => {
    var price = faker.finance.amount(100000, 7000000, 0);
    return {
        "RoleId": roleId,
        "ActualMarketingPrice": price,
        "TeamId": 3,
        "PutOnMarket": true,
        "InstructedDateTime": new Date().toJSON(),
        "NegotiatorIds": [
            103
        ],
        "LeaseType": {
            "Id": 477,
            "Name": "Leasehold",
            "SystemName": "Leasehold"
        }
    }
}

export default instruct;
