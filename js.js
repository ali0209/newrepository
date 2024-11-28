let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';








fetch(url).then(response => response.json()).then(com =>console.log(com))