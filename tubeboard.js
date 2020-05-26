//Station info
//Stations   
var metStns = {"Aldgate Underground Station":"940GZZLUALD","Amersham Underground Station":"940GZZLUAMS","Barbican Underground Station":"940GZZLUBBN","Baker Street Underground Station":"940GZZLUBST","Chalfont & Latimer Underground Station":"940GZZLUCAL","Chesham Underground Station":"940GZZLUCSM","Croxley Underground Station":"940GZZLUCXY","Chorleywood Underground Station":"940GZZLUCYD","Eastcote Underground Station":"940GZZLUEAE","Euston Square Underground Station":"940GZZLUESQ","Farringdon Underground Station":"940GZZLUFCN","Finchley Road Underground Station":"940GZZLUFYR","Great Portland Street Underground Station":"940GZZLUGPS","Hillingdon Underground Station":"940GZZLUHGD","Harrow-on-the-Hill Underground Station":"940GZZLUHOH","Ickenham Underground Station":"940GZZLUICK","King's Cross St. Pancras Underground Station":"940GZZLUKSX","Liverpool Street Underground Station":"940GZZLULVT","Moorgate Underground Station":"940GZZLUMGT","Moor Park Underground Station":"940GZZLUMPK","North Harrow Underground Station":"940GZZLUNHA","Northwick Park Underground Station":"940GZZLUNKP","Northwood Underground Station":"940GZZLUNOW","Northwood Hills Underground Station":"940GZZLUNWH","Pinner Underground Station":"940GZZLUPNR","Preston Road Underground Station":"940GZZLUPRD","Rickmansworth Underground Station":"940GZZLURKW","Ruislip Manor Underground Station":"940GZZLURSM","Ruislip Underground Station":"940GZZLURSP","Rayners Lane Underground Station":"940GZZLURYL","Uxbridge Underground Station":"940GZZLUUXB","Watford Underground Station":"940GZZLUWAF","West Harrow Underground Station":"940GZZLUWHW","Willesden Green Underground Station":"940GZZLUWIG","Wembley Park Underground Station":"940GZZLUWYP"}
var bakStns = {"Baker Street Underground Station":"940GZZLUBST","Charing Cross Underground Station":"940GZZLUCHX","Elephant & Castle Underground Station":"940GZZLUEAC","Embankment Underground Station":"940GZZLUEMB","Edgware Road (Bakerloo) Underground Station":"940GZZLUERB","Harrow & Wealdstone Underground Station":"940GZZLUHAW","Harlesden Underground Station":"940GZZLUHSN","Kenton Underground Station":"940GZZLUKEN","Kilburn Park Underground Station":"940GZZLUKPK","Kensal Green Underground Station":"940GZZLUKSL","Lambeth North Underground Station":"940GZZLULBN","Maida Vale Underground Station":"940GZZLUMVL","Marylebone Underground Station":"940GZZLUMYB","North Wembley Underground Station":"940GZZLUNWY","Oxford Circus Underground Station":"940GZZLUOXC","Paddington Underground Station":"940GZZLUPAC","Piccadilly Circus Underground Station":"940GZZLUPCC","Queen's Park Underground Station":"940GZZLUQPS","Regent's Park Underground Station":"940GZZLURGP","Stonebridge Park Underground Station":"940GZZLUSGP","South Kenton Underground Station":"940GZZLUSKT","Willesden Junction Underground Station":"940GZZLUWJN","Warwick Avenue Underground Station":"940GZZLUWKA","Waterloo Underground Station":"940GZZLUWLO","Wembley Central Underground Station":"940GZZLUWYC"}
var cenStns = {"Barkingside Underground Station":"940GZZLUBKE","Buckhurst Hill Underground Station":"940GZZLUBKH","Bethnal Green Underground Station":"940GZZLUBLG","Bond Street Underground Station":"940GZZLUBND","Bank Underground Station":"940GZZLUBNK","Chancery Lane Underground Station":"940GZZLUCHL","Chigwell Underground Station":"940GZZLUCWL","Debden Underground Station":"940GZZLUDBN","East Acton Underground Station":"940GZZLUEAN","Ealing Broadway Underground Station":"940GZZLUEBY","Epping Underground Station":"940GZZLUEPG","Fairlop Underground Station":"940GZZLUFLP","Greenford Underground Station":"940GZZLUGFD","Grange Hill Underground Station":"940GZZLUGGH","Gants Hill Underground Station":"940GZZLUGTH","Holborn Underground Station":"940GZZLUHBN","Hanger Lane Underground Station":"940GZZLUHGR","Hainault Underground Station":"940GZZLUHLT","Holland Park Underground Station":"940GZZLUHPK","Loughton Underground Station":"940GZZLULGN","Lancaster Gate Underground Station":"940GZZLULGT","Liverpool Street Underground Station":"940GZZLULVT","Leyton Underground Station":"940GZZLULYN","Leytonstone Underground Station":"940GZZLULYS","Marble Arch Underground Station":"940GZZLUMBA","Mile End Underground Station":"940GZZLUMED","North Acton Underground Station":"940GZZLUNAN","Newbury Park Underground Station":"940GZZLUNBP","Notting Hill Gate Underground Station":"940GZZLUNHG","Northolt Underground Station":"940GZZLUNHT","Oxford Circus Underground Station":"940GZZLUOXC","Perivale Underground Station":"940GZZLUPVL","Queensway Underground Station":"940GZZLUQWY","Redbridge Underground Station":"940GZZLURBG","Ruislip Gardens Underground Station":"940GZZLURSG","Roding Valley Underground Station":"940GZZLURVY","Shepherd's Bush (Central) Underground Station":"940GZZLUSBC","Snaresbrook Underground Station":"940GZZLUSNB","St. Paul's Underground Station":"940GZZLUSPU","South Ruislip Underground Station":"940GZZLUSRP","Stratford Underground Station":"940GZZLUSTD","South Woodford Underground Station":"940GZZLUSWF","Tottenham Court Road Underground Station":"940GZZLUTCR","Theydon Bois Underground Station":"940GZZLUTHB","White City Underground Station":"940GZZLUWCY","Woodford Underground Station":"940GZZLUWOF","West Ruislip Underground Station":"940GZZLUWRP","Wanstead Underground Station":"940GZZLUWSD","West Acton Underground Station":"940GZZLUWTA"}
var cirStns = {"Aldgate Underground Station":"940GZZLUALD","Barbican Underground Station":"940GZZLUBBN","Blackfriars Underground Station":"940GZZLUBKF","Baker Street Underground Station":"940GZZLUBST","Bayswater Underground Station":"940GZZLUBWT","Cannon Street Underground Station":"940GZZLUCST","Embankment Underground Station":"940GZZLUEMB","Edgware Road (Circle Line) Underground Station":"940GZZLUERC","Euston Square Underground Station":"940GZZLUESQ","Farringdon Underground Station":"940GZZLUFCN","Goldhawk Road Underground Station":"940GZZLUGHK","Great Portland Street Underground Station":"940GZZLUGPS","Gloucester Road Underground Station":"940GZZLUGTR","Hammersmith (H&C Line) Underground Station":"940GZZLUHSC","High Street Kensington Underground Station":"940GZZLUHSK","King's Cross St. Pancras Underground Station":"940GZZLUKSX","Ladbroke Grove Underground Station":"940GZZLULAD","Latimer Road Underground Station":"940GZZLULRD","Liverpool Street Underground Station":"940GZZLULVT","Moorgate Underground Station":"940GZZLUMGT","Monument Underground Station":"940GZZLUMMT","Mansion House Underground Station":"940GZZLUMSH","Notting Hill Gate Underground Station":"940GZZLUNHG","Paddington Underground Station":"940GZZLUPAC","Paddington (H&C Line)-Underground":"940GZZLUPAH","Royal Oak Underground Station":"940GZZLURYO","Shepherd's Bush Market Underground Station":"940GZZLUSBM","St. James's Park Underground Station":"940GZZLUSJP","South Kensington Underground Station":"940GZZLUSKS","Sloane Square Underground Station":"940GZZLUSSQ","Temple Underground Station":"940GZZLUTMP","Tower Hill Underground Station":"940GZZLUTWH","Victoria Underground Station":"940GZZLUVIC","Wood Lane Underground Station":"940GZZLUWLA","Westminster Underground Station":"940GZZLUWSM","Westbourne Park Underground Station":"940GZZLUWSP"}
var disStns = {"Acton Town Underground Station":"940GZZLUACT","Aldgate East Underground Station":"940GZZLUADE","Bromley-by-Bow Underground Station":"940GZZLUBBB","Becontree Underground Station":"940GZZLUBEC","Blackfriars Underground Station":"940GZZLUBKF","Barking Underground Station":"940GZZLUBKG","Barons Court Underground Station":"940GZZLUBSC","Bow Road Underground Station":"940GZZLUBWR","Bayswater Underground Station":"940GZZLUBWT","Cannon Street Underground Station":"940GZZLUCST","Chiswick Park Underground Station":"940GZZLUCWP","Dagenham East Underground Station":"940GZZLUDGE","Dagenham Heathway Underground Station":"940GZZLUDGY","Ealing Broadway Underground Station":"940GZZLUEBY","Ealing Common Underground Station":"940GZZLUECM","Earl's Court Underground Station":"940GZZLUECT","East Ham Underground Station":"940GZZLUEHM","Embankment Underground Station":"940GZZLUEMB","Elm Park Underground Station":"940GZZLUEPK","East Putney Underground Station":"940GZZLUEPY","Edgware Road (Circle Line) Underground Station":"940GZZLUERC","Fulham Broadway Underground Station":"940GZZLUFBY","Gunnersbury Underground Station":"940GZZLUGBY","Gloucester Road Underground Station":"940GZZLUGTR","Hornchurch Underground Station":"940GZZLUHCH","Hammersmith (Dist&Picc Line) Underground Station":"940GZZLUHSD","High Street Kensington Underground Station":"940GZZLUHSK","Kensington (Olympia) Underground Station":"940GZZLUKOY","Kew Gardens Underground Station":"940GZZLUKWG","Mile End Underground Station":"940GZZLUMED","Monument Underground Station":"940GZZLUMMT","Mansion House Underground Station":"940GZZLUMSH","Notting Hill Gate Underground Station":"940GZZLUNHG","Paddington Underground Station":"940GZZLUPAC","Plaistow Underground Station":"940GZZLUPLW","Parsons Green Underground Station":"940GZZLUPSG","Putney Bridge Underground Station":"940GZZLUPYB","Richmond Underground Station":"940GZZLURMD","Ravenscourt Park Underground Station":"940GZZLURVP","Stamford Brook Underground Station":"940GZZLUSFB","Southfields Underground Station":"940GZZLUSFS","Stepney Green Underground Station":"940GZZLUSGN","St. James's Park Underground Station":"940GZZLUSJP","South Kensington Underground Station":"940GZZLUSKS","Sloane Square Underground Station":"940GZZLUSSQ","Temple Underground Station":"940GZZLUTMP","Turnham Green Underground Station":"940GZZLUTNG","Tower Hill Underground Station":"940GZZLUTWH","Upminster Bridge Underground Station":"940GZZLUUPB","Upton Park Underground Station":"940GZZLUUPK","Upminster Underground Station":"940GZZLUUPM","Upney Underground Station":"940GZZLUUPY","Victoria Underground Station":"940GZZLUVIC","West Brompton Underground Station":"940GZZLUWBN","West Ham Underground Station":"940GZZLUWHM","Wimbledon Underground Station":"940GZZLUWIM","Wimbledon Park Underground Station":"940GZZLUWIP","West Kensington Underground Station":"940GZZLUWKN","Whitechapel Underground Station":"940GZZLUWPL","Westminster Underground Station":"940GZZLUWSM"}
var dlrStns = {"Abbey Road DLR Station":"940GZZDLABR","All Saints DLR Station":"940GZZDLALL","Beckton DLR Station":"940GZZDLBEC","Blackwall DLR Station":"940GZZDLBLA","Bank DLR Station":"940GZZDLBNK","Bow Church DLR Station":"940GZZDLBOW","Beckton Park DLR Station":"940GZZDLBPK","Canary Wharf DLR Station":"940GZZDLCAN","Canning Town DLR Station":"940GZZDLCGT","Crossharbour DLR Station":"940GZZDLCLA","Custom House (for ExCel) DLR Station":"940GZZDLCUS","Cutty Sark (for Maritime Greenwich) DLR Station":"940GZZDLCUT","Cyprus DLR Station":"940GZZDLCYP","Deptford Bridge DLR Station":"940GZZDLDEP","Devons Road DLR Station":"940GZZDLDEV","East India DLR Station":"940GZZDLEIN","Elverson Road DLR Station":"940GZZDLELV","Gallions Reach DLR Station":"940GZZDLGAL","Greenwich DLR Station":"940GZZDLGRE","Heron Quays DLR Station":"940GZZDLHEQ","Island Gardens DLR Station":"940GZZDLISL","King George V DLR Station":"940GZZDLKGV","London City Airport DLR Station":"940GZZDLLCA","Langdon Park DLR Station":"940GZZDLLDP","Lewisham DLR Station":"940GZZDLLEW","Limehouse DLR Station":"940GZZDLLIM","Mudchute DLR Station":"940GZZDLMUD","Pontoon Dock DLR Station":"940GZZDLPDK","Poplar DLR Station":"940GZZDLPOP","Prince Regent DLR Station":"940GZZDLPRE","Pudding Mill Lane DLR Station":"940GZZDLPUD","Royal Albert DLR Station":"940GZZDLRAL","Royal Victoria DLR Station":"940GZZDLRVC","Shadwell DLR Station":"940GZZDLSHA","Stratford High Street DLR Station":"940GZZDLSHS","Stratford International DLR Station":"940GZZDLSIT","South Quay DLR Station":"940GZZDLSOQ","Stratford DLR Station":"940GZZDLSTD","Star Lane DLR Station":"940GZZDLSTL","Tower Gateway DLR Station":"940GZZDLTWG","Westferry DLR Station":"940GZZDLWFE","West Ham DLR Station":"940GZZDLWHM","West India Quay DLR Station":"940GZZDLWIQ","Woolwich Arsenal DLR Station":"940GZZDLWLA","West Silvertown DLR Station":"940GZZDLWSV"}
var hacStns = {"Aldgate East Underground Station":"940GZZLUADE","Bromley-by-Bow Underground Station":"940GZZLUBBB","Barbican Underground Station":"940GZZLUBBN","Barking Underground Station":"940GZZLUBKG","Baker Street Underground Station":"940GZZLUBST","Bow Road Underground Station":"940GZZLUBWR","East Ham Underground Station":"940GZZLUEHM","Edgware Road (Circle Line) Underground Station":"940GZZLUERC","Euston Square Underground Station":"940GZZLUESQ","Farringdon Underground Station":"940GZZLUFCN","Goldhawk Road Underground Station":"940GZZLUGHK","Great Portland Street Underground Station":"940GZZLUGPS","Hammersmith (H&C Line) Underground Station":"940GZZLUHSC","King's Cross St. Pancras Underground Station":"940GZZLUKSX","Ladbroke Grove Underground Station":"940GZZLULAD","Latimer Road Underground Station":"940GZZLULRD","Liverpool Street Underground Station":"940GZZLULVT","Mile End Underground Station":"940GZZLUMED","Moorgate Underground Station":"940GZZLUMGT","Paddington (H&C Line)-Underground":"940GZZLUPAH","Plaistow Underground Station":"940GZZLUPLW","Royal Oak Underground Station":"940GZZLURYO","Shepherd's Bush Market Underground Station":"940GZZLUSBM","Stepney Green Underground Station":"940GZZLUSGN","Upton Park Underground Station":"940GZZLUUPK","West Ham Underground Station":"940GZZLUWHM","Wood Lane Underground Station":"940GZZLUWLA","Whitechapel Underground Station":"940GZZLUWPL","Westbourne Park Underground Station":"940GZZLUWSP"}
var jblStns = {"Bermondsey Underground Station":"940GZZLUBMY","Bond Street Underground Station":"940GZZLUBND","Baker Street Underground Station":"940GZZLUBST","Canning Town Underground Station":"940GZZLUCGT","Canons Park Underground Station":"940GZZLUCPK","Canada Water Underground Station":"940GZZLUCWR","Canary Wharf Underground Station":"940GZZLUCYF","Dollis Hill Underground Station":"940GZZLUDOH","Finchley Road Underground Station":"940GZZLUFYR","Green Park Underground Station":"940GZZLUGPK","Kilburn Underground Station":"940GZZLUKBN","Kingsbury Underground Station":"940GZZLUKBY","London Bridge Underground Station":"940GZZLULNB","Neasden Underground Station":"940GZZLUNDN","North Greenwich Underground Station":"940GZZLUNGW","Queensbury Underground Station":"940GZZLUQBY","St. John's Wood Underground Station":"940GZZLUSJW","Stratford Underground Station":"940GZZLUSTD","Stanmore Underground Station":"940GZZLUSTM","Swiss Cottage Underground Station":"940GZZLUSWC","Southwark Underground Station":"940GZZLUSWK","West Ham Underground Station":"940GZZLUWHM","West Hampstead Underground Station":"940GZZLUWHP","Willesden Green Underground Station":"940GZZLUWIG","Waterloo Underground Station":"940GZZLUWLO","Westminster Underground Station":"940GZZLUWSM","Wembley Park Underground Station":"940GZZLUWYP"}
var norStns = {"Archway Underground Station":"940GZZLUACY","Angel Underground Station":"940GZZLUAGL","Balham Underground Station":"940GZZLUBLM","Bank Underground Station":"940GZZLUBNK","Borough Underground Station":"940GZZLUBOR","Burnt Oak Underground Station":"940GZZLUBTK","Brent Cross Underground Station":"940GZZLUBTX","Belsize Park Underground Station":"940GZZLUBZP","Chalk Farm Underground Station":"940GZZLUCFM","Charing Cross Underground Station":"940GZZLUCHX","Colindale Underground Station":"940GZZLUCND","Clapham Common Underground Station":"940GZZLUCPC","Clapham North Underground Station":"940GZZLUCPN","Clapham South Underground Station":"940GZZLUCPS","Colliers Wood Underground Station":"940GZZLUCSD","Camden Town Underground Station":"940GZZLUCTN","Elephant & Castle Underground Station":"940GZZLUEAC","East Finchley Underground Station":"940GZZLUEFY","Edgware Underground Station":"940GZZLUEGW","Embankment Underground Station":"940GZZLUEMB","Euston Underground Station":"940GZZLUEUS","Finchley Central Underground Station":"940GZZLUFYC","Goodge Street Underground Station":"940GZZLUGDG","Golders Green Underground Station":"940GZZLUGGN","High Barnet Underground Station":"940GZZLUHBT","Hendon Central Underground Station":"940GZZLUHCL","Highgate Underground Station":"940GZZLUHGT","Hampstead Underground Station":"940GZZLUHTD","Kennington Underground Station":"940GZZLUKNG","Kentish Town Underground Station":"940GZZLUKSH","King's Cross St. Pancras Underground Station":"940GZZLUKSX","London Bridge Underground Station":"940GZZLULNB","Leicester Square Underground Station":"940GZZLULSQ","Morden Underground Station":"940GZZLUMDN","Moorgate Underground Station":"940GZZLUMGT","Mill Hill East Underground Station":"940GZZLUMHL","Mornington Crescent Underground Station":"940GZZLUMTC","Old Street Underground Station":"940GZZLUODS","Oval Underground Station":"940GZZLUOVL","Stockwell Underground Station":"940GZZLUSKW","South Wimbledon Underground Station":"940GZZLUSWN","Totteridge & Whetstone Underground Station":"940GZZLUTAW","Tooting Bec Underground Station":"940GZZLUTBC","Tooting Broadway Underground Station":"940GZZLUTBY","Tottenham Court Road Underground Station":"940GZZLUTCR","Tufnell Park Underground Station":"940GZZLUTFP","West Finchley Underground Station":"940GZZLUWFN","Waterloo Underground Station":"940GZZLUWLO","Woodside Park Underground Station":"940GZZLUWOP","Warren Street Underground Station":"940GZZLUWRR"}
var picStns = {"Acton Town Underground Station":"940GZZLUACT","Alperton Underground Station":"940GZZLUALP","Arnos Grove Underground Station":"940GZZLUASG","Arsenal Underground Station":"940GZZLUASL","Bounds Green Underground Station":"940GZZLUBDS","Boston Manor Underground Station":"940GZZLUBOS","Barons Court Underground Station":"940GZZLUBSC","Caledonian Road Underground Station":"940GZZLUCAR","Covent Garden Underground Station":"940GZZLUCGN","Cockfosters Underground Station":"940GZZLUCKS","Eastcote Underground Station":"940GZZLUEAE","Ealing Common Underground Station":"940GZZLUECM","Earl's Court Underground Station":"940GZZLUECT","Finsbury Park Underground Station":"940GZZLUFPK","Green Park Underground Station":"940GZZLUGPK","Gloucester Road Underground Station":"940GZZLUGTR","Holborn Underground Station":"940GZZLUHBN","Hillingdon Underground Station":"940GZZLUHGD","Hatton Cross Underground Station":"940GZZLUHNX","Hyde Park Corner Underground Station":"940GZZLUHPC","Heathrow Terminal 5 Underground Station":"940GZZLUHR5","Heathrow Terminals 2 & 3 Underground Station":"940GZZLUHRC","Hammersmith (Dist&Picc Line) Underground Station":"940GZZLUHSD","Hounslow Central Underground Station":"940GZZLUHWC","Hounslow East Underground Station":"940GZZLUHWE","Hounslow West Underground Station":"940GZZLUHWT","Holloway Road Underground Station":"940GZZLUHWY","Ickenham Underground Station":"940GZZLUICK","Knightsbridge Underground Station":"940GZZLUKNB","King's Cross St. Pancras Underground Station":"940GZZLUKSX","Leicester Square Underground Station":"940GZZLULSQ","Manor House Underground Station":"940GZZLUMRH","North Ealing Underground Station":"940GZZLUNEN","Northfields Underground Station":"940GZZLUNFD","Oakwood Underground Station":"940GZZLUOAK","Osterley Underground Station":"940GZZLUOSY","Piccadilly Circus Underground Station":"940GZZLUPCC","Park Royal Underground Station":"940GZZLUPKR","Ruislip Manor Underground Station":"940GZZLURSM","Ruislip Underground Station":"940GZZLURSP","Russell Square Underground Station":"940GZZLURSQ","Rayners Lane Underground Station":"940GZZLURYL","South Ealing Underground Station":"940GZZLUSEA","Southgate Underground Station":"940GZZLUSGT","South Harrow Underground Station":"940GZZLUSHH","South Kensington Underground Station":"940GZZLUSKS","Sudbury Hill Underground Station":"940GZZLUSUH","Sudbury Town Underground Station":"940GZZLUSUT","Turnham Green Underground Station":"940GZZLUTNG","Turnpike Lane Underground Station":"940GZZLUTPN","Uxbridge Underground Station":"940GZZLUUXB","Wood Green Underground Station":"940GZZLUWOG"}
var wacStns = {"Bank Underground Station":"940GZZLUBNK","Waterloo Underground Station":"940GZZLUWLO"}

var stations;
var chLine;
var inter;
stations = chLine;


/////////////////////////////
var clear = function(){
    var empties = document.getElementsByTagName('td');
    for (let i = 0; i <= empties.length -1; i++) {
        empties[i].innerHTML = "";    
    }
    document.getElementById("time").innerHTML = "";
    
    
}

var runner;
var rate = 20000;

var run = function(){
    
    stations = chLine;
    clear();
    var s,l,d;
    var eL = document.getElementById("lines");
    l = eL.options[eL.selectedIndex].text;
    var eS = document.getElementById("stations");
    s = stations[eS.options[eS.selectedIndex].text];
    var eD = document.getElementById("dir");
    d = eD.options[eD.selectedIndex].text;
    
    

    url = "https://api.tfl.gov.uk/Line/"+l+"/Arrivals/"+s+"?direction="+d;   
    
    
    fetch(url)
        .then(res => res.json())
        .then(function(data){
            var cells, timefix,a,b;
            var store = [0];
            cells = document.getElementsByClassName("brd");
            
            //set time
            
            var f = new Date();
            var n = f.toLocaleTimeString();
            
            if(n[0] == "0"){
              timefix = n.substr(0,8);
            }
            
            if(n[8] == "A" || n[9] == "A"){
                if(n.substr(0,8)[7]==" "){
                    timefix = "0"+ n.substr(0,7);
                }else{
                    timefix = n.substr(0,8);
                }
                document.getElementById("time").innerHTML = timefix;
            }else if(n.substr(0,2) == "12"){
               timefix = n.substr(0,8);
               document.getElementById("time").innerHTML = timefix;
            }else{
                if(n.substr(0,2)<10){
                timefix = (parseInt(n.substr(0,2))+12).toString()+ n.substr(1,6);
                document.getElementById("time").innerHTML = timefix;
                }else{
                  timefix = (parseInt(n.substr(0,2))+12).toString()+ n.substr(2,7);
                  document.getElementById("time").innerHTML = timefix;
                }
            }
            var arr = [];
            for (let i = 0; i <= data.length-1; i++) {
                arr.push([Math.ceil((data[i].timeToStation /60)-1),data[i].towards])
                
            }
            console.log(timefix);
            
            var newArr;
            newArr = arr.sort(sortFunction);
            
            function sortFunction(a, b) {
                if (a[0] === b[0]) {
                    return 0;
                }
                else {
                    return (a[0] < b[0]) ? -1 : 1;
                }
            }
            
            j=0;

            for (let i = 0; i <= cells.length-1; i+=3) {
                
                cells[i+1].innerHTML = newArr[j][1];
                if(Math.ceil(newArr[j][0])>1){
                    cells[i+2].innerHTML = Math.ceil(newArr[j][0])+' mins';
                }else if(Math.ceil(newArr[j][0])==1){
                    cells[i+2].innerHTML = Math.ceil(newArr[j][0])+' min';
                }else{
                    cells[i+2].innerHTML = 'due';
                }
                cells[i].innerHTML = j+1;
                j++;
            }
            
              
    });
    
};


document.getElementById("btn").addEventListener("click",function(){
    
    runner = false;
    runner = true;
    clearInterval(inter);
    inter = setInterval(run, rate);
    
    while(runner){
      if(runner = false){
        break
      }
      
      run();
    }
    return inter
});



stations



var lister = function(line){
        var x = document.getElementById("stations");
        
        for (let i = 0; i <= Object.keys(line).length-1; i++) {
            var option = document.createElement("option");
            option.innerText = Object.keys(line)[i];
            x.add(option);
        
    }
}

var trr = document.getElementById("lines");


var lineDrop = document.getElementById("lines")

lineDrop.addEventListener("change",function(){
    document.getElementById("stations").style.color = "white";
    document.getElementById("lines").style.color = "white";
    var select = document.getElementById("stations");
    
    var length = select.options.length;
    for (i = length-1; i > 0; i--) {
    select.options[i] = null;
    }


    var a = lineDrop[lineDrop.selectedIndex].text;
    
    switch(a) {
        case "Bakerloo":
          
          document.getElementById("stations").style.backgroundColor = "brown";
          chLine = bakStns;
          break;
        case "Central":
          
          document.getElementById("stations").style.backgroundColor = "red";
          chLine = cenStns;
          break;
        case "Circle":
          
          
          document.getElementById("stations").style.backgroundColor = "yellow";
          document.getElementById("stations").style.color = "black";
          chLine = cirStns;
        break;
        case "District":
          
          document.getElementById("stations").style.backgroundColor = "green";
          chLine = disStns;
        break;
        case "DLR":
          
          
          document.getElementById("stations").style.backgroundColor = "white";
          document.getElementById("stations").style.color = "black";
          chLine = dlrStns;
        break;
        case "Hammersmith-City":
          
          
          document.getElementById("stations").style.backgroundColor = "pink";
          document.getElementById("stations").style.color = "black";
          chLine = hacStns;
        break;
        case "Jubilee":
          
          document.getElementById("stations").style.backgroundColor = "grey"; 
          chLine = jblStns;
        break;
        case "Metropolitan":
          
          document.getElementById("stations").style.backgroundColor = "purple";
          chLine = metStns;
        break;
        case "Northern":
          
          document.getElementById("stations").style.backgroundColor = "black";
          chLine = norStns;
        break;
        case "Piccadilly":
          
          document.getElementById("stations").style.backgroundColor = "blue";
          chLine = picStns;
        break; 
        case "Waterloo-City":
          
          
          document.getElementById("stations").style.backgroundColor = "turquoise";
          document.getElementById("stations").style.color = "black";
          chLine = wacStns;
        break;
        default:
          console.log("unknown");    
      }
      lister(chLine);
      return chLine;

})
