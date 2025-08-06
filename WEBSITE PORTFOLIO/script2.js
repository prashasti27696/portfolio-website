
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener('click',function(e){
        e.preventDefault();

        document.querySelector(this.getAttribut('href')).scrollIntoView({
            behavior:'smooth'
        });
    });
});
            const sections=document.querySelectorAll('sections');
            window.addEventListener('scroll',()=> {
                sections.forEach(section =>{
                    const rect =section.getBoundingClientRect();
                    if(rect.top< window.innerHeight){
                        section.style.opacity=1;
                        section.style.transform='translateY(0)';
                    }
                });
            });