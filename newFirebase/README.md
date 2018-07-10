# Project Title
firebase client for scriptr platform

## Current implemented modules 

Real Time Database

# Getting started
```
var fbModule = require('./newFirebase/Firebase');

var fb=new fbModule.Firebase();
var dbMngr=fb.getDatabaseManager();
var myDb=dbMngr.db("dbName");
var doc=myDb.doc("path.to.document");//the dot represents a level in the json tree

var x=doc.get();
```
# Configuration
```
//The Project Info ,not used in current version
const project={
    name:"Project Name",//not used for now but it will help you distinguish your apps
    type: "service_account",//not used for now
  	project_id: "projectID"//your project id in firepase
};

const access_token="YourToken";

//The database needed data to build the data Uris
const database={
    deafultDatabase:"deafultDB",
    endPointPrefix:"https://",
    endPointSuffix:".firebaseio.com"
    
};

//errors list dont modify
const errorCodeList = {
    "missingParameter" : "MISSING_PARAMETER",
    "invalidAction": "INVALID_ACTION",
    "notFound": "ENTITY_NOT_FOUND"
};
```

## Document Operations
### 1- get()
return the current value of the docment
```
var x= doc.get();
```

### 2- post()
representation for firebase post api
```
var x= doc.post(
{
	data:"data"//your data object or primitive
}
);
```
### 3- put()
representation for firebase put api
```
var x= doc.put(
{
	data:"data"//your data object or primitive
}
);
```
### 4- patch()
representation for firebase post api
```
var x= doc.patch(
{
	data:"data"//your data object or primitive
}
);
```

### 5- delete()
representation for firebase delete api
```
var x= doc.delete();
```
### 6- inner(path);
return Document object to inner the current the path can be empty only if the current document path is not empty
```
var innerDoc=doc.inner("inner");
```

### 7- enable secure write mode
this will only make changes to the original value at the doc path only if no one else changed it
you must call get after enable the secure mode
```
doc.secureWrite(true);
var x=doc.get();
//changes on x
doc.post(x);
doc.secureWrite(false);
```
### 8- enable no write print mode
this will make the api calls to return only empty response to lower the network traffic
helpful when posting huge data amount

equal to print=silent at Firebase

```
doc.noWritePrint(true);
var x=doc.get();

doc.post(x);
doc.noWritePrint(false);
```

### 9-quering data
as the firebase model you can call an orderby query 


```
var q=doc.query("value");
q.equalTo(5);
var obj= doc.get(q);

```
you can use also  startAt, endAt, limitToFirst, limitToLast 
see the firebase docs for more info how the data will be filtered

## Database methods 
1-doc(path)
return document object 
if path not passed it will return the root object
```
var dbMngr=fb.getDatabaseManager();
var myDb=dbMngr.db("db");
var  doc=myDb.doc("path.to.obj");
```
### 2-getRules()
return document object represents the database rules
you can call all the document methods on it
### 3-getSettings()
return document object represents the database settings
you can call all the document methods on it

#### More info

see the Firebase documentation
* [Reference](https://firebase.google.com/docs/reference/rest/database/)
* [Tutorial](https://firebase.google.com/docs/database/rest/start)

