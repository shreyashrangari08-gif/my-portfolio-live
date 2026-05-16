const username = 'shreyashrangari08-gif';

async function getRepos() {
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        const repos = await response.json();
        const projectGrid = document.querySelector('.project-grid');
        projectGrid.innerHTML = ''; 

        repos.forEach(repo => {
            if(!repo.fork) { 
                const card = `
                    <div class="project-card">
                        <h3>${repo.name}</h3>
                        <p>${repo.description || 'No description available'}</p>
                        <a href="${repo.html_url}" target="_blank" style="color: #007bff; text-decoration: none; font-weight: bold;">View Repo →</a>
                    </div>
                `;
                projectGrid.innerHTML += card;
            }
        });
    } catch (error) {
        console.error("Error fetching repos:", error);
    }
}

getRepos();
