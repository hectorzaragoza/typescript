var axios = require('axios');
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios.get(url).then(function (response) {
    console.log("response: ", response.data);
});
