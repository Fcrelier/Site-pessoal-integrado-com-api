const githubtoken = "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"
const githubapiurl = "https://api.github.com" 
const username = "Fcrelier" 

buildProfileInfo()
buildReposCards()
buildColegas()
buildCarouselItems()


// Popular o HTML
async function buildProfileInfo(){
    const profileInfo = await getGithubProfile()
    document.getElementById("profile_name").innerHTML = profileInfo.name
    document.getElementById("profile_bio").innerHTML = profileInfo.bio
    document.getElementById("profile_image").src = profileInfo.avatar_url
    document.getElementById("profile_githuburl").href = profileInfo.html_url
    document.getElementById("profile_x").href = `https://twitter.com/${profileInfo.twitter_username}`
    document.getElementById("profile_githuburl").href = profileInfo.html_url
    document.getElementById("profile_location").innerHTML = profileInfo.location
}

async function buildReposCards(){
    const firstRepo = await getGithubRepoByName("TrabalhoDiwsite");
    document.getElementById("repo_card_1_title").innerHTML = firstRepo.name
    document.getElementById("repo_card_1_description").innerHTML = firstRepo.description
    document.getElementById("repo_card_1_language").innerHTML = firstRepo.language
    document.getElementById("repo_card_1_stars").innerHTML = firstRepo.stargazers_count

    const secondRepo = await getGithubRepoByName("TrabalhoATPCalculadora");
    document.getElementById("repo_card_2_title").innerHTML = secondRepo.name
    document.getElementById("repo_card_2_description").innerHTML = secondRepo.description
    document.getElementById("repo_card_2_language").innerHTML = secondRepo.language
    document.getElementById("repo_card_2_stars").innerHTML = secondRepo.stargazers_count

    const thirdRepo = await getGithubRepoByName("site-pessoal-DIW");
    document.getElementById("repo_card_3_title").innerHTML = thirdRepo.name
    document.getElementById("repo_card_3_description").innerHTML = thirdRepo.description
    document.getElementById("repo_card_3_language").innerHTML = thirdRepo.language
    document.getElementById("repo_card_3_stars").innerHTML = thirdRepo.stargazers_count
}

async function buildColegas(){
    const data = await getColegas();

    document.getElementById("colega1_img").src = data[0].imagem;
    document.getElementById("colega1_nome").href = data[0].github;
    document.getElementById("colega1_nome").innerHTML = data[0].titulo;
    document.getElementById("colega1_desc").innerHTML = data[0].descricao;

    document.getElementById("colega2_img").src = data[1].imagem;
    document.getElementById("colega2_nome").href = data[1].github;
    document.getElementById("colega2_nome").innerHTML = data[1].titulo;
    document.getElementById("colega2_desc").innerHTML = data[1].descricao;

    document.getElementById("colega3_img").src = data[2].imagem;
    document.getElementById("colega3_nome").href = data[2].github;
    document.getElementById("colega3_nome").innerHTML = data[2].titulo;
    document.getElementById("colega3_desc").innerHTML = data[2].descricao;
}

async function buildCarouselItems(){
    const data = await getItems();
    console.log(data)

    document.getElementById("carousel-item-1").innerHTML = data[0].titulo;
    document.getElementById("carousel-img-1").src = data[0].image;
    document.getElementById("carousel-link-1").href = data[0].link;

    document.getElementById("carousel-item-2").innerHTML = data[1].titulo;
    document.getElementById("carousel-img-2").src = data[1].image;
    document.getElementById("carousel-link-2").href = data[1].link;

    document.getElementById("carousel-item-3").innerHTML = data[2].titulo;
    document.getElementById("carousel-img-3").src = data[2].image;
    document.getElementById("carousel-link-3").href = data[2].link;
}





// Chamadas na API
async function getGithubProfile(){
    const response = await fetch(`${githubapiurl}/users/${username}`,
        {
            headers: {
                'Authorization': `Bearer ${githubtoken}`
            }
        }
    ) 
    const data = await response.json();
    return data;
}

async function getGithubRepoByName(repo_name) {
    const response = await fetch(`${githubapiurl}/repos/${username}/${repo_name}`,
        {
            headers: {
                'Authorization': `Bearer ${githubtoken}`
            }
        }
    ) 
    const data = await response.json();
    return data;
}

async function getColegas(){
    const response = await fetch(`http://localhost:3000/colegas`);
    const data = await response.json();
    return data;
}

async function getItems(){
    const response = await fetch(`http://localhost:3000/carousel-items`);
    const data = await response.json();
    return data;
}

document.getElementById('repo1').addEventListener('click', function() {
    window.location.href = 'tela2.html';
});


