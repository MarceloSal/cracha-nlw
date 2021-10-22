const linksSocialMedia = {
    
    youtube: 'channel/UCfYhSLxm76zAzSb3JLF8DuA',
    facebook:  'marcelo.salmeron.37',
    instagram:  'salmeron.m.marcelo',
    twitter:  'MarceloSalmero6',
    github: 'MarceloSal',
}

function changeSocialMediaLinks() {
    for (let li of socialLinks.children){
        const social = li.getAttribute('class')
        li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
        
                      
        
    }
}

changeSocialMediaLinks()

function getGitHubProfilesInfos() {
    const url = `https://api.github.com/users/${linksSocialMedia.github}`

    fetch(url).
    then( response => response.json() ).then(data => {
        userName.textContent = data.name 
        userBio.textContent = data.bio
        userLink.href = data.html_url
        userImage.src = data.avatar_url
        userLogin.textContent = data.login
    })
}

getGitHubProfilesInfos()
