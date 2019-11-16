import axios from 'axios';

const apiGit = axios.create({
  baseURL: 'https://api.github.com/users/wendelleloi/repos?',
});

export default apiGit;
