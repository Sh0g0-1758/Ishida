const options : object = {
    method: 'GET',
    url: 'https://programming-memes-images.p.rapidapi.com/v1/memes',
    headers: {
      'X-RapidAPI-Key': '9154fd5d02msh3d060223aeab1aap18e6a4jsn9b2d12a9e1c1',
      'X-RapidAPI-Host': 'programming-memes-images.p.rapidapi.com'
    }
};
  
const options2 : object = {
      method: 'GET',
      url: 'https://dad-jokes.p.rapidapi.com/random/joke',
      headers: {
        'X-RapidAPI-Key': '9154fd5d02msh3d060223aeab1aap18e6a4jsn9b2d12a9e1c1',
        'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
      }
};

module.exports = {options,options2};