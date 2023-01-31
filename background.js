// var previous_prompts = Array.from(document.querySelectorAll("div.flex.flex-col.items-start.gap-4.whitespace-pre-wrap"));
// let previous_prompts_last_index = previous_prompts.length - 2;
// let i = previous_prompts_last_index;

// document.addEventListener('keydown', function (event) {

//     if (event.code === "ArrowUp") {
//         console.log(event.code);
//         var prompt_value = previous_prompts[i].textContent;
//         previous_prompts[i].scrollIntoView();
//         let ancestor = previous_prompts[i].closest('.text-base');
//         ancestor.style.backgroundColor = "#eb9a38";
//         setTimeout(() => {
//             ancestor.style.backgroundColor = "#fff";
//         }, 1000);
//         i = i - 2;
//         // Select the second input field
//         var textarea = document.querySelector('textarea');
//         // Paste the copied content into the second input field
//         textarea.value = prompt_value;
//         textarea.style.height = textarea.scrollHeight + "px";
//         textarea.style.width = textarea.scrollWidth + "px";

//     }    
//     if (event.code === "ArrowDown") {
//         console.log(event.code);
//         if (i < previous_prompts_last_index - 2) {
//             i = i + 4;
//             var prompt_value = previous_prompts[i].textContent;
//             previous_prompts[i].scrollIntoView();
//             let ancestor = previous_prompts[i].closest('.text-base');
//             ancestor.style.backgroundColor = "#eb9a38";
//             setTimeout(() => {
//                 ancestor.style.backgroundColor = "#fff";
//             }, 1000);
//             i = i - 2;
//             // Copy the content of the input field
//             // Select the second input field
//             var textarea = document.querySelector('textarea');

//             // Paste the copied content into the second input field
//             textarea.value = prompt_value;
//             textarea.style.height = textarea.scrollHeight + "px";
//             textarea.style.width = textarea.scrollWidth + "px";
//         }
//     }
// });