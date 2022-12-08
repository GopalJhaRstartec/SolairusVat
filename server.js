//require('oracle-apm');
var express = require('express');
var app = express();
var busboy = require('connect-busboy');
var bodyParser = require("body-parser");
var cors = require('cors')
const request = require('request');
const log = require('log-to-file');


app.use(busboy());
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//  var globalArray = ['50MG', '6HJ','886WB','818TL', '78LK', 'NSSC','EAMT', '64NY', '1WW', '102NY','810TS', '120GA','2HZ', 'T7-ELL',  'T7-NKA', '939SG',  '213XF', '123YS', '123XD', '700BX', '121RS','604PA','721K', '63M','229PP','181PE','811NG', 'CAVU', '158JA', '200MPT', '189SW', '542AP','218RG', '194WF', '191AE','806AS', '682GD', '7-ELL',  '128GA', '505SS','272GX','132SD','445MD','809SMBJ' ]
//  var globalArray =[
//     {"tail":"139CH","period":"Mar-21","cost_center":"3002"},{"tail":"1821U","period":"Mar-21","cost_center":"3003"},{"tail":"1978X","period":"Mar-21","cost_center":"3005"},{"tail":"233EH","period":"Mar-21","cost_center":"3009"},{"tail":"450CR","period":"Mar-21","cost_center":"3015"},{"tail":"468KL","period":"Mar-21","cost_center":"3016"},{"tail":"ELL","period":"Mar-21","cost_center":"3026"},{"tail":"878DB","period":"Mar-21","cost_center":"3030"},{"tail":"GXBB","period":"Mar-21","cost_center":"3033"},{"tail":"278RF","period":"Mar-21","cost_center":"3041"},{"tail":"884WE","period":"Mar-21","cost_center":"3042"},{"tail":"139HC","period":"Mar-21","cost_center":"3044"},{"tail":"THORONDOR","period":"Mar-21","cost_center":"3049"},{"tail":"385FD","period":"Mar-21","cost_center":"3052"},{"tail":"218AL","period":"Mar-21","cost_center":"3055"},{"tail":"580CB","period":"Mar-21","cost_center":"3056"},{"tail":"701RH","period":"Mar-21","cost_center":"3057"},{"tail":"18UD","period":"Mar-21","cost_center":"3061"},{"tail":"198SB","period":"Mar-21","cost_center":"3062"},{"tail":"930EN","period":"Mar-21","cost_center":"3071"},{"tail":"999YY","period":"Mar-21","cost_center":"3074"},{"tail":"131KJ","period":"Mar-21","cost_center":"3078"},{"tail":"579RS","period":"Mar-21","cost_center":"3079"},{"tail":"917HP","period":"Mar-21","cost_center":"3080"},{"tail":"248LX","period":"Mar-21","cost_center":"3081"},{"tail":"701WC","period":"Mar-21","cost_center":"3083"},{"tail":"70FCFITR","period":"Mar-21","cost_center":"3084"},{"tail":"70FC","period":"Mar-21","cost_center":"3087"},{"tail":"898CH","period":"Mar-21","cost_center":"3092"},{"tail":"595B","period":"Mar-21","cost_center":"3093"},{"tail":"560KW","period":"Mar-21","cost_center":"3096"},{"tail":"1969M","period":"Mar-21","cost_center":"3098"},{"tail":"518KA","period":"Mar-21","cost_center":"3099"},{"tail":"1088","period":"Mar-21","cost_center":"3101"},{"tail":"411EC","period":"Mar-21","cost_center":"3103"},{"tail":"411ECFITRII","period":"Mar-21","cost_center":"3104"},{"tail":"888QL","period":"Mar-21","cost_center":"3106"},{"tail":"967TG","period":"Mar-21","cost_center":"3108"},{"tail":"124PS","period":"Mar-21","cost_center":"3112"},{"tail":"228L","period":"Mar-21","cost_center":"3115"},{"tail":"1902P","period":"Mar-21","cost_center":"3119"},{"tail":"305WM","period":"Mar-21","cost_center":"3120"},{"tail":"305WMHA","period":"Mar-21","cost_center":"3120"},{"tail":"815WH","period":"Mar-21","cost_center":"3121"},{"tail":"516MF","period":"Mar-21","cost_center":"3122"},{"tail":"552YM","period":"Mar-21","cost_center":"3126"},{"tail":"715TS","period":"Mar-21","cost_center":"3127"},{"tail":"20HQ","period":"Mar-21","cost_center":"3128"},{"tail":"15N","period":"Mar-21","cost_center":"3129"},{"tail":"NKA","period":"Mar-21","cost_center":"3130"},{"tail":"208VA","period":"Mar-21","cost_center":"3133"},{"tail":"54LA","period":"Mar-21","cost_center":"3134"},{"tail":"793X","period":"Mar-21","cost_center":"3135"},{"tail":"945EJ","period":"Mar-21","cost_center":"3136"},{"tail":"5505T","period":"Mar-21","cost_center":"3141"},{"tail":"944MM","period":"Mar-21","cost_center":"3142"},{"tail":"771L","period":"Mar-21","cost_center":"3145"},{"tail":"415FT","period":"Mar-21","cost_center":"3148"},{"tail":"4096Q","period":"Mar-21","cost_center":"3152"},{"tail":"281EB","period":"Mar-21","cost_center":"3153"},{"tail":"774GT","period":"Mar-21","cost_center":"3154"},{"tail":"903GS","period":"Mar-21","cost_center":"3155"},{"tail":"990PM","period":"Mar-21","cost_center":"3156"},{"tail":"415P","period":"Mar-21","cost_center":"3158"},{"tail":"324FP","period":"Mar-21","cost_center":"3160"},{"tail":"59DB","period":"Mar-21","cost_center":"3161"},{"tail":"673DC","period":"Mar-21","cost_center":"3162"},{"tail":"224WA","period":"Mar-21","cost_center":"3163"},{"tail":"1428N","period":"Mar-21","cost_center":"3164"},{"tail":"128JL","period":"Mar-21","cost_center":"3166"},{"tail":"442LF","period":"Mar-21","cost_center":"3168"},{"tail":"234EU","period":"Mar-21","cost_center":"3171"},{"tail":"968RS","period":"Mar-21","cost_center":"3172"},{"tail":"926JT","period":"Mar-21","cost_center":"3173"},{"tail":"705AK","period":"Mar-21","cost_center":"3174"},{"tail":"886AJ","period":"Mar-21","cost_center":"3177"},{"tail":"711RH","period":"Mar-21","cost_center":"3178"},{"tail":"48EN","period":"Mar-21","cost_center":"3179"},{"tail":"658YM","period":"Mar-21","cost_center":"3180"},{"tail":"265CP","period":"Mar-21","cost_center":"3181"},{"tail":"8SW","period":"Mar-21","cost_center":"3182"},{"tail":"142RM","period":"Mar-21","cost_center":"3185"},{"tail":"767PL","period":"Mar-21","cost_center":"3187"},{"tail":"36EN","period":"Mar-21","cost_center":"3188"},{"tail":"193LS","period":"Mar-21","cost_center":"3189"},{"tail":"67WV","period":"Mar-21","cost_center":"3190"},{"tail":"176MG","period":"Mar-21","cost_center":"3192"},{"tail":"259SB","period":"Mar-21","cost_center":"3194"},{"tail":"600BU","period":"Mar-21","cost_center":"3196"},{"tail":"401VP","period":"Mar-21","cost_center":"4002"},{"tail":"138GL","period":"Mar-21","cost_center":"4003"},{"tail":"401VE","period":"Mar-21","cost_center":"4007"},{"tail":"605JM","period":"Mar-21","cost_center":"4012"},{"tail":"616DC","period":"Mar-21","cost_center":"4013"},{"tail":"802CB","period":"Mar-21","cost_center":"4017"},{"tail":"814CP","period":"Mar-21","cost_center":"4018"},{"tail":"900VL","period":"Mar-21","cost_center":"4020"},{"tail":"901MM","period":"Mar-21","cost_center":"4021"},{"tail":"926SS","period":"Mar-21","cost_center":"4024"},{"tail":"604MM","period":"Mar-21","cost_center":"4027"},{"tail":"615MS","period":"Mar-21","cost_center":"4028"},{"tail":"78LX","period":"Mar-21","cost_center":"4029"},{"tail":"238MH","period":"Mar-21","cost_center":"4036"},{"tail":"283DM","period":"Mar-21","cost_center":"4038"},{"tail":"MSFR","period":"Mar-21","cost_center":"4039"},{"tail":"926EC","period":"Mar-21","cost_center":"4042"},{"tail":"910AF","period":"Mar-21","cost_center":"4047"},{"tail":"304PS","period":"Mar-21","cost_center":"4049"},{"tail":"865R","period":"Mar-21","cost_center":"4050"},{"tail":"605DS","period":"Mar-21","cost_center":"4054"},{"tail":"603L","period":"Mar-21","cost_center":"4055"},{"tail":"822WW","period":"Mar-21","cost_center":"4056"},{"tail":"40ZA","period":"Mar-21","cost_center":"4058"},{"tail":"809SM","period":"Mar-21","cost_center":"4060"},{"tail":"1878E","period":"Mar-21","cost_center":"4061"},{"tail":"536MR","period":"Mar-21","cost_center":"4062"},{"tail":"527P","period":"Mar-21","cost_center":"4065"},{"tail":"321AK","period":"Mar-21","cost_center":"4066"},{"tail":"989RJ","period":"Mar-21","cost_center":"4068"},{"tail":"1013","period":"Mar-21","cost_center":"4069"},{"tail":"989DM","period":"Mar-21","cost_center":"4070"},{"tail":"372G","period":"Mar-21","cost_center":"4071"},{"tail":"207R","period":"Mar-21","cost_center":"4073"},{"tail":"313DS","period":"Mar-21","cost_center":"4074"},{"tail":"712LW","period":"Mar-21","cost_center":"4076"},{"tail":"569DC","period":"Mar-21","cost_center":"4077"},{"tail":"103SW","period":"Mar-21","cost_center":"4078"},{"tail":"595MP","period":"Mar-21","cost_center":"4081"},{"tail":"348RS","period":"Mar-21","cost_center":"4082"},{"tail":"236PS","period":"Mar-21","cost_center":"4083"},{"tail":"307LC","period":"Mar-21","cost_center":"4087"},{"tail":"715GB","period":"Mar-21","cost_center":"4090"},{"tail":"605TK","period":"Mar-21","cost_center":"4091"},{"tail":"515KA","period":"Mar-21","cost_center":"4092"},{"tail":"900SW","period":"Mar-21","cost_center":"4093"},{"tail":"888ZF","period":"Mar-21","cost_center":"4094"},{"tail":"89095","period":"Mar-21","cost_center":"4095"},{"tail":"108DB","period":"Mar-21","cost_center":"4096"},{"tail":"814RR","period":"Mar-21","cost_center":"4098"},{"tail":"39871","period":"Mar-21","cost_center":"4100"},{"tail":"88D","period":"Mar-21","cost_center":"4103"},{"tail":"486WM","period":"Mar-21","cost_center":"4104"},{"tail":"247FR","period":"Mar-21","cost_center":"4105"},{"tail":"989JR","period":"Mar-21","cost_center":"4106"},{"tail":"562RT","period":"Mar-21","cost_center":"4107"},{"tail":"575AG","period":"Mar-21","cost_center":"4111"},{"tail":"963RS","period":"Mar-21","cost_center":"4116"},{"tail":"474D","period":"Mar-21","cost_center":"4119"},{"tail":"910JG","period":"Mar-21","cost_center":"4122"},{"tail":"415B","period":"Mar-21","cost_center":"4123"},{"tail":"857HA","period":"Mar-21","cost_center":"4124"},{"tail":"7402","period":"Mar-21","cost_center":"4125"},{"tail":"510AN","period":"Mar-21","cost_center":"4126"},{"tail":"507GD","period":"Mar-21","cost_center":"4127"},{"tail":"801KF","period":"Mar-21","cost_center":"4128"},{"tail":"604AF","period":"Mar-21","cost_center":"4129"},{"tail":"5GG","period":"Mar-21","cost_center":"4130"},{"tail":"710FT","period":"Mar-21","cost_center":"4131"},{"tail":"553GS","period":"Mar-21","cost_center":"4132"},{"tail":"78KN","period":"Mar-21","cost_center":"4133"},{"tail":"786AH","period":"Mar-21","cost_center":"6013"}];

 var globalArray = [
 {"tail":"247FR","period":"Mar-21","cost_center":"4105"},
 {"tail":"989JR","period":"Mar-21","cost_center":"4106"},
 {"tail":"313DS","period":"Mar-21","cost_center":"4074"},
 {"tail":"307LC","period":"Mar-21","cost_center":"4087"},
 {"tail":"401VP","period":"Mar-21","cost_center":"4002"},
 {"tail":"238MH","period":"Mar-21","cost_center":"4036"},
 {"tail":"139HC","period":"Mar-21","cost_center":"3044"}]
    
//SaveReciepts
app.get('/savereciepts', async function (req, res) {
    try {
        //  let tailNumbers = await getNullTailNumber();
        // let result = tailNumberMapping(globalArray);
        res.send(200, {"Success":globalArray});
        for (var i in globalArray) {
            console.log("Tail Save Reciepts", i);
            var temp = {
                "Period_Name": globalArray[i].period,
                "Cost_Center": globalArray[i].cost_center,
                "Project_Name": globalArray[i].tail + "-OWNER"
            }
            let resp = await ICSintergrationCall(temp);
        }
    } catch (error) {
        console.log("Error in API", error);
        res.send(500, { "error": error });
    }
});


let tailNumberMapping = ((tailNumbers) => {
    try {
        // var monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        // var yearArr = ['-18', '-19', '-20'];
        var monthArr = ['Jan', 'Feb'];
        var yearArr = ['-21']
        var temp = [];
        for (var j in yearArr) {
            setData(yearArr[j]);
        }
        function setData(yearArr) {
            for (var i in monthArr) {
                temp.push(monthArr[i] + yearArr)
            }
        }
        var icsArray = [];
        for (var i in globalArray) {
            for (var j in temp) {
                icsArray.push({
                    "tail": globalArray[i],
                    "period": temp[j]
                })
            }
        }
        return icsArray;
    } catch (error) {
        log(`Error:Server.js:${error}`, 'error.log');
        throw error
    }
})

let ICSintergrationCall = (async (result) => {

    return new Promise(function (resolve, reject) {
        request.post({
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Basic c29sYWlydXNwb3J0YWxAc29sYWlydXMuYWVybzpTb2xhIXJ1c0EzcjA='
            },
            url: 'https://solairusoicprod-idmptmybqrv6-ia.integration.ocp.oraclecloud.com:443/ic/api/integration/v1/flows/rest/SAVE_RECEIP_IN_DOCS_CLONE/2.0/receipts',
            body: result,
            json: true
        }, function (error, response, body) {
            if (error) {
                log(`Error:OIC:${error}`, 'error.log');
                resolve(error)
            }
            var OicData = JSON.stringify(body)
            log(`Info:${JSON.stringify(result)}:OIC Calling Response:${OicData}`, 'OIC.log');
            resolve(body)
        });
    });
})

let getNullTailNumber = (async () => {
    return new Promise(function (resolve, reject) {
        const options = {
            url: 'https://clientportal.solairus.aero/ords/solairusprod/rest/getNullCostCenter',
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Accept-Charset': 'utf-8',
                'Authorization' : 'Bearer fbt8Zs_fc97vMo1lIFt24g'
            },
            json: true
        };
        request(options, (err, res, body) => {
            try {
                if (err) {
                    log(`Error:${err}`, 'error.log');
                    reject(console.log(err));
                }
                var data = JSON.stringify(body.items)
                log(`Info:DBCS:${data}`);
                resolve({ "response": body.items })

            } catch (error) {
                console.log("Error", error)
            }
        });
    });
});



/** Function for deleting the Data from the Tails Table
 * 
 */
app.get('/purgeDataFromTails', async function (req, res) {
    try {
        res.send(200, {"Success":globalArray});
        for(var i in globalArray){
            let tailNumbersDeleteResponse = await deleteTailNumberValues(globalArray[i]);
        }
    } catch (error) {
        console.log("Error in API", error);
        res.send(500, { "error": error });
    }
});

let deleteTailNumberValues = (async (project_name) => {
    return new Promise(function (resolve, reject) {
        console.log("Insde the delete Tail Number",project_name);
        const options = {
            url: 'http://150.136.33.246:8080/ords/solairusprod/rest/deleteNullCostCenterTail',
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Accept-Charset': 'utf-8',
                'Authorization' : 'Bearer fbt8Zs_fc97vMo1lIFt24g'
            },
            body: {
                "project_name" : `${project_name}`
            },
            json: true
        };
        request(options, (err, res, body) => {
            try {
                if (err) {
                    log(`Error:${err}`, 'error.log');
                    reject(console.log(err));
                }
                // var data = JSON.stringify(body.items)
                log(`Info:DBCS DELETE:${body}`);
                resolve({ "response": "Data Deleted" })

            } catch (error) {
                console.log("Error", error)
            }
        });
    });
});

/** Function for deleting the Data from the Docs
 * 
 */
app.get('/purgeFolderFromDocs', async function (req, res) {
    try {
         let tailNumberParentFolderID = await getNullTailNumber();
        var folderID = [];
        (tailNumberParentFolderID.response).forEach(item => {
            folderID.push(item.parent_folder_id);
        });
        res.send(200, {"Success":"Deleted Successfully","FolderID": folderID})
        // await DOCSintergrationCall("FB6A005ED93FFB0F87F8152F2FA21AFE94E94BE926F4");
        for(var i in folderID){
            let resp = await DOCSintergrationCall(folderID[i]);
        }
    } catch (error) {
        console.log("Error in API", error);
        res.send(500, { "error": error });
    }
});


let DOCSintergrationCall = (async (folderID) => {

    return new Promise(function (resolve, reject) {
        request.delete({
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Basic c29sYWlydXNwb3J0YWxAc29sYWlydXMuYWVybzpTb2xhIXJ1c0EzcjA='
            },
            url: 'https://solairuscecprod-solairusgen2.cec.ocp.oraclecloud.com/documents/api/1.2/folders/'+ folderID,
            json: true
        }, function (error, response, body) {
            if (error) {
                log(`Error:DOCS:${error}`, 'error.log');
                resolve(error)
            }
            var DOCSData = JSON.stringify(body)
            log(`Info:${folderID}:DOCS Calling Response:${DOCSData}`, 'Docs.log');
            resolve(body)
        });
    });
});

/** Function for Copying the Attachments for VAT IT Data from the Docs
 * 
 */
app.get('/copyFolderInDocs', async function (req, res) {
    try {
         let DocsFolderID = await getDocsFolderID();
         console.log('DocsFolderID', DocsFolderID);
        var folderID = [];
        (DocsFolderID.response).forEach(item => {
            folderID.push(item.cecs_docid);
        });
        res.send(200, {"Success":"Request Submitted Successfully","FolderID": folderID})
        // await DOCSintergrationCall("FB6A005ED93FFB0F87F8152F2FA21AFE94E94BE926F4");
        //528-587
        //
        // let resp = await copyDocsintergrationCall(folderID[0]);
        // for(var i=587;i<folderID.length;i++){
            
        //     let resp = await copyDocsintergrationCall(folderID[i]);
        // }
        for(var i in folderID){
            console.log(i +  " : folderfolderID :" + folderID[i]);
            let resp = await copyDocsintergrationCall(folderID[i]);
        }
    } catch (error) {
        console.log("Error in API", error);
        res.send(500, { "error": error });
    }
});


var devToken = "Bearer Lz_tmTQS3lQmSDvWFu73lw";
var prodToken = "Bearer W-fQHdKAFIsw_DV733g_LA"
var devURL = "https://clientportal-dev.solairus.aero/ords/solairusdev/rest/getDocIDdetails";
var prodURL = "https://clientportal.solairus.aero/ords/solairusprod/rest/getDocIDdetails";
let getDocsFolderID = (async () => {
    return new Promise(function (resolve, reject) {
        const options = {
            url: devURL,
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Accept-Charset': 'utf-8',
                'Authorization' : devToken
            },
            json: true
        };
        request(options, (err, res, body) => {
            try {
                if (err) {
                    log(`Error:${err}`, 'error.log');
                    reject(console.log(err));
                }
                var data = JSON.stringify(body.items)
                log(`Info:DBCS:${data}`,'default.log');
                resolve({ "response": body.items })

            } catch (error) {
                console.log("Error", error)
            }
        });
    });
});
var prodFolderID = "F9057DD321E1D44168ADB36920035C94B9B5D994FE2F"; // For Quater 3
var devFolderID = "F8577FA8BB59885B93B7089401F7BE6CE7054B5FD74F";
let copyDocsintergrationCall = (async (folderID) => {
    return new Promise(function (resolve, reject) {
        var temp = {
            "destinationID": devFolderID,
        }
        
        request.post({
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Basic c29sYWlydXNwb3J0YWxAc29sYWlydXMuYWVybzpTb2xhIXJ1c0EzcjA='
            },
            url: 'https://solairuscecprod-solairusgen2.cec.ocp.oraclecloud.com/documents/api/1.2/files/'+ folderID + '/copy',
            body: temp,
            json: true
        }, function (error, response, body) {
            if (error) {
                log(`Error:${folderID}:OIC:${error}`, 'error.log');
                resolve(error)
            }
            var DOCSData = JSON.stringify(body)
            log(`Info:${folderID}:DOCS Calling Response:${DOCSData}`, 'Docs.log');
            resolve(body)
        });
    });
});


app.listen(8080);
