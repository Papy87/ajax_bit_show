const dataModule = (() => {

    const API_BASE = "http://api.tvmaze.com";

    class Show {
        constructor(name, id, image) {
            this.name = name,
                this.id = id,
                this.image = image


        }
        getInfo() {
            return `${this.name}
                    ${this.id}
                    ${this.image}`


        }
    }

    class OneShow extends Show {
        constructor(name, id, image, summary, seasons, cast) {
            super(name, id, image);
            this.summary = summary;
            this.seasons = seasons;
            this.cast = cast;



        }
    }
    


    function fetchShow(onSuccess) {

        const request = `${API_BASE}/show`;

        $.get(request, function (showArray) {
            const newArray = showArray.slice(0, 51).map(show => {
                const { name, id, image } = show;
                return new Show(name, id, image);
            });

            onSuccess(newArray)

        })

    }

    function fetchSingleShow(onSucessOneMovie, id) {

        const request = `${API_BASE}/shows/${id}?embed[]=seasons&embed[]=cast`;

        $.get(request, (response) => {
            const show = new OneShow(
                response.name,
                response.id,
                response.image.medium,
                response.summary,
                response._embedded.seasons,
                response._embedded.cast
            )
            console.log(show)

            onSucessOneMovie(show);
        })

    }
    function fetchInputShow(onSuccessInputShow, $inputValue) {

        const request = "https://api.tvmaze.com/search/shows?q=" + $inputValue


        $.get(request, (response) => {
            console.log(response)
            const newArrayInput = response.map(show => {
              
                return new Show(show.show.name,show.show.id, show.show.image);
            })
            
              console.log(newArrayInput)
          onSuccessInputShow(newArrayInput);
        })


    }





    return {
        fetchShow,
        fetchInputShow,
        fetchSingleShow,


    }

})();
