'use strict';

(() => {
    const heightTree = process.argv[2];
    const christmasFelicitation = process.argv[3];
    
    const COLORS = ["\x1b[31m", "\x1b[32m", "\x1b[33m"];

        // Draw tree
        for (let rows=1; rows <= heightTree; rows+=2)
        {
            const lap = Math.floor(rows/christmasFelicitation.length);
            const charToPrint = rows < christmasFelicitation.length ? 
                christmasFelicitation.slice(0, rows)
                : christmasFelicitation.repeat(lap)+christmasFelicitation.slice(0, rows-christmasFelicitation.length*(lap));
            
            const number_of_spaces = heightTree-rows/2;

            const tree = (" ".repeat(number_of_spaces) + charToPrint);
            console.log(COLORS[Math.floor(Math.random() * COLORS.length)], tree);
        }

        // Draw base
        const baseText = '||||||||||'
        const base = " ".repeat(heightTree-baseText.length/2) + baseText + '\n';
        console.log('\x1b[36m%s\x1b[0m', base.repeat(heightTree/10));
})();
