export const postQuestions = (numberOfQuestions: number, difficulties?: Array<string>, categories?: Array<string>) => {
    return fetch('http://192.168.0.220:3000/questions', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({numberOfQuestions: numberOfQuestions})
        }
    ).then((response) => {
        return response.json();
    });
}