function calculateAge() {
    const birthdate = document.getElementById("birthdate").value;

    if (!birthdate) {
        document.getElementById("result").innerHTML = "Please select your birthdate.";
        return;
    }

    const birthDateObj = new Date(birthdate);
    const today = new Date();

    let years = today.getFullYear() - birthDateObj.getFullYear();
    let months = today.getMonth() - birthDateObj.getMonth();
    let days = today.getDate() - birthDateObj.getDate();

    // Adjust days and months if negative
    if (days < 0) {
        months--;
        const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += previousMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById("result").innerHTML =
        `You are ${years} years, ${months} months, and ${days} days old.`;
}
