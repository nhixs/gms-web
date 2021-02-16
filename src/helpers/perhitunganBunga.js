const moment = require('moment')

// const reducer = (accumulator, currentValue) => accumulator + currentValue;
// const capitalize = (string) => (string.slice(0, 1).toUpperCase() + string.slice(1, string.length))
const getInterestPeriod = (unit) => unit === "weekly" ? 52 : unit === "monthly" ? 12 : 1
const getUnitPeriod = (unit) => unit === "weekly" ? 'w' : unit === "monthly" ? "M" : "Y"

module.exports = async (productData, applicationData) => {
    const { interest_calculation, interest_rate, digit_after_decimal: digit, in_multiple_of: multiple, days_in_year: days, tax = [] } = productData
    const { amount, tenor, period_unit, start_date } = applicationData

    let repayments = [...Array(tenor)]

    let interestPerPeriod = getInterestPeriod(period_unit)
    let interest = interest_rate / 100

    const principal = amount / tenor
    let balance = principal
    let totalInterest = 0
    let totalAfterInterest = 0
    let totalTax = 0
    let startDate = moment(start_date, "DD-MM-YYYY", true).valueOf()
    let payDate = moment(startDate).hours(0).minutes(0).seconds(0).milliseconds(0)

    switch (interest_calculation) {
        case "flat":
            for (let x in repayments) {
                payDate = moment(payDate).add(1, getUnitPeriod(period_unit))
                let interestExpense = Number(((amount * interest) / interestPerPeriod).toFixed(digit))
                let installment = Number((principal + interestExpense).toFixed(digit))
                const detail = {
                    tenor: parseInt(x) + 1,
                    principal,
                    interest_expense: interestExpense,
                    installment,
                    due_date: moment(payDate).format("DD-MM-YYYY")
                }
                totalAfterInterest += installment
                totalInterest += interestExpense
                repayments[x] = detail
            };
            break;
        case "effective":
            for (let x in repayments) {
                if (balance > 0) {
                    payDate = moment(payDate).add(1, getUnitPeriod(period_unit))
                    let interestExpense = Number(((balance * interest) / interestPerPeriod).toFixed(digit))
                    let installment = Number((principal + interestExpense).toFixed(digit))
                    const detail = {
                        tenor: parseInt(x) + 1,
                        balance,
                        principal,
                        interest_expense: interestExpense,
                        installment,
                        due_date: moment(payDate).format("DD-MM-YYYY")
                    }
                    totalAfterInterest += installment
                    totalInterest += interestExpense
                    repayments[x] = detail
                    balance = Number((balance - interestExpense).toFixed(digit))
                } else {
                    repayments[x] = 0
                }
            }
            break;
        default:
            throw new Error("Bunga tidak ditemukan")
    }
    if (tax.length > 0) {
        for (let x in tax) {
            const [taxName, taxValue] = x.split(" ")
            switch (taxName) {
                case "pph23":
                    const taxPercent = parseFloat(taxValue / 100)
                    if (totalInterest > 240000) {
                        totalTax += totalInterest * (taxPercent)
                    }
            }
        }
    }
    return {
        repayments,
        payment: {
            totalAfterInterest: Number(totalAfterInterest.toFixed(digit)),
            totalAfterTax: Number((totalAfterInterest - totalTax).toFixed(digit)),
            amount,
            totalInterest: Number(totalInterest.toFixed(digit)),
            totalTax
        },
    }
}
