(function() {
    const bill = document.getElementById("bill");
    const people = document.getElementById("people");
    const service = document.getElementById("service");

    let error_message = document.getElementById("errorMessageID");
    const errorDiv = document.getElementById("errorDivID");
    const btn = document.getElementById("btnID");

    let result = document.getElementById("resultID");
    let tip_amount = document.getElementById("tipAmountID");
    let total_amount = document.getElementById("totalAmountID");
    let owes = document.getElementById("owesID");



    btn.addEventListener("click", function() {
        const isFeedback = validateInput(bill.value, people.value, service.value);
        if (!isFeedback) {
            let tip, total, each;
            tip = (bill.value * service.value) / 100;
            total = Number(bill.value) + tip; // those didnt work outside
            each = total / people.value;
            
            setTimeout(function() {
                result.classList.remove("hidden"); // animation here would be nice
                tip_amount.textContent = `$${tip}`;
                total_amount.textContent = `$${total}`;
                owes.textContent = `$${each}`;

                setTimeout(function() {
                    result.classList.add("hidden");
                }, 5000)
            }, 1000) // why does this work tho
        }
    })


    function validateInput(bill, people, service) {
        let feedback = false;

        if (bill === "" || bill <= 0) {
            errorDiv.classList.remove("hidden");
            error_message.textContent = "Bill amount cannot be blank";
            feedback = true;
        }
        
        if (people <= 0) {
            errorDiv.classList.remove("hidden");
            error_message.textContent = "Number of people must be greater than zero";
            feedback = true;
        }

        if (service === "Choose") {
            errorDiv.classList.remove("hidden");
            error_message.textContent = "You must select a service";
            feedback = true;
        }

        setTimeout(function() {
            errorDiv.classList.add("hidden");
        }, 7000);

        return feedback;
}


})();