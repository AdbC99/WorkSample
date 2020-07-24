// The API provided in the test specification didn't work so the following has been used as a substitute
const SALARY_URL = 'https://reqres.in/api/users'

const Api = {
    'salary': async (body) => {
        console.log("Doing POST: " + SALARY_URL);
    
        fetch(SALARY_URL, {
            method:'POST',
            body:JSON.stringify(body)
        }).then((resp)=>{
            return resp.json();
        })
    }
}

export default Api;