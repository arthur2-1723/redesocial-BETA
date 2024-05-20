const postInput = document.getElementById('post-input');
const postBtn = document.getElementById('post-btn');
const postsContainer = document.getElementById('posts-container');

// Simulação de banco de dados (array de objetos)
let posts = [];

// Função para criar um novo post
function createPost(content) {
    const postElement = document.createElement('div');
    postElement.classList.add('post');

    const postContent = document.createElement('p');
    postContent.classList.add('post-content');
    postContent.textContent = content;

    postElement.appendChild(postContent);
    postsContainer.appendChild(postElement);

    posts.push({ content });
}

// Evento de clique no botão "Publicar"
postBtn.addEventListener('click', () => {
    const postContent = postInput.value.trim();
    if (postContent) {
        createPost(postContent);
        postInput.value = ''; // Limpar o campo de input
    }
});

// Exibir posts iniciais (se houver)
// (Adicione sua lógica para carregar posts de um banco de dados real aqui)
if (posts.length > 0) {
    posts.forEach(post => createPost(post.content));
}
