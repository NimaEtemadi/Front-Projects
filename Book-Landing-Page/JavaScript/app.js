// tooltips
function inital_bootstrap_tooltips(){
    const tooltips = document.querySelectorAll(".tt")
    tooltips.forEach((t)=>{
        new bootstrap.Tooltip(t)
    })
}

inital_bootstrap_tooltips()