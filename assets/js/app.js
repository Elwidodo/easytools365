/* =========================================
   EASYTOOLS365 - MAIN JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================
       LIVE SEARCH
    ===================================== */

    const searchInput = document.getElementById("toolSearch");
    const toolItems = document.querySelectorAll(".tool-item");
    const noResults = document.getElementById("noResults");

    if (searchInput) {

        searchInput.addEventListener("input", function () {

            const keyword = searchInput.value
                .toLowerCase()
                .trim();

            /* Jika search kosong */
            if (keyword === "") {

                toolItems.forEach(function (tool) {
                    tool.style.display = "";
                });

                if (noResults) {
                    noResults.style.display = "none";
                }

                removeSearchCategory();

                return;
            }

            let found = 0;

            /* =====================================
   LIVE SEARCH
===================================== */

const searchInput = document.getElementById("toolSearch");
const toolItems = document.querySelectorAll(".tool-item");
const noResults = document.getElementById("noResults");

if (searchInput) {

    searchInput.addEventListener("input", function () {

        const keyword = searchInput.value
            .toLowerCase()
            .trim();

        let found = 0;

        toolItems.forEach(function (tool) {

            const toolName =
                (tool.dataset.name || "").toLowerCase();

            const title =
                (tool.querySelector("h3")?.textContent || "")
                    .toLowerCase();

            const description =
                (tool.querySelector("p")?.textContent || "")
                    .toLowerCase();

            const searchableText =
                toolName + " " + title + " " + description;

            if (
                keyword === "" ||
                searchableText.includes(keyword)
            ) {

                tool.style.display = "";

                found++;

            } else {

                tool.style.display = "none";

            }

        });

        if (noResults) {

            noResults.style.display =
                found === 0 ? "block" : "none";

        }

    });

}
            /* =================================
               CATEGORY SEARCH
            ================================= */

            if (found === 0) {

                const category = findCategory(keyword);

                if (category) {

                    showSearchCategory(category);

                    if (noResults) {
                        noResults.style.display = "none";
                    }

                    return;
                }
            }


            /* =================================
               NO RESULTS
            ================================= */

            removeSearchCategory();

            if (noResults) {

                if (found === 0) {

                    noResults.style.display = "block";

                } else {

                    noResults.style.display = "none";

                }

            }

        });

    }


    /* =====================================
       CATEGORY SEARCH DATA
    ===================================== */

    function findCategory(keyword) {

        const categories = [

            {
                keywords: [
                    "pdf",
                    "pdf tool",
                    "document",
                    "merge pdf",
                    "split pdf",
                    "compress pdf",
                    "pdf converter"
                ],
                name: "PDF Tools",
                description:
                    "Merge, split, convert, compress and manage PDF files.",
                url: "categories/pdf-tools.html",
                icon: "bi-file-earmark-pdf"
            },

            {
                keywords: [
                    "image",
                    "photo",
                    "picture",
                    "jpg",
                    "jpeg",
                    "png",
                    "webp"
                ],
                name: "Image Tools",
                description:
                    "Resize, compress and work with images online.",
                url: "categories/image-tools.html",
                icon: "bi-image"
            },

            {
                keywords: [
                    "text",
                    "word",
                    "character",
                    "case",
                    "counter",
                    "lorem"
                ],
                name: "Text Tools",
                description:
                    "Useful tools for writing, text formatting and analysis.",
                url: "categories/text-tools.html",
                icon: "bi-fonts"
            },

            {
                keywords: [
                    "developer",
                    "developer tool",
                    "json",
                    "base64",
                    "url",
                    "encode",
                    "decode",
                    "formatter",
                    "code"
                ],
                name: "Developer Tools",
                description:
                    "Useful utilities for developers and web projects.",
                url: "categories/developer-tools.html",
                icon: "bi-code-slash"
            },

            {
                keywords: [
                    "calculator",
                    "calculate",
                    "age",
                    "math",
                    "percentage",
                    "loan"
                ],
                name: "Calculator Tools",
                description:
                    "Useful calculators for everyday calculations.",
                url: "categories/calculator.html",
                icon: "bi-calculator"
            }

        ];


        for (const category of categories) {

            for (const item of category.keywords) {

                if (keyword.includes(item)) {
                    return category;
                }

            }

        }

        return null;
    }


    /* =====================================
       SHOW CATEGORY SEARCH RESULT
    ===================================== */

    function showSearchCategory(category) {

        removeSearchCategory();

        const container =
            document.getElementById("toolsContainer");

        if (!container) return;

        const wrapper =
            document.createElement("div");

        wrapper.id = "searchCategoryResult";

        wrapper.className =
            "col-12";

        wrapper.innerHTML = `

            <div class="card border-0 shadow-sm p-4 text-center">

                <div class="mb-3">

                    <i class="bi ${category.icon}"
                       style="
                       font-size:48px;
                       color:#0d6efd;
                       ">
                    </i>

                </div>

                <h3 class="mb-2">
                    ${category.name}
                </h3>

                <p class="text-muted mb-4">
                    ${category.description}
                </p>

                <a href="${category.url}"
                   class="btn btn-primary">

                    Open ${category.name}

                    <i class="bi bi-arrow-right ms-1"></i>

                </a>

            </div>

        `;

        container.prepend(wrapper);
    }


    /* =====================================
       REMOVE CATEGORY SEARCH RESULT
    ===================================== */

    function removeSearchCategory() {

        const oldResult =
            document.getElementById(
                "searchCategoryResult"
            );

        if (oldResult) {
            oldResult.remove();
        }

    }


    /* =====================================
       DARK MODE
    ===================================== */

    const darkModeButton =
        document.getElementById("darkModeButton");

    const savedTheme =
        localStorage.getItem("easytools-theme");


    if (savedTheme === "dark") {

        document.body.classList.add("dark-mode");

        changeDarkModeIcon(true);

    }


    if (darkModeButton) {

        darkModeButton.addEventListener(
            "click",
            function () {

                document.body.classList.toggle(
                    "dark-mode"
                );

                const darkModeActive =
                    document.body.classList.contains(
                        "dark-mode"
                    );


                if (darkModeActive) {

                    localStorage.setItem(
                        "easytools-theme",
                        "dark"
                    );

                } else {

                    localStorage.setItem(
                        "easytools-theme",
                        "light"
                    );

                }


                changeDarkModeIcon(
                    darkModeActive
                );

            }
        );

    }


    /* =====================================
       DARK MODE ICON
    ===================================== */

    function changeDarkModeIcon(isDark) {

        if (!darkModeButton) return;


        if (isDark) {

            darkModeButton.innerHTML =
                '<i class="bi bi-sun-fill"></i>';

            darkModeButton.setAttribute(
                "aria-label",
                "Switch to light mode"
            );

        } else {

            darkModeButton.innerHTML =
                '<i class="bi bi-moon-stars"></i>';

            darkModeButton.setAttribute(
                "aria-label",
                "Switch to dark mode"
            );

        }

    }

});