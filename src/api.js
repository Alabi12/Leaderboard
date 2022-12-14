const API_KEY = 'AbRqF6mlxYvxdLfl2NB0';
const API_LINK_REGISTER = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const API_LINK_POST_SCORE = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${API_KEY}/scores`;

export const registerRequests = async (name) => {
  try {
    const response = await fetch(API_LINK_REGISTER, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        name,
      }),
    });

    const result = await response.json();

    return result;
  } catch (err) {
    return 'ERROR!!!';
  }
};

// registerRequests("My app name");

export const postScore = async (user, score) => {
  try {
    const options = {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        user,
        score,
      }),
    };
    const response = await fetch(API_LINK_POST_SCORE, options);

    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
};

// postScore("John Doe", 32);

export const getScores = async () => {
  try {
    const options = {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
    };
    const response = await fetch(API_LINK_POST_SCORE, options);

    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
};
