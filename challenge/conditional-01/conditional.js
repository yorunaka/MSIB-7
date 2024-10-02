const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', () => {
    const scoreInput = document.getElementById('input').value;
    const score = parseInt(scoreInput);
    //if the input is not a number, alert 'please input a number'
    if (isNaN(score)){
        alert('please input a number');
        return;
    }
    // example of conditional statement
    // if 80 < number <= 100 alert 'A'
    // else if 60 < number <= 80 alert 'B'
    // else if 40 < number <= 60 alert 'C'
    // else if number <= 40 alert 'D'
    // else if number < 0 && number > 100 alert 'cannot calculate your grade'

    if (score > 80 && score <= 100){
        alert('your grade is A');
    } else if (score > 60 && score <= 80){
        alert('your grade is B');
    } else if (score > 40 && score <= 60){
        alert('your grade is C');
    } else if (score >= 0 && score <= 40){
        alert('your grade is D');
    } else if (score < 0 || score > 100){
        alert('cannot calculate your grade');
    }
});