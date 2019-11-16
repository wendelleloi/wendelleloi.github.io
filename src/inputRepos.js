import api from './api'

class app {
  constructor() {
    this.repositories = [];

    this.formEl =  document.getElementById('repo-form');
    this.listEl = document.getElementById('repo-list');
    this.inputEl = document.querySelector('input[name=repository]')

    this.registrerHandlers();

  }

  registrerHandlers() {
    this.formEl.onsubmit = (event) => this.addRepository(event);
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

  async addRepository(event) {
    event.preventDefault();

    const repoInput = this.inputEl.value;

    if (repoInput.length === 0) {
      // this.inputEl.setAttribute('disabled','true');
      return
    }


    this.setLoading();

    try {

      const response = await api.get(`wendelleloi/${repoInput}`)
      const { name, description, html_url, owner:{avatar_url}} = response.data
      
      this.repositories.push({
        name,
        description,
        avatar_url,
        html_url
      })
  
     this.inputEl.value = ''

      this.render();
    } catch {
      alert('O repositótio não existe...');
      this.inputEl.value = '';
    }
    this.setLoading(false);
  }
  render() {
    this.listEl.innerHTML = '';

    this.repositories.forEach(repo => {
      let imgEl = document.createElement('img');
      imgEl.setAttribute('src', repo.avatar_url);
      
      let titleEl = document.createElement('strong');
      titleEl.appendChild(document.createTextNode(repo.name));

      let descriptionEl = document.createElement( 'p');
      descriptionEl.appendChild(document.createTextNode(repo.description));

      let linkEl = document.createElement('a');
      linkEl.setAttribute('target', '_blank');
      linkEl.appendChild(document.createTextNode('acessar'));
      linkEl.setAttribute('href', repo.html_url)

      let listItemEl = document.createElement('li');
      listItemEl.appendChild(imgEl);
      listItemEl.appendChild(titleEl);
      listItemEl.appendChild(descriptionEl);
      listItemEl.appendChild(linkEl);

      this.listEl.appendChild(listItemEl);
    });
  }
}

new app(); 

export default app;