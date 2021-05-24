const IP: string = "172.24.112.1";
//const IP: string = "192.168.0.220";

export const postQuestions = (numberOfQuestions: number, difficulties?: Array<string>, categories?: Array<string>) => {
    return fetch(`http://${IP}:3000/questions`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({numberOfQuestions: numberOfQuestions, difficulties: difficulties, categories: categories})
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

export const getHighscores = () => {
    return fetch(`http://${IP}:3000/highscore`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        }
    ).then((response) => {
        return response.json();
    });
}

export const postHighscore = (username: string, score: string, date: string) => {
    return fetch(`http://${IP}:3000/highscore`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username: username, score: score, date: date})
        }
    ).then((response) => {
        return response.json();
    });
}