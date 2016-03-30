/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-01-28 17:12:06
 * @version $Id$
 */


//low:logo width;
//loh:logo heigt;
//dom:父元素；
//iidd:canvas 的 id

function logo(low,loh,dom,iidd){


	  var w=low,
          h=loh;
        
        var di=dom;
        create_canvas(iidd,di);
        
        var beiw=w/180,
            beih=h/180;

        if(beiw>beih){var bei=beih;}
        else{var bei=beiw;}

        function create_canvas(ids,par){
            var newcanvas=document.createElement('canvas');
            newcanvas.width=w;
            newcanvas.height=h;
            //newcanvas.style.border="1px solid #000"
            newcanvas.id=ids;
            par.appendChild(newcanvas);
        }
       

        var can=document.getElementById(iidd);
        var con=can.getContext('2d');

        var r1=87*bei,
            r2=65*bei;

        var flyX=w/2-90*bei,
            flyY=h/2-90*bei;

        circle(con,r1);
        fillcircle(con,r2);
        fly(con);
        font(con);
        yun(con);

        function circle(con,r){
            con.save();

            con.beginPath();
            con.lineWidth=2*bei;
            con.strokeStyle="#173e79";
            con.fillStyle="#fff";
            con.translate(w/2,h/2);
            con.arc(0,0,r,0,Math.PI*2);
            con.closePath();
            con.fill();
            con.stroke();

            con.restore();
        }
         function fillcircle(con,r){
            con.save();

            con.beginPath();
            con.fillStyle="#173e79";
            con.translate(w/2,h/2);
            con.arc(0,0,r,0,Math.PI*2);
            con.closePath();
            con.fill();

            con.restore();
        }
        function fly(con){
            con.save();
            con.beginPath();
            con.translate(flyX,flyY);
            con.fillStyle="#f7c502";
            con.moveTo(10*bei,90*bei);
            con.quadraticCurveTo(65*bei,110*bei,85*bei,54*bei);
            con.lineTo(117*bei,53*bei);
            con.quadraticCurveTo(104*bei,97*bei,74*bei,104*bei);
            con.quadraticCurveTo(107*bei,104*bei,122*bei,52*bei);
            con.lineTo(163*bei,49*bei);
            con.quadraticCurveTo(125*bei,155*bei,10*bei,90*bei);
            con.closePath();
            con.fill();
            con.restore();
        }

        function fontmake(con,fon,x,y,deg,fsi,color){
            con.save();
            con.beginPath();
            con.translate(x+flyX,y+flyY);
            con.textAlign="center";
            con.textBaseline="middle";
            con.font=fsi+"px SimHei";
            con.rotate(deg*Math.PI/180);
            con.fillStyle=color || "#173e79";
            con.fillText(fon,0,0);
            con.restore();
        }
        
        function font(con){
            fontmake(con,"广",36*bei,39*bei,-45,16*bei);
            fontmake(con,"东",54*bei,24*bei,-27,16*bei);
            fontmake(con,"海",77*bei,16*bei,-9,16*bei);
            fontmake(con,"洋",103*bei,16*bei,9,16*bei);
            fontmake(con,"大",126*bei,24*bei,27,16*bei);
            fontmake(con,"学",144*bei,39*bei,45,16*bei);

            fontmake(con,"1",79*bei,146*bei,7,4*bei,"#fff");
            fontmake(con,"9",86*bei,147*bei,4,4*bei,"#fff");
            fontmake(con,"3",94*bei,147*bei,-4,4*bei,"#fff");
            fontmake(con,"5",102*bei,146*bei,-7,4*bei,"#fff");

            var un="GUANGDONG OCEAN UNIVERSITY";
            var nun=un.split("");
            var unr=76*bei;
            var unx,uny,deg=-75,jia=5.6;
            var undeg=150*Math.PI/180/26;
            for(var i=0;i<nun.length;i++){
                if(i>10){undeg=156*Math.PI/180/26;jia=6}
                unx=unr*Math.cos(14*Math.PI/180+undeg*i)+(w>h?h:w)/2+1*bei;
                uny=unr*Math.sin(14*Math.PI/180+undeg*i)+(w>h?h:w)/2;
                fontmake(con,nun[nun.length-1-i],unx,uny,deg,14*bei);
                deg=deg+jia;
            }
        }
        
        function yun(con){
            con.save();con.translate(flyX,flyY);
            con.beginPath();

            con.moveTo(33*bei,122*bei);
            con.bezierCurveTo(55*bei,110*bei,71*bei,128*bei,88*bei,129*bei);
            con.bezierCurveTo(68*bei,133*bei,55*bei,113*bei,35*bei,126*bei);
            con.fillStyle="#fff";
            con.closePath();
            con.fill()

            con.beginPath();
            con.moveTo(155*bei,95*bei);
            con.quadraticCurveTo(146*bei,144*bei,90*bei,135*bei);
            con.quadraticCurveTo(115*bei,147*bei,142*bei,130*bei);
            con.quadraticCurveTo(154*bei,114*bei,155*bei,95*bei);
            con.closePath();
            con.fillStyle="#fff";
            con.fill();
            
            con.restore();
        }
}