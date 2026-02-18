// Wait until the page is fully loaded
window.onload = function () {
    const phoneNumber = "559-555-5555";

    // Find the paragraph containing the phone number
    const paragraphs = document.querySelectorAll("p");

    paragraphs.forEach(p => {
        if (p.textContent.includes(phoneNumber)) {
            // Replace the phone number with a styled span
            p.innerHTML = p.innerHTML.replace(
                phoneNumber,
                `<span style="color: red; font-weight: bold;">${phoneNumber}</span>`
            );
        }
    });

    let heading = document.querySelector('h1')
    heading.innerHTML = 'Welcome to Vecta Corp.'
    heading.setAttribute('style', 'color:red;')
};
