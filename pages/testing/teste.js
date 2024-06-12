var allrepos = []
const whitelist = [
    "Spyware-PythonSocket-V1",
    "PortScanner-Tool",
    "Gerador-Senhas-Forte",
    "Mail-Phishing-SMTP",
    "Gerador-Senhas-Forte",
]
const limit = 4

function addRepo(name, url) {
    const subMain = document.querySelector('.sub-main')
    const buttonP = document.createElement('div')
    buttonP.className = 'button-p'
    subMain.appendChild(buttonP)
    const buttonLink = document.createElement('a')
    buttonLink.className = 'button-f'
    buttonLink.href = url
    buttonLink.innerText = name
    buttonP.appendChild(buttonLink)
}

function maisProjetos(e) {
    const repos = document.querySelectorAll('.sub-main a.button-f')
    allrepos.forEach((repo, i) => {
        if (i < repos.length || i >= repos.length + limit) return
        if (whitelist.includes(repo.name)) addRepo(repo.name, repo.html_url)
    })
}

fetch('https://api.github.com/users/AlldDev/repos').then((data) => data.json()).then((repos) => {
    allrepos = repos
    repos.forEach((repo, i) => {
        if (i >= limit) return
        if (whitelist.includes(repo.name)) addRepo(repo.name, repo.html_url)
    })
})
