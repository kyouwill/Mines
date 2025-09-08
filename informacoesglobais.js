const url = "https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json"

async function visualizarinformacao(params) {
    const res = await fetch(url)
    const dados = await res.json()
    console.log(dados);

    const faceb = (dados.Facebook)
    const Youtube = (dados.Youtube)
    const WhatsApp = (dados.WhatsApp)
    const Instagram = (dados.Instagram)
    const Tiktok = (dados.Tiktok)
    const WeChat = (dados.WeChat)



    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container_texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem <span>${faceb}</span> usuários do facebook e aproximadamente <span>${Youtube}</span> usuários do Youtube, e <span>${WhatsApp}</span> usuários de Whatsapp, e <span>${Instagram}</span> de usuários do Instagram, o Tik Tok tem <span>${Tiktok}</span> de usuários, por fim o WeChat tem <span>${WeChat}</span> de usuários.`
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

visualizarinformacao();
