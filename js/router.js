// roteador baseado no hash da URL (#/rota)
import { Home, Projetos, Resgate, Reabilitacao, NovoLar, Educacao, Cadastro } from './templates.js';
import { render, setActiveNav } from './dom.js';
import { mountCadastro } from './screens/cadastro.js';

const routes = {
  '/inicio': Home,
  '/projetos': Projetos,
  '/projetos/resgate': Resgate,
  '/projetos/reabilitacao': Reabilitacao,
  '/projetos/novo-lar': NovoLar,
  '/projetos/educacao': Educacao,
  '/cadastro': Cadastro,
};

export function getPath() {
  const h = location.hash.replace('#', '');
  return h || '/inicio';
}

export function startRouter(root) {
  function onRoute() {
    const path = getPath();
    const View = routes[path] || Home;
    render(root, View());
    setActiveNav(`#${path}`);

    // hooks pós-render de telas específicas
    if (path === '/cadastro') mountCadastro();
  }

  window.addEventListener('hashchange', onRoute);
  onRoute(); // primeira carga
}
