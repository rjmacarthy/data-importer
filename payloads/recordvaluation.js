//https://localapi.dezrez.com/api/property/recordvaluation?branchId=1

var recordValuationCreater = (propertyId) => {
    return {
        "DateTime": "2016-08-08T11:22:47+0100",
        "PropertyId": propertyId,
        "UpperValue": 100000,
        "LowerValue": 100000,
        "SuggestedValue": 100000,
        "PriceQualifierType": {

        },
        "PriceType": {

        },
        "PriceText": "",
        "NegotiatorIds": [
            103
        ],
        "Fees": [
            {
                "CreatedDate": null,
                "CreatedBy": {
                    "Gender": {

                    },
                    "PrimaryTelephone": {
                        "Type": {

                        }
                    },
                    "PrimaryEmail": {
                        "Type": {

                        }
                    }
                },
                "FeeValueType": {

                },
                "FeeCategoryType": {
                    "SystemName": "Commission"
                },
                "FeeChargeType": {
                    "SystemName": "Applicable"
                },
                "FeeLiabilityType": {
                    "SystemName": "Vendor"
                },
                "FeeFrequency": {
                    "SystemName": "FlatPrice"
                },
                "ScaleableFees": [

                ],
                "TransactionType": {

                }
            }
        ],
        "AgencyType": {

        },
        "ValuationType": {
            "Id": 0,
            "Name": "Sales",
            "SystemName": "Sales"
        },
        "PriceOnApplication": false,
        "AvailableDate": null,
        "Term": {

        },
        "ServiceLevel": {

        },
        "FurnishLevel": {

        },
        "ValuationNote": ""
    }
}

export default recordValuationCreater;