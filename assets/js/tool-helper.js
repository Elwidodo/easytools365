/**
 * EasyTools365 Helper Library
 * Version 1.0
 */

function showNotification(message, type = "success") {

    const oldToast = document.getElementById("easytools-toast");

    if (oldToast) {
        oldToast.remove();
    }

    const bg = {
        success: "bg-success",
        error: "bg-danger",
        warning: "bg-warning text-dark",
        info: "bg-primary"
    };

    const toast = document.createElement("div");

    toast.id = "easytools-toast";

    toast.className =
        `toast align-items-center text-white ${bg[type] || bg.success}
         border-0 position-fixed bottom-0 end-0 m-3 show`;

    toast.style.zIndex = "99999";

    toast.innerHTML = `
        <div class="d-flex">
            <div class="toast-body">
                ${message}
            </div>

            <button
                class="btn-close btn-close-white me-2 m-auto"
                data-bs-dismiss="toast">
            </button>
        </div>
    `;

    document.body.appendChild(toast);

    setTimeout(() => {

        toast.remove();

    }, 3000);

}
/**
 * Show loading state on button
 */
function showLoading(button, text = "Processing...") {

    if (!button.dataset.originalHtml) {
    button.dataset.originalHtml = button.innerHTML;
}

    button.disabled = true;

    button.innerHTML =
        `<span class="spinner-border spinner-border-sm me-2"></span>${text}`;

}

/**
 * Restore button
 */
function hideLoading(button) {

    if (button.dataset.originalHtml) {

        button.innerHTML =
            button.dataset.originalHtml;
delete button.dataset.originalHtml;
    }

    button.disabled = false;

}