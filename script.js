(function() {
    const bill = document.getElementById("bill");
    const people = document.getElementById("people");
    const service = document.getElementById("service");

    let error_message = document.getElementById("errorMessageID");
    let btn = document.getElementById("btnID");

    let result = document.getElementById("resultID");
    let tip_amount = document.getElementById("tipAmountID");
    let total_amount = document.getElementById("totalAmountID");
    let owes = document.getElementById("owesID");
    let tip;
    let total;
    let each;

    
    

    btn.addEventListener("click", function() {
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
            }, 3000)
        }, 1000) // why does this work tho


    })





})();