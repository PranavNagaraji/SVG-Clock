setInterval(()=>{
    let hours=document.getElementById('hours');
    let minutes=document.getElementById('minutes');
    let seconds=document.getElementById('seconds');
    let ampm=document.getElementById('ampm');

    let h_dot=document.querySelector('.h_dot');
    let m_dot=document.querySelector('.m_dot');
    let s_dot=document.querySelector('.s_dot');

    let hh=document.getElementById('hh');
    let mm=document.getElementById('mm');
    let ss=document.getElementById('ss');

    let h= new Date().getHours();
    let m= new Date().getMinutes();
    let s= new Date().getSeconds();
    let ap=h>=12?'PM':'AM';
    h=h>12?h-12:h;

    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

    hours.innerHTML=h+'h';
    minutes.innerHTML=m+'m';
    seconds.innerHTML=s+'s';
    ampm.innerHTML=ap;

    hh.style.strokeDashoffset=440-(440*h)/12;
    mm.style.strokeDashoffset=440-(440*m)/60;
    ss.style.strokeDashoffset=440-(440*s)/60;

    function updateDot(dot, offset) {
        const radius = 70;
        const circumference = -2 * Math.PI * radius;
        const angle = (offset / circumference) * 2 * Math.PI;

        const cx = radius + radius * Math.cos(angle);
        const cy = radius + radius * Math.sin(angle);

        dot.setAttribute('cx', cx);
        dot.setAttribute('cy', cy);
    }

    updateDot(h_dot, hh.style.strokeDashoffset);
    updateDot(m_dot, mm.style.strokeDashoffset);
    updateDot(s_dot, ss.style.strokeDashoffset);
});     