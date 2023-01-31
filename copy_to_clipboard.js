if (document.readyState !== 'loading') {
    console.log('document is already ready, just execute code here');
    everything();
} else {
    document.addEventListener('DOMContentLoaded', function () {
        console.log('document was not ready, place code here');
        everything();
    });
}
function everything() {
    // const left_flex_container = Array.from(document.querySelectorAll("div.flex.flex-col.relative.items-end"));
    // console.log(left_flex_container)
    // left_flex_container.forEach(el => {
    //     const container_copy_to_clipboard = document.createElement("div");
    //     container_copy_to_clipboard.classList.toggle("copy_to_clipboard_container");
    //     container_copy_to_clipboard.textContent = "copy";
    //     el.innerHTML = el.innerHTML + container_copy_to_clipboard;
    // })

    const svg_copy_to_clipboard = `<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
            <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
        </svg>`;
    const previous_prompts = Array.from(document.querySelectorAll("div.w-full.border-b.text-gray-800.group"));
    console.log(previous_prompts);

    previous_prompts.forEach(myDiv => {
        // Add the copy button to the top right of the div element
        const copyBtn = document.createElement("button");
        const right_side_editBtn_container = myDiv.querySelector("div.text-gray-400.flex.self-end.justify-center.visible");

        // copyBtn.textContent = "Copy";
        // copyBtn.classList.toggle("copy_to_clipboard_container");
        copyBtn.classList.add("p-1", "rounded-md", "hover:bg-gray-100", "hover:text-gray-700",
            "dark:text-gray-400", "dark:hover:bg-gray-700", "dark:hover:text-gray-200",
            "disabled:dark:hover:text-gray-400");

        copyBtn.innerHTML = svg_copy_to_clipboard;
        // myDiv.style.position = "relative";
        // copyBtn.style.position = "absolute";
        // copyBtn.style.top = "0";
        // copyBtn.style.right = "0";
        // myDiv.appendChild(copyBtn);
        right_side_editBtn_container.appendChild(copyBtn);

        // Copy the content of the div element to the clipboard when the button is clicked
        copyBtn.addEventListener("click", () => {
            const copyText = myDiv.textContent;
            navigator.clipboard.writeText(copyText);
        });
        //
        // const left_flex_container = document.querySelector("div.flex.flex-col.relative.items-end");
        // const container_copy_to_clipboard = document.createElement("div");
        // container_copy_to_clipboard.classList.toggle("copy_to_clipboard_container");
        // container_copy_to_clipboard.textContent = "copy";
        // left_flex_container.innerHTML = left_flex_container.innerHTML + container_copy_to_clipboard;

    });
}



