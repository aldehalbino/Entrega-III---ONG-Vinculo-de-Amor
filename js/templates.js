// templates das telas da SPA (HTML gerado por JS)

export const Home = () => `
  <section class="card">
    <h2>Sobre Nós</h2>
    <p><strong>Vínculo de Amor</strong> atua no resgate, reabilitação e adoção de animais domésticos.</p>
    <div class="image-gallery mt-16">
      <img src="imagens/antes-depois_irene.png" alt="Antes e Depois Irene" width="250">
      <img src="imagens/antes-depois_simon.jpg" alt="Antes e Depois Simon" width="300">
      <img src="imagens/feira-adocao.jpg" alt="Feira de Adoção" width="350">
    </div>
  </section>

  <section class="grid-3">
    <div class="card">
      <h2>Missão</h2>
      <p>Resgatar e reintegrar animais com adoção responsável.</p>
    </div>
    <div class="card">
      <h2>Visão</h2>
      <p>Ser referência nacional em bem-estar animal.</p>
    </div>
    <div class="card">
      <h2>Valores</h2>
      <ul>
        <li><strong>União:</strong> Elo humano–animal.</li>
        <li><strong>Compromisso:</strong> Cuidado contínuo.</li>
        <li><strong>Inclusão:</strong> Toda vida importa.</li>
        <li><strong>Excelência:</strong> Recuperação integral.</li>
      </ul>
    </div>
  </section>
`;

export const Projetos = () => `
  <section>
    <h2>Nossos Projetos</h2>
    <div class="grid-3">
      <article class="card">
        <h3>Resgate</h3>
        <p>Ações emergenciais para salvar animais em risco.</p>
        <a class="btn" href="#/projetos/resgate">Ver mais</a>
      </article>
      <article class="card">
        <h3>Reabilitar</h3>
        <p>Tratamento veterinário e suporte emocional.</p>
        <a class="btn" href="#/projetos/reabilitacao">Ver mais</a>
      </article>
      <article class="card">
        <h3>Novo Lar</h3>
        <p>Feiras e campanhas de adoção responsável.</p>
        <a class="btn" href="#/projetos/novo-lar">Ver mais</a>
      </article>
    </div>

    <article class="card" style="margin-top:24px">
      <h3>Educação e Conscientização</h3>
      <p>Palestras e ações educativas.</p>
      <a class="btn" href="#/projetos/educacao">Ver mais</a>
    </article>
  </section>
`;

export const Resgate = () => `
  <section class="card">
    <h2>Projeto Resgate</h2>
    <p>Atuação emergencial com apoio de voluntários e clínicas.</p>
    <div class="image-gallery">
      <img src="imagens/resgate_projetos.jpg" alt="Resgate" width="300">
      <img src="imagens/resgates-2_projetos.jpeg" alt="Animal resgatado" width="300">
    </div>
  </section>
`;

export const Reabilitacao = () => `
  <section class="card">
    <h2>Projeto Reabilitar</h2>
    <p>Tratamentos, cirurgias, vacinas e reabilitação comportamental.</p>
    <div class="image-gallery">
      <img src="imagens/reabilitar-projetos.jpg" alt="Veterinário" width="300">
      <img src="imagens/reabilitar-2_projetos.jpg" alt="Tratamento" width="300">
    </div>
  </section>
`;

export const NovoLar = () => `
  <section class="card">
    <h2>Projeto Novo Lar</h2>
    <p>Conexão entre animais prontos e famílias responsáveis.</p>
    <div class="image-gallery">
      <img src="imagens/lar_temporario-projetos.jpg" alt="Feira" width="300">
      <img src="imagens/lar-temporario2_projetos.jpg" alt="Novo lar" width="300">
    </div>
  </section>
`;

export const Educacao = () => `
  <section class="card">
    <h2>Educação & Conscientização</h2>
    <p>Campanhas educativas em escolas e comunidades.</p>
    <div class="image-gallery">
      <img src="imagens/educacao_projetos.jpeg" alt="Palestra" width="300">
      <img src="imagens/conscientizacao_projetos.webp" alt="Ação educativa" width="300">
    </div>
  </section>
`;

export const Cadastro = () => `
  <section class="card">
    <h2>Cadastro de Voluntário</h2>
    <form id="cadastroForm" novalidate>
      <fieldset>
        <legend>Informações Pessoais</legend>

        <label for="nome">Nome Completo</label>
        <input type="text" id="nome" name="nome" required>
        <div class="field-error" id="err-nome"></div>

        <label for="cpf">CPF</label>
        <input type="text" id="cpf" name="cpf" placeholder="000.000.000-00" required>
        <div class="field-error" id="err-cpf"></div>

        <label for="email">Email</label>
        <input type="email" id="email" name="email" required>
        <div class="field-error" id="err-email"></div>

        <label for="telefone">Telefone/Celular</label>
        <input type="tel" id="telefone" name="telefone" placeholder="(00) 00000-0000" required>
        <div class="field-error" id="err-telefone"></div>

        <label for="nascimento">Data de Nascimento</label>
        <input type="date" id="nascimento" name="nascimento" required>
        <div class="field-error" id="err-nascimento"></div>

        <label for="cep">CEP</label>
        <input type="text" id="cep" name="cep" placeholder="00000-000" required>
        <div class="field-error" id="err-cep"></div>

        <button type="submit" class="btn">Enviar</button>
      </fieldset>
    </form>
  </section>
`;
