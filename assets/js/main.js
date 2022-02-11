//input variables
let yearlyIncome = document.getElementById("yearlyIncome");
let singleInc = document.getElementById("assesSingle");
let coupleInc = document.getElementById("assesCouple");
let year = document.getElementById("yearSelect");

//output variables
let out = document.getElementById("outputTax");

//function

function taxCalc() {
    if (year.value == 0) {
        console.log('Berechnungsjahr 2019');
        //1. Fall Einzelveranlagung
        if (singleInc.checked == true) {
            console.log('Einzelveranlagung');
            let incClear = Number(yearlyIncome.value);
            console.log('Einkommen: ' + incClear + ' €');

            if (incClear <= 9168) {
                console.log('Einkommen unter Freibetrag');

                out.innerHTML = ('Ihre Einkommenssteuer beträgt 0 €, da ihr Einkommen sich unter dem Grundfreibetrag befindet.');

            } else if (9168 < incClear && incClear <= 14254) {
                console.log('Einkommen über 9.168€ und unter 14.254€');
                //Berechnung variable y
                let y = ((incClear - 9168) / 10000);
                console.log('y = ' + y);
                //Output + Rechnung
                out.innerHTML = ('Ihre Einkommensteuer beträgt ' + (((980.14 * y) + 1400) * y).toFixed(2) + ' €.');

            } else if (14254 < incClear && incClear <= 55960) {
                console.log('Einkommen über 14.254€ und unter 55.960€');
                // Berechnung Variable z
                let z = ((incClear - 14254) / 10000);
                console.log('z = ' + z);
                //Output + Rechnung
                out.innerHTML = ('Ihre Einkommenssteuer beträgt ' + ((((216.16 * z) + 2397) * z) + 965.58).toFixed(2) + ' €.');

            } else if (55960 < incClear && incClear <= 265326) {
                console.log('Einkommen über 55.960€ und unter 265.326€');
                //Output + Rechnung
                out.innerHTML = ('Ihre Einkommenssteuer beträgt ' + ((0.42 * incClear) - 8780.90).toFixed(2) + ' €.');

            } else if (265326 < incClear) {
                console.log('Einkommen über 265.326€');
                //Output + Rechnung
                out.innerHTML = ('Ihre Einkommenssteuer beträgt ' + ((0.45 * incClear) - 16740.68) + ' €.');
            }
        } else if (coupleInc.checked == true) {
            //Zusammenveranlagung
            console.log('Zusammenveranlagung');
            let incClear = (Number(yearlyIncome.value)) / 2;
            console.log('Einkommen geteilt durch 2: ' + incClear + ' €');

            if (incClear <= 9168) {
                console.log('Einkommen unter Freibetrag');

                out.innerHTML = ('Ihre Einkommenssteuer beträgt 0 €, da ihr Einkommen sich unter dem Grundfreibetrag befindet.');

            } else if (9168 < incClear && incClear <= 14254) {
                console.log('Einkommen über 9.168€ und unter 14.254€');
                //Berechnung variable y
                let y = ((incClear - 9168) / 10000);
                console.log('y = ' + y);
                //Output + Rechnung
                out.innerHTML = ('Ihre Einkommensteuer beträgt ' + ((((980.14 * y) + 1400) * y) * 2).toFixed(2) + ' €.');

            } else if (14254 < incClear && incClear <= 55960) {
                console.log('Einkommen über 14.254€ und unter 55.960€');
                // Berechnung Variable z
                let z = ((incClear - 14254) / 10000);
                console.log('z = ' + z);
                //Output + Rechnung
                out.innerHTML = ('Ihre Einkommenssteuer beträgt ' + (((((216.16 * z) + 2397) * z) + 965.58) * 2).toFixed(2) + ' €.');

            } else if (55960 < incClear && incClear <= 265326) {
                console.log('Einkommen über 55.961€ und unter 265.326€');
                //Output + Rechnung
                out.innerHTML = ('Ihre Einkommenssteuer beträgt ' + (((0.42 * incClear) - 8780.90) * 2).toFixed(2) + ' €.');

            } else if (265326 < incClear) {
                console.log('Einkommen über 265.326€');
                //Output + Rechnung
                out.innerHTML = ('Ihre Einkommenssteuer beträgt ' + (((0.45 * incClear) - 16740.68) * 2).toFixed(2) + ' €.');
            }
        }
    } else if (year.value == 1) {
        console.log('Berechnungsjahr 2020');
        //1. Fall Einzelveranlagung
        if (singleInc.checked == true) {
            console.log('Einzelveranlagung');
            let incClear = Number(yearlyIncome.value);
            console.log('Einkommen: ' + incClear + ' €');

            if (incClear <= 9408) {
                console.log('Einkommen unter Freibetrag');

                out.innerHTML = ('Ihre Einkommenssteuer beträgt 0 €, da ihr Einkommen sich unter dem Grundfreibetrag befindet.');

            } else if (9408 < incClear && incClear <= 14532) {
                console.log('Einkommen über 9.408€ und unter 14.532€');
                //Berechnung variable y
                let y = ((incClear - 9408) / 10000);
                console.log('y = ' + y);
                //Output + Rechnung
                out.innerHTML = ('Ihre Einkommensteuer beträgt ' + (((972.87 * y) + 1400) * y).toFixed(2) + ' €.');

            } else if (14532 < incClear && incClear <= 57051) {
                console.log('Einkommen über 14.532€ und unter 57.051€');
                // Berechnung Variable z
                let z = ((incClear - 14532) / 10000);
                console.log('z = ' + z);
                //Output + Rechnung
                out.innerHTML = ('Ihre Einkommenssteuer beträgt ' + ((((212.02 * z) + 2397) * z) + 972.79).toFixed(2) + ' €.');

            } else if (57051 < incClear && incClear <= 270500) {
                console.log('Einkommen über 57.051€ und unter 270.500€');
                //Output + Rechnung
                out.innerHTML = ('Ihre Einkommenssteuer beträgt ' + ((0.42 * incClear) - 8963.74).toFixed(2) + ' €.');

            } else if (270500 < incClear) {
                console.log('Einkommen über 270.500€');
                //Output + Rechnung
                out.innerHTML = ('Ihre Einkommenssteuer beträgt ' + ((0.45 * incClear) - 17078.74) + ' €.');
            }
        } else if (coupleInc.checked == true) {
            //Zusammenveranlagung
            console.log('Zusammenveranlagung');
            let incClear = (Number(yearlyIncome.value)) / 2;
            console.log('Einkommen geteilt durch 2: ' + incClear + ' €');

            if (incClear <= 9408) {
                console.log('Einkommen unter Freibetrag');

                out.innerHTML = ('Ihre Einkommenssteuer beträgt 0 €, da ihr Einkommen sich unter dem Grundfreibetrag befindet.');

            } else if (9408 < incClear && incClear <= 14532) {
                console.log('Einkommen über 9.408€ und unter 14.532€');
                //Berechnung variable y
                let y = ((incClear - 9408) / 10000);
                console.log('y = ' + y);
                //Output + Rechnung
                out.innerHTML = ('Ihre Einkommensteuer beträgt ' + ((((972.87 * y) + 1400) * y) * 2).toFixed(2) + ' €.');

            } else if (14532 < incClear && incClear <= 57051) {
                console.log('Einkommen über 14.532€ und unter 57.051€');
                // Berechnung Variable z
                let z = ((incClear - 14532) / 10000);
                console.log('z = ' + z);
                //Output + Rechnung
                out.innerHTML = ('Ihre Einkommenssteuer beträgt ' + (((((212.02 * z) + 2397) * z) + 972.79) * 2).toFixed(2) + ' €.');

            } else if (57051 < incClear && incClear <= 270500) {
                console.log('Einkommen über 57.051€ und unter 270.500€');
                //Output + Rechnung
                out.innerHTML = ('Ihre Einkommenssteuer beträgt ' + (((0.42 * incClear) - 8963.74) * 2).toFixed(2) + ' €.');

            } else if (270500 < incClear) {
                console.log('Einkommen über 270.500€');
                //Output + Rechnung
                out.innerHTML = ('Ihre Einkommenssteuer beträgt ' + (((0.45 * incClear) - 17078.74) * 2).toFixed(2) + ' €.');
            }
        }
    } else if (year.value == 2) {
        console.log('Berechnungsjahr 2021');
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
        }
    } else if (year.value == 3) {
        console.log('Berechnungsjahr 2022');
        //1. Fall Einzelveranlagung
        if (singleInc.checked == true) {
            console.log('Einzelveranlagung');
            let incClear = Number(yearlyIncome.value);
            console.log('Einkommen: ' + incClear + ' €');

            if (incClear <= 9984) {
                console.log('Einkommen unter Freibetrag');

                out.innerHTML = ('Ihre Einkommenssteuer beträgt 0 €, da ihr Einkommen sich unter dem Grundfreibetrag befindet.');

            } else if (9984 < incClear && incClear <= 14926) {
                console.log('Einkommen über 9.984€ und unter 14.926€');
                //Berechnung variable y
                let y = ((incClear - 9984) / 10000);
                console.log('y = ' + y);
                //Output + Rechnung
                out.innerHTML = ('Ihre Einkommensteuer beträgt ' + (((1008.70 * y) + 1400) * y).toFixed(2) + ' €.');

            } else if (14926 < incClear && incClear <= 58596) {
                console.log('Einkommen über 14.926€ und unter 58.596€');
                // Berechnung Variable z
                let z = ((incClear - 14926) / 10000);
                console.log('z = ' + z);
                //Output + Rechnung
                out.innerHTML = ('Ihre Einkommenssteuer beträgt ' + ((((206.43 * z) + 2397) * z) + 938.24).toFixed(2) + ' €.');

            } else if (58596 < incClear && incClear <= 277825) {
                console.log('Einkommen über 58.596€ und unter 277.825€');
                //Output + Rechnung
                out.innerHTML = ('Ihre Einkommenssteuer beträgt ' + ((0.42 * incClear) - 9267.53).toFixed(2) + ' €.');

            } else if (277825 < incClear) {
                console.log('Einkommen über 277.825€');
                //Output + Rechnung
                out.innerHTML = ('Ihre Einkommenssteuer beträgt ' + ((0.45 * incClear) - 17602.53) + ' €.');
            }
        } else if (coupleInc.checked == true) {
            //Zusammenveranlagung
            console.log('Zusammenveranlagung');
            let incClear = (Number(yearlyIncome.value)) / 2;
            console.log('Einkommen geteilt durch 2: ' + incClear + ' €');

            if (incClear <= 9984) {
                console.log('Einkommen unter Freibetrag');

                out.innerHTML = ('Ihre Einkommenssteuer beträgt 0 €, da ihr Einkommen sich unter dem Grundfreibetrag befindet.');

            } else if (9984 < incClear && incClear <= 14926) {
                console.log('Einkommen über 9.984€ und unter 14.926€');
                //Berechnung variable y
                let y = ((incClear - 9984) / 10000);
                console.log('y = ' + y);
                //Output + Rechnung
                out.innerHTML = ('Ihre Einkommensteuer beträgt ' + ((((1008.70 * y) + 1400) * y) * 2).toFixed(2) + ' €.');

            } else if (14926 < incClear && incClear <= 58596) {
                console.log('Einkommen über 14.926€ und unter 58.596€');
                // Berechnung Variable z
                let z = ((incClear - 14926) / 10000);
                console.log('z = ' + z);
                //Output + Rechnung
                out.innerHTML = ('Ihre Einkommenssteuer beträgt ' + (((((206.43 * z) + 2397) * z) + 938.24) * 2).toFixed(2) + ' €.');

            } else if (58596 < incClear && incClear <= 277825) {
                console.log('Einkommen über 58.596€ und unter 277.825€');
                //Output + Rechnung
                out.innerHTML = ('Ihre Einkommenssteuer beträgt ' + (((0.42 * incClear) - 9267.53) * 2).toFixed(2) + ' €.');

            } else if (277825 < incClear) {
                console.log('Einkommen über 277.825€');
                //Output + Rechnung
                out.innerHTML = ('Ihre Einkommenssteuer beträgt ' + (((0.45 * incClear) - 17602.28) * 2).toFixed(2) + ' €.');
            }
        }
    } else {
        console.log('Error');
    }
}