export function Clock(props) {

   
    function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
        var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;
        
        return {
            x: centerX + (radius * Math.cos(angleInRadians)),
            y: centerY + (radius * Math.sin(angleInRadians))
        };
     }

    function describeArc(x, y, radius, startAngle, endAngle){

        var start = polarToCartesian(x, y, radius, endAngle);
        var end = polarToCartesian(x, y, radius, startAngle);
    
        var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    
        var d = [
            "M", start.x, start.y, 
            "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
        ].join(" ");
    
        return d;       
    }
    const R = 200
    const d = `${describeArc(R, R, R, 0, 30)} L ${R},${R}`;
   
    const R2 = 50;
    const i = 0;
    const d2 =`${describeArc(R2, R2, R2, i * 30, i * 30 + 30 )} L ${R2} ${R2} `


    function click() { alert("clicked!") }
    function rotate(hour) {
        return `rotate(${hour * 30}, 200, 200)`
    }
    const color = hour => ['blue', 'yellow', 'pink'][hour % 3];
    // const move = hour => console.log(hour);
    
    const handler = (data, event) => console.log(data);

    return (
        <div > 
            <header>{props.name}
                <p>d = "{d}"</p>
                <p>d2 = "{d2}"</p>
           

        
            </header>
            {/* <div style="background-color:bisque; min-height:200px; xwidth:200px"> */}
            
            
            {/* <svg height="400" width="400"   style="background-color:bisque;"> 
            

  
                <For each={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]}>{ i =>  
                   
                    <path d={`${describeArc(R, R, R, i * 30, i * 30 + 30 )} L ${R},${R} `}  stroke="none" fill={color(i)} stroke-width="1" 
                        onClick="{click}" xtransform="rotate(90)}"
                        style />   
                    }
                 </For>
            </svg> */}
<hr></hr>
            <svg height="400" width="400" viewBox="0 0 100 100"  style="background-color:bisque;"> 
                  {/* <circle cx="50" cy="50" r="50" stroke="black" 
                    stroke-width="1" fill="yellow" />   */}

  
                <For each={[0]}>{ i =>  
                    <path d="M 75 6.698729810778069 A 50 50 0 0 0 50 0 L 50 50" stroke="none" fill={color(i)} stroke-width="1" />   
                
                    // <path d={`${describeArc(R2, R2, R2, i * 30, i * 30 + 30 )} L ${R2},${R2} `}  stroke="none" fill={color(i)} stroke-width="1" 
                    //     onClick="{click}" xtransform="rotate(90)}"
                    //     style />   
                    }
                 </For>
            </svg>
        
        </div>
    )
}

// function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
//     var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;
  
//     return {
//       x: centerX + (radius * Math.cos(angleInRadians)),
//       y: centerY + (radius * Math.sin(angleInRadians))
//     };
// }

// function describeArc(x, y, radius, startAngle, endAngle){

//     var start = polarToCartesian(x, y, radius, endAngle);
//     var end = polarToCartesian(x, y, radius, startAngle);

//     var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

//     var d = [
//         "M", start.x, start.y, 
//         "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
//     ].join(" ");

//     return d;       
// }

