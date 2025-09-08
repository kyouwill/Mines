const url = "https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json"

async function visualizarinformacao(params) {
    const res = await fetch(url)
    const dados = await res.json()
    console.log(dados);

    const faceb = (dados.Facebook * 1e6)
    const Youtube = (dados.Youtube * 1e6)
    const WhatsApp = (dados.WhatsApp * 1e6)
    const Instagram = (dados.Instagram * 1e6)
    const Tiktok = (dados.Tiktok * 1e6)
    const WeChat = (dados.WeChat * 1e6)



    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container_texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem <span>${faceb}</span> usuários do facebook e aproximadamente <span>${Youtube}</span> usuários do Youtube, e <span>${WhatsApp}</span> usuários de Whatsapp, e <span>${Instagram}</span> de usuários do Instagram, o Tik Tok tem <span>${Tiktok}</span> de usuários, por fim o WeChat tem <span>${WeChat}</span> de usuários.`
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

visualizarinformacao();
