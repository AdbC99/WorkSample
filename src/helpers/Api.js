const SALARY_URL = 'https://postman-echo.com/post'

const Api = {
    'salary': async (body) => {
        console.log("Doing POST: " + SALARY_URL);
    
        fetch(SALARY_URL + "bookDate", {
            method:'POST',
            body:JSON.stringify(body)
        }).then((resp)=>{
            return resp.json();
        })
    }
}

export default Api;