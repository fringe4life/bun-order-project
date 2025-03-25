import { showPopover } from "./popover.ts";
import { getChildFromTemplate } from "./utilities.ts";

/**
 * @abstract renders to the dom the selected modal id
 * @param templateId the template id from the template tag 
 */
function showModal(templateId:string){
	const dialog = getChildFromTemplate<HTMLDialogElement>(templateId)
    
    document.body.appendChild(dialog)
    dialog.showModal()
    
}
/**
 * @abstract closes the modal as requested by the id
 * @param id the id of the string from the HTML Dialog Element
 */
function closeModal(id:string, popover: string | null = null){
    // TODO: check and make sure it is actually a htmldialogelement
    // instead of using type assertion
    const dialog = document.getElementById(id) as HTMLDialogElement
    dialog.classList.add('closing')
    
    window.setTimeout(() =>  {
        dialog.close(); 
        dialog.remove();
    }, 500)
   
    if(popover){
        showPopover(popover)
    }
}

/**
 * @abstract adds a space every four letters
 * @param input takes as a parameter the input field for credit card
 */
function formatCreditCardNumber(input: HTMLInputElement){
    const value = input.value.replace(/\s/g, ''); // Remove all spaces
    let formattedValue = '';

    for (let i = 0; i < value.length; i++) {
        if (i > 0 && (i % 4) === 0) {
            formattedValue += ' ';
        }
        formattedValue += value[i];
    }

    input.value = formattedValue;
}
// exporting the function to be used in other files
export {showModal, closeModal, formatCreditCardNumber}