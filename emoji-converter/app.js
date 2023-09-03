const submit_btn=document.querySelector('button')
const textArea_Elem=document.querySelector('textarea')

textArea_Elem.addEventListener('input',()=>{
textArea_Elem.value=textArea_Elem.value.replace(/:\)/g,'😀')
textArea_Elem.value=textArea_Elem.value.replace(/:\(/g,'🙁')
textArea_Elem.value=textArea_Elem.value.replace(/:D/g,'😃')
textArea_Elem.value=textArea_Elem.value.replace(/:\|/g,'😐')
textArea_Elem.value=textArea_Elem.value.replace(/>_</g,'😆')
textArea_Elem.value=textArea_Elem.value.replace(/:_\(/g,'😢')
})