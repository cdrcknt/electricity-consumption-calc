document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.querySelector(".button-3");
    calculateButton.addEventListener("click", calculateKWhConsumed);
});

function calculateKWhConsumed() {
    const previousReading = parseInt(document.getElementById("previousReading").value);
    const presentReading = parseInt(document.getElementById("presentReading").value);
    const kWhConsumed = presentReading - previousReading;
    document.getElementById("kWhConsumed").textContent = kWhConsumed;

    const generationSystemChargeRate = 3.5588;
    const generationSystemChargeAmount = kWhConsumed * generationSystemChargeRate;
    document.getElementById("generationSystemCharge").textContent = generationSystemChargeAmount.toFixed(4);

    const powerActReductionRate = -0.3;
    const powerActReductionAmount = kWhConsumed * powerActReductionRate;
    document.getElementById("powerActReduction").textContent = powerActReductionAmount.toFixed(4);

    const franchiseAndBenefitsRate = 0.0245;
    const franchiseAndBenefitsAmount = kWhConsumed * franchiseAndBenefitsRate;
    document.getElementById("franchiseAndBenefits").textContent = franchiseAndBenefitsAmount.toFixed(4);

    const generationSubtotal = generationSystemChargeAmount + powerActReductionAmount + franchiseAndBenefitsAmount;
    document.getElementById("generationSubtotal").textContent = generationSubtotal.toFixed(4);

    const transmissionSystemChargeRate = 1.0907;
    const transmissionSystemChargeAmount = kWhConsumed * transmissionSystemChargeRate;
    document.getElementById("transmissionSystemCharge").textContent = transmissionSystemChargeAmount.toFixed(4);

    const transmissionSubtotal = transmissionSystemChargeAmount;
    document.getElementById("transmissionSubtotal").textContent = transmissionSubtotal.toFixed(4);

    const distributionSystemChargeRate = 0.8726;
    const distributionSystemChargeAmount = kWhConsumed * distributionSystemChargeRate;
    document.getElementById("distributionSystemCharge").textContent = distributionSystemChargeAmount.toFixed(4);

    const distributionSubtotal = distributionSystemChargeAmount;
    document.getElementById("distributionSubtotal").textContent = distributionSubtotal.toFixed(4);

    const missionaryElectrificationRate = 0.0373;
    const missionaryElectrificationAmount = kWhConsumed * missionaryElectrificationRate;
    document.getElementById("missionaryElectrification").textContent = missionaryElectrificationAmount.toFixed(4);

    const environmentalChargesRate = 0.0025;
    const environmentalChargesAmount = kWhConsumed * environmentalChargesRate;
    document.getElementById("environmentalCharges").textContent = environmentalChargesAmount.toFixed(4);

    const universalChargeSubtotal = missionaryElectrificationAmount + environmentalChargesAmount;
    document.getElementById("universalChargeSubtotal").textContent = universalChargeSubtotal.toFixed(4);

    const loanCondonationRate = -0.1591;
    const loanCondonationAmount = kWhConsumed * loanCondonationRate;
    document.getElementById("loanCondonation").textContent = loanCondonationAmount.toFixed(4);

    const lifelineRateSubsidyRate = 0.0883;
    const lifelineRateSubsidyAmount = kWhConsumed * lifelineRateSubsidyRate;
    document.getElementById("lifelineRateSubsidy").textContent = lifelineRateSubsidyAmount.toFixed(4);

    const otherChargesSubtotal = loanCondonationAmount + lifelineRateSubsidyAmount;
    document.getElementById("otherChargesSubtotal").textContent = otherChargesSubtotal.toFixed(4);

    const generationRate = 0.2706;
    const generationAmount = kWhConsumed * generationRate;
    document.getElementById("generation").textContent = generationAmount.toFixed(4);

    const transmissionRate = 0.1158;
    const transmissionAmount = kWhConsumed * transmissionRate;
    document.getElementById("transmission").textContent = transmissionAmount.toFixed(4);

    const distributionRate = 0.22;
    const distributionAmount = kWhConsumed * distributionRate;
    document.getElementById("distribution").textContent = distributionAmount.toFixed(4);

    const systemLossRate = 0.075;
    const systemLossAmount = kWhConsumed * systemLossRate;
    document.getElementById("systemLoss").textContent = systemLossAmount.toFixed(4);

    const vatSubtotal = generationAmount + transmissionAmount + distributionAmount + systemLossAmount;
    document.getElementById("vatSubtotal").textContent = vatSubtotal.toFixed(4);

    const totalAmount = generationSubtotal + transmissionSubtotal + distributionSubtotal + universalChargeSubtotal + otherChargesSubtotal + vatSubtotal;
    document.getElementById("totalAmount").textContent = totalAmount.toFixed(2);
}
