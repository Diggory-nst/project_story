let des = document.querySelectorAll('.des-wrap');
let lists = document.querySelectorAll('.slide');
let listsMob = document.querySelectorAll('.slideMobile');
initIndex = 0;

// SLIDE SHOW FOR MOBILE

let desMobile = document.querySelectorAll('.des-wrap-mobile');
initIndexMobile = 0;

if(screen.width >= 1500 ){
    setInterval(() => {
        let style0 = window.getComputedStyle(lists[0]);
        let transformValue0 = style0.getPropertyValue('transform');
        let zIndex0 = style0.getPropertyValue('z-index');
        const matrixValues0 = transformValue0.match(/^matrix\(([^\)]+)\)$/)[1].split(',').map(Number);
        const translateX0 = matrixValues0[4];
    
        if(translateX0 == -96){
            lists[0].style.transform = 'translateX(-249px)';
            lists[0].style.top = '10px';
            lists[0].style.height = '236px';
            lists[0].style.zIndex = '6';
            lists[0].dataset.index = 0;
        }else if(translateX0 == -249){
            lists[0].style.transform = 'translateX(-404px)';
            lists[0].style.top = '20px';
            lists[0].style.height = '216px';
            lists[0].style.zIndex = '5';
            lists[0].dataset.index = 0;
        }else if(translateX0 == -404){
            lists[0].style.transform = 'translateX(209px)';
            lists[0].style.top = '20px';
            lists[0].style.height = '216px';
            lists[0].style.zIndex = '4';
            lists[0].dataset.index = 0;
        }else if(translateX0 == 209 && zIndex0 == '4'){
            lists[0].style.zIndex = '5';
            lists[0].dataset.index = 0;
        }else if(translateX0 == 209 && zIndex0 == '5'){
            lists[0].style.transform = 'translateX(55px)';
            lists[0].style.top = '10px';
            lists[0].style.height = '236px';
            lists[0].style.zIndex = '6';
            lists[0].dataset.index = 0;
        }else if(translateX0 == 55){
            lists[0].style.transform = 'translateX(-96px)';
            lists[0].style.top = '0px';
            lists[0].style.height = '256px';
            lists[0].style.zIndex = '7';
            lists[0].dataset.index = 7;
        }
    
        // 1
    
        let style1 = window.getComputedStyle(lists[1]);
        let transformValue1 = style1.getPropertyValue('transform');
        let zIndex1 = style1.getPropertyValue('z-index');
        const matrixValues1 = transformValue1.match(/^matrix\(([^\)]+)\)$/)[1].split(',').map(Number);
        const translateX1 = matrixValues1[4];
    
        if(translateX1 == 458){
            lists[1].style.transform = 'translateX(307px)';
            lists[1].style.top = '0px';
            lists[1].style.height = '256px';
            lists[1].style.zIndex = '7';
            lists[1].dataset.index = 7;
        }else if(translateX1 == 307){
            lists[1].style.transform = 'translateX(154px)';
            lists[1].style.top = '10px';
            lists[1].style.height = '236px';
            lists[1].style.zIndex = '6';
            lists[1].dataset.index = 0;
        }else if(translateX1 == 154){
            lists[1].style.transform = 'translateX(-1px)';
            lists[1].style.top = '20px';
            lists[1].style.height = '216px';
            lists[1].style.zIndex = '5';
            lists[1].dataset.index = 0;
        }else if(translateX1 == -1){
            lists[1].style.transform = 'translateX(612px)';
            lists[1].style.top = '20px';
            lists[1].style.height = '216px';
            lists[1].style.zIndex = '4';
            lists[1].dataset.index = 0;
        }else if(translateX1 == 612 && zIndex1 == '4'){
            lists[1].style.zIndex = '5';
            lists[1].dataset.index = 0;
        }else if(translateX1 == 612 && zIndex1 == '5'){
            lists[1].style.transform = 'translateX(458px)';
            lists[1].style.top = '10px';
            lists[1].style.height = '236px';
            lists[1].style.zIndex = '6';
            lists[1].dataset.index = 0;
        }
    
        // 2
    
        let style2 = window.getComputedStyle(lists[2]);
        let transformValue2 = style2.getPropertyValue('transform');
        let zIndex2 = style2.getPropertyValue('z-index');
        const matrixValues2 = transformValue2.match(/^matrix\(([^\)]+)\)$/)[1].split(',').map(Number);
        const translateX2 = matrixValues2[4];
    
        if(translateX2 == 612 && zIndex2 == '5'){
            lists[2].style.transform = 'translateX(458px)';
            lists[2].style.top = '10px';
            lists[2].style.height = '236px';
            lists[2].style.zIndex = '6';
            lists[2].dataset.index = 0;
        }else if(translateX2 == 458){
            lists[2].style.transform = 'translateX(307px)';
            lists[2].style.top = '0px';
            lists[2].style.height = '256px';
            lists[2].style.zIndex = '7';
            lists[2].dataset.index = 7;
        }else if(translateX2 == 307){
            lists[2].style.transform = 'translateX(154px)';
            lists[2].style.top = '10px';
            lists[2].style.height = '236px';
            lists[2].style.zIndex = '6';
            lists[2].dataset.index = 0;
        }else if(translateX2 == 154){
            lists[2].style.transform = 'translateX(-1px)';
            lists[2].style.top = '20px';
            lists[2].style.height = '216px';
            lists[2].style.zIndex = '5';
            lists[2].dataset.index = 0;
        }else if(translateX2 == -1){
            lists[2].style.transform = 'translateX(612px)';
            lists[2].style.top = '20px';
            lists[2].style.height = '216px';
            lists[2].style.zIndex = '4';
            lists[2].dataset.index = 0;
        }else if(translateX2 == 612 && zIndex2 == '4'){
            lists[2].style.zIndex = '5';
            lists[2].dataset.index = 0;
        }
    
        // 3
    
        let style3 = window.getComputedStyle(lists[3]);
        let transformValue3 = style3.getPropertyValue('transform');
        let zIndex3 = style3.getPropertyValue('z-index');
        const matrixValues3 = transformValue3.match(/^matrix\(([^\)]+)\)$/)[1].split(',').map(Number);
        const translateX3 = matrixValues3[4];
    
        if(translateX3 == 612 && zIndex3 == '4'){
            lists[3].style.top = '20px';
            lists[3].style.height = '216px';
            lists[3].style.zIndex = '5';
            lists[3].dataset.index = 0;
        }else if(translateX3 == 612 && zIndex3 == '5'){
            lists[3].style.transform = 'translateX(458px)';
            lists[3].style.top = '10px';
            lists[3].style.height = '236px';
            lists[3].style.zIndex = '6';
            lists[3].dataset.index = 0;
        }else if(translateX3 == 458){
            lists[3].style.transform = 'translateX(307px)';
            lists[3].style.top = '0px';
            lists[3].style.height = '256px';
            lists[3].style.zIndex = '7';
            lists[3].dataset.index = 7;
        }else if(translateX3 == 307){
            lists[3].style.transform = 'translateX(154px)';
            lists[3].style.top = '10px';
            lists[3].style.height = '236px';
            lists[3].style.zIndex = '6';
            lists[3].dataset.index = 0;
        }else if(translateX3 == 154){
            lists[3].style.transform = 'translateX(-1px)';
            lists[3].style.top = '20px';
            lists[3].style.height = '216px';
            lists[3].style.zIndex = '5';
            lists[3].dataset.index = 0;
        }else if(translateX3 == -1){
            lists[3].style.transform = 'translateX(612px)';
            lists[3].style.top = '20px';
            lists[3].style.height = '216px';
            lists[3].style.zIndex = '4';
            lists[3].dataset.index = 0;
        }
    
        // 4
    
        let style4 = window.getComputedStyle(lists[4]);
        let transformValue4 = style4.getPropertyValue('transform');
        let zIndex4 = style4.getPropertyValue('z-index');
        const matrixValues4 = transformValue4.match(/^matrix\(([^\)]+)\)$/)[1].split(',').map(Number);
        const translateX4 = matrixValues4[4];
    
        if(translateX4 == -1){
            lists[4].style.transform = 'translateX(612px)';
            lists[4].style.top = '20px';
            lists[4].style.height = '216px';
            lists[4].style.zIndex = '4';
            lists[4].dataset.index = 0;
        }else if(translateX4 == 612 && zIndex4 == '4'){
            lists[4].style.zIndex = '5';
            lists[4].dataset.index = 0;
        }else if(translateX4 == 612 && zIndex4 == 5){
            lists[4].style.transform = 'translateX(458px)';
            lists[4].style.top = '10px';
            lists[4].style.height = '236px';
            lists[4].style.zIndex = '6';
            lists[4].dataset.index = 0;
        }else if(translateX4 == 458){
            lists[4].style.transform = 'translateX(307px)';
            lists[4].style.top = '0px';
            lists[4].style.height = '256px';
            lists[4].style.zIndex = '7';
            lists[4].dataset.index = 7;
        }else if(translateX4 == 307){
            lists[4].style.transform = 'translateX(154px)';
            lists[4].style.top = '10px';
            lists[4].style.height = '236px';
            lists[4].style.zIndex = '6';
            lists[4].dataset.index = 0;
        }else if(translateX4 == 154){
            lists[4].style.transform = 'translateX(-1px)';
            lists[4].style.top = '20px';
            lists[4].style.height = '216px';
            lists[4].style.zIndex = '5';
            lists[4].dataset.index = 0;
        }
    
        // 5
    
        let style5 = window.getComputedStyle(lists[5]);
        let transformValue5 = style5.getPropertyValue('transform');
        let zIndex5 = style5.getPropertyValue('z-index');
        const matrixValues5 = transformValue5.match(/^matrix\(([^\)]+)\)$/)[1].split(',').map(Number);
        const translateX5 = matrixValues5[4];
    
        if(translateX5 == 154){
            lists[5].style.transform = 'translateX(-1px)';
            lists[5].style.top = '20px';
            lists[5].style.height = '216px';
            lists[5].style.zIndex = '5';
            lists[5].dataset.index = 0;
        }else if(translateX5 == -1){
            lists[5].style.transform = 'translateX(612px)';
            lists[5].style.top = '20px';
            lists[5].style.height = '216px';
            lists[5].style.zIndex = '4';
            lists[5].dataset.index = 0;
        }else if(translateX5 == 612 && zIndex5 == '4'){
            lists[5].style.zIndex = '5';
            lists[5].dataset.index = 0;
        }else if(translateX5 == 612 && zIndex5 == '5'){
            lists[5].style.transform = 'translateX(458px)';
            lists[5].style.top = '10px';
            lists[5].style.height = '236px';
            lists[5].style.zIndex = '6';
            lists[5].dataset.index = 0;
        }else if(translateX5 == 458){
            lists[5].style.transform = 'translateX(307px)';
            lists[5].style.top = '0px';
            lists[5].style.height = '256px';
            lists[5].style.zIndex = '7';
            lists[5].dataset.index = 7;
        }else if(translateX5 == 307){
            lists[5].style.transform = 'translateX(154px)';
            lists[5].style.top = '10px';
            lists[5].style.height = '236px';
            lists[5].style.zIndex = '6';
            lists[5].dataset.index = 0;
        }
    
        for(var i = 0; i < lists.length ; i++){
    
            if(lists[i].dataset.index == 7){
                des[i].style.visibility = 'visible';
                des[initIndex].style.visibility = 'hidden';
                initIndex = i;
            }
        }
    }, 3000)
}


if(screen.width >= 1200 && screen.width <= 1500 ){
    setInterval(() => {
        let style0 = window.getComputedStyle(lists[0]);
        let transformValue0 = style0.getPropertyValue('transform');
        let zIndex0 = style0.getPropertyValue('z-index');
        const matrixValues0 = transformValue0.match(/^matrix\(([^\)]+)\)$/)[1].split(',').map(Number);
        const translateX0 = matrixValues0[4];
    
        if(translateX0 == -84){
            lists[0].style.transform = 'translateX(-197px)';
            lists[0].style.top = '10px';
            lists[0].style.height = '212px';
            lists[0].style.zIndex = '6';
            lists[0].dataset.index = 0;
        }else if(translateX0 == -197){
            lists[0].style.transform = 'translateX(-303px)';
            lists[0].style.top = '20px';
            lists[0].style.height = '192px';
            lists[0].style.zIndex = '5';
            lists[0].dataset.index = 0;
        }else if(translateX0 == -303){
            lists[0].style.transform = 'translateX(133px)';
            lists[0].style.top = '20px';
            lists[0].style.height = '192px';
            lists[0].style.zIndex = '4';
            lists[0].dataset.index = 0;
        }else if(translateX0 == 133 && zIndex0 == '4'){
            lists[0].style.zIndex = '5';
            lists[0].dataset.index = 0;
        }else if(translateX0 == 133 && zIndex0 == '5'){
            lists[0].style.transform = 'translateX(27px)';
            lists[0].style.top = '10px';
            lists[0].style.height = '212px';
            lists[0].style.zIndex = '6';
            lists[0].dataset.index = 0;
        }else if(translateX0 == 27){
            lists[0].style.transform = 'translateX(-84px)';
            lists[0].style.top = '0px';
            lists[0].style.height = '232px';
            lists[0].style.zIndex = '7';
            lists[0].dataset.index = 7;
        }
    
        // 1
    
        let style1 = window.getComputedStyle(lists[1]);
        let transformValue1 = style1.getPropertyValue('transform');
        let zIndex1 = style1.getPropertyValue('z-index');
        const matrixValues1 = transformValue1.match(/^matrix\(([^\)]+)\)$/)[1].split(',').map(Number);
        const translateX1 = matrixValues1[4];
    
        if(translateX1 == 330){
            lists[1].style.transform = 'translateX(219px)';
            lists[1].style.top = '0px';
            lists[1].style.height = '232px';
            lists[1].style.zIndex = '7';
            lists[1].dataset.index = 7;
        }else if(translateX1 == 219){
            lists[1].style.transform = 'translateX(106px)';
            lists[1].style.top = '10px';
            lists[1].style.height = '212px';
            lists[1].style.zIndex = '6';
            lists[1].dataset.index = 0;
        }else if(translateX1 == 106){
            lists[1].style.transform = 'translateX(0px)';
            lists[1].style.top = '20px';
            lists[1].style.height = '192px';
            lists[1].style.zIndex = '5';
            lists[1].dataset.index = 0;
        }else if(translateX1 == 0){
            lists[1].style.transform = 'translateX(436px)';
            lists[1].style.top = '20px';
            lists[1].style.height = '192px';
            lists[1].style.zIndex = '4';
            lists[1].dataset.index = 0;
        }else if(translateX1 == 436 && zIndex1 == '4'){
            lists[1].style.zIndex = '5';
            lists[1].dataset.index = 0;
        }else if(translateX1 == 436 && zIndex1 == '5'){
            lists[1].style.transform = 'translateX(330px)';
            lists[1].style.top = '10px';
            lists[1].style.height = '212px';
            lists[1].style.zIndex = '6';
            lists[1].dataset.index = 0;
        }
    
        // 2
    
        let style2 = window.getComputedStyle(lists[2]);
        let transformValue2 = style2.getPropertyValue('transform');
        let zIndex2 = style2.getPropertyValue('z-index');
        const matrixValues2 = transformValue2.match(/^matrix\(([^\)]+)\)$/)[1].split(',').map(Number);
        const translateX2 = matrixValues2[4];
    
        if(translateX2 == 436 && zIndex2 == '5'){
            lists[2].style.transform = 'translateX(330px)';
            lists[2].style.top = '10px';
            lists[2].style.height = '212px';
            lists[2].style.zIndex = '6';
            lists[2].dataset.index = 0;
        }else if(translateX2 == 330){
            lists[2].style.transform = 'translateX(219px)';
            lists[2].style.top = '0px';
            lists[2].style.height = '232px';
            lists[2].style.zIndex = '7';
            lists[2].dataset.index = 7;
        }else if(translateX2 == 219){
            lists[2].style.transform = 'translateX(106px)';
            lists[2].style.top = '10px';
            lists[2].style.height = '212px';
            lists[2].style.zIndex = '6';
            lists[2].dataset.index = 0;
        }else if(translateX2 == 106){
            lists[2].style.transform = 'translateX(0px)';
            lists[2].style.top = '20px';
            lists[2].style.height = '192px';
            lists[2].style.zIndex = '5';
            lists[2].dataset.index = 0;
        }else if(translateX2 == 0){
            lists[2].style.transform = 'translateX(436px)';
            lists[2].style.top = '20px';
            lists[2].style.height = '192px';
            lists[2].style.zIndex = '4';
            lists[2].dataset.index = 0;
        }else if(translateX2 == 436 && zIndex2 == '4'){
            lists[2].style.zIndex = '5';
            lists[2].dataset.index = 0;
        }
    
        // 3
    
        let style3 = window.getComputedStyle(lists[3]);
        let transformValue3 = style3.getPropertyValue('transform');
        let zIndex3 = style3.getPropertyValue('z-index');
        const matrixValues3 = transformValue3.match(/^matrix\(([^\)]+)\)$/)[1].split(',').map(Number);
        const translateX3 = matrixValues3[4];
    
        if(translateX3 == 436 && zIndex3 == '4'){
            lists[3].style.top = '20px';
            lists[3].style.height = '192px';
            lists[3].style.zIndex = '5';
            lists[3].dataset.index = 0;
        }else if(translateX3 == 436 && zIndex3 == '5'){
            lists[3].style.transform = 'translateX(330px)';
            lists[3].style.top = '10px';
            lists[3].style.height = '212px';
            lists[3].style.zIndex = '6';
            lists[3].dataset.index = 0;
        }else if(translateX3 == 330){
            lists[3].style.transform = 'translateX(219px)';
            lists[3].style.top = '0px';
            lists[3].style.height = '232px';
            lists[3].style.zIndex = '7';
            lists[3].dataset.index = 7;
        }else if(translateX3 == 219){
            lists[3].style.transform = 'translateX(106px)';
            lists[3].style.top = '10px';
            lists[3].style.height = '212px';
            lists[3].style.zIndex = '6';
            lists[3].dataset.index = 0;
        }else if(translateX3 == 106){
            lists[3].style.transform = 'translateX(0px)';
            lists[3].style.top = '20px';
            lists[3].style.height = '192px';
            lists[3].style.zIndex = '5';
            lists[3].dataset.index = 0;
        }else if(translateX3 == 0){
            lists[3].style.transform = 'translateX(436px)';
            lists[3].style.top = '20px';
            lists[3].style.height = '192px';
            lists[3].style.zIndex = '4';
            lists[3].dataset.index = 0;
        }
    
        // 4
    
        let style4 = window.getComputedStyle(lists[4]);
        let transformValue4 = style4.getPropertyValue('transform');
        let zIndex4 = style4.getPropertyValue('z-index');
        const matrixValues4 = transformValue4.match(/^matrix\(([^\)]+)\)$/)[1].split(',').map(Number);
        const translateX4 = matrixValues4[4];
    
        if(translateX4 == 0){
            lists[4].style.transform = 'translateX(436px)';
            lists[4].style.top = '20px';
            lists[4].style.height = '192px';
            lists[4].style.zIndex = '4';
            lists[4].dataset.index = 0;
        }else if(translateX4 == 436 && zIndex4 == '4'){
            lists[4].style.zIndex = '5';
            lists[4].dataset.index = 0;
        }else if(translateX4 == 436 && zIndex4 == 5){
            lists[4].style.transform = 'translateX(330px)';
            lists[4].style.top = '10px';
            lists[4].style.height = '212px';
            lists[4].style.zIndex = '6';
            lists[4].dataset.index = 0;
        }else if(translateX4 == 330){
            lists[4].style.transform = 'translateX(219px)';
            lists[4].style.top = '0px';
            lists[4].style.height = '232px';
            lists[4].style.zIndex = '7';
            lists[4].dataset.index = 7;
        }else if(translateX4 == 219){
            lists[4].style.transform = 'translateX(106px)';
            lists[4].style.top = '10px';
            lists[4].style.height = '212px';
            lists[4].style.zIndex = '6';
            lists[4].dataset.index = 0;
        }else if(translateX4 == 106){
            lists[4].style.transform = 'translateX(0px)';
            lists[4].style.top = '20px';
            lists[4].style.height = '192px';
            lists[4].style.zIndex = '5';
            lists[4].dataset.index = 0;
        }
    
        // 5
    
        let style5 = window.getComputedStyle(lists[5]);
        let transformValue5 = style5.getPropertyValue('transform');
        let zIndex5 = style5.getPropertyValue('z-index');
        const matrixValues5 = transformValue5.match(/^matrix\(([^\)]+)\)$/)[1].split(',').map(Number);
        const translateX5 = matrixValues5[4];
    
        if(translateX5 == 106){
            lists[5].style.transform = 'translateX(0px)';
            lists[5].style.top = '20px';
            lists[5].style.height = '192px';
            lists[5].style.zIndex = '5';
            lists[5].dataset.index = 0;
        }else if(translateX5 == 0){
            lists[5].style.transform = 'translateX(436px)';
            lists[5].style.top = '20px';
            lists[5].style.height = '192px';
            lists[5].style.zIndex = '4';
            lists[5].dataset.index = 0;
        }else if(translateX5 == 436 && zIndex5 == '4'){
            lists[5].style.zIndex = '5';
            lists[5].dataset.index = 0;
        }else if(translateX5 == 436 && zIndex5 == '5'){
            lists[5].style.transform = 'translateX(330px)';
            lists[5].style.top = '10px';
            lists[5].style.height = '212px';
            lists[5].style.zIndex = '6';
            lists[5].dataset.index = 0;
        }else if(translateX5 == 330){
            lists[5].style.transform = 'translateX(219px)';
            lists[5].style.top = '0px';
            lists[5].style.height = '232px';
            lists[5].style.zIndex = '7';
            lists[5].dataset.index = 7;
        }else if(translateX5 == 219){
            lists[5].style.transform = 'translateX(106px)';
            lists[5].style.top = '10px';
            lists[5].style.height = '212px';
            lists[5].style.zIndex = '6';
            lists[5].dataset.index = 0;
        }
    
        for(var i = 0; i < lists.length ; i++){
    
            if(lists[i].dataset.index == 7){
                des[i].style.visibility = 'visible';
                des[initIndex].style.visibility = 'hidden';
                initIndex = i;
            }
        }
    }, 3000)    
}


// TABLET

if(screen.width >= 800 && screen.width <= 1023 ){
    setInterval(() => {
        let style0 = window.getComputedStyle(lists[0]);
        let transformValue0 = style0.getPropertyValue('transform');
        let zIndex0 = style0.getPropertyValue('z-index');
        const matrixValues0 = transformValue0.match(/^matrix\(([^\)]+)\)$/)[1].split(',').map(Number);
        const translateX0 = matrixValues0[4];
    
        if(translateX0 == -96){
            lists[0].style.transform = 'translateX(-241px)';
            lists[0].style.top = '10px';
            lists[0].style.height = '236px';
            lists[0].style.zIndex = '6';
            lists[0].dataset.index = 0;
        }else if(translateX0 == -241){
            lists[0].style.transform = 'translateX(-395px)';
            lists[0].style.top = '20px';
            lists[0].style.height = '216px';
            lists[0].style.zIndex = '5';
            lists[0].dataset.index = 0;
        }else if(translateX0 == -395){
            lists[0].style.transform = 'translateX(203px)';
            lists[0].style.top = '20px';
            lists[0].style.height = '216px';
            lists[0].style.zIndex = '4';
            lists[0].dataset.index = 0;
        }else if(translateX0 == 203 && zIndex0 == '4'){
            lists[0].style.zIndex = '5';
            lists[0].dataset.index = 0;
        }else if(translateX0 == 203 && zIndex0 == '5'){
            lists[0].style.transform = 'translateX(49px)';
            lists[0].style.top = '10px';
            lists[0].style.height = '236px';
            lists[0].style.zIndex = '6';
            lists[0].dataset.index = 0;
        }else if(translateX0 == 49){
            lists[0].style.transform = 'translateX(-96px)';
            lists[0].style.top = '0px';
            lists[0].style.height = '256px';
            lists[0].style.zIndex = '7';
            lists[0].dataset.index = 7;
        }
    
        // 1
    
        let style1 = window.getComputedStyle(lists[1]);
        let transformValue1 = style1.getPropertyValue('transform');
        let zIndex1 = style1.getPropertyValue('z-index');
        const matrixValues1 = transformValue1.match(/^matrix\(([^\)]+)\)$/)[1].split(',').map(Number);
        const translateX1 = matrixValues1[4];
    
        if(translateX1 == 444){
            lists[1].style.transform = 'translateX(299px)';
            lists[1].style.top = '0px';
            lists[1].style.height = '256px';
            lists[1].style.zIndex = '7';
            lists[1].dataset.index = 7;
        }else if(translateX1 == 299){
            lists[1].style.transform = 'translateX(154px)';
            lists[1].style.top = '10px';
            lists[1].style.height = '236px';
            lists[1].style.zIndex = '6';
            lists[1].dataset.index = 0;
        }else if(translateX1 == 154){
            lists[1].style.transform = 'translateX(0px)';
            lists[1].style.top = '20px';
            lists[1].style.height = '216px';
            lists[1].style.zIndex = '5';
            lists[1].dataset.index = 0;
        }else if(translateX1 == 0){
            lists[1].style.transform = 'translateX(598px)';
            lists[1].style.top = '20px';
            lists[1].style.height = '216px';
            lists[1].style.zIndex = '4';
            lists[1].dataset.index = 0;
        }else if(translateX1 == 598 && zIndex1 == '4'){
            lists[1].style.zIndex = '5';
            lists[1].dataset.index = 0;
        }else if(translateX1 == 598 && zIndex1 == '5'){
            lists[1].style.transform = 'translateX(444px)';
            lists[1].style.top = '10px';
            lists[1].style.height = '236px';
            lists[1].style.zIndex = '6';
            lists[1].dataset.index = 0;
        }
    
        // 2
    
        let style2 = window.getComputedStyle(lists[2]);
        let transformValue2 = style2.getPropertyValue('transform');
        let zIndex2 = style2.getPropertyValue('z-index');
        const matrixValues2 = transformValue2.match(/^matrix\(([^\)]+)\)$/)[1].split(',').map(Number);
        const translateX2 = matrixValues2[4];
    
        if(translateX2 == 598 && zIndex2 == '5'){
            lists[2].style.transform = 'translateX(444px)';
            lists[2].style.top = '10px';
            lists[2].style.height = '236px';
            lists[2].style.zIndex = '6';
            lists[2].dataset.index = 0;
        }else if(translateX2 == 444){
            lists[2].style.transform = 'translateX(299px)';
            lists[2].style.top = '0px';
            lists[2].style.height = '256px';
            lists[2].style.zIndex = '7';
            lists[2].dataset.index = 7;
        }else if(translateX2 == 299){
            lists[2].style.transform = 'translateX(154px)';
            lists[2].style.top = '10px';
            lists[2].style.height = '236px';
            lists[2].style.zIndex = '6';
            lists[2].dataset.index = 0;
        }else if(translateX2 == 154){
            lists[2].style.transform = 'translateX(0px)';
            lists[2].style.top = '20px';
            lists[2].style.height = '216px';
            lists[2].style.zIndex = '5';
            lists[2].dataset.index = 0;
        }else if(translateX2 == 0){
            lists[2].style.transform = 'translateX(598px)';
            lists[2].style.top = '20px';
            lists[2].style.height = '216px';
            lists[2].style.zIndex = '4';
            lists[2].dataset.index = 0;
        }else if(translateX2 == 598 && zIndex2 == '4'){
            lists[2].style.zIndex = '5';
            lists[2].dataset.index = 0;
        }
    
        // 3
    
        let style3 = window.getComputedStyle(lists[3]);
        let transformValue3 = style3.getPropertyValue('transform');
        let zIndex3 = style3.getPropertyValue('z-index');
        const matrixValues3 = transformValue3.match(/^matrix\(([^\)]+)\)$/)[1].split(',').map(Number);
        const translateX3 = matrixValues3[4];
    
        if(translateX3 == 598 && zIndex3 == '4'){
            lists[3].style.zIndex = '5';
            lists[3].dataset.index = 0;
        }else if(translateX3 == 598 && zIndex3 == '5'){
            lists[3].style.transform = 'translateX(444px)';
            lists[3].style.top = '10px';
            lists[3].style.height = '236px';
            lists[3].style.zIndex = '6';
            lists[3].dataset.index = 0;
        }else if(translateX3 == 444){
            lists[3].style.transform = 'translateX(299px)';
            lists[3].style.top = '0px';
            lists[3].style.height = '256px';
            lists[3].style.zIndex = '7';
            lists[3].dataset.index = 7;
        }else if(translateX3 == 299){
            lists[3].style.transform = 'translateX(154px)';
            lists[3].style.top = '10px';
            lists[3].style.height = '236px';
            lists[3].style.zIndex = '6';
            lists[3].dataset.index = 0;
        }else if(translateX3 == 154){
            lists[3].style.transform = 'translateX(0px)';
            lists[3].style.top = '20px';
            lists[3].style.height = '216px';
            lists[3].style.zIndex = '5';
            lists[3].dataset.index = 0;
        }else if(translateX3 == 0){
            lists[3].style.transform = 'translateX(598px)';
            lists[3].style.top = '20px';
            lists[3].style.height = '216px';
            lists[3].style.zIndex = '4';
            lists[3].dataset.index = 0;
        }
    
        // 4
    
        let style4 = window.getComputedStyle(lists[4]);
        let transformValue4 = style4.getPropertyValue('transform');
        let zIndex4 = style4.getPropertyValue('z-index');
        const matrixValues4 = transformValue4.match(/^matrix\(([^\)]+)\)$/)[1].split(',').map(Number);
        const translateX4 = matrixValues4[4];
    
        if(translateX4 == 0){
            lists[4].style.transform = 'translateX(598px)';
            lists[4].style.top = '20px';
            lists[4].style.height = '216px';
            lists[4].style.zIndex = '4';
            lists[4].dataset.index = 0;
        }else if(translateX4 == 598 && zIndex4 == '4'){
            lists[4].style.zIndex = '5';
            lists[4].dataset.index = 0;
        }else if(translateX4 == 598 && zIndex4 == 5){
            lists[4].style.transform = 'translateX(444px)';
            lists[4].style.top = '10px';
            lists[4].style.height = '236px';
            lists[4].style.zIndex = '6';
            lists[4].dataset.index = 0;
        }else if(translateX4 == 444){
            lists[4].style.transform = 'translateX(299px)';
            lists[4].style.top = '0px';
            lists[4].style.height = '256px';
            lists[4].style.zIndex = '7';
            lists[4].dataset.index = 7;
        }else if(translateX4 == 299){
            lists[4].style.transform = 'translateX(154px)';
            lists[4].style.top = '10px';
            lists[4].style.height = '236px';
            lists[4].style.zIndex = '6';
            lists[4].dataset.index = 0;
        }else if(translateX4 == 154){
            lists[4].style.transform = 'translateX(0px)';
            lists[4].style.top = '20px';
            lists[4].style.height = '216px';
            lists[4].style.zIndex = '5';
            lists[4].dataset.index = 0;
        }
    
        // 5
    
        let style5 = window.getComputedStyle(lists[5]);
        let transformValue5 = style5.getPropertyValue('transform');
        let zIndex5 = style5.getPropertyValue('z-index');
        const matrixValues5 = transformValue5.match(/^matrix\(([^\)]+)\)$/)[1].split(',').map(Number);
        const translateX5 = matrixValues5[4];
    
        if(translateX5 == 154){
            lists[5].style.transform = 'translateX(0px)';
            lists[5].style.top = '20px';
            lists[5].style.height = '216px';
            lists[5].style.zIndex = '5';
            lists[5].dataset.index = 0;
        }else if(translateX5 == 0){
            lists[5].style.transform = 'translateX(598px)';
            lists[5].style.top = '20px';
            lists[5].style.height = '216px';
            lists[5].style.zIndex = '4';
            lists[5].dataset.index = 0;
        }else if(translateX5 == 598 && zIndex5 == '4'){
            lists[5].style.zIndex = '5';
            lists[5].dataset.index = 0;
        }else if(translateX5 == 598 && zIndex5 == '5'){
            lists[5].style.transform = 'translateX(444px)';
            lists[5].style.top = '10px';
            lists[5].style.height = '236px';
            lists[5].style.zIndex = '6';
            lists[5].dataset.index = 0;
        }else if(translateX5 == 444){
            lists[5].style.transform = 'translateX(299px)';
            lists[5].style.top = '0px';
            lists[5].style.height = '256px';
            lists[5].style.zIndex = '7';
            lists[5].dataset.index = 7;
        }else if(translateX5 == 299){
            lists[5].style.transform = 'translateX(154px)';
            lists[5].style.top = '10px';
            lists[5].style.height = '236px';
            lists[5].style.zIndex = '6';
            lists[5].dataset.index = 0;
        }
    
        for(var i = 0; i < lists.length ; i++){
    
            if(lists[i].dataset.index == 7){
                des[i].style.visibility = 'visible';
                des[initIndex].style.visibility = 'hidden';
                initIndex = i;
            }
        }
    }, 3000)
}

// MOBILE

if(screen.width <= 575 ){
    setInterval(() => {
            let style0 = window.getComputedStyle(listsMob[0]);
            let transformValue0 = style0.getPropertyValue('transform');
            let zIndex0 = style0.getPropertyValue('z-index');
            const matrixValues0 = transformValue0.match(/^matrix\(([^\)]+)\)$/)[1].split(',').map(Number);
            const translateX0 = matrixValues0[4];
        
            if(translateX0 == -65){
                listsMob[0].style.transform = 'translateX(-147px)';
                listsMob[0].style.top = '10px';
                listsMob[0].style.height = '152px';
                listsMob[0].style.zIndex = '6';
                listsMob[0].dataset.index = 0;
            }else if(translateX0 == -147){
                listsMob[0].style.transform = 'translateX(-200px)';
                listsMob[0].style.top = '20px';
                listsMob[0].style.height = '132px';
                listsMob[0].style.zIndex = '5';
                listsMob[0].dataset.index = 0;
            }else if(translateX0 == -200){
                listsMob[0].style.transform = 'translateX(69px)';
                listsMob[0].style.top = '20px';
                listsMob[0].style.height = '132px';
                listsMob[0].style.zIndex = '4';
                listsMob[0].dataset.index = 0;
            }else if(translateX0 == 69 && zIndex0 == '4'){
                listsMob[0].style.zIndex = '5';
                listsMob[0].dataset.index = 0;
            }else if(translateX0 == 69 && zIndex0 == '5'){
                listsMob[0].style.transform = 'translateX(16px)';
                listsMob[0].style.top = '10px';
                listsMob[0].style.height = '152px';
                listsMob[0].style.zIndex = '6';
                listsMob[0].dataset.index = 0;
            }else if(translateX0 == 16){
                listsMob[0].style.transform = 'translateX(-65px)';
                listsMob[0].style.top = '0px';
                listsMob[0].style.height = '170px';
                listsMob[0].style.zIndex = '7';
                listsMob[0].dataset.index = 7;
            }
        
            // 1
        
            let style1 = window.getComputedStyle(listsMob[1]);
            let transformValue1 = style1.getPropertyValue('transform');
            let zIndex1 = style1.getPropertyValue('z-index');
            const matrixValues1 = transformValue1.match(/^matrix\(([^\)]+)\)$/)[1].split(',').map(Number);
            const translateX1 = matrixValues1[4];
        
            if(translateX1 == 0){
                listsMob[1].style.transform = 'translateX(-81px)';
                listsMob[1].style.top = '0px';
                listsMob[1].style.height = '170px';
                listsMob[1].style.zIndex = '7';
                listsMob[1].dataset.index = 7;
            }else if(translateX1 == -81){
                listsMob[1].style.transform = 'translateX(-163px)';
                listsMob[1].style.top = '10px';
                listsMob[1].style.height = '152px';
                listsMob[1].style.zIndex = '6';
                listsMob[1].dataset.index = 0;
            }else if(translateX1 == -163){
                listsMob[1].style.transform = 'translateX(-216px)';
                listsMob[1].style.top = '20px';
                listsMob[1].style.height = '132px';
                listsMob[1].style.zIndex = '5';
                listsMob[1].dataset.index = 0;
            }else if(translateX1 == -216){
                listsMob[1].style.transform = 'translateX(53px)';
                listsMob[1].style.top = '20px';
                listsMob[1].style.height = '132px';
                listsMob[1].style.zIndex = '4';
                listsMob[1].dataset.index = 0;
            }else if(translateX1 == 53 && zIndex1 == '4'){
                listsMob[1].style.zIndex = '5';
                listsMob[1].dataset.index = 0;
            }else if(translateX1 == 53 && zIndex1 == '5'){
                listsMob[1].style.transform = 'translateX(0px)';
                listsMob[1].style.top = '10px';
                listsMob[1].style.height = '152px';
                listsMob[1].style.zIndex = '6';
                listsMob[1].dataset.index = 0;
            }
        
            // 2
        
            let style2 = window.getComputedStyle(listsMob[2]);
            let transformValue2 = style2.getPropertyValue('transform');
            let zIndex2 = style2.getPropertyValue('z-index');
            const matrixValues2 = transformValue2.match(/^matrix\(([^\)]+)\)$/)[1].split(',').map(Number);
            const translateX2 = matrixValues2[4];
        
            if(translateX2 == -10 && zIndex2 == '5'){
                listsMob[2].style.transform = 'translateX(-63px)';
                listsMob[2].style.top = '10px';
                listsMob[2].style.height = '152px';
                listsMob[2].style.zIndex = '6';
                listsMob[2].dataset.index = 0;
            }else if(translateX2 == -63){
                listsMob[2].style.transform = 'translateX(-144px)';
                listsMob[2].style.top = '0px';
                listsMob[2].style.height = '170px';
                listsMob[2].style.zIndex = '7';
                listsMob[2].dataset.index = 7;
            }else if(translateX2 == -144){
                listsMob[2].style.transform = 'translateX(-226px)';
                listsMob[2].style.top = '10px';
                listsMob[2].style.height = '152px';
                listsMob[2].style.zIndex = '6';
                listsMob[2].dataset.index = 0;
            }else if(translateX2 == -226){
                listsMob[2].style.transform = 'translateX(-279px)';
                listsMob[2].style.top = '20px';
                listsMob[2].style.height = '132px';
                listsMob[2].style.zIndex = '5';
                listsMob[2].dataset.index = 0;
            }else if(translateX2 == -279){
                listsMob[2].style.transform = 'translateX(-10px)';
                listsMob[2].style.top = '20px';
                listsMob[2].style.height = '132px';
                listsMob[2].style.zIndex = '4';
                listsMob[2].dataset.index = 0;
            }else if(translateX2 == -10 && zIndex2 == '4'){
                listsMob[2].style.zIndex = '5';
                listsMob[2].dataset.index = 0;
            }
        
            // 3
        
            let style3 = window.getComputedStyle(listsMob[3]);
            let transformValue3 = style3.getPropertyValue('transform');
            let zIndex3 = style3.getPropertyValue('z-index');
            const matrixValues3 = transformValue3.match(/^matrix\(([^\)]+)\)$/)[1].split(',').map(Number);
            const translateX3 = matrixValues3[4];
        
            if(translateX3 == -10 && zIndex3 == '4'){
                listsMob[3].style.zIndex = '5';
                listsMob[3].dataset.index = 0;
            }else if(translateX3 == -10 && zIndex3 == '5'){
                listsMob[3].style.transform = 'translateX(-63px)';
                listsMob[3].style.top = '10px';
                listsMob[3].style.height = '152px';
                listsMob[3].style.zIndex = '6';
                listsMob[3].dataset.index = 0;
            }else if(translateX3 == -63){
                listsMob[3].style.transform = 'translateX(-144px)';
                listsMob[3].style.top = '0px';
                listsMob[3].style.height = '170px';
                listsMob[3].style.zIndex = '7';
                listsMob[3].dataset.index = 7;
            }else if(translateX3 == -144){
                listsMob[3].style.transform = 'translateX(-226px)';
                listsMob[3].style.top = '10px';
                listsMob[3].style.height = '152px';
                listsMob[3].style.zIndex = '6';
                listsMob[3].dataset.index = 0;
            }else if(translateX3 == -226){
                listsMob[3].style.transform = 'translateX(-279px)';
                listsMob[3].style.top = '20px';
                listsMob[3].style.height = '132px';
                listsMob[3].style.zIndex = '5';
                listsMob[3].dataset.index = 0;
            }else if(translateX3 == -279){
                listsMob[3].style.transform = 'translateX(-10px)';
                listsMob[3].style.top = '20px';
                listsMob[3].style.height = '132px';
                listsMob[3].style.zIndex = '4';
                listsMob[3].dataset.index = 0;
            }
        
            // 4
        
            let style4 = window.getComputedStyle(listsMob[4]);
            let transformValue4 = style4.getPropertyValue('transform');
            let zIndex4 = style4.getPropertyValue('z-index');
            const matrixValues4 = transformValue4.match(/^matrix\(([^\)]+)\)$/)[1].split(',').map(Number);
            const translateX4 = matrixValues4[4];
        
            if(translateX4 == 10){
                listsMob[4].style.transform = 'translateX(279px)';
                listsMob[4].style.top = '20px';
                listsMob[4].style.height = '132px';
                listsMob[4].style.zIndex = '4';
                listsMob[4].dataset.index = 0;
            }else if(translateX4 == 279 && zIndex4 == '4'){
                listsMob[4].style.zIndex = '5';
                listsMob[4].dataset.index = 0;
            }else if(translateX4 == 279 && zIndex4 == 5){
                listsMob[4].style.transform = 'translateX(226px)';
                listsMob[4].style.top = '10px';
                listsMob[4].style.height = '152px';
                listsMob[4].style.zIndex = '6';
                listsMob[4].dataset.index = 0;
            }else if(translateX4 == 226){
                listsMob[4].style.transform = 'translateX(145px)';
                listsMob[4].style.top = '0px';
                listsMob[4].style.height = '170px';
                listsMob[4].style.zIndex = '7';
                listsMob[4].dataset.index = 7;
            }else if(translateX4 == 145){
                listsMob[4].style.transform = 'translateX(63px)';
                listsMob[4].style.top = '10px';
                listsMob[4].style.height = '152px';
                listsMob[4].style.zIndex = '6';
                listsMob[4].dataset.index = 0;
            }else if(translateX4 == 63){
                listsMob[4].style.transform = 'translateX(10px)';
                listsMob[4].style.top = '20px';
                listsMob[4].style.height = '132px';
                listsMob[4].style.zIndex = '5';
                listsMob[4].dataset.index = 0;
            }
        
            // 5
        
            let style5 = window.getComputedStyle(listsMob[5]);
            let transformValue5 = style5.getPropertyValue('transform');
            let zIndex5 = style5.getPropertyValue('z-index');
            const matrixValues5 = transformValue5.match(/^matrix\(([^\)]+)\)$/)[1].split(',').map(Number);
            const translateX5 = matrixValues5[4];
        
            if(translateX5 == 0){
                listsMob[5].style.transform = 'translateX(-53px)';
                listsMob[5].style.top = '20px';
                listsMob[5].style.height = '132px';
                listsMob[5].style.zIndex = '5';
                listsMob[5].dataset.index = 0;
            }else if(translateX5 == -53){
                listsMob[5].style.transform = 'translateX(216px)';
                listsMob[5].style.top = '20px';
                listsMob[5].style.height = '132px';
                listsMob[5].style.zIndex = '4';
                listsMob[5].dataset.index = 0;
            }else if(translateX5 == 216 && zIndex5 == '4'){
                listsMob[5].style.zIndex = '5';
                listsMob[5].dataset.index = 0;
            }else if(translateX5 == 216 && zIndex5 == '5'){
                listsMob[5].style.transform = 'translateX(163px)';
                listsMob[5].style.top = '10px';
                listsMob[5].style.height = '152px';
                listsMob[5].style.zIndex = '6';
                listsMob[5].dataset.index = 0;
            }else if(translateX5 == 163){
                listsMob[5].style.transform = 'translateX(82px)';
                listsMob[5].style.top = '0px';
                listsMob[5].style.height = '170px';
                listsMob[5].style.zIndex = '7';
                listsMob[5].dataset.index = 7;
            }else if(translateX5 == 82){
                listsMob[5].style.transform = 'translateX(0px)';
                listsMob[5].style.top = '10px';
                listsMob[5].style.height = '152px';
                listsMob[5].style.zIndex = '6';
                listsMob[5].dataset.index = 0;
            }
        
            for(var i = 0; i < listsMob.length ; i++){
        
                if(listsMob[i].dataset.index == 7){
                    desMobile[i].style.visibility = 'visible';
                    desMobile[initIndexMobile].style.visibility = 'hidden';
                    initIndexMobile = i;
                }
            }
    }, 3000)
}
