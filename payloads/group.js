var faker = require('faker/locale/en_GB');

const groupCreater = () => {
    var firstName = faker.name.firstName();
    var lastName = faker.name.lastName();
    var phone = faker.phone.phoneNumber();
    var email = faker.internet.email()
    return {
        "Name": `${firstName} ${lastName}`,
        "Members": [
            {
                "Person": {
                    "Gender": {
                        "Id": null,
                        "Name": null,
                        "SystemName": "Male"
                    },
                    "Title": "Mr",
                    "FirstName": firstName,
                    "LastName": lastName,
                    "Addresses": [

                    ],
                    "ContactItems": [
                        {
                            "Type": {
                                "Id": 240,
                                "Name": "Email",
                                "SystemName": "Email"
                            },
                            "Value": email
                        },
                        {
                            "Type": {
                                "Id": 243,
                                "Name": "Mobile",
                                "SystemName": "Mobile"
                            },
                            "Value": phone,
                            "ContactOrder": 0,
                            "AllowContact": true
                        },
                        {
                            "Type": {
                                "Id": 241,
                                "Name": "Telephone",
                                "SystemName": "Telephone"
                            },
                            "Value": phone
                        },
                        {
                            "Type": {
                                "Id": 244,
                                "Name": "Work Phone",
                                "SystemName": "WorkPhone"
                            },
                            "Value": phone
                        }
                    ],
                    "PrimaryAddress": null
                },
                "RelationshipType": {
                    "SystemName": "PrimaryGroupMember"
                }
            }
        ],
        "GroupType": {
            "SystemName": "Individual"
        },
        "Origin": {

        },
        "Grade": {
            "SystemName": "One"
        },
        "ExternalProviderTypes": [

        ],
        "PrimaryContact": {
            "Gender": {
                "Id": null,
                "Name": null,
                "SystemName": "Male"
            },
            "Title": "Mr",
            "FirstName": firstName,
            "LastName": lastName,
            "Addresses": [

            ],
            "ContactItems": [
                {
                    "Type": {
                        "Id": 240,
                        "Name": "Email",
                        "SystemName": "Email"
                    },
                    "Value": email
                },
                {
                    "Type": {
                        "Id": 243,
                        "Name": "Mobile",
                        "SystemName": "Mobile"
                    },
                    "Value": phone,
                    "ContactOrder": 0,
                    "AllowContact": true
                },
                {
                    "Type": {
                        "Id": 241,
                        "Name": "Telephone",
                        "SystemName": "Telephone"
                    },
                    "Value": phone
                },
                {
                    "Type": {
                        "Id": 244,
                        "Name": "Work Phone",
                        "SystemName": "WorkPhone"
                    },
                    "Value": phone
                }
            ],
            "PrimaryAddress": null
        }
    }
}

export default groupCreater;



