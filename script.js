document.getElementById("paybtn").onclick = function () {
    const name = document.getElementById("name").value.trim();
    const amount = parseFloat(document.getElementById("amount").value);
    const nameRegex = /^[A-Za-z\s'-]+$/;
 
    if (!name && nameRegex.test(name)) {
        alert("Enter your name");
        return;
    }

    if (!amount || amount <= 0) {
        alert("Enter a valid amount");
        return;
    }

    var options = {
        key: "rzp_test_xxxxxxxxxxxxxx",   // Your Test Key
        amount: amount * 100,           // Amount in paise
        currency: "INR",
        name: "Demo Payment",
        description: "Test Transaction",
        handler: function (response) {
            alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
        },
        prefill: {
            name: name
        },
        theme: {
            color: "#3399cc"
        }
    };

    var rzp = new Razorpay(options);
    rzp.open();
};
