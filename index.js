const memes = [
    {
        emotionTags: ["dominant"],
        isGif: false,
        path: "./images/trumpDominant.webp"
    },
    {
        emotionTags: ["funny", "lazy"],
        isGif: false,
        path: "./images/systemUpdates.webp"
    },
    {
        emotionTags: ["angry"],
        isGif: false,
        path: "./images/angryCat.jpg"
    },
    {
        emotionTags: ["insecure"],
        isGif: false,
        path: "./images/insecureDuck.webp"
    },
    {
        emotionTags: ["funny"],
        isGif: false,
        path: "./images/mrBean.webp"
    },
     {
        emotionTags: ["dominant"],
        isGif: true,
        path: "./images/dominantApe.gif"
    },
    {
        emotionTags: ["lazy"],
        isGif: true,
        path: "./images/lazyCat.gif"
    },
    {
        emotionTags: ["insecure"],
        isGif: true,
        path: "./images/insecurePenguin.gif"
    },
    {
        emotionTags: ["angry"],
        isGif: true,
        path: "./images/angrySpongebob.gif"
    },
    {
        emotionTags: ["angry"],
        isGif: true,
        path: "./images/angryPanda.gif"
    },
    {
        emotionTags: ["funny"],
        isGif: true,
        path: "./images/funnyIU.gif"
    },
]

const radioContainer = document.getElementById('radio-container')
const showBtn = document.getElementById("show-btn")
const memeModal = document.getElementById("modal")
const memeModalInner = document.getElementById("modal-inner")
const header = document.getElementById("header")
const exitModal = document.getElementById("exit-modal")


header.addEventListener("click", function(){
    memeModal.style.display="none";
})

exitModal.addEventListener("click", function(){
    memeModal.style.display="none";
})

radioContainer.addEventListener("change", selectEmotion)
showBtn.addEventListener("click", () => {
    const memeObj = selectShowMeme()
    const memeString = 
    `
        <div>
            <img class="meme-img" src="${memeObj.path}">
        </div> 
    `
    console.log(memeString) 
    memeModalInner.innerHTML = memeString
    memeModal.style.display = "block"
})


function selectEmotion(e) {
    radioEls = document.getElementsByClassName("radio-btn")
    for(radioEl of radioEls) {
        radioEl.classList.remove("highlight")
    }
    const selected = document.getElementById(e.target.id).parentElement
    selected.classList.add("highlight")
}

function makeEmotionArray(m) {
    const emotionArray = []
    m.forEach(function(meme){
        meme.emotionTags.forEach((emotion) => {
            if (!emotionArray.includes(emotion)) {
                emotionArray.push(emotion)
            }
        })
    })
    /* for (let meme of m) {
        for(let emotion of meme.emotionTags) {
            if (!emotionArray.includes(emotion)) {
                emotionArray.push(emotion)
            }
        }
    } */
    return emotionArray
}

function renderRadioBtns() {
    let radioString = ``
    const emotionArray= makeEmotionArray(memes)
    console.log(emotionArray)
    emotionArray.forEach((emotion) => {
        radioString += 
        `
            <div class="radio-btn">
                <label for="${emotion}">${emotion}</label>
                <input 
                type="radio"
                id="${emotion}"
                value="${emotion}"
                name="emotions"
                >
            </div>
        `
    })
    // for (let emotion of emotionArray) {
    //     radioString += 
    //     `
    //         <div class="radio-btn">
    //             <label for="${emotion}">${emotion}</label>
    //             <input 
    //             type="radio"
    //             id="${emotion}"
    //             value="${emotion}"
    //             name="emotions"
    //             >
    //         </div>
    //     `
    // }
    radioContainer.innerHTML = radioString
}

function selectMatchingArray(){
    const isGif = document.getElementById("checkbox").checked
    const emotion = document.querySelector('input[type="radio"]:checked').value;
    let MatchingArray = []
    if(isGif){
        MatchingArray = memes.filter((meme) => {{
            return meme.emotionTags.includes(emotion) && meme.isGif
        }})
    }
    else {
        MatchingArray = memes.filter((meme) => {{
            return meme.emotionTags.includes(emotion)
        }})
    }
    return MatchingArray
}

function selectShowMeme() {
    const memeArray= selectMatchingArray()
    const randomNumber = Math.floor(Math.random()*memeArray.length)
    const memeObj = memeArray[randomNumber]
    return memeObj
}

renderRadioBtns()

