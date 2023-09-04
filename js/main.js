window.onload = () => {
    "use strict";
    if("serviceWorker" in navigator){
        window.addEventListener('load', async () =>{
            try {
                let reg;
                reg = await navigator.serviceWorker.register('/sw.js', { type: "module" });
                console.log('service worker registrada :)', reg);
            } catch (err) {
                console.log('service worker registro falhou :(', err);
            }
        }
        )
        navigator.serviceWorker.register("./sw.js");
    }
};