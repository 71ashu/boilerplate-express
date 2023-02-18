var express = require('express');
var app = express();

const collections = [{
  "id": "631f0e8bdfde123fee02e8de",
  "active": true,
  "name": "Test collection",
  "totalRoutes": 9,
  "description": "Some test description",
  "specUrl": null,
  "path": "/22c01171-9596-435e-b49d-ef1067fcbc06/testpath1",
  "tags": null,
  "lastModifiedDate": "2022-09-20T08:58:38.944Z"
}, {
  "id": "631f1133dfde123fee02e8e0",
  "active": true,
  "name": "Test collection v4",
  "totalRoutes": 10,
  "description": "Some test description",
  "specUrl": null,
  "path": "/22c01171-9596-435e-b49d-ef1067fcbc06/testpath2",
  "tags": null,
  "lastModifiedDate": "2022-09-21T10:27:14.536Z"
}, {
  "id": "631f2bbddfde123fee02e8e6",
  "active": true,
  "name": "Callable collection 2",
  "totalRoutes": 2,
  "description": "Callable test description",
  "specUrl": null,
  "path": "/22c01171-9596-435e-b49d-ef1067fcbc06/callablev2",
  "tags": null,
  "lastModifiedDate": "2022-09-19T13:27:50.344Z"
}, {
  "id": "631f2825dfde123fee02e8e1",
  "active": true,
  "name": "Callable collection",
  "totalRoutes": 3,
  "description": "Callable test description",
  "specUrl": null,
  "path": "/22c01171-9596-435e-b49d-ef1067fcbc06/callablev1",
  "tags": null,
  "lastModifiedDate": "2022-09-20T11:00:36.652Z"
}, {
  "id": "631ec1bcdfde123fee02e8c7",
  "active": true,
  "name": "Test collection",
  "totalRoutes": 2,
  "description": "Some test description",
  "specUrl": null,
  "path": "/22c01171-9596-435e-b49d-ef1067fcbc06/testpath",
  "tags": null,
  "lastModifiedDate": "2022-09-19T07:33:07.126Z"
}, {
  "id": "632826ecddbf3a01c99abdd1",
  "active": true,
  "name": "Ashu-Test-Collection",
  "totalRoutes": 1,
  "description": "",
  "specUrl": null,
  "path": "/22c01171-9596-435e-b49d-ef1067fcbc06/ashu-test-collection",
  "tags": null,
  "lastModifiedDate": "2022-09-19T08:24:05.400Z"
}, {
  "id": "6328326c0ff144307b5e089c",
  "active": true,
  "name": "Pankaj test 1",
  "totalRoutes": 1,
  "description": "",
  "specUrl": null,
  "path": "/22c01171-9596-435e-b49d-ef1067fcbc06/pankajtest1",
  "tags": null,
  "lastModifiedDate": "2022-09-19T09:12:37.951Z"
}, {
  "id": "63281be8ddbf3a01c99abdc1",
  "active": true,
  "name": "Ashu-new Collection",
  "totalRoutes": 0,
  "description": "",
  "specUrl": null,
  "path": "/22c01171-9596-435e-b49d-ef1067fcbc06/ashu-test",
  "tags": null,
  "lastModifiedDate": "2022-09-19T07:36:08.393Z"
}, {
  "id": "63281c2cddbf3a01c99abdc2",
  "active": true,
  "name": "Ashu's Second Collection",
  "totalRoutes": 1,
  "description": "",
  "specUrl": null,
  "path": "/22c01171-9596-435e-b49d-ef1067fcbc06/ashu-second-test",
  "tags": null,
  "lastModifiedDate": "2022-09-19T07:38:05.286Z"
}, {
  "id": "63285e5e0ff144307b5e08b6",
  "active": true,
  "name": "Something1",
  "totalRoutes": 4,
  "description": "Something1",
  "specUrl": null,
  "path": "/22c01171-9596-435e-b49d-ef1067fcbc06/Something1",
  "tags": null,
  "lastModifiedDate": "2022-09-19T13:52:10.259Z"
}, {
  "id": "632959ba0ff144307b5e08cd",
  "active": true,
  "name": "dwd",
  "totalRoutes": 0,
  "description": "dwdw",
  "specUrl": null,
  "path": "/22c01171-9596-435e-b49d-ef1067fcbc06/dwdw",
  "tags": null,
  "lastModifiedDate": "2022-09-20T06:12:10.679Z"
}, {
  "id": "63295ae70ff144307b5e08ce",
  "active": true,
  "name": "ashu-collection",
  "totalRoutes": 0,
  "description": "",
  "specUrl": null,
  "path": "/22c01171-9596-435e-b49d-ef1067fcbc06/ashu-collection",
  "tags": null,
  "lastModifiedDate": "2022-09-20T06:17:11.843Z"
}, {
  "id": "63295b100ff144307b5e08cf",
  "active": true,
  "name": "v1",
  "totalRoutes": 1,
  "description": "v1",
  "specUrl": null,
  "path": "/22c01171-9596-435e-b49d-ef1067fcbc06/v1",
  "tags": null,
  "lastModifiedDate": "2022-09-20T06:18:12.152Z"
}, {
  "id": "632ae5a817997810da5e35e1",
  "active": true,
  "name": "Ashu's Test collection 1",
  "totalRoutes": 1,
  "description": "",
  "specUrl": null,
  "path": "/22c01171-9596-435e-b49d-ef1067fcbc06/ashu-test-colelction-1",
  "tags": null,
  "lastModifiedDate": "2022-09-21T10:21:52.605Z"
}, {
  "id": "632ae69017997810da5e35e6",
  "active": true,
  "name": "Ashu-v1-collection",
  "totalRoutes": 1,
  "description": "This is a test Ashu-v1-collection",
  "specUrl": null,
  "path": "/22c01171-9596-435e-b49d-ef1067fcbc06/ashu-v1-collection",
  "tags": null,
  "lastModifiedDate": "2022-09-21T10:26:13.591Z"
}];

/*
app.get('', (req, res) => {
  res.json({
    "title": "SMAX to Salesforce",
    "description": "When a ticket is created in SMAX, create a case in Salesforce",
    "visibleInterface": [
      {
        "screen": 1,
        "elements": [
          {
            "title": "Screen title for API creation",
            "type": "apim",
            "required": true,
            "apimConfigValues": {
              "apiCollection": "631f2bbddfde123fee02e8e6",
              "route": "631f2bf8dfde123fee02e8e7",
              "consumer": "631f2c12dfde123fee02e8e9",
              "consumerProfile": "631f2c6adfde123fee02e8ea"
            },
          }
        ]
      },
      {
        "screen": 2,
        "title": "Salesforce",
        "description": "Create a connection for salesforce application.",
        "elements": [
          {
            "externalId": null,
            "type": "connection",
            "required": false,
            "configData": null,
            "connectionConfiguration": {
              "title": "Salesforce connection",
              "authenticationType": "oauth_2",
              "appAlias": "salesforce",
              "overridingConfig": null
            }
          }
        ]
      },
      {
        "screen": 3,
        "title": "Micro Focus SMAX",
        "description": "Create a connection for Micro Focus SMAX application.",
        "elements": [
          {
            "externalId": null,
            "type": "connection",
            "required": false,
            "configData": null,
            "connectionConfiguration": {
              "title": "Micro Focus SMAX connection",
              "authenticationType": "api_key",
              "appAlias": "microfocus_smax",
              "overridingConfig": null
            }
          }
        ]
      }
    ],
    "connections": [
      {
        "id": "62e0c638bd283152a607f308",
        "appAlias": "salesforce",
        "status": "connected"
      },
      {
        "id": "62e0c71ebd283152a607f315",
        "appAlias": "microfocus_smax",
        "status": "connected"
      }
    ],
    "apps": null
  }
  );
  // console.log(`${req.method} ${req.path} - ${req.ip}`);
  // next();
});
*/

/*
app.get('', (req, res) => {
  res.json({
    "title": "Config Trigger 2",
    "description": "Config",
    "visibleInterface": [
      {
        "screen": 1,
        "title": null,
        "description": null,
        "elements": [
          {
            "externalId": null,
            "type": "config_data",
            "required": false,
            "configData": {
              "id": "631ecd200e310a059f274caa",
              "title": "Webhook Name",
              "appAlias": "http_app",
              "triggerAlias": "http_request",
              "actionAlias": null,
              "workflowId": "62bc13d25cd5171e532b5373",
              "controlType": null,
              "defaultValue": "Default webhook name",
              "field": {
                "key": "webhook_name",
                "name": "Webhook name",
                "type": "string",
                "controlType": "text",
                "required": true,
                "properties": null,
                "isExtendedSchema": true,
                "pickList": null,
                "as": null,
                "dynamicPickList": null,
                "pickListParams": null,
                "toggleHint": null,
                "toggleField": null,
                "helpText": "Enter an appropriate name for the HTTP webhook event",
                "hintText": "An appropriate name for the HTTP webhook event"
              },
              "overridingConfig": null
            },
            "connectionConfiguration": null,
            "apimConfigData": null
          }
        ]
      }
    ],
    "connections": [
      {
        "id": "62cea6f7ba449712f680e89b",
        "appAlias": "logger",
        "status": "connected"
      },
      {
        "id": "626e7a27b1f1a87b2f735495",
        "appAlias": "http_app",
        "status": "connected"
      }
    ],
    "workflows": [
      {
        "id": "631ecdb0a36a416d0b98c0c9",
        "internalAppAliases": [
          "logger",
          "http_app"
        ],
        "appAliases": [],
        "triggerAppAlias": null,
        "partnerWorkflowId": "62bc13d25cd5171e532b5373"
      }
    ],
    "apps": [
      "logger",
      "http_app"
    ]
  })
});
*/

app.get('', (req, res) => {
  res.json({
    title: 'APIM journey title',
    description: 'Callable to logger',
    visibleInterface: [
      {
        screen: 1,
        title: 'API Management',
        description: 'Provide following details to setup your API.',
        elements: [
          {
            externalId: null,
            type: 'apim',
            required: true,
            configData: null,
            connectionConfiguration: null,
            apimConfigData: [
              {
                title: 'API Collection',
                type: 'api_collection',
                required: true
              },
              {
                title: 'Endpoint',
                type: 'route',
                required: true
              },
              {
                title: 'Client',
                type: 'consumer',
                required: true
              },
              {
                title: 'Access Profile',
                type: 'consumer_profile',
                required: true
              }
            ]
          }
        ]
      }
    ],
    connections: [
      {
        id: '631ec16b9d7a745028a2db90',
        appAlias: 'callable_workflow',
        status: 'connected'
      },
      {
        id: '631ec16d9d7a745028a2db91',
        appAlias: 'logger',
        status: 'connected'
      }
    ],
    workflows: [
      {
        id: '6328053c3a00cc659354402d',
        internalAppAliases: ['callable_workflow', 'logger'],
        appAliases: [],
        triggerAppAlias: null,
        partnerWorkflowId: '631b1d6d68be2160c2896e7d'
      }
    ],
    apps: ['callable_workflow', 'logger'],
    apimConfigValues: {
    }
  });
});

app.get('/collections', (req, res) => {
  if (req.query.search === 'sec')
    res.status(500).json({
      message: 'Search query is not valid'
    });

  res.setHeader('X-Total-Count', collections.length);

  console.log(req.query.page);

  if (req.query.page > 0) {
    res.json([]);
  } else res.json(collections);
});

app.post('/collections', (req, res) => { });

app.post('/endpoint', (req, res) => {
  res.json();
});

app.get('/clients', (req, res) => {
  res.json([
    {
      id: '61bd820edcaea800010dcc1e',
      username: 'L & D Client',
      apiCollectionCount: 0,
      lastModifiedDate: '2021-12-18T06:39:10.985Z',
      consumerProfileCount: 1
    }
  ]);
});

app.post('/clients', (req, res) => {
  res.json();
});

// app.get('/access-profile', (req, res) => {
//   res.json([{ "id": "61bd8230dcaea800010dcc1f", "userId": "5d63ddebab25401c5ce96aca", "consumerId": "61bd820edcaea800010dcc1e", "active": true, "name": "Access 1", "apiCollections": [{ "name": "L & D API Collection", "apiCollectionId": "61bd8070dcaea800010dcc1a" }, { "name": null, "apiCollectionId": "62e771721f494a4123780aea" }], "apiKey": "JMUPuhyMxJMTLr1LNKGOgd81rJTYNV47", "ipWhitelist": null, "description": null, "tags": null, "rateLimitRequest": null, "usageQuotaRequest": null, "rateLimitInterval": null, "usageQuotaInterval": null }])
// });

app.post('/access-profile', (req, res) => {
  res.json();
});

app.get('/endpoint', (req, res) => {
  res.json({
    path: '/v1/ashu-test'
  });
});

app.get('/access-profile', (req, res) => {
  res.json({
    apiKey: '62e771721f494a4123780aea'
  });
});

module.exports = app;
