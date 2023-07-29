window.addEventListener('load' ,() =>{
    let val = sessionStorage.getItem('value')


    if(val=='art1'){

        document.getElementById("workImg").src = "images/art1.jpg"; 
        document.getElementById('workTitle').innerHTML = "The Starry Night";
        document.getElementById('workAuthor').innerHTML = " Vincent Van Gogh";
        document.getElementById('workYear').innerHTML = "1889";

    }

    else if(val == 'art2'){
        document.getElementById("workImg").src = "images/art2.jpg"; 
        document.getElementById('workTitle').innerHTML = "Perseus and Andromeda";
        document.getElementById('workAuthor').innerHTML = "Peter Paul Rubens";
        document.getElementById('workYear').innerHTML = "1622";
    }

    else if(val == 'art3'){
        document.getElementById("workImg").src = "images/art3.jpg"; 
        document.getElementById('workTitle').innerHTML = "The Harvesters ";
        document.getElementById('workAuthor').innerHTML = "Pieter Bruegel";
        document.getElementById('workYear').innerHTML = "1565";
    }

    else if(val == 'art4'){
        document.getElementById("workImg").src = "images/art4.webp"; 
        document.getElementById('workTitle').innerHTML = "The Night Watch";
        document.getElementById('workAuthor').innerHTML = " Rembrandt van";
        document.getElementById('workYear').innerHTML = "1642";
    }

    else if(val == 'art5'){
        document.getElementById("workImg").src = "images/art5.jpg"; 
        document.getElementById('workTitle').innerHTML = "Claude Monet";
        document.getElementById('workAuthor').innerHTML = "Impression, Sunrise";
        document.getElementById('workYear').innerHTML = "1874";
    }

    else if(val == 'art6'){
        document.getElementById("workImg").src = "images/art6.webp"; 
        document.getElementById('workTitle').innerHTML = "The Card Players ";
        document.getElementById('workAuthor').innerHTML = " Paul Cézanne";
        document.getElementById('workYear').innerHTML = "1894–95";
    }


});