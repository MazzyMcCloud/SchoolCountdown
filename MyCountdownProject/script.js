document.addEventListener("DOMContentLoaded", function () {
    // Set the date when school is over
    const endDate = new Date("May 23, 2024 15:30:00").getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const timeDifference = endDate - now;

        if (timeDifference <= 0) {
            document.getElementById("countdown").innerHTML = "School is over!";
        } else {
            // Calculate total days and remaining days
            const totalDays = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
            let remainingDays = totalDays;

            // Loop through each day and subtract weekends
            for (let i = 0; i < totalDays; i++) {
                const currentDate = new Date(now + i * 24 * 60 * 60 * 1000);
                const dayOfWeek = currentDate.getDay();

                // Exclude weekends (Saturday and Sunday)
                if (dayOfWeek === 0 || dayOfWeek === 6) {
                    remainingDays--;
                }
            }

            // Subtract additional days
            remainingDays -= 12; // Subtract 10 days (weekends) + 2 additional days

            document.getElementById("countdown").innerHTML = remainingDays + " days until school is over!";
        }
    }

    // Update the countdown every second
    setInterval(updateCountdown, 1000);

    // Initial call to set the countdown immediately
    updateCountdown();
});
