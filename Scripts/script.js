// Api Token  = OUN5ybaCXRXXpgOyJsuCyfnLCVKNYvPkcMgxrUUG

const Questions = [
    {
        'que' : 'What is the capital of Maharastra',
        'a' : 'Delhi',
        'b' : 'Mumbai',
        'c' : 'Hyderabad',
        'd' : 'Raipur',
        'correct' : 'b'
    },
    {
        'que' : 'What is the capital of Chhattisgarh',
        'a' : 'Delhi',
        'b' : 'Mumbai',
        'c' : 'Hyderabad',
        'd' : 'Raipur',
        'correct' : 'd',
    },
    {
        'que' : 'What is the capital of Telangana',
        'a' : 'Delhi',
        'b' : 'Mumbai',
        'c' : 'Hyderabad',
        'd' : 'Raipur',
        'correct' : 'c'
    }
]

let index = 0;
let right = 0, wrong = 0;

const question = document.querySelector('.question')
const option = document.querySelectorAll('.option')
const totalQues = Questions.length


const loadQues = () => {

    if(index == totalQues){
        return endQuiz();
    }
    reset();
    const data = Questions[index]
    question.innerText = `${index+1}) ${data.que}`;
    option[0].nextElementSibling.innerText = data.a
    option[1].nextElementSibling.innerText = data.b
    option[2].nextElementSibling.innerText = data.c
    option[3].nextElementSibling.innerText = data.d
}

const submitQuiz = () => {
    const data = Questions[index]
    const ans = getAnswer()
    console.log(ans)
    if(ans == data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQues();
    return;
}

const getAnswer = () => {
    let result;
    option.forEach(
        (input) => {
            if(input.checked){
                result = input.value;
            }
        }
    )
    return result;
}

const reset = () => {
    option.forEach(
        (input) => {
            input.checked = false
        }
    )
}

const endQuiz = () =>{
    document.querySelector('#box').innerHTML = `Your score = ${right} / ${totalQues} `
}

loadQues();


