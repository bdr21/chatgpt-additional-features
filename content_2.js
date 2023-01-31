let parentOfAllPrompts = document.querySelector("div[class='flex flex-col items-center text-sm h-full dark:bg-gray-800']");
const newPromptsObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
            console.log("Detected a new prompt added!")
            initPreviousPrompts();
        }
    });
});
newPromptsObserver.observe(parentOfAllPrompts, { childList: true });