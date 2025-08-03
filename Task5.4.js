    let calc = localStorage.getItem('storedCalc')||'';
    showResults();
    function updateCalc (button){
        calc += button
        console.log (calc);
    }
    showResults();

    function saveCalc(){
        localStorage.setItem ('storedCalc', calc);
    }

    function showResults(){
        document.querySelector('.js-calc').innerHTML= calc;
    }

  