// ponto de entrada da SPA
// aqui ligo o roteador e deixo o menu mobile funcional

import { $, on } from './dom.js';
import { startRouter } from './router.js';

// região raiz onde as telas serão renderizadas
const root = $('#app');
startRouter(root);

// menu hambúrguer no mobile
const toggle = $('#menu-toggle');
// pego o <ul> do nav (com ou sem classe .menu)
const navList = document.querySelector('nav ul.menu') || document.querySelector('nav ul');

if (toggle && navList) {
  on(toggle, 'click', () => {
    navList.classList.toggle('open');
  });
}
