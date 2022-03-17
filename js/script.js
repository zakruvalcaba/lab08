// GLOBAL VARIABLES
let monthlyRate
let months
let futureValue
let monthlyInterest
let investment      // HTML ELEMENT (TEXT)
let rate            // HTML ELEMENT (TEXT)
let years           // HTML ELEMENT (TEXT)
let calculate       // HTML ELEMENT (BUTTON)
let output          // HTML ELEMENT (OUTPUT)

// HELPER FUNCTION TO GET DOM ELEMENTS
const $ = (id) => document.getElementById(id)

// GET DOM ELEMENTS
investment  = $('investment')
rate        = $('rate')
years       = $('years')
calculate   = $('calculate')
output      = $('output')

// CALCULATE THE INVESTMENT AND RETURN THE RESULT
function calculateInvestment(investment, rate, years) {
    monthlyRate     = rate / 12 / 100
    months          = years * 12

    for (let i = 0; i < months; i++) {
        monthlyInterest = investment * monthlyRate
        investment += monthlyInterest
    }

    return investment
}

// GET TEXTBOX VALUES, CALL CALCULATE INVESTMENT, DISPLAY RESULTS
calculate.addEventListener('click', () => {
    investment  = parseFloat(investment.value)
    rate        = parseFloat(rate.value)
    years       = parseFloat(years.value)

    futureValue = calculateInvestment(investment, rate, years)

    output.innerHTML = `Future value on investment: $${futureValue.toFixed(2)}`
})