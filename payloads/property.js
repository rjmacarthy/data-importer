//https://localapi.dezrez.com/api/property/add

var faker = require('faker/locale/en_GB');

const propertyCreater = () => {
    var locality = faker.address.city();
    var postcode = faker.address.zipCode();
    var state = faker.address.state();
    var street = faker.address.streetName();
    var streetNumber = faker.random.number();
    var town = faker.address.county();
    var county = faker.address.county();

    return {
        "Property": {
            "Address": {
                "Id": 0,
                "CreatedDate": "0001-01-01T00:00:00+0000",
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
                "AddressSource": {
                    "Id": 199,
                    "Name": "National",
                    "SystemName": "National"
                },
                "SourceId": streetNumber,
                "OrganizationName": "",
                "Number": streetNumber,
                "BuildingName": "",
                "Street": street,
                "Town": town,
                "Locality": locality,
                "County": county,
                "Postcode": postcode,
                "Location": {
                    "Id": 0,
                    "CenterPoint": {
                        "Id": 0,
                        "Latitude": 51.6243949433,
                        "Longitude": -3.9107733855,
                        "Altitude": 0,
                        "Order": 0
                    },
                    "Extent": [

                    ],
                    "ViewPoints": [

                    ]
                }
            },
            "Keys": [

            ],
            "Alarms": [

            ],
            "Roles": [

            ],
            "InactiveRoleIds": [

            ],
            "SpecialArrangements": [

            ],
            "HasVaulation": false,
            "LastValuationDate": "",
            "MapRepresentationHeight": 256,
            "MapRepresentationWidth": 256,
            "NumberOfKeysAlarms": 0,
            "PropertyRoleString": "",
            "PropertySelected": false,
            "SpecialArrangementsBookings": [

            ],
            "SpecialArrangementsCount": 0,
            "SpecialArrangementsVisitations": [

            ]
        },
        "AmenityDescription": {
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
            "Type": {
                "SystemName": "Amenity"
            },
            "Roles": [

            ],
            "DisplayOrder": 3,
            "InstanceId": "a6e65820-e843-4280-acd0-dfe5cc457e6f",
            "ReadOnly": false,
            "SaveOnChange": false,
            "AmenityGaragesId": "a6e65820-e843-4280-acd0-dfe5cc457e6fgarages",
            "AmenityGardensId": "a6e65820-e843-4280-acd0-dfe5cc457e6fgardens",
            "AmenityParkingSpacesId": "a6e65820-e843-4280-acd0-dfe5cc457e6fparkingspaces",
            "GaragesChangedEvent": "garages-addproperty-changeda6e65820-e843-4280-acd0-dfe5cc457e6f",
            "GardensChangedEvent": "gardens-addproperty-changeda6e65820-e843-4280-acd0-dfe5cc457e6f",
            "ParkingSpacesChangedEvent": "parking-addproperty-changeda6e65820-e843-4280-acd0-dfe5cc457e6f"
        },
        "RoomCountDescription": {
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
            "Type": {
                "SystemName": "RoomCount"
            },
            "PropertyId": 0,
            "Roles": [

            ],
            "Bedrooms": "2",
            "DisplayOrder": 2,
            "InstanceId": "9d99b85a-d977-4dd2-a6d3-68c4aee8c50f",
            "ReadOnly": false,
            "RoomCountBathroomsId": "65f4a4fd-e4cc-477b-b692-ef1641b024b5",
            "RoomCountBedroomsId": "a0595d6d-ae24-498f-bf9b-aa441b61a127",
            "RoomCountOtherId": "2079a393-0928-466f-a358-cfee976ee7cf",
            "RoomCountReceptionsId": "c7bb3af9-f126-4bb6-a27f-f027eb7d0964",
            "Rooms": [

            ],
            "SaveOnChange": false,
            "OthersChangedEvent": "9d99b85a-d977-4dd2-a6d3-68c4aee8c50fotherooms",
            "ReceptionsChangedEvent": "9d99b85a-d977-4dd2-a6d3-68c4aee8c50freceptions",
            "BathroomsChangedEvent": "9d99b85a-d977-4dd2-a6d3-68c4aee8c50fbathrooms",
            "BedroomsChangedEvent": "9d99b85a-d977-4dd2-a6d3-68c4aee8c50fbedrooms"
        },
        "StyleAgeDescription": {
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
            "Type": {
                "SystemName": "StyleAge"
            },
            "PropertyId": 0,
            "Roles": [

            ],
            "PropertyType": {

            },
            "StyleType": {

            },
            "LeaseType": {

            },
            "AgeType": {

            },
            "DisplayOrder": 0,
            "InstanceId": "e85c22ea-8b5b-411e-a702-4362bb4a24a5",
            "LeaseTypes": {
                "EnumValues": [
                    {
                        "Id": 477,
                        "Name": "Leasehold",
                        "SystemName": "Leasehold"
                    },
                    {
                        "Id": 478,
                        "Name": "Freehold",
                        "SystemName": "Freehold"
                    },
                    {
                        "Id": 479,
                        "Name": "Not Applicable",
                        "SystemName": "NotApplicable"
                    },
                    {
                        "Id": 480,
                        "Name": "Freehold (to be confirmed)",
                        "SystemName": "FreeholdToBeConfirmed"
                    },
                    {
                        "Id": 481,
                        "Name": "Leasehold (to be confirmed)",
                        "SystemName": "LeaseholdToBeConfirmed"
                    },
                    {
                        "Id": 482,
                        "Name": "To be Advised",
                        "SystemName": "TobeAdvised"
                    },
                    {
                        "Id": 483,
                        "Name": "Share of Leasehold",
                        "SystemName": "ShareofLeasehold"
                    },
                    {
                        "Id": 484,
                        "Name": "Share of Freehold",
                        "SystemName": "ShareofFreehold"
                    },
                    {
                        "Id": 485,
                        "Name": "Flying Freehold",
                        "SystemName": "FlyingFreehold"
                    },
                    {
                        "Id": 486,
                        "Name": "Leasehold Share of Freehold",
                        "SystemName": "LeaseholdShareofFreehold"
                    }
                ]
            },
            "PropertyTypes": {
                "EnumValues": [
                    {
                        "Id": 606,
                        "Name": "Terraced House",
                        "SystemName": "TerracedHouse"
                    },
                    {
                        "Id": 607,
                        "Name": "End of Terrace House",
                        "SystemName": "EndofTerraceHouse"
                    },
                    {
                        "Id": 608,
                        "Name": "Semi-Detached House",
                        "SystemName": "SemiDetachedHouse"
                    },
                    {
                        "Id": 609,
                        "Name": "Detached House",
                        "SystemName": "DetachedHouse"
                    },
                    {
                        "Id": 610,
                        "Name": "Flat",
                        "SystemName": "Flat"
                    },
                    {
                        "Id": 611,
                        "Name": "Ground Floor Flat",
                        "SystemName": "GroundFloorFlat"
                    },
                    {
                        "Id": 612,
                        "Name": "Apartment",
                        "SystemName": "Apartment"
                    },
                    {
                        "Id": 613,
                        "Name": "Terraced Bungalow",
                        "SystemName": "TerracedBungalow"
                    },
                    {
                        "Id": 614,
                        "Name": "Semi-Detached Bungalow",
                        "SystemName": "SemiDetachedBungalow"
                    },
                    {
                        "Id": 615,
                        "Name": "Detached Bungalow",
                        "SystemName": "DetachedBungalow"
                    },
                    {
                        "Id": 616,
                        "Name": "Cottage",
                        "SystemName": "Cottage"
                    },
                    {
                        "Id": 617,
                        "Name": "Town House",
                        "SystemName": "TownHouse"
                    },
                    {
                        "Id": 618,
                        "Name": "Country House",
                        "SystemName": "CountryHouse"
                    },
                    {
                        "Id": 619,
                        "Name": "Chalet",
                        "SystemName": "Chalet"
                    },
                    {
                        "Id": 620,
                        "Name": "Barn Conversion",
                        "SystemName": "BarnConversion"
                    },
                    {
                        "Id": 621,
                        "Name": "Mews House",
                        "SystemName": "MewsHouse"
                    },
                    {
                        "Id": 622,
                        "Name": "Ground  Floor Maisonette",
                        "SystemName": "GroundFloorMaisonette"
                    },
                    {
                        "Id": 623,
                        "Name": "Maisonette",
                        "SystemName": "Maisonette"
                    },
                    {
                        "Id": 624,
                        "Name": "Penthouse",
                        "SystemName": "Penthouse"
                    },
                    {
                        "Id": 625,
                        "Name": "Plot",
                        "SystemName": "Plot"
                    },
                    {
                        "Id": 626,
                        "Name": "Commercial Property",
                        "SystemName": "CommercialProperty"
                    },
                    {
                        "Id": 627,
                        "Name": "Cluster House",
                        "SystemName": "ClusterHouse"
                    },
                    {
                        "Id": 628,
                        "Name": "Detached Villa",
                        "SystemName": "DetachedVilla"
                    },
                    {
                        "Id": 629,
                        "Name": "Villa",
                        "SystemName": "Villa"
                    },
                    {
                        "Id": 630,
                        "Name": "Semi-detached Villa",
                        "SystemName": "SemiDetachedVilla"
                    },
                    {
                        "Id": 631,
                        "Name": "Village House",
                        "SystemName": "VillageHouse"
                    },
                    {
                        "Id": 632,
                        "Name": "Link Detached House",
                        "SystemName": "LinkDetachedHouse"
                    },
                    {
                        "Id": 633,
                        "Name": "StudioFlat",
                        "SystemName": "StudioFlat"
                    },
                    {
                        "Id": 634,
                        "Name": "Land",
                        "SystemName": "Land"
                    },
                    {
                        "Id": 635,
                        "Name": "Retirement Property",
                        "SystemName": "RetirementProperty"
                    },
                    {
                        "Id": 636,
                        "Name": "Park Home",
                        "SystemName": "ParkHome"
                    }
                ]
            },
            "ReadOnly": false,
            "SaveOnChange": false,
            "StyleTypes": {
                "EnumValues": [
                    {
                        "Id": 717,
                        "Name": "Not Applicable",
                        "SystemName": "NotApplicable"
                    },
                    {
                        "Id": 718,
                        "Name": "Modern",
                        "SystemName": "Modern"
                    },
                    {
                        "Id": 719,
                        "Name": "Period",
                        "SystemName": "Period"
                    },
                    {
                        "Id": 720,
                        "Name": "New",
                        "SystemName": "New"
                    },
                    {
                        "Id": 721,
                        "Name": "Older",
                        "SystemName": "Older"
                    },
                    {
                        "Id": 722,
                        "Name": "Victorian",
                        "SystemName": "Victorian"
                    },
                    {
                        "Id": 723,
                        "Name": "Edwardian",
                        "SystemName": "Edwardian"
                    },
                    {
                        "Id": 724,
                        "Name": "Georgian",
                        "SystemName": "Georgian"
                    },
                    {
                        "Id": 725,
                        "Name": "Neo Georgian",
                        "SystemName": "NeoGeorgian"
                    },
                    {
                        "Id": 726,
                        "Name": "Post War",
                        "SystemName": "PostWar"
                    },
                    {
                        "Id": 727,
                        "Name": "19th Century",
                        "SystemName": "NineteenthCentury"
                    },
                    {
                        "Id": 728,
                        "Name": "18th Century",
                        "SystemName": "EighteenthCentury"
                    },
                    {
                        "Id": 729,
                        "Name": "17th Century",
                        "SystemName": "SeventeenthCentury"
                    },
                    {
                        "Id": 730,
                        "Name": "Built To Order",
                        "SystemName": "BuiltToOrder"
                    },
                    {
                        "Id": 731,
                        "Name": "Tudor",
                        "SystemName": "Tudor"
                    },
                    {
                        "Id": 732,
                        "Name": "Mature",
                        "SystemName": "Mature"
                    }
                ]
            }
        }
    }
}

export default propertyCreater;