const IP: string = "192.168.0.220";

export const postQuestions = (numberOfQuestions: number, difficulties?: Array<string>, categories?: Array<string>) => {
    return fetch(`http://${IP}:3000/questions`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({numberOfQuestions: numberOfQuestions})
        }
    ).then((response) => {
        return response.json();
    });
}

export const getCategories = () => {
    return fetch(`http://${IP}:3000/categories`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        }
    ).then((response) => {
        return response.json();
    });
}