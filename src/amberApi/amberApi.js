
export const login = ()=>{
    var request = require("request");

    var options = {
        method: 'POST',
        url: 'http://api.amber360.com/api/User/Login',
        headers:
        {
            'content-type': 'application/json'
        },
        body:
        {
            Name: 'Adam123',
            Pass: '123456',
            AppId: '6',
            Language: 'en-us',
            LoginType: 0
        },
        json: true
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(body);
    });

}