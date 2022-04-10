const scrollProgressElement = document.querySelector('#scroll-progress');
const headLineElement = document.querySelector('#head-line');
const linkButton = document.querySelectorAll('.link');

function scrollProgress() {
    const totalHeightOfWebPage = document.body.scrollHeight;
    const currentDistanceFromTop = document.documentElement.scrollTop; 
    const windowHeight = document.documentElement.clientHeight;

    const scrolledPercentage = (currentDistanceFromTop / (totalHeightOfWebPage - windowHeight)) * 100;
    
    scrollProgressElement.style.width = Math.round(scrolledPercentage) + "%";
    //headLineElement.style.fontSize = Math.round(scrolledPercentage) * 20 + "%";
    console.log(Math.round(scrolledPercentage) + "%")

    const headlinePercentage = Math.round(scrolledPercentage) * 16

    if(scrolledPercentage < 25 || 0)
    {
        headLineElement.style.fontSize = headlinePercentage + "%";
        headLineElement.style.paddingTop = 50 -(scrolledPercentage /2) + "%";
    }

    console.log(-(scrolledPercentage / 4))

    
}

document.addEventListener('scroll', scrollProgress);
    
function hoverOverButton() {
   linkButton.style.flex = 4; 
   console.log(linkButton)
}
    
document.addEventListener('hoverover', hoverOverButton)

