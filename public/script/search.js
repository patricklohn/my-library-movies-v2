document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    searchInput.addEventListener('input', async () => {
        const query = searchInput.value.trim(); // Remove espaços desnecessários
        if (query === '') {
            searchResults.innerHTML = ''; // Limpa os resultados se não houver input
            return;
        }

        try {
            // Faz a requisição para o backend
            const response = await fetch(`/movies/search?q=${encodeURIComponent(query)}`);
            const movies = await response.json(); // Recebe os resultados como JSON

            // Limpa os resultados anteriores
            searchResults.innerHTML = '';

            // Adiciona cada filme retornado como item da lista
            movies.forEach(movie => {
                const li = document.createElement('li');
                li.textContent = movie.name; // Exibe apenas o nome do filme
                searchResults.appendChild(li);
            });
        } catch (err) {
            console.error('Erro ao buscar filmes:', err);
        }
    });
});
