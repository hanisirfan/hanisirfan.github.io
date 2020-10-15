/**
 * @param {string} sourceFile - Location of gdient JSON file (local or server). Must include .json extension
 * @param {string} targetElement - Element that will output the gradient
 * @param {string} gradient - Gradient name in JSON file
 * @param {string} frameDuration - Duration of each frame (in seconds) . Min 1 second. Only for infinite gradientDuration.
 * @param {string} gradientDuration - Duration of a gradient (in seconds) . For infinite duration use 'i'.
 */
function gdient(sourceFile, targetElement, gradient, frameDuration, gradientDuration){
    fetch(sourceFile)
    .then(response => response.json())
    .then(data => {
        const target = document.querySelector(targetElement);
        var jsonData = data['gradient-list'][gradient];
        var frameList = jsonData['frames'];
        var frameListLength = frameList.length;
        //Add condition to check whether gradianDuration is infinite or not later   
        if(gradientDuration == 'i'){
            //Fixed gradientDuration
            target.style.transition = 'background-color 1s';
            console.log(frameDuration);
            for (let i = 0; i < frameListLength; i++){       
                setTimeout(function () {   
                    let frame = frameList[i];
                    target.style.background = 'linear-gradient' + '(' + frame['direction'] + ',' + frame['colors'] + ')';
                    console.log(frame['direction']);
                    console.log(frame['colors']);
                }, i * frameDuration * 1000)       
            }
        }else{
            //Fixed gradientDuration
            target.style.transition = 'background-color 1s';
            var frameDurationD = gradientDuration / frameListLength * 1000;
            console.log(frameDurationD);
            for (let i = 0; i < frameListLength; i++){       
                setTimeout(function () {   
                    let frame = frameList[i];
                    target.style.background = 'linear-gradient' + '(' + frame['direction'] + ',' + frame['colors'] + ')';
                    console.log(frame['direction']);
                    console.log(frame['colors']);
                }, i* frameDurationD)       
            }
        }
    });
}