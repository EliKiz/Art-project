const accordion = () => { 

    const triggerAccordion = document.querySelectorAll('.accordion-heading'),
        blockAccordion = document.querySelectorAll('.accordion-block'),
        accordionWrapper = document.querySelector('#accordion');

        triggerAccordion.forEach((item, i) => { 
            item.addEventListener('click', (e) =>  { 
                let target = e.target; 
                // console.log('nextSibling', item.nextSibling);
                // console.log('nextElementSibling', item.nextElementSibling);
                // console.log('parentNode', item.parentNode);
                // console.log('parentNodeRatget', target.parentNode);
                // console.log('TARGET', target.nextElementSibling);
                let sibling = item.nextElementSibling;
                let targetContent = target.parentNode.nextElementSibling;

                // target.parentNode.classList.toggle('active-style');
                // sibling.classList.toggle('accordion-active');

                        //without disable content
                // if(targetContent.classList.contains('accordion-active')) { 
                //         console.log('dvoe')
                //         targetContent.style.maxHeight = targetContent.scrollHeight + 80 + 'px';
                // }else {
                //         targetContent.style.maxHeight = '0px';
                // }
               
                        // this

                // triggerAccordion.forEach(i => { 

                //         if(!this.classList.contains('active-style')) { 
                //                 i.classList.remove('active-style');
                //                 i.nextElementSibling.classList.remove('accordion-active');
                //                 i.nextElementSibling.style.maxHeight = 0 + 'px';
                //         }
                // });     

                // this.classList.toggle('active-style');
                // this.nextElementSibling.classList.toggle('accordion-active');

                // if(this.classList.contains('active-style')) { 
                //         this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + "px";
                // } else { 
                //         this.nextElementSibling.style.maxHeight = '0px';
                // }
               
                        // event

                triggerAccordion.forEach(i => { 
                        // console.log('targetContent', targetContent);
                        // console.log(i.nextElementSibling);
                        if(!targetContent.classList.contains('active-style')) { 
                                i.classList.remove('active-style');
                                i.nextElementSibling.classList.remove('accordion-active');
                                i.nextElementSibling.style.maxHeight = 0 + 'px';
                        } 
                });    

                target.parentNode.classList.add('active-style');
                sibling.classList.add('accordion-active');
                // console.log('is',targetContent);
                if(target.parentNode.classList.contains('active-style') ) {
                        
                        targetContent.style.maxHeight = targetContent.scrollHeight + 80 + 'px';
                } else {
                        targetContent.style.maxHeight = '0px';
                }
                        
                

                
                // const accordion = (triggersSelector) => {

                //         const accordion = (triggersSelector) => {
                        
                //             const btns = document.querySelectorAll(triggersSelector);
                        
                        
                        
                //             btns.forEach(btn => {
                        
                //                 btn.addEventListener('click', function() {
                        
                //                     btns.forEach(btn => {
                        
                //                         if (!this.classList.contains('active-style')){
                        
                //                             btn.classList.remove('active-style');
                        
                //                             btn.nextElementSibling.classList.remove('active-content');
                        
                //                             btn.nextElementSibling.style.maxHeight = 0 + 'px';
                        
                //                         }
                        
                //                      });
                        
                                     
                        
                                    
                        
                //                      this.classList.toggle('active-style');
                        
                //                     this.nextElementSibling.classList.toggle('active-content');
                        
                //                     if (this.classList.contains('active-style')) {
                        
                //                         this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + "px";
                        
                //                     } else {
                        
                //                         this.nextElementSibling.style.maxHeight = '0px';
                        
                //                     }
                        
                //                 });
                        
                //             });
                        
                //         };  
                
















                // if(sibling.classList.contains('accordion-active')) { 
                //     item.classList.remove('accordion-active');
                // } else{ 
                //     blockAccordion.forEach((child) => { 
                //         child.classList.add('accordion-active');
                //     });
                // }   
                
                // blockAccordion.forEach(item => { 
                //     if(item.classList.contains('accordion-active')) { 
                //         item.classList.remove('accordion-active');
                //     }else { 

                //     }
                //     item.classList.toggle('accordion-active');
                // });
            });
        });



                // css 

        // triggerAccordion.forEach(trigger => {
        //     trigger.addEventListener('click', function() {
                
                // if(!this.classList.contains('active')) { 
                //         console.log(this);
                //     triggerAccordion.forEach(item => { 
                //         item.classList.remove('active', 'active-style');
                //     });
                //     this.classList.add('active', 'active-style');
                // }

        //     });
                        //target
        //     trigger.addEventListener('click', (e) => { 
        //             let target = e.target;
        //             console.log(target.parentNode);
        //         if(target && !target.classList.contains('active')) { 
        //                 triggerAccordion.forEach(item => { 
        //                         item.classList.remove('active', 'active-style');
        //                 });
        //                 target.parentNode.classList.add('active', 'active-style');

        //         }
        //     });
        // });
        
        blockAccordion.forEach(item => { 
            item.classList.add('animated', 'fadeInDown');
        });
        

        // accordionWrapper.addEventListener('click', (e) => {
        //     let target = e.target;
        //     // console.log(target.nextSibling);

        //     if(target && target.tagName === 'SPAN') { 
        //         // console.log('done');
            

        //         blockAccordion.forEach(block => { 
        //            let pop =  block.nextSibling;
        //            block.style.display = 'block';
        //            console.log(pop);
        //            return pop;
        //         });
        //     }

        // });

};
export default accordion;