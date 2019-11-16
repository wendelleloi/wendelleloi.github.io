import apiGit from './apiFetch'

class repos {
  constructor() {
    this.repositories = [];
    this.list = document.getElementById('repo-fetch');
    this.formEl =  document.getElementById('repo-form');
    this.registrer()
  }

  registrer() {
    window.onload = this.addRepository()
  }

  setLoading(loading = true) {
      if (loading === true) {
        let loadingEl = document.createElement('span');
        loadingEl.appendChild(document.createTextNode('carregando...'));
        loadingEl.setAttribute('id','loading');
  
        this.formEl.appendChild(loadingEl);
      } else {
        document.getElementById('loading').remove();
      }
    }

  async addRepository() {


    this.setLoading();

    try {

      const response = await apiGit.get(`page=2&per_page=${5}`)

      console.log(response.data, 'response')
      
      this.repositories.push(...response.data)

      console.log(this.repositories, 'repositories')

      this.render();
    } catch {
      alert('O repositótio não existe...');

    }
    this.setLoading(false);
  }
  render() {
    this.list.innerHTML = '';

    this.repositories.forEach(repo => {

    console.log(repo.name)  
    let titleEl = document.createElement('strong');
    titleEl.appendChild(document.createTextNode(repo.name));

    let linkEl = document.createElement('a');
    linkEl.setAttribute('target', '_blank');
    linkEl.appendChild(document.createTextNode('acessar'));
    linkEl.setAttribute('href', repo.html_url)

    let listItemEl = document.createElement('li');

    listItemEl.appendChild(titleEl);

    listItemEl.appendChild(linkEl);

    this.list.appendChild(listItemEl);
    });
  }
}
new repos();

export default repos;