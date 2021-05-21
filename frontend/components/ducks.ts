export const postQuestions = (numberOfQuestions: number, difficulties?: Array<string>, categories?: Array<string>) => {
    return fetch('http://172.24.112.1:3000/questions', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({numberOfQuestions: numberOfQuestions})
        }
    ).then((response) => {
        return response.json();
    });
}