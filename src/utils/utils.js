export const smoothScroll = (href) => {
    let elementId = href
    if(href.includes('#')){
        elementId = href.split("#")[1];
    }

    try{
        document.getElementById(elementId).scrollIntoView({behavior: "smooth", block: 'end'})
    }
    catch{}
}