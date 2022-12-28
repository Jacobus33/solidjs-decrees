export function Clock(props) {

    const rx = 0;


    const r = polarToCartesian(200, 200, 200, 45);
    const r1 = 200 + 200 * Math.cos(0)
    const r2 = 200 + 200 * Math.sin(Math.PI / 6);
    
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
    const d = describeArc(200, 200, 200, 0, 30);
    const d2 = `M 200,200 L 200, 0 ${describeArc(200, 200, 200, 0, 30)} L 200,200 `;

    const angle = "rotate(60, 200, 200)"
    const x = "rotate(240, 200, 200)";

    function rotate(hour) {
        return `rotate(${hour * 30}, 200, 200)`
    }
    const color = hour => ['blue', 'yellow', 'pink'][hour % 3];
    const move = hour => console.log(hour);
    
    const handler = (data, event) => console.log(data);

    return (
        <div > 
            <header>{props.name}
                <p>d = "{d}"</p>
                <p>r1 = {r1}</p>
                <p>r2 = {r2}</p>

                <For each={[0,1,2]}>{ i => {
                    let index = i;
                    <div>
                        i = {index}
                    </div>
                    }
                }</For>
            </header>
            {/* <div style="background-color:bisque; min-height:200px; xwidth:200px"> */}
            
            

            <svg height="400" width="400"  style="background-color:bisque;"> 
                 {/* <circle cx="50%" cy="50%" r="50%" stroke="black" 
                    stroke-width="1" fill="yellow" />  */}

  
                    <path d={d2} stroke="none" fill="grey" stroke-width="1" 
                        onclick="alert('!')" transform={rotate(6)} />   

                <For each={[0,1,2,3,4,5,6,7,8,9,10,11]}>{ i =>  
                    // let a = "rotate(240, 200, 200)";
                    
                    <path d={d2} stroke="none" fill={color(i)} stroke-width="1" 
                        onClick={[handler, i]} transform={rotate(i)}
                        style />   
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

