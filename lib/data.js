import got from 'got';

const productURL = "https://dev-wordpress-with-sql-and-php.pantheonsite.io/wp-json/twentytwentyone-child/v1/products/";
const contactURL = "https://dev-wordpress-with-sql-and-php.pantheonsite.io/wp-json/twentytwentyone-child/v1/contacts/";
const lessonURL = "https://dev-wordpress-with-sql-and-php.pantheonsite.io/wp-json/twentytwentyone-child/v1/lessons/";


//send back array of IDS as object to feed into get static paths 
export async function getPeopleIds(){

    //retrieve the data
    //load json content via got 

    let jsonPeopleData;
    try{
        jsonPeopleData = await got(productURL);
        //console.log(jsonPeopleData.body);
    } catch(error){
        jsonPeopleData.body = [];
        //console.log(error);
    }
    
    // console.log("jsonPeopleData");
    // console.log(jsonPeopleData);

    //parse data into JS object 
    //const peopleObject = JSON.parse(jsonPeopleData);
    const peopleObject = JSON.parse(jsonPeopleData.body);
    //console.log("peopleObject");
    //console.log(peopleObject);

    //map through the object and return all the IDs
    //Next.js needs to see things articulated as "params" property
    const returnedData = peopleObject.map(person => {
        return {
            params: {
            id: person.ID.toString() 
            }
        }
    });

    //check to ensure Ids are being properly returned
    console.log("returnedData");
    console.log(returnedData);

    return returnedData; 

}

// personData.forEach(
//     function (item){
//         //reformat string contained in delimted acf fiel data, add curlies and quotes
//         let x = '{"' + item.acf_fields + '"}';
//         //use jsref replace w/ regex
//         x = x.replace(/,/g,'","');
//         x = x.replace(/:/g,'":"');
//         //now that we have a string in valid json format, convert it to to json
//         let y = JSON.parse(x);
//         console.log(y);
//         console.log(y.first_name);
//         item.acf_fields = y;
//     }

// )

//get alphabetized name list with ids, feed to get static props for a dynamic route
export async function getOrderedList(){

    //retrieve the data via got 
    let jsonString;
    try{
        jsonString = await got(productURL);
        console.log(jsonString.body);
    } catch(error){
        jsonString.body = [];
        console.log(error);
    }

    //parse data into JS object 
    const peopleObject = JSON.parse(jsonString.body);


    // console.log("pre-sort");
    // console.log(peopleObject);

    //sort all the people alphabetically 
    peopleObject.sort(function(a, b){
        return a.post_title.localeCompare(b.post_title);
    });

    // console.log("post-sort");
    // console.log(peopleObject);

    //map through the array to pull out just id and name of all people
    return peopleObject.map(person => {
        return {
            id: person.ID.toString(),
            name: person.post_title
        }
    })

}

//asynchronous function used by get static props to get all the data for one person
export async function getData(requestedId){

    //retrieve the data
    let jsonString;
    try{
        jsonString = await got(productURL);
        console.log(jsonString.body);
    } catch(error){
        jsonString.body = [];
        console.log(error);
    }

    //parse data into JS object 
    const peopleObject = JSON.parse(jsonString.body)

    //filter out the other IDs, return an array with string of only the matching id 
    const matchObj = peopleObject.filter( obj => {
            return obj.ID.toString() === requestedId; 
        }
    );
    
    //if the object value exists, pull it out and return it 
    let returnedObj;

    if (matchObj.length > 0) {
        returnedObj = matchObj[0];
    } else {
        returnedObj = {};
    }

    return returnedObj;
}


