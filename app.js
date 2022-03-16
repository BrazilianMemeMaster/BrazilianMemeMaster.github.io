const btn = document.querySelector('#dice');
const advice = document.querySelector('#advice');
const adviceNum = document.querySelector('#number');

function fetchAdvice() {
    try {
        fetch('https://api.adviceslip.com/advice')
            .then(res => {
                return res.json()
            })
            .then(data => {
                advice.innerText = `\u201C${data.slip.advice}\u201D`;
                adviceNum.innerText = data.slip.id;
            })
    } catch (e) {
        console.log("Something Went Wrong!", e)
    }
}

fetchAdvice();
btn.addEventListener('click', fetchAdvice)