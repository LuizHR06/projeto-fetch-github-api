const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `
            <div class="info">
                <img src="${user.avatarUrl}" alt="foto de perfil do usuario" />
                <div class="data">
                    <h1>${user.name ?? 'Não possui nome cadastrado'}</h1>
                    <p>${user.bio ?? 'Não possui bio cadastrada'}</p>
                    <div class="follows">
                        <p>Seguidores: ${user.followers}</p>
                        <p>Seguindo ${user.following}</p>
                    </div>
                </div>
            </div>
            `

        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += 
            `<li>
                <a href="${repo.html_url}" target="_blank">
                    <p>${repo.name}</p>
                    <ul class="repo-info">
                        <li>🍴${repo.forks_count}</li>
                        <li>⭐${repo.stargazers_count}</li>
                        <li>👀${repo.watchers_count}</li>
                        <li>👨‍💻${repo.language ?? 'Não encontrado'}</li>
                    </ul>
                </a> 
            </li>`
        )

       if(user.repositories.length > 0) {
            this.userProfile.innerHTML += 
            `<div class="repositories section">
                <h2>Repositórios</h2>
                <ul>${repositoriesItens}</ul>
            </div>`
        }
        
        let eventsItens = ''
        user.events.forEach(event => {
            if (event.type === 'PushEvent'){
                eventsItens += `<li><span>${event.repo.name}:</span> ${event.payload.commits[0].message}</li>`
            } else if (event.type === 'CreateEvent'){
                eventsItens += `<li><span>${event.repo.name}:</span> sem descrição</li>`
            }
        })

        if(user.events.length > 0) {
            this.userProfile.innerHTML += 
            `<div class="events section">
                <h2>Eventos</h2>
                <ul>${eventsItens}</ul>
            </div>`
        }
    },
    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuario não encontrado</h3>"
    }
}

export { screen }