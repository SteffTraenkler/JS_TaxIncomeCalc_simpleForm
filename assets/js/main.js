//input variables
let yearlyIncome = document.getElementById("yearlyIncome");
let singleInc = document.getElementById("assesSingle");
let coupleInc = document.getElementById("assesCouple");

//output variables
let out = document.getElementById("outputTax");

//function

function taxCalc() {
    //1. Fall Einzelveranlagung
    if (singleInc.checked == true) {
        console.log('Einzelveranlagung');
        let incClear = Number(yearlyIncome.value);
        console.log('Einkommen: ' + incClear + ' €');

        if (incClear <= 9744) {
            console.log('Einkommen unter Freibetrag');

            out.innerHTML = ('Ihre Einkommenssteuer beträgt 0 €, da ihr Einkommen sich unter dem Grundfreibetrag befindet.');

        } else if (9744 < incClear && incClear <= 14753) {
            console.log('Einkommen über 9.744€ und unter 14.753€');
            //Berechnung variable y
            let y = ((incClear - 9744) / 10000);
            console.log('y = ' + y);
            //Output + Rechnung
            out.innerHTML = ('Ihre Einkommensteuer beträgt ' + (((995.21 * y) + 1400) * y).toFixed(2) + ' €.');

        } else if (14753 < incClear && incClear <= 57918) {
            console.log('Einkommen über 14.753€ und unter 57.918€');
            // Berechnung Variable z
            let z = ((incClear - 14753) / 10000);
            console.log('z = ' + z);
            //Output + Rechnung
            out.innerHTML = ('Ihre Einkommenssteuer beträgt ' + ((((208.85 * z) + 2397) * z) + 950.96).toFixed(2) + ' €.');

        } else if (57918 < incClear && incClear <= 274612) {
            console.log('Einkommen über 57.918€ und unter 274.612€');
            //Output + Rechnung
            out.innerHTML = ('Ihre Einkommenssteuer beträgt ' + ((0.42 * incClear) - 9136.63).toFixed(2) + ' €.');

        } else if (274612 < incClear) {
            console.log('Einkommen über 274.612€');
            //Output + Rechnung
            out.innerHTML = ('Ihre Einkommenssteuer beträgt ' + ((0.45 * incClear) - 17374.99) + ' €.');
        }
    } else if (coupleInc.checked == true) {
        //Zusammenveranlagung
        console.log('Zusammenveranlagung');
        let incClear = (Number(yearlyIncome.value)) / 2;
        console.log('Einkommen geteilt durch 2: ' + incClear + ' €');

        if (incClear <= 9744) {
            console.log('Einkommen unter Freibetrag');

            out.innerHTML = ('Ihre Einkommenssteuer beträgt 0 €, da ihr Einkommen sich unter dem Grundfreibetrag befindet.');

        } else if (9744 < incClear && incClear <= 14753) {
            console.log('Einkommen über 9.744€ und unter 14.753€');
            //Berechnung variable y
            let y = ((incClear - 9744) / 10000);
            console.log('y = ' + y);
            //Output + Rechnung
            out.innerHTML = ('Ihre Einkommensteuer beträgt ' + ((((995.21 * y) + 1400) * y) * 2).toFixed(2) + ' €.');

        } else if (14753 < incClear && incClear <= 57918) {
            console.log('Einkommen über 14.753€ und unter 57.918€');
            // Berechnung Variable z
            let z = ((incClear - 14753) / 10000);
            console.log('z = ' + z);
            //Output + Rechnung
            out.innerHTML = ('Ihre Einkommenssteuer beträgt ' + (((((208.85 * z) + 2397) * z) + 950.96) * 2).toFixed(2) + ' €.');

        } else if (57918 < incClear && incClear <= 274612) {
            console.log('Einkommen über 57.918€ und unter 274.612€');
            //Output + Rechnung
            out.innerHTML = ('Ihre Einkommenssteuer beträgt ' + (((0.42 * incClear) - 9136.63) * 2).toFixed(2) + ' €.');

        } else if (274612 < incClear) {
            console.log('Einkommen über 274.612€');
            //Output + Rechnung
            out.innerHTML = ('Ihre Einkommenssteuer beträgt ' + (((0.45 * incClear) - 17374.99) * 2).toFixed(2) + ' €.');
        }
    } else {
        console.log('Error');
    }
}