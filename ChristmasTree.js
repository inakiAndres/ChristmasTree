'use strict';

(() => {
    const heightTree = process.argv[2];
    const christmasFelicitation = process.argv[3];
    
    const colors = ["\x1b[31m", "\x1b[32m", "\x1b[33m"];
    
        for (let rows=1; rows <= heightTree; rows+=2)
        {
            const lap = Math.floor(rows/christmasFelicitation.length);
            let charToPrint = rows < christmasFelicitation.length ? 
                christmasFelicitation.slice(0, rows)
                : christmasFelicitation.repeat(lap)+christmasFelicitation.slice(0, rows-christmasFelicitation.length*(lap));
            let tree ='';
            const number_of_spaces = heightTree-rows/2;
            for (let spaces=0; spaces <= number_of_spaces; spaces++)
            {
                tree += " ";
            }
            tree += charToPrint;
            for (let spaces=1; spaces <= number_of_spaces; spaces++)
            {
                tree += " ";
            }
            
            console.log(colors[Math.floor(Math.random() * colors.length)], tree);
        }
        let base = '';
        const baseText = '||||||||||'
        for (let spaces=1; spaces <= heightTree-baseText.length/2; spaces++)
        {
            base += " ";
        }
        base += baseText;
        console.log('\x1b[36m%s\x1b[0m', base)
})();
