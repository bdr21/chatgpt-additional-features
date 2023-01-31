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
    console.log("content.js file running");


    appendStyleSheetToHTML();

    let previous_prompts;
    let previous_prompts_last_index;
    let i;
    let textarea = document.querySelector('textarea');
    let parentOfAllPrompts = document.querySelector("div[class='flex flex-col items-center text-sm h-full dark:bg-gray-800']");

    initPreviousPrompts();

    document.addEventListener('keydown', function (event) {
        if (event.ctrlKey && event.code === "ArrowUp") {
            console.log(event.code);
            copyAndPastePromptAndMore();
        }
        if (event.ctrlKey && event.code === "ArrowDown") {
            console.log(event.code);
            if (i < previous_prompts_last_index - 2) {
                i = i + 4;
                copyAndPastePromptAndMore();
            }
        }
    });

    const newPromptsObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'childList') {
                console.log("Detected a new prompt added!")
                initPreviousPrompts();
            }
        });
    });
    newPromptsObserver.observe(parentOfAllPrompts, { childList: true });

    textarea.addEventListener("input", function(){
        if (this.value === "") {
            console.log("textarea is empty!");
            i = previous_prompts_last_index;
        }
    });

    function initPreviousPrompts() {
        previous_prompts = Array.from(document.querySelectorAll("div.flex.flex-col.items-start.gap-4.whitespace-pre-wrap"));
        previous_prompts_last_index = previous_prompts.length - 2;
        i = previous_prompts_last_index;
        console.log(previous_prompts);
    }

    function copyPrompt(prompt) {
        return prompt.innerText;
    }

    function getPrompt() {
        return previous_prompts[i];
    }

    function pastePromptToTextArea(prompt_value) {
        textarea.value = prompt_value;
    }

    function adjustTextAreaDimensions(textarea) {
        textarea.style.height = textarea.scrollHeight + "px";
        textarea.style.width = textarea.scrollWidth + "px";
    }

    function flashCurrentPrompt(prompt) {
        // get div grandparent that contains the prompt
        let ancestor = prompt.closest('.w-full');
        // flash the bg color
        prompt.classList.toggle("flash");
        console.log(ancestor.classList);
    }

    function copyAndPastePromptAndMore() {
        let prompt = getPrompt();
        let prompt_value = copyPrompt(prompt);
        prompt.scrollIntoView();
        flashCurrentPrompt(prompt);
        pastePromptToTextArea(prompt_value);
        adjustTextAreaDimensions(textarea);
        i = i - 2;
    }

    function appendStyleSheetToHTML() {
        let link = document.createElement('link');
        link.href = chrome.runtime.getURL('styles.css');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        document.getElementsByTagName('head')[0].appendChild(link);
    }

    console.log(parentOfAllPrompts);
}