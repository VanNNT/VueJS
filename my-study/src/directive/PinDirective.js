function applyStyle(element, binding){
    Object.keys(binding.value).forEach((position) => {
        element.style[position] = binding.value[position]
    });
    element.style.position = 'absolute';
}

export default {
    bind: (element, binding) => {
        //if(binding.arg !== 'position') return;
        
        // Object.keys(binding.modifiers).forEach(key => {
        //     element.style[key] = '5px';
        // });
        // element.style.position = 'absolute';

        // or
        applyStyle(element,binding);
    },
    update: (element, binding) => {
        applyStyle(element,binding);
    }
}

//or

// export default function (element, binding){
//     Object.keys(binding.value).forEach((position) => {
//         element.style[position] = binding.value[position]
//     });
//     element.style.position = 'absolute';
// }