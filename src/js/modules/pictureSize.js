const pictureSize = (imgSelector) => { 
    const blocks = document.querySelectorAll(imgSelector);

    function showBlocks(block) { 
        const img = block.querySelector('img');

        img.src = img.src.slice(0, -4) + '-1.png';
        block.querySelectorAll('p:not(.sizes-hit)').forEach(p =>{ 
            p.style.display = 'none';
        });

    }
    function hideBlocks(block) { 
        const img = block.querySelector('img');

        img.src = img.src.slice(0, -6) + '.png';
        block.querySelectorAll('p:not(.sizes-hit)').forEach(p =>{ 
            p.style.display = 'block';
        });

    }

    blocks.forEach(block => {
        block.addEventListener('mouseover', () => { 
            showBlocks(block);
        });
        block.addEventListener('mouseout', () => { 
            hideBlocks(block);
        });
    });


  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // function showImg(block)  { 

    //     const img = document.querySelector('img');
    //     img.src = img.src.slice(0, -4) + '-1.png';

    //     block.querySelectorAll('p:not(.sizes-hit)').forEach(p => { 
    //         p.display = 'none';
    //     });

    // }

    // function hideImg(block)  { 

    //     const img = document.querySelector('img');
    //     img.src = img.src.slice(0, -6) + '.png';

    //     block.querySelectorAll('p:not(.sizes-hit)').forEach(p => { 
    //         p.display = 'block';
    //     });

    // }

    // blocks.forEach(block => { 
    //     block.addEventListener('mouseover', () => { 
    //         console.log('done')
    //         showImg(block);
    //     });
    //     block.addEventListener('mouseout', () => { 
    //         hideImg(block);
    //         console.log('done')
    //     });
    // });

};
export default pictureSize;