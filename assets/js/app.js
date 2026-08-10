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

            let found = 0;

            toolItems.forEach(function (tool) {

                const toolName =
                    tool.dataset.name.toLowerCase();

                if (toolName.includes(keyword)) {

                    tool.style.display = "";
                    found++;

                } else {

                    tool.style.display = "none";

                }

            });

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

        } else {

            darkModeButton.innerHTML =
                '<i class="bi bi-moon-stars"></i>';

        }

    }

});