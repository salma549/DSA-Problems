const axios = require('axios');


async function Fetch(){

    try{

        const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')

      let AllData = data.map((user)=>({
            id : user.id,
            name : user.name,
            email : user.email
        }));

        console.log(AllData)

    }catch(error){
        console.log('Error fetching URL',error)
    }

}

Fetch()