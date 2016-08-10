//https://localapi.dezrez.com/api/progression/sales/instructtosell

var instruct = (roleId) => {
    return {
        "RoleId": roleId,
        "ActualMarketingPrice": 100000,
        "TeamId": 3,
        "PutOnMarket": true,
        "InstructedDateTime": "2016-08-08T11:25:55+0100",
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
