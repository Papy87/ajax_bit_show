const main = ((data, view) => {

    function init() {
        // console.log("init");
        data.fetchShow(onSuccess)
    }
    
    function onSuccess(data) {
        // console.log("onsucc", data);
        view.showOnPage(data);
        $(".movie-card").on("click", movieclickhandler);
    }


  
    ///search input function
    
    $(".form-control").keyup(() =>{
           
        const $inputValue = $(".form-control").val()
        data.fetchInputShow(onSuccessInputShow,$inputValue)
    
   
    });

    
    function onSuccessInputShow(data){
        view.displayShows(data);
        $(".movie-card").on("click", inputMovieHendler);
    }
    
    function inputMovieHendler(){
        const id = $(event.target).attr("data-id");
        localStorage.setItem("id", id);
        window.location.href = './second.html';
        
    }
    
    
    
    function initSecondPage() {
        const id = localStorage.getItem("id");
        data.fetchSingleShow(onSuccessOneMovie, id);
    }

    function onSuccessOneMovie(data) {
        view.showOnPageOneMovieInfo(data);
    }

    function movieclickhandler(event) {

        const id = $(event.target).attr("data-id");
        localStorage.setItem("id", id);
        window.location.href = './second.html';
    


    }












    return {
        init,
        onSuccess,
        initSecondPage,
        onSuccessOneMovie,


    }





})(dataModule, ViewModule);