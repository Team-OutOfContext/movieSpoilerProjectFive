(this["webpackJsonpmovie-spoiler-project-five"]=this["webpackJsonpmovie-spoiler-project-five"]||[]).push([[0],{20:function(e,t,a){e.exports=a(44)},25:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var o=a(0),s=a.n(o),n=a(12),i=a.n(n),r=(a(25),a(17)),l=a(13),c=a(14),m=a(15),u=a(18),h=a(16),p=a(19),d=a(2),v=a.n(d),g=(a(43),function(e){return s.a.createElement("ul",{className:"movie-results-part-one"},e.movieSuggestions.map((function(t){var a="";null!==t.poster_path&&(a="https://image.tmdb.org/t/p/w500".concat(t.poster_path));var o="",n="";return void 0===t.release_date||""===t.release_date?o="".concat(t.title):(n=t.release_date.slice(0,4),o="".concat(t.title," (").concat(n,")")),s.a.createElement("li",{className:"movie-listing",key:t.id,tabIndex:"0",onClick:function(){e.getMovieKeywords(t.id,t.title,n,a)}},s.a.createElement("p",null,o))})))}),f=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(h.a)(t).call(this))).getUserInput=function(t){e.setState(Object(l.a)({},t.target.id,t.target.value))},e.getMovieDetails=function(){var t=RegExp(/\w/g);console.log(e.state.userInput.length),console.log(t.test(e.state.userInput)),t.test(e.state.userInput)&&v()({url:"https://api.themoviedb.org/3/search/movie",method:"GET",dataResponse:"json",params:{api_key:e.state.apiKeyMovieDb,query:e.state.userInput,include_adult:!1}}).then((function(t){0===t.data.results.length?e.setState({errorMessage:!0}):e.setState({movieSuggestions:t.data.results,autoSuggestions:!0})})).catch((function(t){e.setState({errorMessage:!0}),console.log(t)}))},e.getMovieKeywords=function(t,a,o,s){e.setState({movieTitle:a,movieYear:o,movieImageUrl:s,showLoadingScreen:!0}),v()({url:"https://api.themoviedb.org/3/movie/".concat(t,"/keywords"),method:"GET",dataResponse:"json",params:{api_key:e.state.apiKeyMovieDb,movie_id:t}}).then((function(t){console.log(t.data.keywords,"get movie keywords axios call"),e.setState({movieKeywords:t.data.keywords,userInput:"",autoSuggestions:!1}),e.filterKeywords()})).catch((function(t){e.makeGiphyApiCalls(3)}))},e.filterKeywords=function(){var t=RegExp(/(stinger)$/),a=e.state.movieKeywords.filter((function(e){return!t.test(e.name)}));e.setState({movieKeywords:a}),e.prepGiphyApiCalls()},e.prepGiphyApiCalls=function(){e.state.movieKeywords.length>=3?e.shuffleKeywordsArray():2===e.state.movieKeywords.length?e.makeGiphyApiCalls(1):1===e.state.movieKeywords.length?e.makeGiphyApiCalls(2):e.makeGiphyApiCalls(3)},e.getRandomGifs=function(){return v()({url:"https://api.giphy.com/v1/gifs/random",method:"GET",dataResponse:"json",params:{api_key:e.state.apiKeyGiphy,rating:"pg"}})},e.makeGiphyApiCalls=function(t){var a=[];e.state.movieKeywords.forEach((function(t){a.push(e.getKeywordGifs(t.name))}));for(var o=0;o<t;o++)a.push(e.getRandomGifs());e.prepGifData(a)},e.prepGifData=function(t){v.a.all(t).then((function(t){var a=[];t.forEach((function(e){var t="";if(!0===Array.isArray(e.data.data)){console.log(e.data.data);var o=Math.floor(Math.random()*e.data.data.length);t=e.data.data[o]}else t=e.data.data;a.push(t)})),e.setState({showLoadingScreen:!1,gifDataArray:a,showGifs:!0,showButton:!0}),console.log(a)})).catch((function(t){console.log(t),console.log("Sorry, this movie is not currently playing at our theatre! Please try another movie."),e.setState({showLoadingScreen:!1,noGifs:!0,showButton:!0})}))},e.shuffleKeywordsArray=function(){for(var t=Object(r.a)(e.state.movieKeywords),a=t.length-1;a>0;a--){var o=Math.floor(Math.random()*(a+1)),s=t[a],n=t[o];t[a]=n,t[o]=s}var i=t.slice(0,3);e.setState({movieKeywords:i}),e.makeGiphyApiCalls(0),console.log(e.state.movieKeywords[0].name)},e.getKeywordGifs=function(t){return v()({url:"https://api.giphy.com/v1/gifs/search",method:"GET",dataResponse:"json",params:{api_key:e.state.apiKeyGiphy,q:t}})},e.resetState=function(){e.setState({userInput:"",movieTitle:"",movieYear:"",movieImageUrl:"",movieKeywords:[],gifDataArray:[],showButton:!1,noGifs:!1,errorMessage:!1})},e.state={apiKeyMovieDb:"38f9a8f5c677f0356adca226f357b762",apiKeyGiphy:"x51UFN0xOVPnehx6f4dJxLphvkXnx19U",userInput:"",autoSuggestions:!1,movieSuggestions:["hi"],movieTitle:"",movieYear:"",movieImageUrl:"",movieKeywords:[],gifDataArray:[],showGifs:!1,noGifs:!1,showButton:!1,errorMessage:!1,showLoadingScreen:!1},e}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"main"},s.a.createElement("ul",{className:"search"},s.a.createElement("div",{className:"wrapper"},s.a.createElement("h1",null,"GIF ME A MOVIE!"),s.a.createElement("h3",null,"A movie theatre for watching a movie within 5 seconds!!!"),s.a.createElement("div",{className:"search-bar"},s.a.createElement("label",{htmlFor:"userInput"},"Search a movie title"),s.a.createElement("input",{type:"text",id:"userInput",className:"search-input",placeholder:"Search for a movie",value:this.state.userInput,onChange:function(t){e.getUserInput(t),e.getMovieDetails()}}),s.a.createElement("i",{className:"fas fa-search search-icon"}))),this.state.errorMessage?s.a.createElement("p",null,"Your movie doesn't exist!"):null,s.a.createElement("div",{className:"wrapper"},s.a.createElement("div",{className:"search-bar"},s.a.createElement("div",{className:"movie-results",id:"mainContent"},this.state.autoSuggestions?s.a.createElement(g,{movieSuggestions:this.state.movieSuggestions,getMovieKeywords:this.getMovieKeywords}):null))),s.a.createElement("ul",null,this.state.showGifs?this.state.gifDataArray.map((function(t,a){console.log(t);var o=RegExp(/^(http)/);return o.test(e.state.movieImageUrl)?(console.log(o.test(e.state.movieImageUrl)),"Movie poster for"):(console.log(o.test(e.state.movieImageUrl)),"Placeholder image for the movie poster for"),s.a.createElement("div",{className:"movie-details"},s.a.createElement("ul",{className:"carousel"},s.a.createElement("li",{key:a,className:"carousel-cell"},s.a.createElement("p",null,"Hello!"),s.a.createElement("img",{className:"carousel-cell-image",src:t.images.original.webp,alt:t.title}))))})):null),this.state.noGifs?s.a.createElement("p",null,"Sorry, this movie is not currently playing at our theatre! Please try searching a different movie."):null,s.a.createElement("div",{className:"movie-tagline"},3===this.state.movieKeywords.length?s.a.createElement("p",null,"When a ".concat(this.state.movieKeywords[0].name," and a\n              ").concat(this.state.movieKeywords[1].name," fall in love, ").concat(this.state.movieKeywords[2].name," ensues")):null,2===this.state.movieKeywords.length?s.a.createElement("p",null,"When a ".concat(this.state.movieKeywords[0].name," and a\n              ").concat(this.state.movieKeywords[1].name," fall in love")):null,1===this.state.movieKeywords.length?s.a.createElement("p",null,"When a ".concat(this.state.movieKeywords[0].name," and.")):null),this.state.showButton?s.a.createElement("button",{onClick:this.resetState},"Watch another movie?"):null),this.state.showLoadingScreen?s.a.createElement("div",{className:"loading-screen"},s.a.createElement("p",null,"Getting the results...")):null)}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[20,1,2]]]);
//# sourceMappingURL=main.6dac672f.chunk.js.map