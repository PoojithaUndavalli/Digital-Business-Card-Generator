// ============================
// Get Input Fields
// ============================

const nameInput = document.getElementById("name");
const designationInput = document.getElementById("designation");
const companyInput = document.getElementById("company");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const websiteInput = document.getElementById("website");

const linkedinInput = document.getElementById("linkedin");
const githubInput = document.getElementById("github");
const instagramInput = document.getElementById("instagram");

const imageUpload = document.getElementById("imageUpload");

const templateSelect = document.getElementById("template");

// ============================
// Preview Elements
// ============================

const previewName = document.getElementById("previewName");
const previewDesignation = document.getElementById("previewDesignation");
const previewCompany = document.getElementById("previewCompany");

const previewEmail = document.getElementById("previewEmail");
const previewPhone = document.getElementById("previewPhone");
const previewWebsite = document.getElementById("previewWebsite");

const previewImage = document.getElementById("previewImage");

const businessCard = document.getElementById("businessCard");

const linkedinIcon = document.getElementById("linkedinIcon");
const githubIcon = document.getElementById("githubIcon");
const instagramIcon = document.getElementById("instagramIcon");

// ============================
// Live Preview
// ============================

nameInput.addEventListener("input", () => {
    previewName.textContent = nameInput.value || "Your Name";
});

designationInput.addEventListener("input", () => {
    previewDesignation.textContent =
        designationInput.value || "Designation";
});

companyInput.addEventListener("input", () => {
    previewCompany.textContent =
        companyInput.value || "Company";
});

emailInput.addEventListener("input", () => {
    previewEmail.textContent =
        emailInput.value || "example@email.com";
});

phoneInput.addEventListener("input", () => {
    previewPhone.textContent =
        phoneInput.value || "+91 9876543210";
});

websiteInput.addEventListener("input", () => {
    previewWebsite.textContent =
        websiteInput.value || "www.website.com";
});

// ============================
// Social Links
// ============================

function updateLink(input, icon) {

    const url = input.value.trim();

    if (url === "") {

        icon.style.display = "none";
        icon.removeAttribute("href");

    } else {

        icon.style.display = "inline-block";
        icon.href = url;

    }

}

// Event Listeners

linkedinInput.addEventListener("input", () => {
    updateLink(linkedinInput, linkedinIcon);
});

githubInput.addEventListener("input", () => {
    updateLink(githubInput, githubIcon);
});

instagramInput.addEventListener("input", () => {
    updateLink(instagramInput, instagramIcon);
});

// Hide icons initially

updateLink(linkedinInput, linkedinIcon);
updateLink(githubInput, githubIcon);
updateLink(instagramInput, instagramIcon);

// ============================
// Image Upload
// ============================

imageUpload.addEventListener("change", function () {

    const file = this.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = function (e) {

        previewImage.src = e.target.result;

    };

    reader.readAsDataURL(file);

});

// ============================
// Template Switching
// ============================

templateSelect.addEventListener("change", () => {

    businessCard.className = "";

    businessCard.classList.add(templateSelect.value);

});

// ============================
// Download PNG
// ============================

function downloadImage() {

    html2canvas(businessCard).then(canvas => {

        const link = document.createElement("a");

        link.download = "BusinessCard.png";

        link.href = canvas.toDataURL();

        link.click();

    });

}

// ============================
// Download PDF
// ============================

async function downloadPDF() {

    const { jsPDF } = window.jspdf;

    const canvas = await html2canvas(businessCard);

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF({

        orientation: "portrait",

        unit: "px",

        format: [canvas.width, canvas.height]

    });

    pdf.addImage(

        imgData,

        "PNG",

        0,

        0,

        canvas.width,

        canvas.height

    );

    pdf.save("BusinessCard.pdf");

}
