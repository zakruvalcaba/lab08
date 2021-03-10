// GLOBAL VARIABLES
let monthlyRate;
let months;
let futureValue;
let monthlyInterest;
let investment;
let rate;
let years;
let calculate;
let output;

// HELPER FUNCTION TO GET DOM ELEMENTS
const $ = (id) => {
    return document.getElementById(id);
};

window.addEventListener('load', init);

function init() {
    // GET DOM ELEMENTS
    investment  = $('invesment');
    rate        = $('rate');
    years       = $('years');
    calculate   = $('calculate');
    output      = $('output');

    // CALCULATE THE INVESTMENT AND RETURN THE RESULT
    function calculateInvestment(investment, rate, years) {
        monthlyRate     = rate / 12 / 100;
        months          = years * 12;
        futureValue     = investment;

        for (let i = 1; i < months; i++) {
            monthlyInterest = futureValue * monthlyRate;
            futureValue     += monthlyInterest;
        }

        return futureValue;
    }

    // GET TEXTBOX VALUES, CALL CALCULATE INVESTMENT, DISPLAY  RESULT
    calculate.addEventListener('click', () => {
        investment  = parseFloat(investment.value);
        rate        = parseFloat(rate.value);
        years       = parseInt(years.value);

        futureValue = calculateInvestment(investment, rate, years);
        
        output.innerHTML = `Future value on investment: $${futureValue.toFixed(2)}`;
    });
}