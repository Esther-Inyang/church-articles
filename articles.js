function showHideSearch(){
    if(document.getElementById('search').onclick){
        document.getElementById('searchBox').style.display='block';
        document.getElementById('header').style.display='none';
    } else{
        document.getElementById('delete').onclick.display='none';
    }
};

function deleteSearch(){
    if(document.getElementById('delete').onclick){
        document.getElementById('searchBox').style.display='none';
        document.getElementById('header').style.display='flex';
    } else{
        document.getElementById('searchBox').style.display='block';
        document.getElementById('header').style.display='none';
    }
    
};