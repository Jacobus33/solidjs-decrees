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

    return (
        <div > 
            <header>{props.name}
                <p>d = "{d}"</p>
                <p>r1 = {r1}</p>
                <p>r2 = {r2}</p>
            </header>
            {/* <div style="background-color:bisque; min-height:200px; xwidth:200px"> */}
            
            <svg height="400" width="400"  style="background-color:bisque;"> 
                {/* <circle cx="50%" cy="50%" r="50%" stroke="black" 
                    stroke-width="0" fill="yellow" /> */}
                {/* <path d="M200,200 L 200,0" stroke="red" stroke-width="2" />                     */}
                <path d="M 200,200 L 200, 0 M 300 26.794919243112275 A 200 200 0 0 0 200 0 L 200,200 " stroke="none" fill="yellow" stroke-width="1" 
                    onclick="alert('!')"/>

                {/* <path d="{d}" fill="yenone" stroke="blue" stroke-width="10" /> */}
            </svg>
        
        </div>
    )
}

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

